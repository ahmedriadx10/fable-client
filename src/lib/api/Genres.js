import { serverDataFetch } from "../core/server"

export const getAvailableGenres=async()=>{

  return serverDataFetch('/books/genres')

}