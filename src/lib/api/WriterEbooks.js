import { serverDataFetch } from "../core/server"

export const getWriterEbooks=async (id)=>{

  return serverDataFetch(`/writer/books/${id}`)
}