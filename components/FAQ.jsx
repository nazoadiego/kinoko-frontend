import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const FAQ = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
          FAQ
        </h2>
        <p className="mt-6 mb-8 text-3xl font-extrabold leading-8 tracking-tight text-white sm:mb-4 sm:text-4xl">
          Frequently asked questions
        </p>
      </div>
      <div class="container mx-auto  max-w-4xl">
        <div class="m-8 overflow-hidden rounded">
          <div class="accordion-section group outline-none" tabindex="1">
            <div class="ease group relative flex cursor-pointer items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-4 pr-10 text-white transition duration-500">
              <p class="ease text-base transition duration-500 group-focus:text-white">
                Task, timeboxes, tags... I am having a hard time understanding
                the difference between the three.
              </p>
              <div class="ease absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2 inline-flex h-8 w-8 transform items-center justify-center text-2xl transition duration-500 group-focus:-rotate-180">
                <FiChevronDown />
              </div>
            </div>
            <div class="ease max-h-0 overflow-hidden bg-gray-800 px-4 duration-500 group-focus:max-h-screen">
              <p class="px-5 py-4 text-justify text-sm text-white">
                If you haven't done timeboxing before I would say that is
                completely normal. Here is an example: Task: Read Murakami -
                Duration: 1 hour - Tags: #Japanese #Reading. Timebox 1: 10 mins
                work. Timebox 2: 10 mins break. A task is the particular
                activity you are doing at the moment, something concrete. This
                activity can enter in one or several categories, which we call
                tags. You will do a task for a total duration of an hour, but it
                will be in intervals of 10 mins. 10...20...30...40... until you
                are done. In the end, that hour of work will be logged inside
                the tag or tags associated with it.
              </p>
            </div>
          </div>
          <div class="accordion-section group mt-1 outline-none" tabindex="1">
            <div class="ease group relative flex cursor-pointer items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-4 pr-10 text-white transition duration-500">
              <p class="ease text-base transition duration-500 group-focus:text-white">
                How long should my timeboxes be?
              </p>
              <div class="ease absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2 inline-flex h-8 w-8 transform items-center justify-center text-2xl transition duration-500 group-focus:-rotate-180">
                <FiChevronDown />
              </div>
            </div>
            <div class="ease max-h-0 overflow-hidden bg-gray-800 px-4 duration-500 group-focus:max-h-screen">
              <p class="px-5 py-4 text-justify text-sm text-white">
                This is completely personal preference, and it depends on the
                activity you are doing. Personally, I prefer 7 mins of work and
                3 minutes of break. Because I enjoy the constant switching
                between working and resting, I feel like it keeps me on my toes.
                Most people seem to like doing Pomodoro, which is 25 minutes of
                work and 5 resting. Whatever is the most comfortable to you and
                keeps you in the zone is fine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
