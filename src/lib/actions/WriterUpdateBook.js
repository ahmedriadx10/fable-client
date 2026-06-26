'use server'
import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"

export const writerUpdateBook=async(bookId,data)=>{

  const res =serverMutation(`/books/${bookId}`,data,'PATCH')
revalidatePath('/dashboard/writer/manage-ebooks')

return res
  

}