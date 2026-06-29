'use server'
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { headers } from "next/headers";

export const deleteUserByAdmin=async(userId)=>{

  const deletedUser = await auth.api.removeUser({
    body: {
        userId: userId
    },
    // This endpoint requires session cookies.
    headers: await headers(),
});


revalidatePath('/dashboard/admin/manage-users')

return deletedUser

}