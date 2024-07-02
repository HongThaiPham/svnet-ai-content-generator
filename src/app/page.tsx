import {
  ChevronRight,
  CircleUser,
  LayoutTemplate,
  MessageSquare,
  Paintbrush,
  Squirrel,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Image src="/logo.svg" alt="logo" width={48} height={48} />
            </div>
          </div>
          <div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              <Link
                href="/dashboard"
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-orange-500"
              >
                <CircleUser size={20} className="flex-shrink-0 size-4" />
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
            >
              SVNet Membership - Join Now
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                <ChevronRight className="flex-shrink-0 size-4" />
              </span>
            </Link>
          </div>
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              AI Content{" "}
              <span className="bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent">
                Generator
              </span>
            </h1>
          </div>
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Revolutionize your content creation with our AI-powered app,
              delivering engaging and high-quality text in seconds.
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <Link
              href={"/dashboard"}
              className="inline-flex justify-center items-center  gap-x-3 text-center bg-gradient-to-tl from-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Get started
              <ChevronRight className="flex-shrink-0 size-4" />
            </Link>
          </div>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
            <Link
              href={"/"}
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            >
              <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <LayoutTemplate className="flex-shrink-0 size-6 text-white" />
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  25+ templates
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Responsive, and mobile-first project on the web
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more <ChevronRight className="flex-shrink-0 size-4" />
                </span>
              </div>
            </Link>
            <Link
              href={"/"}
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            >
              <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <Paintbrush className="flex-shrink-0 size-6 text-white" />
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  Customizable
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Components are easily customized and extendable
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more <ChevronRight className="flex-shrink-0 size-4" />
                </span>
              </div>
            </Link>
            <Link
              href={"/"}
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            >
              <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <Squirrel className="flex-shrink-0 size-6 text-white" />
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  Free to Use
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Every component and plugin is well documented
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more <ChevronRight className="flex-shrink-0 size-4" />
                </span>
              </div>
            </Link>
            <Link
              href={"/"}
              className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            >
              <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
                <MessageSquare className="flex-shrink-0 size-6 text-white" />
              </div>
              <div className="mt-5">
                <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                  24/7 Support
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Contact us 24 hours a day, 7 days a week
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                  Learn more <ChevronRight className="flex-shrink-0 size-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
