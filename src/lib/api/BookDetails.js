import { protectedFetch } from "../core/server"

export const getBookDetails=async(id)=>{

return protectedFetch(`/books/${id}`)

}