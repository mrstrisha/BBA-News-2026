import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IotherSection {
  title: string,
      curationId:string,
      articles:{
           id:string, 
          title:string,
          description:string, 
          imageUrl: string,
          imageAlt: string,
          category: string,
          
      }[]
}


export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const section = data.data
  const mainNews = section[0].articles
  const otherSection: IotherSection = section.slice(1)

  
  return (
    <div className="grid grid-cols-3  my-3">

    <div className=" col-span-2">
  <MainNews news={mainNews}></MainNews>
     {otherSection.map (os=> <div className="" key={os.curationId}>
         <h1 className=" border-b-2 pb-1 border-red-800 font-bold">{os.title}</h1>
         <div className="grid mt-3 grid-cols-3 gap-2">
       {
  os.articles.map((news) => (
    <NewsCard key={news.id} news={news}></NewsCard>
  ))

 } </div>
        
     </div>)}
    </div>

    <div className="col-span-1 p-10">
      <MostRead></MostRead>
    
    </div>
    </div>
  );
}
