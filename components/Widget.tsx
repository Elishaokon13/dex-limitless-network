import { LiFiWidget } from '@lifi/widget';
import { WidgetEvents } from './WidgetEvents';
import Navbar from './Navbar'
import Chart from './Chart'
import Info from './Info'

export const Widget = () => {
  return (
    <>

      <div className="bg-[#00081A] py-24 sm:py-24">
        <WidgetEvents />
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold leading-7 text-[#2196F3]">Limitless Network Dex/Aggregator</h2>
          <p className="mt-2 text-base font-bold tracking-tight text-white sm:text-base">
            Get the best prices in DeFi right here with Limitless
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl mb-10 grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className='flex'>
              <LiFiWidget
                config={{
                  variant: 'default',
                  containerStyle: {
                    color: 'blue',
                    borderTop: '10px',
                    border: `1px solid rgb(234, 234, 234)`,
                    borderRadius: '16px',
                  },
                }}
                integrator="nextjs-example"
              />
            </div>
            <div className='flex'>
              <Chart />
            </div>
          </dl>
          <Info />
        </div>

      </div>
    </>
  );
};
