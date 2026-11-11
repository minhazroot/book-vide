import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/book.ico";
const NavBar = () => {
  const link = (
    <>
      <li>
        <Link href="">Home</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>
      <li>
        <Link href="/">Listed Books</Link>
      </li>
      <li>
        <Link href="/">Pages to Read</Link>
      </li>
    </>
  );
  return (
  

<nav className="w-full bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="navbar min-h-20 px-0">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
            {link}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <a className="text-2xl font-bold">
            Book<span className="text-teal-600">Vibe</span>
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {link}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-outline btn-success rounded-xl">
          Sign in
        </button>
        <button className="btn bg-teal-600 hover:bg-teal-700 text-white border-none rounded-xl">
          Sign out
        </button>
      </div>

    </div>
  </div>
</nav>


  );
};

export default NavBar;
