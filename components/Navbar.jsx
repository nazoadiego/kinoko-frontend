import React from 'react'
export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="items-center justify-end md:flex md:flex-1">
          <a
            href="#"
            className="whitespace-nowrap rounded-md border-2 border-main-violet px-10 py-2  text-base font-medium text-white hover:text-gray-300"
          >
            Log in
          </a>
          <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-main-violet px-10 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  )
}
