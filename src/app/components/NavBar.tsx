import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/book.ico"
const NavBar = () => {
  const link = (
    <>
      <li>
        <Link href="/">Home</Link>
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
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
       <div className="flex gap-2 items-center ">
        <Image src={logo} alt="Logo image"></Image>
         <a className="btn btn-ghost text-xl">Book Vibe</a>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-2 mr-4">
        <button className="btn btn-active btn-success">Sign in</button>
        <button className="btn btn-active btn-info">Sign out</button>
      </div>
    </div>
  );
};

export default NavBar;
