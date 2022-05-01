import React from 'react'

const Footer = () => {
  return (

<footer class="bg-gray-900">
  <div class="grid max-w-screen-xl grid-cols-1 mx-auto lg:grid-cols-2">
    <div class="px-4 py-16 border-b border-gray-800 md:border-b-0 md:border-l lg:pl-12 lg:order-last">

      <div class="mt-12 space-y-4 lg:mt-0">
        <span class="block w-10 h-1 bg-main-violet rounded"></span>
        <div>
          <h5 class="text-2xl mb-4  font-medium text-white">
            Join our community
          </h5>
        </div>
        <p className="text-sm text-gray-400">Have the flexibility to work the way you do. A timeboxing app.</p>
        <a href="#"className="w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main-violet hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        I want to sign up!
        </a>
      </div>
    </div>

    <div class="px-4 py-16 lg:pr-12">
      <div class="flex gap-3 flex-row items-center">
        <p className="text-white text-4xl">Kinoko</p>
        <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
      </div>

      <div class="grid grid-cols-3 flex-col md:flex-row gap-8 mt-4 lg:mt-12">

        <div>
          <p class="font-bold text-white">
            Links
          </p>

          <nav class="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
            <a class="hover:opacity-75" href=""> Basic Usage </a>
            <a class="hover:opacity-75" href=""> Tracking Time </a>
            <a class="hover:opacity-75" href=""> Mushroom Forest </a>
          </nav>
        </div>

        <div>
          <p class="font-bold text-white">
            Links
          </p>
          <nav class="flex flex-col mt-2 space-y-1 text-xs text-gray-400">
            <a class="hover:opacity-75" href=""> Tags </a>
            <a class="hover:opacity-75" href=""> FAQ </a>
          </nav>
        </div>
      </div>

      <div class="flex mt-12 space-x-6 text-xs text-white">
        <p> &copy; 2022 Kinoko </p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer