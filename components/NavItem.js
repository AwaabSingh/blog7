import Link from 'next/link'
const NavItem = ({ text, href}) => {
    return (
        <li>
    <Link
      href={href}
      className='text-sm font-bold text-gray-700 px-2 py-1 hover:bg-red-300 rounded transition-color duration-300'
    >
      {text}
    </Link>
  </li>
    )
}

export default NavItem
