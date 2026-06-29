'use server'
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { headers } from "next/headers";

export const changeUserRoleByAdmin=async(userId,role)=>{


const data = await auth.api.setRole({
    body: {
        userId: userId,
        role: role, // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
});

revalidatePath('/dashboard/admin/manage-users')


return data

}