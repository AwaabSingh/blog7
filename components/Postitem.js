import Link from 'next/link'
const Postitem = ({ article }) => {
    return (
        <>
          <Link href='/article/[id]' as={`/article/${article.id}`}>
            <a  className='bg-gray-100 p-16 rounded shadow-2xl relative hover:shadow-xl  cursor-pointer'>
                <h3 className='text-center uppercase font-mono font-bold text-blue-400 py-3 rounded'>{article.title}  </h3> 
                 <br/>
                <p className='font-sm break-words'> {article.body} </p>   
                <p className=' mt-2 p-3 w-32 bg-yellow-200 hover:bg-yellow-400 transition ease-out duration-500 rounded shadow'>Read more &rarr;</p> 
            </a>     
            </Link>  
        </>
    )
}

export default Postitem
