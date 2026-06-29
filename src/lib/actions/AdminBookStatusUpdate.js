'use server'
import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"

export const bookStatusUpdateByAdmin=async(bookId,data)=>{


  const response= serverMutation(`/ebooks/${bookId}`,data,'PATCH')

  revalidatePath('/dashboard/admin/manage-all-ebooks')

return response
}