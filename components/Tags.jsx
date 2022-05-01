import React from 'react'
import tags from '../assets/Tags.png';
const Tags = () => {
  return (
    <><div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tags</h2>
          <p className="mt-2 mb-8 sm:mb-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Tags
          </p>
      </div>
      <aside className="relative overflow-hidden text-gray-300 lg:flex">
            <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
                  <div className="max-w-xl mx-auto lg:ml-0">
                      <p className="lg:block text-white text-base md:text-lg">
                          When you are doing a task like "Reading Murakami's 1Q84", you are logging your hours in three different tags: 
                          #Reading, #Japanese, and #Murakami. You have the flexibility to log your work in any way you want to, targetting 
                          the statistics that you consider most relevant.
                      </p>
                  </div>
            </div>

            <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
                  <img
                      src={tags}
                      alt="tags"
                      className="rounded-xl-lg absolute inset-0 object-cover w-full h-full" />
            </div>
        </aside></>
  )
}

export default Tags