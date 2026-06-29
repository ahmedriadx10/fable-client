import { serverMutation } from "../core/server"

export const paymentSuccessDataAdd=async(data)=>{

  return serverMutation('/book/purchases',data,'POST')

}