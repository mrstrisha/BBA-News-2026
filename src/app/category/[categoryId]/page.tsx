import NewsCard from "@/components/NewsCard";

interface news {
    id:string,
    title:string,
    description:string,
    category:string,
    imageUrl:string,
    imageAlt:string
}


const CategoryNews = async ({params}: {params: {categoryId:string}}) => {
    const {categoryId} = await params
    const res = await fetch (`https://news-api-v2.vercel.app/api/category/${categoryId}`) 
    const data = await res.json()
    console.log("data is here",data)
    const  categoryNews: news[] = data.data
    return (
        <div>
            <div className="text-2xl font-bold border-b-2 border-red-700 mb-5">
                {data.title} </div>
                <div className="grid grid-cols-3">
                
                { categoryNews .map(news=> <NewsCard key={news.id} news={news}></NewsCard>)}
                
                </div>
                 </div>
                );
        
  
};

export default CategoryNews;