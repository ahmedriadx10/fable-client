"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, Modal, TextField } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImBook } from "react-icons/im";
import { RxUpdate } from "react-icons/rx";
const UpdateProfile = ({ children,  user }) => {
  // const [imagePreview, setImagePreview] = useState(ebookData?.coverImage);
  const [formData,setFormData]=useState({name:user?.name,image:user?.image})
  const [loading, setLoading] = useState(false);
const router=useRouter()
const handleOnChange=(e)=>{

  
setFormData({...formData,[e.target.name]:e.target.value})


}

  
 
const handleSubmitProfileUpdate=async(e)=>{

  e.preventDefault()


console.log("form data is here",formData)

const result=await authClient.updateUser({
name:formData?.name || user?.name,
image:formData?.image || user?.image
})


if(result?.data){

  toast.success(`Profile updated successfully!`)
router.refresh('/dashboard/user/profile')

}
if(result?.error){
toast.error('Failed to update profile')
router.refresh('/dashboard/user/profile')

}


}




  return (
    <Modal>
      <Button className={'px-4 py-3 h-10 bg-(--color-primary) hover:opacity-90 text-white font-medium rounded-lg transition-all shadow-sm '} variant="ghost">{children}</Button>
      <Modal.Backdrop variant={"blur"}>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>
                <div className="flex items-center gap-2.5 px-4 my-5 text-xl font-bold tracking-tight text-(--color-primary) select-none">
                  <ImBook className="text-2xl" />
                  <span>Fable</span>
                </div>
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div className="">
                {/* Header Section */}

                        <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md mb-5 bg-gray-50">
                          <Image
                            src={user?.image || "https://placehold.co/150"} // ইমেজ না থাকলে একটি ফলব্যাক প্লেসহোল্ডার ইমেজ
                            alt={user?.name || "User Avatar"}
                            fill
                            sizes="112px"
                            className="object-cover"
                            priority
                          />
                        </div>

           
                <form
                  onSubmit={handleSubmitProfileUpdate}
                  className=" p-4 space-y-5 md:p-6   gap-8"
                >
         <TextField

        isRequired
        name="name"
        type="text"
 minLength={3}
      >
        <Label>Name</Label>
        <Input value={formData?.name} onChange={handleOnChange}  className="rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)"/>
        <FieldError />
      </TextField>
         <TextField

        isRequired
        name='image'
        type="url"

>
        <Label>Image URL</Label>
        <Input value={formData?.image} onChange={handleOnChange} className="rounded-lg py-3 shadow-none bg-[#94A3B820] border border-(--color-border)" />
        <FieldError />
      </TextField>
           
         
                <Button
                slot="close"
      type='submit'
                disabled={loading}
                className="mt-4 cursor-pointer flex items-center justify-center w-full  bg-(--color-primary) hover:bg-[#5500B3] text-white font-medium  mr-0 px-6 h-10 rounded-lg shadow-md transition  gap-2 disabled:bg-purple-300"
              >
                Update Profile <RxUpdate />
              </Button>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
       
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;
