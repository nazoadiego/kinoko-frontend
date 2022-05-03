import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-900">
      <div class="mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-2">
        <div class="border-b border-gray-800 px-4 py-16 md:border-b-0 md:border-l lg:order-last lg:pl-12">
          <div class="mt-12 space-y-4 lg:mt-0">
            <span class="block h-1 w-10 rounded bg-main-violet"></span>
            <div>
              <h5 class="mb-4 text-2xl  font-medium text-white">
                Join our community
              </h5>
            </div>
            <p className="text-sm text-gray-400">
              Have the flexibility to work the way you do. A timeboxing app.
            </p>
            <a
              href="#"
              className="flex w-auto items-center justify-center rounded-md border border-transparent bg-main-violet px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
              I want to sign up!
            </a>
          </div>
        </div>

        <div class="px-4 py-16 lg:pr-12">
          <div class="flex flex-row items-center gap-3">
            <p className="text-4xl text-white">Kinoko</p>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </div>

          <div class="mt-4 grid grid-cols-3 flex-col gap-8 md:flex-row lg:mt-12">
            <div>
              <p class="font-bold text-white">Links</p>

              <nav class="mt-2 flex flex-col space-y-1 text-xs text-gray-400">
                <a class="hover:opacity-75" href="">
                  {' '}
                  Basic Usage{' '}
                </a>
                <a class="hover:opacity-75" href="">
                  {' '}
                  Tracking Time{' '}
                </a>
                <a class="hover:opacity-75" href="">
                  {' '}
                  Mushroom Forest{' '}
                </a>
              </nav>
            </div>

            <div>
              <p class="font-bold text-white">Links</p>
              <nav class="mt-2 flex flex-col space-y-1 text-xs text-gray-400">
                <a class="hover:opacity-75" href="">
                  {' '}
                  Tags{' '}
                </a>
                <a class="hover:opacity-75" href="">
                  {' '}
                  FAQ{' '}
                </a>
              </nav>
            </div>
          </div>

          <div class="mt-12 flex space-x-6 text-xs text-white">
            <p> &copy; 2022 Kinoko </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
