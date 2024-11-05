import dbClient from '../db/dbClient'
import { Scenarios, ScenariosNames } from '../enums/scenarios'
import _ from 'lodash'


class User {
  private static db = dbClient.getInstance()
  private constructor() {}
  
  private static getRoles(userRoles: string): number[] {
    return _(JSON.parse(userRoles)).map(item => Number(item)).value()
  }

  public static async getUserById(userId: number) {
    return this.db.user.findUnique({
      where: { user_id: userId }
    })
  }

  public static async create(userId: number, username?: string) {
    const roles = Scenarios.AUTH
    return this.db.user.create({
      data: {
        user_id: userId,
        username: username,
        roles: `[${roles}]`,
      }
    })
  }

  public static async changeAccess(userId: number, unban: boolean = false) {
    return this.db.user.update({
      where: { user_id: userId },
      data: { access: unban }
    })
  }
  
  public static async changeRole(userId: number, role: number, add: boolean) {
    const user = await this.getUserById(userId)
    if (!user) return false
    const userRoles = this.getRoles(user.roles)
    const newRoles = add ?
      [...userRoles, role] :
      userRoles.filter(item => item !== role)

    await this.db.user.update({
      where: { user_id: userId },
      data: { roles: JSON.stringify(newRoles) }
    })
    return true
  }

  public static async isRoleAvailable(checkedRole: ScenariosNames, userId: number): Promise<boolean> {
    if (userId < 1) return false
    const user = await this.getUserById(userId)
    if (!user) return false
    const userRoles = this.getRoles(user.roles)
    return userRoles.includes(Scenarios[checkedRole])
  }
}

export default User