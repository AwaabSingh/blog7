import Postitem from "./Postitem";
const Posts = ({ articles }) => {
  return ( 
      <>
    <div className="m-5">
    <h1 className='text-3xl md:border-l-4 md:border-blue-400 p-2 text-center md:text-left up '>Latest Posts</h1>
    </div>
    <section className='p-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 '>
     {articles.map(article => (
         <Postitem key={article.id} article={article}/>
     ))}
  
    </section>
    </>
  )
};
 
export default Posts;
