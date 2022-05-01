import React from 'react'
import overview from '../assets/Overview.png';
import labels from '../assets/Labels.png';
const TrackingTime = () => {
  return (
    <><div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Time</h2>
          <p className="mt-2 mb-8 sm:mb-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Tracking your time
          </p>
      </div>
      <aside className="relative overflow-hidden text-gray-300 lg:flex">
            <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
                  <div className="max-w-xl mx-auto lg:ml-0">
                      <p className="lg:block text-white text-base md:text-lg">
                          Numbers can be a huge motivator for working everyday, because it's something that is very tangible.
                          You can clearly exactly how much you are working, if you are putting more hours in than usually or maybe
                          if you are slacking off and need to take it more seriously. They provide for a way of correcting our work habits
                          or just to alleviate our doubts of whether we are making progress or not.
                      </p>
                  </div>
            </div>

        <img src={overview} alt="overview chart" className="w-auto" />
        </aside>

        <aside className="relative overflow-hidden text-gray-300 lg:flex">
            <img src={labels} alt="labels" className="w-auto" />
            <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
                  <div className="max-w-xl mx-auto lg:ml-0">
                      <p className="lg:block text-white text-base md:text-lg">
                          Tracking itself takes time, and for that reason Kinoko aims to make things easier and do 
                          it for you. So that you can focus just on working. And it does so by using a tag system for all of your different tasks.
                      </p>
                  </div>
            </div>
        </aside>
        </>
  )
}

export default TrackingTime