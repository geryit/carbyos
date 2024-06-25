import Image from "next/image";
import Logo from "../../public/static/images/carbyos-logo.svg";
import ArrowDown from "../../public/static/images/arrow-down.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="max-w-screen-2xl m-auto">
        <div className="bg-gray-100 min-h-[67.5rem] ball">
          <div className="h-4" />
          <div className="w-full max-w-[48.75rem] h-16 sticky top-0 m-auto rounded-full p-4 flex items-center backdrop-blur bg-black/50">
            <Image src={Logo} alt={"Logo"} />
            <ul className="flex-1 flex justify-center gap-10 font-cm">
              <li>
                <span className="flex items-baseline text-white gap-2">
                  Suite <Image src={ArrowDown} alt={"Down arrow"} />
                </span>
              </li>
              <li>
                <Link href="#" className=" text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className=" text-white">
                  Pricing
                </Link>
              </li>
            </ul>
            <button className="text-xs bg-green-300 text-gray-910 p-2 rounded-full font-isb">
              Schedule a Demo
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              <span className="text-sm font-semibold">New</span>
              <span className="text-sm">Smart summarization</span>
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
      <main className="h-[100rem]">sdf</main>
    </>
  );
}
