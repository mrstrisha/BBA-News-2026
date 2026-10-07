 interface MostReadNews {
    id: string,
    title:string
 }


const MostRead = async () => {
    const res = await fetch ('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const news: MostReadNews[] = data.data
    return (
        <div className="card p-2 bg-base-100 border border-gray-300" >
            <div className="font-bold text-red-700 mb-3">
                <h1>Sorbadhik pothito</h1>
            </div>
            <ol className="list-decimal pl-6">
            {
                news.map(n=> <li key={n.id}>
                  <h2>{n.title}</h2>
                </li>)
            }
            </ol>
        </div>
    );
};

export default MostRead;