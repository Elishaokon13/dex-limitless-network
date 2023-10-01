import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import Info from './components/Info'
import Dex from './components/Dex'

export default function Example() {
  return (
    <>
    <Navbar />
    <div className="bg-[#00081A] py-24 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold leading-7 text-[#2196F3]">Limitless Network Dex/Aggregator</h2>
          <p className="mt-2 text-base font-bold tracking-tight text-white sm:text-base">
          Get the best prices in DeFi right here with Limitless
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl mb-10 grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className='pr-10 flex'>
            {/* <Dex/> */}
            </div>
            <Chart/>
          </dl>
          <Info/>
        </div>
      </div>
    </div>
    </>
  )
}
