import AddEbook from "@/components/dashboard/writer-component/AddEbook";
import { getUserSession } from "@/lib/core/session";

const WriterAddEbookPage =async () => {

  const user=await getUserSession()

  console.log('user session from add ebook page',user)

  return (
    <div>
      <AddEbook user={user}/>
    </div>
  );
};

export default WriterAddEbookPage;