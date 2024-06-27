import Image from "next/image";
import Logo from "../../public/static/images/carbonos/carbyos-logo.svg";
import ArrowDown from "../../public/static/images/carbonos/arrow-down.svg";
import ArrowRight from "../../public/static/images/carbonos/arrow-right.svg";
import Hamburger from "../../public/static/images/carbonos/hamburger.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-cm text-white bg-[#181818]">
      <div className="h-4" />
      <div className="sticky top-0 px-6 z-10">
        <div className="max-w-[48.75rem] h-16 m-auto rounded-full p-4 flex items-center backdrop-blur bg-black/80 ">
          <Image src={Logo} alt={"Logo"} className="ml-2" />
          <ul className="flex-1 hidden md:!flex justify-center gap-10 font-cm">
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
          <div className="flex-1 md:hidden" />
          <button className="text-xs bg-[#52B784] hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
            Schedule a Demo
          </button>
          <span className="md:hidden">
            <Image src={Hamburger} alt={"hamburger"} className="ml-2" />
          </span>
        </div>
      </div>
      <header className="max-w-screen-2xl mx-auto ball pt-32 md:pt-48 -mt-20">
        <div className="text-center flex flex-col items-center ">
          <div className="flex items-center justify-center gap-3">
            <div className="text-xs font-im bg-purple-100 px-2 py-1 rounded-md text-[#181818]">
              New
            </div>
            <span className="text-sm text-gray-50 font-ttr flex items-center gap-3">
              Smart summarization
              <Image src={ArrowRight} alt={"arrow right"} />
            </span>
          </div>
          <h1 className="text-gray-50 mt-6 text-[2rem] md:text-6xl max-w-3xl leading-tight">
            AI-first EHR, Practice Management & Billing.
          </h1>

          <p className="text-white font-ttr text-xl">
            The only software you need to run your clinics or virtual care.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="text-xs bg-[#52B784] hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
              Schedule a Demo
            </button>
            <button className="text-xs py-2 px-4 rounded-full font-isb hidden md:!flex items-center gap-2 border border-white text-white">
              <span className="h-2 w-2 bg-orange-500 rounded-full" />
              Next live demo: Today 2pm on X
            </button>
          </div>

          <div className="mt-8 md:mt-16 self-start md:!self-center ml-4 md:ml-0">
            <Image
              src="/static/images/carbonos/hero.png"
              width={1076}
              height={576}
              alt="Hero image"
              priority
              className="max-w-[45.5rem] md:max-w-full"
            />
          </div>
        </div>
      </header>
      <section className="min-h-36 flex justify-center items-center text-center px-16">
        <p className="font-cm text-white text-2xl">
          Trusted by 1,200+ providers, 200+ clinics and counting...
        </p>
      </section>
      <section className="max-w-screen-2xl mx-auto lg:min-h-[67.5rem] ball relative flex flex-col lg:flex-row justify-end pt-80 lg:pt-16 pb-60 lg:pb-20 px-6 lg:px-36 overflow-hidden">
        <Image
          src="/static/images/carbonos/tablet-screen1.png"
          width={714}
          height={714}
          alt="Tablet screen 1"
          className="absolute left-0 top-0 hidden lg:block"
          sizes="100vw"
          style={{
            width: "50%",
            height: "auto",
          }}
        />
        <Image
          src="/static/images/carbonos/tablet-screen2.png"
          width={1829 / 2}
          height={1248 / 2}
          alt="Tablet screen 2"
          className="absolute left-0 bottom-0 hidden lg:block"
          sizes="100vw"
          style={{
            width: "50%",
            height: "auto",
          }}
        />
        <Image
          src="/static/images/carbonos/mobile-screen1.png"
          width={1168 / 2}
          height={950 / 2}
          alt="Mobile screen 1"
          className="absolute right-0 bottom-0 hidden lg:block"
          sizes="100vw"
          style={{
            width: "50%",
            height: "auto",
          }}
        />

        <Image
          src="/static/images/carbonos/tablet-screen1.png"
          width={714}
          height={714}
          alt="Tablet screen 1"
          className="lg:hidden max-w-[30rem] absolute -left-12 -top-16 rotate-[15deg]"
        />

        <div className="max-w-[35rem] self-center lg:!self-start">
          <h2 className="text-white">
            You take care of your patients & clinic, we will handle everything
            else.
          </h2>
          <div className="mt-4">
            <button className="text-base bg-[#52B784] hover:bg-gray-400 text-gray-910 py-4 px-6 rounded-full font-isb">
              Schedule a Demo
            </button>
          </div>
          <ul className="mt-8 lg:mt-16 grid grid-cols-none lg:grid-cols-2 gap-y-6 lg:gap-y-3 gap-x-4">
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
        <Image
          src="/static/images/carbonos/tablet-screen2.png"
          width={1829 / 2}
          height={1248 / 2}
          alt="Tablet screen 2"
          className="lg:hidden absolute max-w-[35rem] -left-4 -bottom-20 rotate-[15deg]"
        />
      </section>
      <section className="max-w-screen-2xl mx-auto py-10 md:!py-32 bg-[#1A2E2C]">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="grid gap-8">
            <Image
              src={`/static/images/carbonos/waves.svg`}
              width={680}
              height={0}
              alt={`wave`}
              className="max-w-[330px] md:max-w-full"
            />

            <div className="pl-6 md:!pl-[11rem] mt-6">
              <span className="text-white text-3xl md:text-[2.5rem]">
                Let AI do the legwork.
              </span>
              <div className="mt-6">
                <button className="text-xs bg-[#52B784] hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-y-16 mt-4 px-6 md:pr-[9.125rem]">
            {[
              ["2000", "Providers using CareBy"],
              ["500K+", "AI-powered charts created"],
              ["1,200", "Keystrokes saved per visit"],
              ["60 mins", "Training to EHR fluency"],
            ].map(([num, description]) => (
              <li key={num}>
                <span className="text-white text-4xl md:text-[3.25rem]">
                  {num}
                </span>
                <div className="text-white/70 font-ttm mt-1 md:text-xl max-w-44">
                  {description}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid md:grid-cols-2 gap-3 md:gap-5 mt-8 md:mt-16 max-w-[78rem] m-auto px-6 md:px-6">
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
              className="flex items-center gap-1 md:gap-3 bg-[#142221] px-4 md:px-8 rounded-3xl min-h-[4.5rem] md:min-h-[8.25rem] "
            >
              <div className="p-2 md:p-3 bg-[#111E1D] rounded-lg">
                <Image
                  src={`/static/images/carbonos/icon-${item.icon}.svg`}
                  width={36}
                  height={0}
                  alt={`${item.title} icon`}
                />
              </div>
              <span className="text-white font-cm md:text-xl">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col justify-center text-center">
          <h3 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#45706E] to-[#82D5D0] px-6">
            We make switching a breeze.
          </h3>
          <div className="mt-10">
            <button className="font-isb py-5 px-6 bg-gradient-to-r from-[#548F8C] to-[#33B4AD] hover:bg-gray-400 text-gray-910 rounded-full">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto p-[9.75rem] bg-[#181818] h-[51.75rem] relative hidden lg:block">
        <Image
          src={`/static/images/carbonos/billing-bg.png`}
          width={1512}
          height={0}
          alt={`billing background`}
          className="absolute top-0 right-0"
        />

        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="bg-[#2F2F2F] p-2 rounded-lg">
              <Image
                src={`/static/images/carbonos/icon-doc.svg`}
                width={14}
                height={0}
                alt={`billing background`}
                className=""
              />
            </div>
            <h4 className="text-[#52B784] text-xs font-ttb uppercase">
              Billing Hub
            </h4>
          </div>
          <h2 className="text-white mt-8 max-w-[26.5rem] text-5xl leading-tight">
            Don&apos;t leave money on the table
          </h2>
          <div className="mt-6">
            <button className="text-xs bg-[#FAFAFA] hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
              Schedule a Demo
            </button>
          </div>

          <ul className="flex flex-col gap-6 mt-16">
            {[
              "Online patient collections",
              "Real-time out of pocket calculator",
              "Apple Pay & Android Pay",
              "Point-of-Sale Terminals",
              "Powerful RCM",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className=" w-[16px] h-[16px] flex items-center justify-center bg-[#A9E2B3] rounded-full">
                  <Image
                    src={`/static/images/carbonos/icon-tick.svg`}
                    width={10}
                    height={0}
                    alt={`icon tick`}
                    className=""
                  />
                </span>
                <span className="text-white text-xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto p-[7rem] flex-col items-center text-center hidden lg:flex">
        <Image
          src={`/static/images/carbonos/nice.svg`}
          width={85}
          height={0}
          alt={`icon tick`}
          className=""
        />
        <h3 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#45706E] to-[#82D5D0] mt-10 relative">
          Finally an EHR providers <i>actually</i> love.
          <div className="absolute bg-[#275957] w-[7.25rem] h-[3px] bottom-[0.2rem] left-[26.7rem]" />
        </h3>
        <div className="mt-10">
          <button className="font-isb py-5 px-6 bg-gradient-to-r from-[#548F8C] to-[#33B4AD] hover:bg-gray-400 text-gray-910 rounded-full">
            Let&apos;s Talk
          </button>
        </div>
      </section>

      <footer className="max-w-screen-2xl mx-auto pt-20 pb-40 px-24 bg-[#192E2C] min-h-[26rem] hidden lg:flex">
        <div className="flex-1 flex flex-col">
          <Image
            src={`/static/images/carbonos/careby-logo.svg`}
            width={95}
            height={0}
            alt={`careby logo`}
            className=""
          />
          <p className="flex-1 mt-[0.7rem] font-ttr text-sm max-w-[33.75rem]">
            CareBy, powered by Carbon Health, helps businesses optimize every
            part of their operations, including an AI-powered EHR and Billing
            Hub, complete RCM management, and patient app.
          </p>
          <p className="font-ttr text-sm">© 2024 Carbon Health Inc.</p>
        </div>

        <div className="w-[21rem] mt-14">
          <ul className="flex flex-col gap-10">
            {["Suite", "Features", "Pricing"].map((item) => (
              <li key={item} className="flex gap-2 items-center">
                <Image
                  src={`/static/images/carbonos/arrow-right2.svg`}
                  width={10}
                  height={0}
                  alt={`arrow right`}
                />
                <span className="font-ib">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button className="text-xs bg-white hover:bg-gray-400 text-gray-910 py-2 px-4 rounded-full font-isb">
              Schedule a Demo
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
