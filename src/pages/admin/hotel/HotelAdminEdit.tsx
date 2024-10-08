import { hotelApi } from '@/apis/hotel.api'
import { hoteldetail1 } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeftToLine, CirclePlus } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function HotelAdminEdit() {
  const {id} = useParams()
  console.log(id,"id");
  const { data: getbyId } = useQuery({
    queryKey: ['getById', id],
    queryFn: () => hotelApi.getById(id)
  })
  
  
  const navigate = useNavigate()
  const [hotelData, setHotelData] = useState({
    id: '',
    hotel_names: '',
    location: '',
    place: '',
    createAt: new Date().toISOString(),
    updateAt: '',
    star_number: '',
    price: '',
    description: '',
    images: '',
    image_2: '',
    image_3: '',
    image_4: '',
    image_5: '',
    score_hotels: '',
    received_time: '',
    giveback_time: '',
    hotel_link:'',
    number_rating: 1,
    number_of_seats_remaining:'',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setHotelData({ ...hotelData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(hotelData)
  }

  const handleBack = () => {
    navigate('/admin/hotels')
  }

  return (
    <div className='w-full p-2'>
      <h1 className='mb-2 text-2xl font-bold'>EDIT HOTEL {id}</h1>
      <Button className='flex mb-4 mr-auto text-white' onClick={handleBack}>
        <ArrowLeftToLine/>
      </Button>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='p-4 bg-white rounded-lg shadow'>
          <h2 className='text-xl font-bold '>Hotel Image</h2>
          <div className='grid grid-cols-4 gap-4 mb-4'>
            <div className='w-full col-span-1 p-2 mt-6 bg-white rounded-lg shadow-md h-[20rem]'>
              <img src={hoteldetail1} alt='hotel' className='w-full h-full' />
            </div>
            <div className='w-full col-span-1 p-2 mt-6 bg-white rounded-lg shadow-md h-[20rem]'>
              <img src={hoteldetail1} alt='hotel' className='w-full h-full' />
            </div>
            <div className='w-full col-span-1 p-2 mt-6 bg-white rounded-lg shadow-md h-[20rem]'>
              <div className='flex items-center justify-center h-full cursor-pointer'>
                <div>
                  <div className='flex justify-center mb-2'>
                    <CirclePlus />
                  </div>
                  <p className='text-blue-600'>
                    Click to upload<span className='text-black'>or drag and drop</span>{' '}
                  </p>
                  <p>SVG, PNG, or PDF 800 x 400 px</p>
                </div>
              </div>
            </div>
            <div className='w-full col-span-1 p-2 mt-6 bg-white rounded-lg shadow-md h-[20rem]'>
              <div className='flex items-center justify-center h-full cursor-pointer'>
                <div>
                  <div className='flex justify-center mb-2'>
                    <CirclePlus />
                  </div>
                  <p className='text-blue-600'>
                    Click to upload<span className='text-black'>or drag and drop</span>{' '}
                  </p>
                  <p>SVG, PNG, or PDF 800 x 400 px</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='p-4 bg-white rounded-lg shadow'>
          <h2 className='mb-4 text-xl font-bold'>Hotel Information</h2>
          <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
            <Input
              type='text'
              name='id'
              placeholder='ID'
              value={id}
              onChange={handleChange}
              className='col-span-2 p-2 border rounded '
            />
            <Input
              type='text'
              name='name'
              placeholder='Hotel Name'
              value={getbyId?.hotel_names}
              onChange={handleChange}
              className='col-span-2 p-2 border rounded'
            />
            <Input
              type='text'
              name='location'
              placeholder='Location'
              value={getbyId?.location}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />
            <Input
              type='text'
              name='place'
              placeholder='Place'
              value={getbyId?.place}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />
            <Input
              type='text'
              name='price'
              placeholder='Price'
              value={getbyId?.price}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />
            <Input
              type='text'
              name='score_hotels'
              placeholder='Score Hotels'
              value={getbyId?.score_hotels}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />
            <Input
              type='text'
              name='received_time'
              placeholder='Received Time'
              value={getbyId?.received_time}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />
            <Input
              type='text'
              name='receigiveback_timeved_time'
              placeholder='Giveback time'
              value={getbyId?.giveback_time}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />
            <Input
              type='number'
              name='rating'
              placeholder='Rating'
              value={getbyId?.number_rating}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
              min='1'
              max='5'
              step='0.5'
            />
            <Input
              type='text'
              name='star_number'
              placeholder='Star Number'
              value={getbyId?.star_number}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />
            <Input
              type='text'
              name='hotel_link'
              placeholder='Hotel Link'
              value={getbyId?.hotel_link}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />      
            <Input
              type='text'
              name='number_of_seats_remaining'
              placeholder='Number Of Seats Remaining'
              value={getbyId?.number_of_seats_remaining}
              onChange={handleChange}
              className='col-span-1 p-2 border rounded'
            />          
            <textarea
              name='description'
              placeholder='Description'
              value={getbyId?.description}
              onChange={handleChange}
              className='col-span-2 p-2 border rounded h-[10rem]'
            ></textarea>
          </div>
        </div>

        <div className='flex justify-center text-white'>
          <Button type='button' className='w-[20rem] flex mx-auto' onClick={handleBack}>
            Cancel
          </Button>
          <Button type='submit' className='w-[20rem] flex mx-auto'>
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}
