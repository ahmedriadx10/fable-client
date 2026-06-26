"use client";
import { writerUpdateBook } from "@/lib/actions/WriterUpdateBook";
import { Button, Modal } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImBook } from "react-icons/im";
import { RxUpdate } from "react-icons/rx";
const WriterUpdateEbook = ({ children, ebookData, user }) => {
  const [imagePreview, setImagePreview] = useState(ebookData?.coverImage);
  const [loading, setLoading] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);

  
  const [formData, setFormData] = useState({
    title: ebookData?.title || "",
    summary: ebookData?.summary || "",
    content: ebookData?.content || "",
    genre: ebookData?.genre || "",
    price: ebookData?.price || "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  // ImgBB Upload Function
  const uploadToImgBB = async (file) => {
    if (!file) return;

    setLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formDataObj,
        },
      );

      const data = await response.json();

      console.log("upload respose", data);
      if (data.success) {
        setImagePreview(data.data.url);
        console.log("image preview", data.data.url);
      } else {
        toast.error("Image upload failed! Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Something went wrong during upload!");
    } finally {
      setLoading(false);
    }
  };

  // Click kore image select handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    uploadToImgBB(file);
  };

  // Drag over handler
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  // Drag leave handler
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  // Drop handler
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    setImagePreview(null);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      uploadToImgBB(file);
    } else {
      toast.error("Please drop a valid image file.");
    }
  };

// update ebook handler function
  const handleUpdate = async () => {


    const finalEbookData = {
      ...formData,
      coverImage:
        imagePreview ||
        "https://img.magnific.com/premium-vector/blank-book-cover_134452-8.jpg?semt=ais_hybrid&w=740&q=80",
      status: "published",
      authorId: user?.id || null,
      authorName: user?.name,
    };


    const ebookUpdateResult=await writerUpdateBook(ebookData?._id,finalEbookData)


    if (ebookUpdateResult?.modifiedCount>0) {
      toast.success("Ebook updated successfully!");
      setFormData({
        title: "",
        summary: "",
        content: "",
        genre: "",
        price: "",
      });
      setImagePreview(null);

      return;
    }

    toast.error("Failed to update ebook. Please try again later.");
  };

  return (
    <Modal>
      <Button variant="">{children}</Button>
      <Modal.Backdrop variant={"blur"}>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-4xl">
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

                {/* Main Form Card */}
                <form
                  
                  className=" p-4 md:p-6  grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {/* Left Side: Cover Image Upload */}
                  <div className=" flex flex-col gap-4">
                    <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                      Cover Image
                    </span>

                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative flex flex-col items-center justify-center w-full aspect-3/4 border-2 border-dashed rounded-xl cursor-pointer overflow-hidden transition-all duration-200 
                ${imagePreview ? "border-solid border-gray-200" : "border-gray-200"} 
                ${isDragActive ? "border-purple-500 bg-purple-50/50 scale-[1.02]" : "bg-slate-50/50 hover:bg-slate-50"}`}
                    >
                      {imagePreview ? (
                        <Image
                          src={imagePreview}
                          alt="Book Cover Preview"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                          priority
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <label className="w-full h-full flex flex-col items-center justify-center p-4 text-center cursor-pointer">
                          {loading ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-8 h-8 border-4 border-(--color-primary) border-t-transparent rounded-full animate-spin"></div>
                              <p className="text-xs text-gray-500 font-medium">
                                Uploading...
                              </p>
                            </div>
                          ) : (
                            <>
                              <svg
                                className={`w-8 h-8 mb-2 transition-colors ${isDragActive ? "text-(--color-primary)" : "text-gray-400"}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              <span className="text-sm font-medium text-gray-600">
                                {isDragActive
                                  ? "Drop the file here!"
                                  : "Upload Cover"}
                              </span>
                              <span className="mt-2 px-3 py-1.5 text-xs font-semibold text-white bg-(--color-primary) rounded-lg shadow-sm hover:bg-[#5500B3] transition">
                                Browse Files
                              </span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                                disabled={loading}
                              />
                            </>
                          )}
                        </label>
                      )}
                    </div>

                    {/* Tips Box */}
                    <div className="flex items-start gap-2 bg-[#F3E8FF] text-(--color-primary) p-3 rounded-xl text-xs font-medium">
                      <span className="p-0.5 bg-(--color-primary) text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center shrink-0">
                        i
                      </span>
                      <p className="italic">
                        You can drag and drop to update your cover image.
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Controlled Input Fields */}
                  <div className="md:col-span-2 flex flex-col gap-6">
                    {/* Ebook Title */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                        Ebook Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter a compelling title..."
                        className="w-full text-lg font-medium border-b border-gray-200 py-2 focus:outline-none focus:border-(--color-primary) placeholder-gray-300 transition text-gray-800"
                        required
                      />
                    </div>

                    {/* Short Summary */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                        Short Summary
                      </label>
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="A brief hook or excerpt to grab attention..."
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-(--color-primary) placeholder-gray-300 text-sm transition resize-none text-gray-700"
                        required
                      ></textarea>
                    </div>

                    {/* Full Content */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                        Full Content
                      </label>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        rows="6"
                        placeholder="Enter the full manuscript or detailed description..."
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-(--color-primary) placeholder-gray-300 text-sm transition resize-none text-gray-700"
                        required
                      ></textarea>
                    </div>

                    {/* Genre and Price Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                          Genre
                        </label>
                        <input
                          type="text"
                          name="genre"
                          value={formData.genre}
                          onChange={handleInputChange}
                          placeholder="e.g. Sci-Fi, Memoir, Poetry"
                          className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-(--color-primary) placeholder-gray-300 text-sm transition text-gray-700"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">
                          Price (USD)
                        </label>
                        <div className="flex items-center border-b border-gray-200 py-2 focus-within:border-(--color-primary) transition">
                          <span className="text-gray-400 mr-1 text-sm">$</span>
                          <input
                            type="number"
                            name="price"
                            step="0.01"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="0.00"
                            className="w-full focus:outline-none text-sm text-gray-700 placeholder-gray-300"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Publish Button */}
                    {/* <Button
              type="submit" 
              disabled={loading}
              className="mt-4 cursor-pointer w-full bg-(--color-primary) hover:bg-[#5500B3] text-white font-medium  px-6 h-10 rounded-lg shadow-md transition flex items-center justify-center gap-2 disabled:bg-purple-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Publish Ebook
            </Button> */}
                  </div>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                slot="close"
            onPress={handleUpdate}
                disabled={loading}
                className="mt-4 cursor-pointer w-full bg-(--color-primary) hover:bg-[#5500B3] text-white font-medium  px-6 h-10 rounded-lg shadow-md transition flex items-center justify-center gap-2 disabled:bg-purple-300"
              >
                Update Ebook <RxUpdate />
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default WriterUpdateEbook;
