import Image from "next/image";
import Logo from "../../public/static/images/carbonos/carbyos-logo.svg";
import ArrowDown from "../../public/static/images/carbonos/arrow-down.svg";
import ArrowRight from "../../public/static/images/carbonos/arrow-right.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="h-4" />
      <div className="w-full max-w-[48.75rem] sticky top-0 h-16  m-auto rounded-full p-4 flex items-center backdrop-blur bg-black/80">
        <Image src={Logo} alt={"Logo"} className="ml-2" />
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
        <button className="text-xs bg-green-300 text-gray-910 py-2 px-4 rounded-full font-isb">
          Schedule a Demo
        </button>
      </div>
      <header className="max-w-screen-2xl mx-auto bg-gray-100 ball pt-48 -mt-20">
        <div className="text-center flex flex-col items-center ">
          <div className="flex items-center justify-center gap-3">
            <div className="text-xs font-semibold bg-purple-100 px-2 py-1 rounded-md">
              New
            </div>
            <span className="text-sm text-gray-50 font-ttr flex items-center gap-3">
              Smart summarization
              <Image src={ArrowRight} alt={"arrow right"} />
            </span>
          </div>
          <h1 className="text-gray-50 mt-6 text-6xl max-w-3xl leading-tight">
            AI-first EHR, Practice Management & Billing.
          </h1>

          <p className="text-white font-ttr text-xl">
            The only software you need to run your clinics or virtual care.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="text-xs bg-green-300 text-gray-910 py-2 px-4 rounded-full font-isb">
              Schedule a Demo
            </button>
            <button className="text-xs py-2 px-4 rounded-full font-isb flex items-center gap-2 border border-white text-white">
              <span className="h-2 w-2 bg-orange-500 rounded-full" />
              Next live demo: Today 2pm on X
            </button>
          </div>

          <div className="mt-16">
            <Image
              src="/static/images/carbonos/hero.png"
              width={1076}
              height={500}
              alt="Hero image"
            />
          </div>
        </div>
      </header>
      <main className="h-[100rem]">sdf</main>
    </div>
  );
}
