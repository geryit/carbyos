import Image from "next/image";
import Logo from "../../public/static/images/carbonos/carbyos-logo.svg";
import ArrowDown from "../../public/static/images/carbonos/arrow-down.svg";
import ArrowRight from "../../public/static/images/carbonos/arrow-right.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-cm">
      <div className="h-4" />
      <div className="w-full max-w-[48.75rem] sticky top-0 h-16 m-auto rounded-full p-4 flex items-center backdrop-blur bg-black/80 z-10">
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
        <button className="text-xs bg-[#52B784] hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
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
            <button className="text-xs bg-[#52B784] hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
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
              height={576}
              alt="Hero image"
              priority
            />
          </div>
        </div>
      </header>
      <section className="min-h-36 flex justify-center items-center ">
        <p className="font-cm text-white text-2xl">
          Trusted by 1,200+ providers, 200+ clinics and counting...
        </p>
      </section>
      <section className="max-w-screen-2xl mx-auto h-[67.5rem] ball relative flex justify-end py-20 px-36">
        <Image
          src="/static/images/carbonos/tablet-screen1.png"
          width={714}
          height={714}
          alt="Tablet screen 1"
          className="absolute top-0 left-0"
        />
        <Image
          src="/static/images/carbonos/tablet-screen2.png"
          width={1829 / 2}
          height={1248 / 2}
          alt="Tablet screen 2"
          className="absolute left-0 bottom-0"
        />
        <Image
          src="/static/images/carbonos/mobile-screen1.png"
          width={1168 / 2}
          height={950 / 2}
          alt="Mobile screen 1"
          className="absolute right-0 bottom-0"
        />

        <div className="max-w-[35rem]">
          <h2 className="text-white">
            You take care of your patients & clinic, we will handle everything
            else.
          </h2>
          <div className="mt-4">
            <button className="text-base bg-[#52B784] hover:bg-gray-400 text-gray-910 py-4 px-6 rounded-full font-isb">
              Schedule a Demo
            </button>
          </div>
          <ul className="mt-16 grid grid-cols-2 gap-y-3 gap-x-4">
            {[
              {
                icon: "ehr",
                title: "EHR",
              },
              {
                icon: "employer-portal",
                title: "Employer Portal",
              },
              {
                icon: "practice-management",
                title: "Practice Management",
              },
              {
                icon: "patient-app",
                title: "Patient App",
              },
              {
                icon: "billing-hub",
                title: "Billing Hub",
              },
              {
                icon: "online-scheduling",
                title: "Online Scheduling",
              },
            ].map((item) => (
              <li key={item.icon} className="flex items-center gap-3">
                <div className="p-3 bg-[#313634] rounded-lg">
                  <Image
                    src={`/static/images/carbonos/icon-${item.icon}.svg`}
                    width={20}
                    height={0}
                    alt={`${item.title} icon`}
                  />
                </div>
                <span className="text-white font-cm text-xl">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto py-32 bg-[#1A2E2C]">
        <div className="grid grid-cols-2 px-[9.125rem] gap-5">
          <div className="grid gap-8">
            <Image
              src={`/static/images/carbonos/waves.svg`}
              width={585}
              height={0}
              alt={`wave`}
              className="ml-[-9.2rem]"
            />

            <div>
              <span className="text-white text-[2.5rem]">
                Let AI do the legwork.
              </span>
              <div className="mt-4">
                <button className="text-xs bg-[#52B784] hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="text-white text-[3.25rem]">2,000</span>
              <div className="text-white/70 font-ttr mt-4">
                Providers using CareBy
              </div>
            </div>
            <div>
              <span className="text-white text-[3.25rem]">500K+</span>
              <div className="text-white/70 font-ttr mt-4">
                AI-powered charts created
              </div>
            </div>

            <div>
              <span className="text-white text-[3.25rem]">1,200</span>
              <div className="text-white/70 font-ttr mt-4">
                Keystrokes saved per visit
              </div>
            </div>
            <div>
              <span className="text-white text-[3.25rem]">60 mins</span>
              <div className="text-white/70 font-ttr mt-4">
                Training to EHR fluency
              </div>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-5">
          {[
            {
              icon: "soap",
              title: "Write SOAP notes",
            },
            {
              icon: "patient-instructions",
              title: "Patient Instructions",
            },
            {
              icon: "cpt",
              title: "Automate CPT Coding",
            },
            {
              icon: "find",
              title: "Find ICD-10 Codes",
            },
            {
              icon: "write",
              title: "Write work/school notes",
            },
            {
              icon: "schedule-followup",
              title: "Schedule follow-ups",
            },
            {
              icon: "fillout",
              title: "Fill-out forms",
            },
            {
              icon: "db",
              title: "Create Referral Packages",
            },
            {
              icon: "realtime",
              title: "Real-time Clinical Suggestions",
            },
            {
              icon: "call",
              title: "Call Processing",
            },
          ].map((item) => (
            <li
              key={item.icon}
              className="flex items-center gap-3 bg-[#142221] p-4 rounded-lg"
            >
              <div className="p-3 bg-[#313634] rounded-lg">
                <Image
                  src={`/static/images/carbonos/icon-${item.icon}.svg`}
                  width={36}
                  height={0}
                  alt={`${item.title} icon`}
                />
              </div>
              <span className="text-white font-cm text-xl">{item.title}</span>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-col justify-center text-center">
          <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#44706D] to-[#83D6D1]">
            We make switching a breeze.
          </h3>
          <div className="mt-10">
            <button className="font-isb py-6 px-6  bg-gradient-to-br from-[#548F8C] to-[#33B4AD] hover:bg-gray-400 text-gray-910 rounded-full">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </section>

      <footer className="h-48"></footer>
    </div>
  );
}
