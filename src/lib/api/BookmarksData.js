import { protectedFetch } from "../core/server"

export const bookmarkDataGet=async(id)=>{

  return protectedFetch(`/bookmarks/${id}`)

}