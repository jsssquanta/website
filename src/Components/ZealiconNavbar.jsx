import { Link } from "react-router-dom";

export default function ZealiconNavbar() {
  return (
    <nav className="bg-white text-black flex justify-between py-6 px-4 sm:px-12">
      <img src="/logo.svg" alt="" className="w-[7rem] h-[2rem] sm:w-[9rem] sm:h-[3rem]"></img>
      <Link className="flex items-center justify-center border border-black rounded-2xl p-2 sm:px-4 sm:rounded-3xl" to="/">
        <p className="text-xs sm:text-sm">www.jssquanta.com</p>
        <img
          src="/arrow_up_right.svg"
          alt=""
          className="w-[12px] h-[12px]"
        ></img>
      </Link>
    </nav>
  );
}
