"use server";


import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
export const serverMutation = async (path, data, method = "POST") => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleStatusCode(res);
};

export const serverDataFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);

  return handleStatusCode(res);
};

export const serverDataDelete = async (path, method = "DELETE") => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
  });

  return handleStatusCode(res);
};



const jwtTokenSend=async()=>{

const token=await auth.api.getToken({
  headers: await headers()
})

const headerAuth=token?.token?{
  authorization:`Bearer ${token?.token}`
}:{}

return headerAuth

}



export const protectedFetch=async(path)=>{

const res=await fetch(`${baseUrl}${path}`,{
headers:await jwtTokenSend()
})


return handleStatusCode(res)

}

const handleStatusCode = (response) => {
  if (response.status === 401) {
    redirect("/unauthorized");
  } else if (response.status === 403) {
    redirect("/forbidden");
  }

  return response.json();
};
