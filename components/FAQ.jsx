import React from 'react'
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  return (
     <><div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-6 mb-8 sm:mb-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
          </p>
      </div>
     <div class="container max-w-4xl  mx-auto">
          <div class="m-8 rounded overflow-hidden">
              <div class="group outline-none accordion-section" tabindex="1">
                  <div class="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between px-6 py-4 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                      <p class="group-focus:text-white text-base transition ease duration-500">
                          Task, timeboxes, tags... I am having a hard time understanding the difference between the three.
                      </p>
                      <div class="h-8 w-8 text-2xl items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                          <FiChevronDown/>
                      </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
                      <p class="px-5 py-4 text-sm text-white text-justify">
                        If you haven't done timeboxing before I would say that is completely normal. 
                        Here is an example:
                        Task: Read Murakami - Duration: 1 hour - Tags: #Japanese #Reading. Timebox 1: 10 mins work. Timebox 2: 10 mins break.
                        A task is the particular activity you are doing at the moment, something concrete. This activity can enter in one or several categories, which we call tags. You will do a task for a total duration of an hour, but it will be in intervals of 10 mins. 10...20...30...40... until you are done.
                        In the end, that hour of work will be logged inside the tag or tags associated with it.
                      </p>
                  </div>
              </div>
              <div class="group outline-none mt-1 accordion-section" tabindex="1">
                  <div class="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between px-6 py-4 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                      <p class="group-focus:text-white text-base transition ease duration-500">
                          How long should my timeboxes be?
                      </p>
                      <div class="h-8 w-8 text-2xl items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                          <FiChevronDown/>
                      </div>
                  </div>
                  <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
                      <p class="px-5 py-4 text-sm text-white text-justify">
                        This is completely personal preference, and it depends on the activity you are doing. Personally, I prefer 7 mins of work and 3 minutes of break. Because I enjoy the constant switching between working and resting, I feel like it keeps me on my toes.
                         Most people seem to like doing Pomodoro, which is 25 minutes of work and 5 resting. Whatever is the most comfortable to you and keeps you in the zone is fine.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default FAQ