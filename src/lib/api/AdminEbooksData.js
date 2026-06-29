import { protectedFetch } from "../core/server"

export const getAllEbooksData=async()=>{

  return protectedFetch('/ebooks')



}