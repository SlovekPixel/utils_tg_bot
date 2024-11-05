import { ScenariosNames } from '../enums/scenarios'
import getEnv from '../helpers/getEnv'


class Scenario {
  private constructor() {}
  
  public static checkPassword(scenarioName: ScenariosNames, userPassword: string) {
    if (!userPassword.trim()) return false
    
    const correctPassword = getEnv(`${scenarioName}_PASSWORD`)
    return !!(correctPassword && (correctPassword === userPassword))
  }
}

export default Scenario