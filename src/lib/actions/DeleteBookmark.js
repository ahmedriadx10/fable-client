'use server'
import { revalidatePath } from "next/cache"
import { serverDataDelete } from "../core/server"

export const deleteTheBookmark=async(bookId)=>{

const response=serverDataDelete(`/bookmarks/${bookId}`,'DELETE')
revalidatePath('/dashboard/writer/bookmark')

return response
}