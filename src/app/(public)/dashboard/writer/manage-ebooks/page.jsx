import ManageEbook from "@/components/dashboard/writer-component/ManageEbook";
import { getWriterEbooks } from "@/lib/api/WriterEbooks";
import { getUserSession } from "@/lib/core/session";

const WriterManageEbookPage = async() => {

  const user=await getUserSession()

  const writerEbooksData=await getWriterEbooks(user?.id)



  return (
    <>
      <ManageEbook writerEbooksData={writerEbooksData} user={user}/>
    </>
  );
};

export default WriterManageEbookPage;