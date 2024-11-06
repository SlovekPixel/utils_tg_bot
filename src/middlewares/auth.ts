import { MiddlewareFn, Context } from 'telegraf'
import User from '../services/user'
import { Comments } from '../enums/comments'
import Scenario from '../services/scenario'


export const authMiddleware: MiddlewareFn<Context> = async (ctx, next) => {
  const userId = ctx.from?.id || 0
  const messageText = ctx.text || ''
  if ((userId < 1) || !messageText.trim()) return await ctx.reply(Comments.NEED_PASSWORD)
  
  const user = await User.getUserById(userId)
  if (user) {
    return user.access ?
      await next() :
      await ctx.reply(Comments.BANNED)
  }

  const isPasswordCorrect = Scenario.checkPassword('AUTH', messageText)
  if (isPasswordCorrect) {
    await User.create(userId, ctx.from?.username)
    await ctx.reply(Comments.SUCCESSFUL_ACCESS)
    await next()
  } else {
    await ctx.reply(Comments.NEED_PASSWORD)
  }
}
