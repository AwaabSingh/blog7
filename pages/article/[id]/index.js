import Link from 'next/link';
import Footer from '../../../components/Footer';

const post = ({ article }) => {
  return (
    <section className=' min-h-screen bg-indigo-100'>
      {/* <div className='p-5'>
          <Link href='/'>
            <a className='p-3 bg-gray-200 rounded '>Go Back</a>
          </Link>
        </div> */}
      <div className='grid md:grid-cols-2 pt-10'>
        <div className='mr-3'>
          <h1 className='text-center font-bold font-mono uppercase text-3xl text-blue-500'>
            {article.title}
          </h1>
          <br />
          <p className='text-center'>
            <spa className='font-bold text-gray-700'>Article: </spa>{' '}
            {article.body}
          </p>
        </div>
        <div className='rounded overflow-hidden cursor-pointer'>
          <h1 className='text-center mt-3 text-3xl mx-3 rounded py-2'>
            Trending
          </h1>
          <div className='border bg-blue-200 hover:bg-blue-400 p-3 rounded m-5'>
            <span>No Trending Topics Yet</span>
          </div>
        </div>
      </div>
      <section className='grid md:grid-cols-2 gap-5'>
        <div className='pt-2 m-2 mt-5'>
          <h3 className='text-center text-3xl pb-5 '>Reviews</h3>
          <div className='border bg-blue-200 hover:bg-blue-400 p-3 rounded m-5'>
            <span>No Reviews</span>
          </div>
        </div>
        <div className='text-center mt-10'>
          <h3 className='text-center text-3xl pb-3'>Write a comment</h3>
          <form>
            <div>
              <label htmlFor='rating' className='ml-5 pb-5'>
                Rating
              </label>
              <br />
              <select
                id='rating'
                className='w-56 m-2 p-3 rounded mt-2 bg-gray-100'
              >
                <option value=''>Select...</option>
                <option value='1'>1 - Poor</option>
                <option value='2'>2 - Fair</option>
                <option value='3'>3 - Good</option>
                <option value='4'>4 - Very Good</option>
                <option value='5'>5 - Excellent</option>
              </select>
              <div>
                <label htmlFor='comment'>Comment</label>
                <br />
                <textarea
                  id='comment'
                  className='w border border-blue-200 mb-3'
                ></textarea>
                <br />
                <button type='submit' className='bg-yellow-300 hover:bg-yellow-400 rounded p-3'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

{
  /* <form class="">
<div class="form-group">
<label class="form-label" for="rating">Rating</label>
<select id="rating" class="form-control">
<option value="">Select...</option>
<option value="1">1 - Poor</option>
<option value="2">2 - Fair</option>
<option value="3">3 - Good</option>
<option value="4">4 - Very Good</option>
<option value="5">5 - Excellent</option>
</select>
</div>
<div class="form-group">
<label class="form-label" for="comment">Comment</label>
<textarea row="3" id="comment" class="form-control" spellcheck="false">
</textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</fo */
}
export default post;
