import { flightApi } from '@/apis/flight.api'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from '@/components/ui/pagination'
import { FlightResponseType } from '@/shared/ts/interface/data.interface'
import { DownOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Dropdown, MenuProps, Space } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Favorite from './favorite'
import { useTranslation } from 'react-i18next';

interface FlightCardProps {
  minPrice?: number
  maxPrice?: number
  departDate?: string
  returnDate?: string
  brandFlight: string
}

const FlightCard: React.FC<FlightCardProps> = ({ minPrice, maxPrice, returnDate, departDate, brandFlight }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1)
  const [sortByPrice, setSortByPrice] = useState('')

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: t('Sortby'),
      disabled: true
    },
    {
      type: 'divider'
    },
    {
      key: '2',
      label: t('High'),
      onClick: () => setSortByPrice('desc')
    },
    {
      key: '3',
      label: t('Low'),
      onClick: () => setSortByPrice('asc')
    },
    {
      key: '4',
      label: t('sorting'),
      onClick: () => setSortByPrice('')
    }
  ]

  const { data: getAll } = useQuery({
    queryKey: ['getAllFlight', page, sortByPrice, brandFlight || '', minPrice, maxPrice, departDate, returnDate],
    queryFn: () => flightApi.getAll(page, 4, sortByPrice, brandFlight || '', minPrice, maxPrice, departDate, returnDate)
  })
  console.log(getAll?.min_price,"getAllgetAll");
  

  const totalPages = Math.ceil((getAll?.total ?? 0) / 4)
  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const formatCurrency = (value: string | undefined) => {
    if (!value) return 'N/A'
    const numberValue = parseFloat(value)
    return isNaN(numberValue)
      ? 'N/A'
      : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numberValue)
  }

  return (
    <>
      <div className='flex items-center justify-between mt-20'>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} className='ml-auto'>
            <Space>
            {t('Sortby')}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>

      {(getAll?.data?.length ?? 0) > 0 ? (
        getAll?.data.map((flight: FlightResponseType) => (
          <div key={flight.id} className='flex w-full h-[23rem] rounded-xl overflow-hidden'>
            <div className='w-[40%] bg-white relative'>
              <img src={flight.image} alt='Flight' className='object-cover rounded-md w-[90%] ml-8 mt-4 h-[90%]' />
              <p className='h-9 w-[5rem] bg-gray-200 rounded-lg flex justify-center items-center absolute top-6 right-2'>
                9 images
              </p>
            </div>
            <div className='w-[65%] flex-7 h-full pl-4 bg-[#FFFFFF] pr-4'>
              <div className='flex flex-col w-full h-full '>
                <div className='w-full h-[75%] border-b-2 border-gray-400 mr-10 '>
                  <div className='flex flex-row w-full h-full'>
                    <div className='w-[70%] flex flex-col gap-4'>
                      <div className='flex items-center gap-2 mt-8'>
                        <Button className='bg-primary border-primary hover:bg-green-300'>4.2</Button>
                        <p className='font-bold'>Very good</p>
                        <p>54 reviews</p>
                      </div>

                      <div className='mb-4'>
                        <div className='flex items-center mb-2'>
                          <div className='flex-grow'>
                            <div className='flex items-center justify-center gap-4 text-black'>
                              <div className='text-2xl '>
                                {flight.start_time} - {flight.end_time}
                              </div>
                              <div></div>
                              <div className='text-2xl'>Trip Time: {flight.trip_time}</div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                        <div className='flex w-[30rem]'>
                          <p className='text-left text-gray-500 mr-[4rem] ml-9'>
                            <div className='flex '>
                              <p className='flex mb-2 font-bold text-black'>From : </p> {flight.take_place}
                            </div>
                            <div className='flex'>
                              <p className='font-bold text-black'>To : </p> {flight.destination}
                            </div>
                          </p>
                        </div>
                        <div className='flex mt-8 ml-6 text-xl'>
                          <p className='mr-2 font-bold text-black '>Brand: </p> {flight.brand}
                        </div>
                      </div>
                    </div>
                    <div className='w-[30%] pt-4 text-right mr-5'>
                      <p className='text-xl text-[#FF8682] font-bold'>{formatCurrency(flight.price?.toString())}</p>
                      <p className='mt-40 font-medium text-right text-black-500'>Trip To: {flight.trip_to}</p>
                    </div>
                  </div>
                </div>
                <div className='w-full h-[25%] flex'>
                  <div className='flex flex-row items-center w-full gap-4'>
                    <Favorite id={flight.id} />
                    <Link to={`/vehicle/flight/${flight.id}`} className='w-full pr-6'>
                      <Button className='w-full mx-4 text-white'>{t('ViewDeals')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center'>{t('availableFlight')}</p>
      )}

      <div className='flex justify-around mt-6'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1} className='text-white'>
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                onClick={() => handlePageChange(1)}
                className={page === 1 ? 'bg-primary text-white' : 'bg-gray-400 text-black'} // Nút trang đầu
              >
                1
              </Button>
            </PaginationItem>
            {page > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {page > 1 && page < totalPages && (
              <PaginationItem>
                <Button
                  onClick={() => handlePageChange(page)}
                  className={page === page ? 'bg-primary text-white' : 'bg-gray-400 text-black'} // Nút trang hiện tại
                >
                  {page}
                </Button>
              </PaginationItem>
            )}
            {page < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {page < totalPages && (
              <PaginationItem>
                <Button
                  onClick={() => handlePageChange(totalPages)}
                  className={page === totalPages ? 'bg-primary text-white' : 'bg-gray-400 text-black'}
                >
                  {totalPages}
                </Button>
              </PaginationItem>
            )}
            <PaginationItem>
              <Button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} className='text-white'>
                Next
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}

export default FlightCard
