"use client";
import { Table, Select, ListBox } from "@heroui/react";
import Image from "next/image";
import { FiTrash2, FiShield, FiChevronDown } from "react-icons/fi";
import toast from "react-hot-toast";
import { changeUserRoleByAdmin } from "@/lib/actions/AdminUserRoleChange";
import { deleteUserByAdmin } from "@/lib/actions/AdminUserRemove";

const ManageUsers = ({ users, totalUser, currentAdminId }) => {
  // console.log("Users operational dashboard array:", users);

  // Safe fallback to prevent mapping errors
  const validUsers = users || [];

  // রোল চেঞ্জ করার মূল লজিক ফাংশন
  const handleRoleChange = async (userId, currentRole, newRole) => {
    if (userId === currentAdminId) {
      toast.error("Security Alert: You cannot change your own role!");
      return;
    }

    const result = await changeUserRoleByAdmin(userId, newRole);

    if (!result?.user) {
      toast.error("Failed to update role");
    }

    toast.success(`Role updated successfully to ${newRole}!`);
  };

  // ইউজার ডিলিট করার লজিক ফাংশন
  const handleDeleteUser =async (userId) => {
    if (userId === currentAdminId) {
      toast.error("Security Alert: You cannot delete your own account!");
      return;
    }

    const result=await deleteUserByAdmin(userId)

    console.log('user delete result',result)

    if(!result?.success){
      toast.error('Failed to delete the user account')
    }
  
    toast.error("User account terminated successfully!");
  };

  return (
    <div className="overflow-hidden">
      <Table variant="secondary" className="w-full rounded-2xl">
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Admin User Management Table"
            className="min-w-[800px]"
          >
            <Table.Header>
              <Table.Column
                isRowHeader
                className="rounded-bl-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4"
              >
                AVATAR
              </Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">
                NAME
              </Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">
                EMAIL ADDRESS
              </Table.Column>
              <Table.Column className="text-gray-400 font-semibold uppercase text-xs tracking-wider p-4">
                ROLE
              </Table.Column>
              <Table.Column className="rounded-br-none text-gray-400 font-semibold uppercase text-xs tracking-wider p-4 text-center">
                ACTIONS
              </Table.Column>
            </Table.Header>
            <Table.Body>
              {validUsers.map((item) => {
                const userIdStr = item.id || item._id?.$oid || item._id;
                const isSelf = userIdStr === currentAdminId; // চেক করা হচ্ছে এটি কারেন্ট অ্যাডমিন কিনা

                // রোলের উপর ভিত্তি করে ব্যাজের স্টাইলিং ক্লাসসমূহ
                const roleStyles = {
                  admin: "bg-rose-50 text-rose-700 border border-rose-100",
                  writer:
                    "bg-purple-50 text-purple-700 border border-purple-100",
                  user: "bg-blue-50 text-blue-700 border border-blue-100",
                };

                return (
                  <Table.Row
                    key={userIdStr}
                    className={`border-b border-gray-50 transition-colors ${isSelf ? "bg-amber-50/20 hover:bg-amber-50/40" : "hover:bg-gray-50/50"}`}
                  >
                    {/* User Avatar Image */}
                    <Table.Cell className="p-4">
                      <div className="relative w-10 h-10 rounded-full border border-gray-200 shadow-sm overflow-hidden bg-gray-100">
                        <Image
                          src={
                            item.image ||
                            "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                          }
                          alt={item.name || "User Avatar"}
                          fill
                          sizes="40px"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </Table.Cell>

                    {/* Name */}
                    <Table.Cell className="p-4 font-bold text-gray-800 text-sm">
                      <div className="flex items-center gap-1.5">
                        {item.name}
                        {isSelf && (
                          <span className="text-[10px] font-bold tracking-wide text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded uppercase">
                            You
                          </span>
                        )}
                      </div>
                    </Table.Cell>

                    {/* Email */}
                    <Table.Cell className="p-4 text-gray-600 font-medium text-sm">
                      {item.email}
                    </Table.Cell>

                    {/* Role Status Badge */}
                    <Table.Cell className="p-4 text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${roleStyles[item.role] || "bg-gray-100 text-gray-700"}`}
                      >
                        {item.role || "user"}
                      </span>
                    </Table.Cell>

                    {/* Actions Area */}
                    <Table.Cell className="p-4 text-sm">
                      {isSelf ? (
                        // যদি নিজের অ্যাকাউন্ট হয় তবে অ্যাকশন প্রোটেক্টেড দেখাবে
                        <div className="flex items-center justify-center gap-1.5 text-amber-600 font-semibold text-xs">
                          <FiShield className="w-4 h-4" />
                          <span>Protected Account</span>
                        </div>
                      ) : (
                        // অন্যান্য সাধারণ ইউজারদের জন্য অ্যাকশন কন্ট্রোল প্যানেল
                        <div className="flex items-center justify-center gap-3">
                          {/* কাস্টম Select সাব-কম্পোনেন্ট স্ট্রাকচার (অ্যাক্সেসিবিলিটি ফিক্সড) */}
                          <Select
                            selectedKey={item.role || "user"}
                            onSelectionChange={(key) =>
                              handleRoleChange(userIdStr, item.role, key)
                            }
                            aria-label={`Change role for ${item.name || "user"}`} // অ্যারিয়া লেবেল ওয়ার্নিং ফিক্স
                          >
                            {/* Trigger বাটন */}
                            <Select.Trigger className="flex items-center justify-between gap-2 bg-white text-gray-700 border border-gray-200 hover:border-gray-300 rounded-lg py-1.5 px-3 text-xs font-semibold shadow-sm transition-all outline-none cursor-pointer min-w-25">
                              <Select.Value>{item.role || "user"}</Select.Value>
                              <Select.Indicator>
                                <FiChevronDown className="w-3.5 h-3.5 text-gray-400" />
                              </Select.Indicator>
                            </Select.Trigger>

                            {/* পপওভার এবং লিস্টবক্স অপশনস */}
                            <Select.Popover className="bg-white border border-gray-100 rounded-xl shadow-lg mt-1 overflow-hidden z-50 min-w-30">
                              <ListBox className="p-1">
                                <ListBox.Item
                                  id="user"
                                  textValue="User" // textValue ওয়ার্নিং ফিক্স
                                  className="flex items-center justify-between text-gray-700 hover:bg-purple-600 hover:text-white rounded-lg px-3 py-2 text-xs font-medium cursor-pointer capitalize transition-colors"
                                >
                                  <span>User</span>
                                </ListBox.Item>

                                <ListBox.Item
                                  id="writer"
                                  textValue="Writer" // textValue ওয়ার্নিং ফিক্স
                                  className="flex items-center justify-between text-gray-700 hover:bg-purple-600 hover:text-white rounded-lg px-3 py-2 text-xs font-medium cursor-pointer capitalize transition-colors"
                                >
                                  <span>Writer</span>
                                </ListBox.Item>

                                <ListBox.Item
                                  id="admin"
                                  textValue="Admin" // textValue ওয়ার্নিং ফিক্স
                                  className="flex items-center justify-between text-rose-600 hover:bg-rose-600 hover:text-white rounded-lg px-3 py-2 text-xs font-medium cursor-pointer capitalize transition-colors"
                                >
                                  <span>Admin</span>
                                </ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>

                          {/* Delete Account Button */}
                          <button
                            onClick={() => handleDeleteUser(userIdStr)}
                            className="p-2 cursor-pointer text-rose-600 bg-rose-50 border border-rose-100 rounded-lg hover:bg-rose-100 transition-all"
                            title="Terminate User Account"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ManageUsers;
