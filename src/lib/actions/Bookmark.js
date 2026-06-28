'use server'
import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"

export const bookmarkEbook=async(data,id)=>{

const response=serverMutation('/book/bookmarks',data,'POST')

revalidatePath(`/browse-ebooks/${id}`)

return response
}