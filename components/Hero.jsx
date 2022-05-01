
import hero from '../assets/Hero.png';

export default function Example() {
  return (
    <div className="relative overflow-hidden mb-10">
    {/*<div className='absolute w-[215px] h-[215px] l-[447px] t-[-131px] rounded-[50%] bg-[#BE96F9] backdrop-blur-2xl'></div>*/}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block  text-white xl:inline">Kinoko. Productivity.</span>{' '}
                <span className="block text-indigo-600 xl:inline">For what you love.</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Have the flexibility to work the way you do.
                A timeboxing app.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main-violet hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Show me how it works!
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-64 rounded-l-lg w-full object-fill sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={hero}
          alt=""
        />
      </div>
    </div>
  )
}

