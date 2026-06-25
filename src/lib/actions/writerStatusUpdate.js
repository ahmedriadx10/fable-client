'use server'
import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"

export const writerStatusUpdate=async(bookId,data)=>{


 const result = serverMutation(`/books/${bookId}`,data,'PATCH')

revalidatePath('/dashboard/writer/manage-ebooks')


return result
}