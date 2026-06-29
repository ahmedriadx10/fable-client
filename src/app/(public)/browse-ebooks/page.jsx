import BrowseEbook from "@/components/ebook-browse/BrowseEbook";
import { getEbookData } from "@/lib/api/EbookData";

const BrowseEbooksPage =async ({searchParams}) => {

const searchQuery=await searchParams

// console.log('search Query is here:',searchQuery)

const queryInstance=new URLSearchParams(searchQuery)

const queryString=queryInstance.toString()

const booksData=await getEbookData(queryString)



return (
    <section>

<section>
  <BrowseEbook booksData={booksData}/>
</section>
    </section>
  );
};

export default BrowseEbooksPage;