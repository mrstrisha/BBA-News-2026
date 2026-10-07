import Image from "next/image";
interface News {
      id:string, 
          title:string,
          description:string, 
          imageUrl: string,
          imageAlt: string,
          category: string,
}


const NewsCard = ({news} : {news:News}) => {
    return (
        <div>
             <figure className="px-10 pt-10">
                  <Image
                  src={news.imageUrl}
                  alt="Photo"
                  width={600}
                  height={600}
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
               </div>
            </div>
      
    );
};

export default NewsCard;