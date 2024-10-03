// import { commentFlightApi } from '@/apis/comment-flght.api'
import { flightApi } from '@/apis/flight.api'
import { banner_flight, flightdetail1, flightdetail2, flightdetail3, ticket_economy } from '@/assets/images'
import { IconFlight } from '@/common/icons'
import { Footer, Header } from '@/components/common'
import FlightTicketSelection from '@/components/common/flight/all-flight/FlightTicketSelection'
import Favorite from '@/components/common/tour/favorite/favorite'
import { Checkbox } from '@radix-ui/react-checkbox'
import { useQuery } from '@tanstack/react-query'
import {
  ChevronRight,
  MapPin,
  MoveLeft,
  MoveRight,
  Plane,
  RockingChair,
  Timer,
  UtensilsCrossed,
  Wifi
} from 'lucide-react'

import { useParams } from 'react-router-dom'
import 'swiper/css'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function FlightDetail() {
  const slides = [
    { content: flightdetail1 },
    { content: flightdetail2 },
    { content: flightdetail3 },
    { content: flightdetail1 },
    { content: flightdetail2 },
    { content: flightdetail3 },
    { content: flightdetail1 },
    { content: flightdetail2 },
    { content: flightdetail3 },
    { content: flightdetail1 },
    { content: flightdetail2 },
    { content: flightdetail3 },
    { content: flightdetail1 },
    { content: flightdetail2 },
    { content: flightdetail3 },
    { content: flightdetail1 },
    { content: flightdetail2 },
    { content: flightdetail3 }
  ]

  const { id } = useParams<{ id: string }>()

  const { data: getbyId } = useQuery({
    queryKey: ['getById', id],
    queryFn: () => flightApi.getById(id || '')
  })
  // const { data: getCommentFlight } = useQuery({
  //   queryKey: ['getComments', id],
  //   queryFn: () => commentFlightApi.getComments(id || '')
  // })

  const price = getbyId?.price
  const formattedPrice = price ? price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '0 VND'

  return (
    <>
      <Header />
      <div className='container mx-auto pt-28 pb-72'>
        <section>
          <div className='flex items-center space-x-2 text-sm text-gray-600'>
            <p>Today</p>
            <ChevronRight className='w-4 h-4' />
            <p>Istanbul</p>
            <ChevronRight className='w-4 h-4' />
            <p>{getbyId?.brand}</p>
          </div>
          <div className='flex justify-between p-4'>
            <div>
              <p className='text-2xl font-bold'>{getbyId?.brand}</p>
              <div className='flex items-center mt-1 space-x-2 text-sm'>
                <MapPin className='w-4 h-4' />
                <p></p>
              </div>
              <div className='flex items-center mt-2 space-x-2'>
                <p className='flex items-center justify-center w-10 h-8 text-xs font-medium border rounded border-primary'>
                  4.2
                </p>
                <p className='text-xs font-normal'>
                  <span className='font-bold'>Very Good </span>
                  54 reviews
                </p>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-[32px] font-bold text-[#FF8682]'>{formattedPrice} </p>
              <div className='flex space-x-2'>
                <Favorite id={getbyId?.id} />
              </div>
            </div>
          </div>
        </section>

        <section className='mb-8'>
          <img src={banner_flight} alt='Flight Banner' className='object-cover w-full h-80 rounded-xl' />
          <img
            src='https://cdn.flightsim.to/images/26/vietnam-airlines-vn-a871--boeing-787-9--8k-30161-1698496977-UMCD3.jpg?width=1400'
            alt='Flight Banner'
            className='object-cover w-full h-80 rounded-xl'
          />
        </section>

        <section className='mb-8'>
          <div className='flex justify-between p-4'>
            <p className='text-2xl font-bold text-gray-800'>Basic Economy Features</p>
            <div className='flex space-x-6'>
              <label className='flex items-center space-x-2'>
                <Checkbox />
                <span className='text-lg font-medium'>Economy</span>
              </label>
              <label className='flex items-center space-x-2'>
                <Checkbox />
                <span className='text-lg font-medium'>First Class</span>
              </label>
              <label className='flex items-center space-x-2'>
                <Checkbox />
                <span className='text-lg font-medium'>Business Class</span>
              </label>
            </div>
          </div>

          <div className='mb-10'>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={4}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                1024: {
                  slidesPerView: 9,
                  spaceBetween: 20
                }
              }}
              autoplay={{
                delay: 3000
              }}
              loop={true}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className='flex justify-center'>
                  <img
                    src={slide.content}
                    alt={`Slide ${index + 1}`}
                    className='rounded-lg shadow-md w-[120px] h-[120px]'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='h-auto p-6 mb-10 space-y-4 rounded-lg bg-primary'>
            <p className='text-2xl font-bold '>Emirates Airlines Policies</p>
            <div className='flex flex-col space-y-4'>
              <div className='flex items-center space-x-3'>
                <Timer className='w-5 h-5 text-white' />
                <p className='text-sm text-gray-200'>Pre-flight cleaning, installation of cabin HEPA filters.</p>
              </div>
              <div className='flex items-center space-x-3'>
                <Timer className='w-5 h-5 text-white' />
                <p className='text-sm text-gray-200'>Pre-flight health screening questions.</p>
              </div>
            </div>
          </div>

          <FlightTicketSelection tickets={getbyId?.Ticket || []} ticketEconomy={ticket_economy} />

          <div className='p-6 mb-10 bg-white border shadow-md rounded-xl'>
            <div className='flex justify-between'>
              <p className='text-xl font-bold'>Return Wed, Dec 8</p>
              <p className='text-lg font-medium'>{getbyId?.brand}</p>
            </div>

            <div className='pt-6'>
              <div className='flex justify-between'>
                <div className='flex items-center px-8 py-4 space-x-6 border rounded-lg'>
                  <img src={getbyId?.images} alt='' className='w-16' />
                  <div>
                    <p className='text-2xl font-bold'>{getbyId?.brand}</p>
                    <p className='text-sm font-medium'>Airbus A320</p>
                  </div>
                </div>
                <div className='flex items-center p-6'>
                  <div className='flex items-center space-x-6'>
                    <Plane className='w-6 h-6' />
                    <span className='h-6 border-l border-gray-400'></span>
                    <Wifi className='w-6 h-6' />
                    <span className='h-6 border-l border-gray-400'></span>
                    <Timer className='w-6 h-6' />
                    <span className='h-6 border-l border-gray-400'></span>
                    <UtensilsCrossed className='w-6 h-6' />
                    <span className='h-6 border-l border-gray-400'></span>
                    <RockingChair className='w-6 h-6' />
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center space-x-20'>
                <div className='flex items-center space-x-4'>
                  <p className='text-2xl font-semibold'>{getbyId?.start_time}</p>
                  <p className='text-base font-medium'>Newark(EWR)</p>
                </div>

                <div className='flex items-center space-x-4'>
                  <MoveLeft className='w-11 h-11' style={{ strokeWidth: 0.5 }} />
                  <IconFlight />
                  <MoveRight className='w-11 h-11' style={{ strokeWidth: 0.5 }} />
                </div>

                <div className='flex items-center space-x-4'>
                  <p className='text-2xl font-semibold'>{getbyId?.end_time}</p>
                  <p className='text-base font-medium'>Newark(EWR)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
