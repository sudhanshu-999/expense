import React from 'react'
import { Overview } from '../_components/overview'
import { Income } from '../_components/totalIncome'

import { YourChartComponent } from '../_components/pie'
import { RecentSales } from '../_components/expenseList'


const page = () => {
  return (
    <>

      <div className="p-6 pl-10">
      <h1 className="font-bold text-3xl">Dashboard</h1>
      </div>
      <div className='w-full h-screen grid gap-[5vw] grid-col-6 '>
          <div className="col-start-1 col-span-4  p-5 mt-[8vw] pt-6 -ml-[10vw]">
          <Overview />
          </div>
          <div className="col-start-5 w-[30vw] col-span-2 row-span-2 items-center">
              <h2 className="p-5 font-semibold text-2xl">Expenses</h2>
              <div className="w-3/4">
              <YourChartComponent />
              <div className="p-8">
                <RecentSales />

              </div>
              </div>
          </div>
          <div className="flex gap-5 items-center col-start-1 col-span-4  -mt-[15vw]">
            <Income />
            <Income />
          </div>
      </div>

    </>
  )
}

export default page