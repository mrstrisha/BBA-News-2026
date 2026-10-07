import Image from "next/image";


 const page = async ({ params }: { params: { newsId: string } }) => {
    const {newsId} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await  res.json()
    const news = data.data
    console.log(news)
    return (
        <div>
          <div className="max-w-4xl mx-auto px-4 py-10">
             {/* Source */} <p className="text-red-600 font-semibold mb-3"> {news.source} </p>
              {/* Title */} <h1 className="text-4xl font-bold leading-tight mb-5"> {news.title} </h1> 
              {/* Published Date */} <p className="text-gray-500 mb-6"> Published:{" "} {new Date(news.firstPublished).toLocaleDateString()} </p>
               {/* Image */}
               <Image
  src={news.imageUrl}
  alt={news.title}
  width={800}
  height={450}
  className="w-full rounded-xl mb-8"
/>
               {/* Description */} 
               <div className="text-xl font-medium text-gray-700 mb-8"> {news.description?.blocks?.map( (block: any, index: number) => ( <p key={index}>{block.text}</p> ) )} </div>
                {/* Article Body */}
                 <div className="space-y-5 text-lg leading-8 text-gray-800"> {news.body?.map((item: any, index: number) => ( <p key={index}> {item.text} </p> ))} </div>
                  {/* Tags */}
                   <div className="flex flex-wrap gap-2 mt-10"> 
                    {news.tags?.map((tag: string) => ( <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm" > #{tag} </span> ))} 
                    </div> 
                    </div>
          </div>
    );
};

export default page;