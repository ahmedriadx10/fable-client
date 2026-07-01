import { serverDataFetch } from "../core/server"

export const getHompageData=async()=>{

return serverDataFetch('/home')

}