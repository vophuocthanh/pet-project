import { bookingCoachApi } from '@/apis/booking-coach'
import { bookingTourApi } from '@/apis/booking-tour.api'
import { paymentApi } from '@/apis/payment.api'
import { Footer, Header } from '@/components/common'
import SectionInViewRight from '@/components/common/animation/SectionInViewRight'
import CoachBook from '@/components/common/coach/coach-payment/CoachBook'
import CoachInfo from '@/components/common/coach/coach-payment/CoachInfo'
import PaymentOptions from '@/components/common/payment/payment-option'
import { BookingCoachResponse } from '@/shared/ts/interface/booking-coach.interface'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export default function CoachPayment() {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [paymentOption, setPaymentOption] = useState('full')

  const { data: getBookingCoachDeTails } = useQuery({
    queryKey: ['getBookedCoachDetails', id],
    queryFn: () => bookingCoachApi.getBookingDetail(id || '')
  })

  const mutationAddMomoBooking = useMutation({
    mutationFn: () => paymentApi.addMomo(id || '')
  })

  const handleAddMomoBooking = () => {
    setLoading(true)
    mutationAddMomoBooking.mutate(undefined, {
      onSuccess: (data) => {
        const paymentUrl = data.paymentUrl.paymentUrl
        window.location.href = paymentUrl
      },
      onError: (error) => {
        console.log(error)
      },
      onSettled: () => {
        setLoading(false)
      }
    })
  }
  const mutationAddBookingCashPayment = useMutation({
    mutationFn: () => bookingTourApi.addBookingCashPayment(id || '')
  })

  const handleAddBookingCashPayment = () => {
    setLoading(true)
    mutationAddBookingCashPayment.mutate(undefined, {
      onSuccess: () => {
        navigate('/')
        toast.success('Booking successfully')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      onSettled: () => {
        setLoading(false)
      }
    })
  }
  return (
    <div className='w-full bg-gray-100'>
      <Header />
      <SectionInViewRight>
        <main className='pt-20 px-[5rem]'>
          <section>
            <h1 className='flex items-center justify-center p-5 text-3xl font-semibold'>{t('CoachPayment')}</h1>
            <div className='flex items-center space-x-2'>
              <div className='items-start flex-1 w-full mt-2 mb-2'>
                <div className='flex items-center space-x-2 text-gray-800 text-md'>
                  <p className='text-red-400'>Turkey</p>
                  <ChevronRight className='w-4 h-4' />
                  <p className='text-red-400'>Istanbul</p>
                  <ChevronRight className='w-4 h-4' />
                  <p>{getBookingCoachDeTails?.location}</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              <div className='col-span-2 p-6 mt-6 bg-white rounded-lg shadow-md'>
                {getBookingCoachDeTails && <CoachInfo data={getBookingCoachDeTails as BookingCoachResponse} />}
              </div>
              <div className='col-span-1 p-6 mt-6 bg-white rounded-lg shadow-md'>
                {getBookingCoachDeTails && (
                  <CoachBook
                    loading={loading}
                    onClick={paymentOption === 'full' ? handleAddBookingCashPayment : handleAddMomoBooking}
                    data={getBookingCoachDeTails as BookingCoachResponse}
                  />
                )}
              </div>
              <div className='col-span-2 p-6 mt-6 bg-white rounded-lg shadow-md'>
                <PaymentOptions paymentOption={paymentOption} handleClickValueOption={setPaymentOption}/>
              </div>
            </div>
          </section>
        </main>
      </SectionInViewRight>
      <div className='mt-[15rem]'>
        <Footer />
      </div>
    </div>
  )
}
