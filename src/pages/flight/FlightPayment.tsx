import { bookingFlightApi } from '@/apis/booking-flight'
import { paymentApi } from '@/apis/payment.api'
import { Footer, Header } from '@/components/common'
import SectionInViewRight from '@/components/common/animation/SectionInViewRight'
import FlightBook from '@/components/common/flight/flight-payment/FlightBook'
import FlightForm from '@/components/common/flight/flight-payment/FlightForm'
import FlightInfo from '@/components/common/flight/flight-payment/FlightInfo'
import FlightOptions from '@/components/common/flight/flight-payment/FlightOptions'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function FlightPayment() {
  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(false)
  const { data: getBookingFlightDetails } = useQuery({
    queryKey: ['getBookedFlightDetails', id],
    queryFn: () => bookingFlightApi.getBookingDetail(id || '')
  })
  console.log('getBookingFlightDetails:', getBookingFlightDetails)

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
  return (
    <div className='w-full bg-gray-100'>
      <Header />
      <SectionInViewRight>
        <main className='pt-20 px-[5rem]'>
          <section>
            <h1 className='flex items-center justify-center p-5 text-3xl font-semibold'>Flight Payment</h1>
            <div className='flex items-center space-x-2'>
              <div className='items-start flex-1 w-full mt-2 mb-2'>
                <div className='flex items-center space-x-2 text-gray-800 text-md'>
                  <p className='text-red-400'>Turkey</p>
                  <ChevronRight className='w-4 h-4' />
                  <p className='text-red-400'>Istanbul</p>
                  <ChevronRight className='w-4 h-4' />
                  <p>{getBookingFlightDetails?.brand}</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              <div className='col-span-2 p-6 mt-6 bg-white rounded-lg shadow-md'>
                {getBookingFlightDetails && <FlightInfo data={getBookingFlightDetails} />}
              </div>
              <div className='col-span-1 p-6 mt-6 bg-white rounded-lg shadow-md'>
                {getBookingFlightDetails && (
                  <FlightBook data={getBookingFlightDetails} loading={loading} onClick={handleAddMomoBooking} />
                )}
              </div>
              <div className='col-span-2 p-6 mt-6 bg-white rounded-lg shadow-md'>
                <FlightOptions />
              </div>
              <div className='col-span-2 p-6 mt-6 bg-white rounded-lg shadow-md'>
                <FlightForm />
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
