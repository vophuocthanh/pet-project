import { bookingCoachApi } from '@/apis/booking-coach'
import { coachApi } from '@/apis/coach.api'
import { coachdetail1, coachdetail2, coachdetail3 } from '@/assets/images'
import { Footer, Header } from '@/components/common'
import ShareButtons from '@/components/common/share/share-link'
import { Button } from '@/components/ui/button'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import {
  Bus,
  BusFront,
  ChevronRight,
  HeartIcon,
  MapPin,
  MoveLeft,
  MoveRight,
  RockingChair,
  Timer,
  UtensilsCrossed,
  Wifi
} from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'swiper/css'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function CoachDetail() {
  const { t } = useTranslation()
  const [loadingBooking, setLoadingBooking] = useState(false)
  const [liked, setLiked] = useState(false)
  const [roadVehicleQuantity, setRoadVehicleQuantity] = useState(1)

  const handleClick = () => {
    setLiked(!liked)
  }

  const slides = [
    { content: coachdetail1 },
    { content: coachdetail2 },
    { content: coachdetail3 },
    { content: coachdetail1 },
    { content: coachdetail2 },
    { content: coachdetail3 },
    { content: coachdetail1 },
    { content: coachdetail2 },
    { content: coachdetail3 },
    { content: coachdetail1 },
    { content: coachdetail2 },
    { content: coachdetail3 },
    { content: coachdetail1 },
    { content: coachdetail2 },
    { content: coachdetail3 },
    { content: coachdetail1 },
    { content: coachdetail2 },
    { content: coachdetail3 }
  ]

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data: getbyId } = useQuery({
    queryKey: ['getById', id],
    queryFn: () => coachApi.getById(id || '')
  })

  const price = getbyId?.price
  const formattedPrice = price ? price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : '0 VND'

  const handleBookingCoach = () => {
    const isLoggedIn = !!localStorage.getItem('access_token')

    if (!isLoggedIn) {
      toast.error('Bạn cần đăng nhập để đặt vé')
      navigate('/login')
      return
    }
    setLoadingBooking(true)
    mutationCoachBooking.mutate(undefined, {
      onSuccess: (data) => {
        const bookingId = data.id
        toast.success('Booking coach successfully')
        navigate(`/vehicle/coach/all-coach/coach-payment/${bookingId}`)
      },
      onError: (error) => {
        const axiosError = error as AxiosError
        const errorMessage = (axiosError.response?.data as { message: string }).message
        toast.error(errorMessage)
      },
      onSettled: () => {
        setLoadingBooking(false)
      }
    })
  }

  const mutationCoachBooking = useMutation({
    mutationFn: () => bookingCoachApi.addBookingCoach(id || '', roadVehicleQuantity)
  })

  const handleIncreaseQuantity = () => {
    setRoadVehicleQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (roadVehicleQuantity > 1) {
      setRoadVehicleQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const coachUrl = `https://travel-golobe.vercel.app/hotel/${id}`
  const coachTitle = 'Chia sẻ chuyến xe thú vị này!'

  return (
    <>
      <Header />
      <div className="container mx-auto pt-28 pb-72">
        <section>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/vehicle/coach" className="text-red-400">
              {t('Coaches')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/vehicle/coach/all-coach" className="text-red-400">
              {t('CoachAll')}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <p>{getbyId?.brand}</p>
          </div>
          <div className="p-4 lg:flex-col">
            <div className="flex justify-between w-full">
              <div>
                <p className="text-lg font-bold lg:text-2xl">{getbyId?.brand}</p>
                <div className="flex items-center mt-1 space-x-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <p>{getbyId?.destination}</p>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <p className="flex items-center justify-center w-10 h-8 text-xs font-medium border rounded border-primary">
                    4.2
                  </p>
                  <p className="text-xs font-normal">
                    <span className="font-bold">{t('Verygood')} </span>
                    54 {t('reviews')}
                  </p>
                </div>
              </div>
              <p className="text-lg lg:text-[32px] text-right font-bold text-[#FF8682]">{formattedPrice}</p>
            </div>
            <div className="flex w-full space-y-2">
              <div className="lg:space-x-2 lg:ml-auto lg:flex ">
                <div className="flex w-full mt-2 mb-2">
                  <p className="flex items-center px-2 py-1 mr-2 text-black border rounded text-md lg:text-lg border-primary w-[12rem]">
                    {t('Availab')} {getbyId?.number_of_seats_remaining} {t('Seat')}
                  </p>
                  <div className="flex items-center space-x-4 bg-white border rounded border-primary ">
                    <Button
                      onClick={handleDecreaseQuantity}
                      disabled={getbyId?.number_of_seats_remaining === 0}
                      className="w-10 px-2 py-1 text-lg border rounded"
                    >
                      -
                    </Button>
                    <p className="w-5 text-lg font-semibold text-center">{roadVehicleQuantity}</p>
                    <Button
                      onClick={handleIncreaseQuantity}
                      disabled={
                        getbyId?.number_of_seats_remaining === 0 ||
                        getbyId?.number_of_seats_remaining === roadVehicleQuantity
                      }
                      className="w-10 px-2 py-1 text-lg border rounded"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full gap-2 ml-auto">
                  <p
                    className="flex items-center justify-center w-10 h-10 text-xs font-medium transition-colors border rounded cursor-pointer border-primary"
                    onClick={handleClick}
                  >
                    <HeartIcon className={`w-4 h-4 ${liked ? 'text-red-600' : ''}`} />
                  </p>
                  <ShareButtons url={coachUrl} title={coachTitle} />
                  <Button
                    className="flex w-[8rem]"
                    loading={loadingBooking}
                    onClick={handleBookingCoach}
                    disabled={getbyId?.number_of_seats_remaining === 0}
                  >
                    {t('BookCoach')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <img src={getbyId?.image} alt="Coach Banner" className="object-cover w-full h-full rounded-xl" />
        </section>

        <section className="mb-8">
          <div className="mb-10">
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
                <SwiperSlide key={index} className="flex justify-center">
                  <img
                    src={slide.content}
                    alt={`Slide ${index + 1}`}
                    className="rounded-lg shadow-md w-[120px] h-[90px] object-fill"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="h-auto p-6 mb-10 space-y-4 rounded-lg bg-primary">
            <p className="text-2xl font-bold ">{t('Safety')}</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Timer className="w-5 h-5 text-white" />
                <p className="text-sm text-gray-200">{t('cleaned')}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Timer className="w-5 h-5 text-white" />
                <p className="text-sm text-gray-200">{t('fitted')}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Timer className="w-5 h-5 text-white" />
                <p className="text-sm text-gray-200">{t('complete')}</p>
              </div>
            </div>
          </div>

          <div className="p-6 mb-10 bg-white border shadow-md rounded-xl">
            <div className="flex justify-between">
              <p className="font-bold text-md lg:text-xl">
                {getbyId?.start_time}{' '}
                {getbyId?.start_day ? new Date(getbyId.start_day).toLocaleDateString('vi-VN') : 'N/A'}
              </p>
              <p className="font-medium text-md lg:text-lg">{getbyId?.brand}</p>
            </div>

            <div className="gap-4 ">
              <div className="justify-between mt-5 lg:flex">
                <div className="flex items-center px-8 py-4 space-x-6 border rounded-lg w-[20rem]">
                  <img src={getbyId?.image} alt="" className="w-16" />
                  <div>
                    <p className="font-bold text-md lg:text-2xl">{getbyId?.brand}</p>
                    <p className="text-sm font-medium">{getbyId?.number_of_seat}</p>
                  </div>
                </div>
                <div className="flex items-center mt-2 lg:p-6">
                  <div className="flex items-center space-x-6">
                    <BusFront className="w-6 h-6" />
                    <span className="h-6 border-l border-gray-400"></span>
                    <Wifi className="w-6 h-6" />
                    <span className="h-6 border-l border-gray-400"></span>
                    <Timer className="w-6 h-6" />
                    <span className="h-6 border-l border-gray-400"></span>
                    <UtensilsCrossed className="w-6 h-6" />
                    <span className="h-6 border-l border-gray-400"></span>
                    <RockingChair className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="items-center justify-center mt-5 lg:space-x-20 lg:flex">
                <div className="flex flex-col items-center lg:block">
                  <div className="flex items-center space-x-4">
                    <p className="text-2xl font-semibold">{getbyId?.start_time}</p>
                    <p className="text-base font-medium">Newark(EWR)</p>
                  </div>
                  <p>{getbyId?.take_place}</p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <MoveLeft className="w-11 h-11" style={{ strokeWidth: 0.5 }} />
                  <Bus className="w-6 h-6" />
                  <MoveRight className="w-11 h-11" style={{ strokeWidth: 0.5 }} />
                </div>

                <div className="flex flex-col items-center lg:block">
                  <div className="flex items-center space-x-4">
                    <p className="text-2xl font-semibold">{getbyId?.end_time}</p>
                    <p className="text-base font-medium">Newark(EWR)</p>
                  </div>
                  <p>{getbyId?.destination}</p>
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
