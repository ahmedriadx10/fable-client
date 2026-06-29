import { ebookDetailsFetch} from "../core/server"

export const getBookDetails=async(id)=>{

return ebookDetailsFetch(`/books/${id}`)

}