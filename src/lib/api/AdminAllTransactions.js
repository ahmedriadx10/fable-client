import { protectedFetch } from "../core/server"

export const getAllTransactionsByAdmin=async()=>{


return protectedFetch('/purchases/all-transaction')

}