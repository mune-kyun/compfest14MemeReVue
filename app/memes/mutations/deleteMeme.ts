import db from "db"
import { resolver } from "blitz"
import { id } from "../validations"

export default resolver.pipe(resolver.zod(id), async (id) => {
  return await db.memes.update({
    where: { id },
    data: {
      saved: false,
    },
  })
})
