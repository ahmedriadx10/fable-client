'use server'
import {revalidatePath} from 'next/cache'
import { serverMutation,serverDataDelete } from "../core/server"

export const deleteWriterEbook=async (ebookId)=>{


const res=serverDataDelete(`/books/${ebookId}`,'DELETE')

revalidatePath('/dashboard/admin/manage-ebooks')

return res

}