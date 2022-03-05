import db from "db"

export default async function getMemes() {
  return await db.memes.findMany()
}
