"use server";

import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";

const baseUrl= process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

export async function updateUserRoleOnServer(selectedRole) {
  try {
    // ১. প্রথম লেয়ার সিকিউরিটি চেক
    if (selectedRole === "admin") {
      return { error: "You cannot select admin role!" };
    }

    // ২. কারেন্ট সেশন থেকে ইউজার আইডি নেওয়া
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user) {
      return { error: "Unauthorized access." };
    }

    const userId = session.user.id;

    // ৩. আপনার এক্সপ্রেস সার্ভারের API-তে হিট করা
    const response = await fetch(`${baseUrl}/users/${userId}`, { // আপনার এক্সপ্রেস পোর্ট অনুযায়ী চেঞ্জ করবেন
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: selectedRole }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message || "Failed to update role on backend" };
    }

    return { success: true };
  } catch (error) {
    console.error("Fetch Error:", error);
    return { error: "Something went wrong while connecting to the server." };
  }
}