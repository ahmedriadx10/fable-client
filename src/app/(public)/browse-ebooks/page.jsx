import BrowseEbook from "@/components/ebook-browse/BrowseEbook";
import { getEbookData } from "@/lib/api/EbookData";
import { getAvailableGenres } from "@/lib/api/Genres";

const BrowseEbooksPage =async ({searchParams}) => {

const searchQuery=await searchParams

// console.log('search Query is here:',searchQuery)

const queryInstance=new URLSearchParams(searchQuery)

const queryString=queryInstance.toString()

const booksData=await getEbookData(queryString)
const availableGenres=await getAvailableGenres()
console.log('available genres is here:',availableGenres)


return (
    <section>

<section>
  <BrowseEbook booksData={booksData} availableGenres={availableGenres}/>
</section>
    </section>
  );
};

export default BrowseEbooksPage;