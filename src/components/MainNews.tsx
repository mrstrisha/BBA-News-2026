
import Image from "next/image";

interface News {
  id:string;
  title:string;
  description:string;
  category:string;
  imageUrl:string;
  imageAlt:string;

}


const MainNews = ({news} : {news:News[] }) => {
  const [firstNews,...otherNews] = news


    return (
       
<div className="flex gap-2">
  <div className="card bg-base-100 w-96 shadow-sm ">
  <figure className="px-10 pt-10">
      <Image
      src={firstNews.imageUrl}
      alt="Photo"
      width={600}
      height={600}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
   </div>
</div>


<div>
  {otherNews.map (on => <div className="card bg-base" key={on.id}>
    <div>
          {on.title}   
    </div>
  </div> )}
</div>
</div>
    )
};

export default MainNews;