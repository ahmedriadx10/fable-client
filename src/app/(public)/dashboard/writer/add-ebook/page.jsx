import AddEbook from "@/components/dashboard/writer-component/AddEbook";
import { getUserSession } from "@/lib/core/session";

const WriterAddEbookPage =async () => {

  const user=await getUserSession()



  return (
    <div>
      <AddEbook user={user}/>
    </div>
  );
};

export default WriterAddEbookPage;