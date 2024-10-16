import { coachApi } from '@/apis/coach.api'
import { IconVector, IconVectorDown } from '@/common/icons'
import IconSreach from '@/common/icons/IconSreach'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { DatePickerWithPresets } from '../../calendar/calendar-date'
import CoachCard from './CoachCard'
import FilterSection from './FilterSection'

export default function ContentAllCoach() {
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined)
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined)

  const [departDate, setDepartDate] = useState<Date | undefined>(undefined)
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined)
  const [filteredDepartDate, setFilteredDepartDate] = useState<string | undefined>(undefined)
  const [filteredReturnDate, setFilteredReturnDate] = useState<string | undefined>(undefined)
  const formattedDepartDate: string | undefined = departDate ? format(departDate, 'dd-MM-yyyy') : undefined
  const formattedReturnDate: string | undefined = returnDate ? format(returnDate, 'dd-MM-yyyy') : undefined
  const handleApplyFilter = (min: number | undefined, max: number | undefined) => {
    setMinPrice(min)
    setMaxPrice(max)
  }
  const { data: getAll, refetch } = useQuery({
    queryKey: ['getAllCoach', 1, '', minPrice, maxPrice, formattedDepartDate, formattedReturnDate],
    queryFn: () => coachApi.getAll(1, 4, '', minPrice, maxPrice, formattedDepartDate, formattedReturnDate),
    enabled: false
  })
  const handleSearch = () => {
    setFilteredDepartDate(formattedDepartDate)
    setFilteredReturnDate(formattedReturnDate)
    if (!formattedDepartDate || !formattedReturnDate) {
      toast.error('Vui lòng nhập đầy đủ ngày khởi hành và ngày trở về.')
      return
    }

    refetch()
  }
  useEffect(() => {
    if (getAll && getAll.data && getAll.data.length === 0) {
      toast.error('Không có chuyến xe vào ngày này.')
    }
  }, [getAll])
  return (
    <div className='flex-none w-full p-4 ml-2'>
      <div className='flex items-center justify-center w-[70%] h-[10rem] overflow-hidden relative bg-gray-100 mx-auto'>
        <div className='flex items-center justify-center bg-white rounded-lg shadow-md shadow-slate-300 w-full h-[8rem]'>
          <div className='grid items-center grid-cols-10 gap-4'>
            <div className='relative w-full col-span-3 ml-4'>
              <label className='absolute z-10 p-1.5 text-gray-800 transform -translate-y-1/2 bg-white top-1 left-4 sm:text-sm'>
                From - To
              </label>
              <Input
                type='text'
                className='block text-lg w-full p-2 pl-5 mt-1 border border-gray-300 rounded-md shadow-sm h-[3.1rem] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md'
                value='Lahore - Karachi'
              />
              <div className='absolute right-3 top-4'>
                <IconVector />
              </div>
            </div>
            <div className='relative w-full col-span-2 ml-5'>
              <label className='absolute z-10 p-1.5 text-gray-800 transform -translate-y-1/2 bg-white top-1 left-4 sm:text-sm'>
                Trip
              </label>
              <Input
                type='text'
                className='block text-lg w-full pl-5 mt-1 border border-gray-300 rounded-md shadow-sm h-[3.1rem] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md'
                value='Return'
              />
              <div className='absolute right-3 top-6'>
                <IconVectorDown />
              </div>
            </div>
            <div className='relative z-10 w-full col-span-2 ml-5'>
              <label className='absolute z-10 p-1.5 text-gray-800 transform -translate-y-1/2 bg-white top-1 left-4 sm:text-sm '>
                Depart
              </label>
              <div className='text-lg w-full mt-1 border border-gray-300 rounded-md shadow-sm h-[3.1rem] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md'>
                <DatePickerWithPresets date={departDate} setDate={setDepartDate} />
              </div>
            </div>
            <div className='relative z-10 w-full col-span-2 ml-5'>
              <label className='absolute z-10 p-1.5 text-gray-800 transform -translate-y-1/2 bg-white top-1 left-4 sm:text-sm'>
                Return
              </label>
              <div className=' text-lg w-full mt-1 border border-gray-300 rounded-md shadow-sm h-[3.1rem] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md'>
                <DatePickerWithPresets date={returnDate} setDate={setReturnDate} />
              </div>
            </div>
            <div className='w-full col-span-1 ml-5'>
              <Button className='h-[3rem] mt-1 w-[3.8rem]' onClick={handleSearch}>
                <IconSreach />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex flex-row mx-[6rem]  gap-2 h-[120rem]`}>
        <FilterSection onApplyFilter={handleApplyFilter} />
        <div className='flex flex-col w-full gap-8 '>
          <CoachCard
            returnDate={filteredReturnDate}
            departDate={filteredDepartDate}
            minPrice={minPrice}
            maxPrice={maxPrice}
            isFavorite={false}
            onToggleFavorite={() => {
              throw new Error('Function not implemented.')
            }}
          />
        </div>
      </div>
    </div>
  )
}
