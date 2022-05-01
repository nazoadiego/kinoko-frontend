import React from 'react'
export default function Example() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
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
          <div className="md:flex items-center justify-end md:flex-1">
            <a href="#" className="border-2 border-main-violet whitespace-nowrap px-10 py-2 rounded-md  text-base font-medium text-white hover:text-gray-300">
              Log in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-10 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-main-violet hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
  )
}
