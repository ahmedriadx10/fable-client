import HeroBanner from "@/components/ui/Banner";
import EbookGenres from "@/components/ui/EbookGenres";
import FeaturedBook from "@/components/ui/FeaturedBook";
import TopWriters from "@/components/ui/TopWriters";
import { getHompageData } from "@/lib/api/FeaturedBooks";

const HomePage =async () => {

const homePageData=await getHompageData()

console.log('homepage data here',homePageData)

  return (
    <div>

<HeroBanner/>
<FeaturedBook featuredBooks={homePageData?.featuredBooks}/>
<EbookGenres genresData={homePageData?.availableGenres}/>
<TopWriters writersData={homePageData?.topWriters}/>
    </div>
  );
};

export default HomePage;