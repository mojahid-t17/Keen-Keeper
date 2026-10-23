'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();
    const navLink= <>
      
      <Link className={`flex mx-2 items-center  px-3 rounded-md py-1 ${pathname === '/' ? 'bg-[#244D3F] text-white' : ''}`} href="/"><HiOutlineHome />Home</Link>
     <Link className={`flex mx-2 px-3 py-1  rounded-md items-center ${pathname === '/timeline' ? 'bg-[#244D3F]  text-white' : ''}`} href="/timeline"><RiTimeLine /> <span>TimeLine</span></Link>
     <Link className={`flex mx-2 items-center px-3 rounded-md py-1   ${pathname === '/status' ? 'bg-[#244D3F] text-white' : ''}`} href="/status"> <ImStatsDots />Status</Link>
    </>
    return (
        <div className="navbar bg-[#E9E9E9] shadow-sm">
  <div className="flex-1">
    <Link href="/" className=" font-bold text-xl">Keen <span className="text-[#244D3F]">Keeper</span> </Link>
  </div>
  <div className="flex-none">
    <ul className="menu items-center menu-horizontal justify-between px-1">
      {navLink}
     
    </ul>
  </div>
</div>
    );
};

export default Navbar;