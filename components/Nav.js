import Link from 'next/link';
const NavItem = (props) => (
  <li>
    <Link href={props.href}>
      <a className='text-sm font-bold text-gray-700 px-3 py-2 hover:bg-yellow-300 rounded transition-color duration-300'>
        {props.text}
      </a>
    </Link>
  </li>
);

const Nav = () => {
  return (
    <>
      <nav className='flex space-x-10 justify-between p-4 bg-gray-300'>
        <div>
          <Link href='/'>
            <a className='text-gray-800 font-extrabold cursor-pointer'>
            📝 Blog 7
            </a>
          </Link>
        </div>

        <div>
          <ul className='flex space-x-2 '>
            <NavItem text='About' href='/about' />
            <NavItem text='Sign up' href='/register' />
            <NavItem text='Login' href='/login' />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
