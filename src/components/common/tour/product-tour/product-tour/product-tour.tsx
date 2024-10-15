import { IconAdress, IconDrink } from '@/common/icons'
import { Button } from '@/components/ui/button'

import { tourApi } from '@/apis/tour.api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../star-rating'

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from '@/components/ui/pagination'
import { TourResponseType } from '@/shared/ts/interface/data.interface'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Space } from 'antd'
import Favorite from '../../favorite/favorite'

interface TourlCardProps {
  minPrice?: number
  maxPrice?: number
  rating?: number | undefined
  returnDate?: string
  departDate?: string
  debouncedSearchTour?: string
}
const ProductTour:  React.FC<TourlCardProps> = ({debouncedSearchTour,minPrice,maxPrice, rating,departDate,returnDate}) => {
  const [page, setPage] = useState(1)
  const [sortByPrice, setSortByPrice] = useState('')
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Sắp xếp theo giá',
      disabled: true,
    },
    {
      type: 'divider'
    },
    {
      key: '2',
      label: 'Từ cao đến thấp',
      onClick: () => setSortByPrice('desc')
    },
    {
      key: '3',
      label: 'Từ thấp đến cao',
      onClick: () => setSortByPrice('asc')
    },
    {
      key: '4',
      label: 'Không sắp xếp',
      onClick: () => setSortByPrice('')
    },
  ]
  const { data: getAll } = useQuery({
    queryKey: ['getAllTour', page, minPrice, maxPrice, debouncedSearchTour, sortByPrice, rating, departDate, returnDate],
    queryFn: () => tourApi.getAll(page, 4, minPrice, maxPrice, debouncedSearchTour, sortByPrice, rating, departDate, returnDate),
    enabled: !!debouncedSearchTour || !!sortByPrice || !! page || !!departDate || !! returnDate , 
  })
  console.log(getAll,"getAllDate");
  console.log(departDate, returnDate, "Dates before calling API");
  console.log(page, minPrice, maxPrice, debouncedSearchTour, sortByPrice, rating, departDate, returnDate, "Params in API");


  const totalPages = Math.ceil((getAll?.total ?? 0) / 4)
  const handlePage = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <div className='w-[70%]'>
      <div>
        <div className='flex justify-end my-6'>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Sắp xếp theo giá
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div>
          {
            (getAll?.data?.length ?? 0) > 0 ? (
              getAll?.data?.map((item: TourResponseType) => (
                <Link to={`/tour/${item.id}`} className='w-full'>
                  <div className='tour flex w-full h-[23rem] overflow-hidden mb-5 shadow-2xl rounded-2xl' key={item.id}>
                    <div className='relative bg-blue-300 w-[27%] flex-3'>
                      <img src={item.image} className='object-cover w-full h-full ' alt='tour' />
                      <p className='h-9 w-[5rem] bg-gray-200 rounded-lg flex justify-center items-center absolute top-3 right-2'>
                        9 images
                      </p>
                    </div>
                    <div className='p-3  w-[73%] '>
                      <div className='flex justify-between '>
                        <div className='mr-2  w-[85%]'>
                          <h2 className='mb-3 overflow-hidden text-3xl font-medium whitespace-pre-line text-ellipsis line-clamp-2'>
                            {item.description}
                          </h2>
                          <div className='flex mb-3'>
                            <IconAdress />
                            <p className='ml-2 overflow-hidden whitespace-pre-line text-ellipsis line-clamp-2'>
                              {item.name}
                            </p>
                          </div>
                          <div className='flex justify-between w-[75%] mb-3'>
                            <div className='flex'>
                              <StarRating rating={Number(item.rating)} />
                            </div>
                            <div className='flex'>
                              <IconDrink />
                              <p className='ml-3'>
                                <span className='font-semibold'>20+</span> Aminities
                              </p>
                            </div>
                          </div>

                          <div className='flex mb-6'>
                            <Button className='mr-3 text-black bg-white border border-primary hover:bg-slate-100'>
                              4.2
                            </Button>
                            <p className='flex items-center '>
                              <span className='text-lg font-medium'>Very Good</span> 371 reviews
                            </p>
                          </div>
                        </div>
                        <div>
                          <h2 className='text-2xl font-medium text-red-500'>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                          </h2>
                        </div>
                      </div>
                      <div className='border-b-2 border-zinc-400'></div>
                      <div className='w-full h-[25%] flex mb-10'>
                        <div className='flex flex-row items-center justify-between w-full '>
                          <Favorite id={item.id} />
                          <Button className='w-full text-white '>View Deals</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className='text-center'>Không có tour nào phù hợp.</p>
            )
          }
        </div>
      </div>
      <div className='mb-40 py-7'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                className='px-4 py-2 text-white rounded min-w-[100px] text-center'
                disabled={page === 1}
                onClick={() => handlePage(page - 1)}
              >
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                className={`px-4 py-2 text-white bg-gray-300 ${page == 1 ? 'bg-primary' : ''}`}
                onClick={() => handlePage(1)}
              >
                1
              </Button>
            </PaginationItem>
            {page > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {page > 1 && page < totalPages && (
              <PaginationItem>
                <Button
                  className={`px-4 py-2 text-white bg-gray-300 ${page > 1 ? 'bg-primary' : ''}`}
                  onClick={() => handlePage(page)}
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
            {totalPages > 1 && (
              <PaginationItem>
                <Button
                  className={`px-4 py-2 text-white bg-gray-300 ${page == totalPages ? 'bg-primary' : ''}`}
                  onClick={() => handlePage(totalPages)}
                >
                  {totalPages}
                </Button>
              </PaginationItem>
            )}
            <PaginationItem>
              <Button
                className='px-4 text-white py-2 min-w-[100px]'
                onClick={() => handlePage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
export default ProductTour
