import { serverDataFetch } from "../core/server"

export const getEbookData=async (searchParams)=>{

  return serverDataFetch(`/books?${searchParams}`)

}