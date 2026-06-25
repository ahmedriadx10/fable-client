import { serverMutation } from "../core/server"

export const postEbook=async(ebookData)=>{

  return await serverMutation('/books',ebookData)

}