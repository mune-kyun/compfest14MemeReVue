import saveMeme from "app/memes/mutations/saveMeme"
import getMemes from "app/memes/queries/getMemes"
import { default as _deleteMeme } from "app/memes/mutations/deleteMeme"
import { useMutation, useQuery } from "blitz"
import { z } from "zod"
import { id } from "app/memes/validations"

export const useMeme = () => {
  const [memes, memeState] = useQuery(getMemes, undefined)
  const [save, saveState] = useMutation(saveMeme)
  const [deleteMeme, deleteState] = useMutation(_deleteMeme)

  return {
    memes,
    saveMeme: async (memeId: z.infer<typeof id>) => {
      await save(memeId)
      await memeState.refetch()
    },
    deleteMeme: async (memeId: z.infer<typeof id>) => {
      await deleteMeme(memeId)
      await memeState.refetch()
    },
    memeState,
    saveState,
    deleteState,
  }
}
