// import hero from '../../assets/Hero.png'

export default function Example() {
  return (
    <div className="relative mb-10 overflow-hidden">
      {/*<div className='absolute w-[215px] h-[215px] l-[447px] t-[-131px] rounded-[50%] bg-[#BE96F9] backdrop-blur-2xl'></div>*/}
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block  text-white xl:inline">
                  Kinoko. Productivity.
                </span>{' '}
                <span className="block text-indigo-600 xl:inline">
                  For what you love.
                </span>
              </h1>
              <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Have the flexibility to work the way you do. A timeboxing app.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="btn btn-primary px-8 text-lg font-normal normal-case"
                  >
                    I want to start working!
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="flex justify-center lg:pr-20 lg:pt-20">
          <div class="orb-title hidden lg:block"></div>
        </div>
        {/* <img
          className="h-64 w-full rounded-l-lg object-fill sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={hero}
          alt=""
        /> */}
      </div>
    </div>
  )
}
