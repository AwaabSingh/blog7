import Nav from '../components/Nav';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

const index = ({ articles }) => {
  return (
    <div className='bg-indigo-200'>
      <Header />
      <Posts articles={articles} />
      <Footer/>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=20`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default index;
