import * as React from "react"
import { Link } from "gatsby"


export default function Navbar() {

    return (  
    <header class="flex flex-wrap xl:justify-start xl:flex-nowrap z-50 w-screen text-sm overflow-hidden">
        <nav class=" border-b-1 fixed z-50 w-screen bg-background border py-3 px-4 xl:flex xl:items-center xl:justify-between xl:py-0  xl:px-8 xl:mx-auto border-gray-700" aria-label="Global">
          <div class="flex items-center justify-between">
            <a class="flex-none text-xl xl:text-2xl 2xl:text-4xl font-bold text-white" href="index.html">TOMMIE MOTORSPORTS</a>
            <div class="xl:hidden">
              <button type="button" class="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2 2 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                                <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2 2 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xl:block">
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 xl:flex-row xl:items-center xl:justify-end xl:gap-y-0 xl:gap-x-7 xl:mt-0 xl:ps-7 xl:mr-3">
              <a class="font-bold font-mulish text-gray-500 hover:text-secondary xl:hover:text-white xl:p-4 dark:text-gray-400 dark:hover:text-white xl:hover:bg-secondary xl:-skew-x-12 transition-all bg-none" href="index.html" ><div class="xl:skew-x-12">HOME</div></a>
              <a class="font-bold font-mulish text-gray-500 hover:text-secondary xl:hover:text-white xl:p-4 dark:text-gray-400 dark:hover:text-white xl:hover:bg-secondary xl:-skew-x-12 transition-all bg-none" href="#aboutUs"><div class="xl:skew-x-12">ABOUT</div></a>
              <a class="font-bold font-mulish text-gray-500 hover:text-secondary xl:hover:text-white xl:p-4 dark:text-gray-400 dark:hover:text-white xl:hover:bg-secondary xl:-skew-x-12 transition-all bg-none" href="sponsors.html"><div class=" xl:skew-x-12">SPONSORSHIP</div></a>
            <a class="font-bold font-mulish text-gray-500 hover:text-secondary xl:hover:text-white xl:p-4 dark:text-gray-400 dark:hover:text-white xl:hover:bg-secondary xl:-skew-x-12 transition-all bg-none" href=""><div class=" xl:skew-x-12">RESULTS</div></a>
              <a class="font-bold font-mulish text-secondary dark:text-white xl:py-6" href="mtt.html">MEET THE TEAM</a>
              <a class="font-bold font-mulish text-gray-500 hover:text-secondary xl:hover:text-white xl:p-4 dark:text-gray-400 dark:hover:text-white xl:hover:bg-secondary xl:-skew-x-12 transition-all bg-none" href="#" href="#"><div class=" xl:skew-x-12">GALLERY</div></a>
            </div>
          </div>
        </nav>
      </header>
    )
}