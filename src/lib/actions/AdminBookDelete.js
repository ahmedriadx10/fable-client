'use server'
import { revalidatePath } from "next/cache"
import { serverDataDelete } from "../core/server"

export const deleteWriterBookByAdmin=async(bookId)=>{

const response= serverDataDelete(`/ebooks/${bookId}`,'DELETE')

revalidatePath('/dashboard/admin/manage-all-ebooks')

return response

}