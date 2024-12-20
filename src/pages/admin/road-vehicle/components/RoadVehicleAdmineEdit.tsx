import { coachApi } from '@/apis/coach.api'
import { coachdetail1, coachdetail2 } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ArrowLeftToLine, CirclePlus } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UpdateCoachSchema } from '@/shared/utils/coach.schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


export default function RoadVehicleAdminEdit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: getbyId } = useQuery({
    queryKey: ['getById', id],
    queryFn: () => coachApi.getById(id)
  })

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof UpdateCoachSchema>>({
    resolver: zodResolver(UpdateCoachSchema),
    defaultValues: {
      brand: '',
      number_of_seat:'',
      start_time: '',
      start_day: '',
      end_time: '',
      end_day: '',
      trip_time: '',
      take_place: '',
      destination: '',
      location: '',
      price: 0,
      image: '',
      number_of_seats_remaining: 0,
    }
  })
  const { reset, handleSubmit, register } = form

  useEffect(() => {
    if (getbyId){
      reset({
        brand: getbyId.brand,
        price: getbyId.price,
        number_of_seat: getbyId.number_of_seat,
        start_time: getbyId.start_time,
        start_day: getbyId.start_day,
        end_time: getbyId.end_time,
        end_day: getbyId.end_day,
        trip_time: getbyId.trip_time,
        take_place: getbyId.take_place,
        destination: getbyId.destination,
        location: getbyId.location,
        number_of_seats_remaining: getbyId.number_of_seats_remaining,
      })
    }
  }, [getbyId, reset])

  const queryClient = useQueryClient()

  const mutationUpdateVehicle = useMutation({
    mutationFn: (data: z.infer<typeof UpdateCoachSchema>) => {
      if (!id) {
        throw new Error('Vehicle ID is required');
      }      
      const formattedData = {
        ...data,
        price: Number(data.price),
        number_of_seats_remaining: Number(data.number_of_seats_remaining)
      };
  
      return coachApi.putCoach(id, formattedData);
    }
  })

  const onSubmit = (data: z.infer<typeof UpdateCoachSchema>) => {
    setLoading(true)
    const formattedData = {
      ...data,
      price: Number(data.price),
      number_of_seats_remaining: Number(data.number_of_seats_remaining),
    }

    mutationUpdateVehicle.mutate(formattedData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getUpdateTourAll'] })
        toast.success('Cập nhật chuyến xe thành công')
        navigate('/admin/road-vehicle')
      },
      onError: () => {
        toast.error('Cập nhật chuyến xe thất bại')
      },
      onSettled: () => {
        setLoading(false)
      }
    })
  }
  
  const handleBack = () => {
    navigate('/admin/road-vehicle')
  }

  return (
    <div className='w-full p-2'>
      <h1 className='mb-2 text-2xl font-bold'>Sửa thông tin chuyến xe {id}</h1>
      <Button className='flex mb-4 mr-auto text-white' onClick={handleBack}>
        <ArrowLeftToLine />
      </Button>
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='p-4 bg-white rounded-lg shadow'>
          <h2 className='text-xl font-bold'>Hình ảnh chuyến xe</h2>
          <div className='grid grid-cols-4 gap-4 mb-4'>
            <div className='w-full col-span-1 p-2 mt-6 bg-white rounded-lg shadow-md h-[20rem]'>
              <img src={coachdetail1} alt='vehicle' className='w-full h-full' />
            </div>
            <div className='w-full col-span-1 p-2 mt-6 bg-white rounded-lg shadow-md h-[20rem]'>
              <img src={coachdetail2} alt='vehicle' className='w-full h-full' />
            </div>
            <div className='w-full col-span-1 p-2 mt-6 bg-white rounded-lg shadow-md h-[20rem]'>
              <div className='flex items-center justify-center h-full cursor-pointer'>
                <div>
                  <div className='flex justify-center mb-2'>
                    <CirclePlus />
                  </div>
                  <p className='text-blue-600'>
                    Click to upload <span className='text-black'>or drag and drop</span>{' '}
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
                    Click to upload <span className='text-black'>or drag and drop</span>{' '}
                  </p>
                  <p>SVG, PNG, or PDF 800 x 400 px</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='p-4 bg-white rounded-lg shadow'>
          <h2 className='mb-4 text-xl font-bold'>Thông tin chuyến xe</h2>
          <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
            <div>
              <p>Tên nhà xe</p>
              <Input
                {...register('brand')}
                placeholder='Tên nhà xe'
                className='col-span-2 p-2 border rounded'
              />
            </div>
            <div>
            <p>Số chổ ngồi</p>
            <Input
              {...register('number_of_seat')}
              placeholder='Số chổ ngồi'
              className='col-span-2 p-2 border rounded'
            />
            </div>
            <div>
            <p>Thời gian khởi hành</p>
            <Input
              {...register('start_time')}
              placeholder='Thời gian khởi hành'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Ngày khởi hành</p>
            <Input
              {...register('start_day')}
              placeholder='Ngày khởi hành'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Thời gian kết thúc</p>
            <Input
              {...register('end_time')}
              placeholder='Thời gian kết thúc'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Ngày kết thúc</p>
              <Input
                {...register('end_day')}
                placeholder='Ngày kết thúc'
                className='col-span-1 p-2 border rounded'
              />
            </div>
            <div>
            <p>Thời gian chuyến đi</p>
            <Input
              {...register('trip_time')}
              placeholder='Thời gian chuyến xe'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Điểm đi</p>
            <Input
              {...register('take_place')}
              placeholder='Điểm đi'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Điểm đến</p>
            <Input
              {...register('destination')}
              placeholder='Điểm đến'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Vị trí</p>
            <Input
              {...register('location')}
              placeholder='Vị trí'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Số chổ còn lại</p>
            <Input
              {...register('number_of_seats_remaining')}
              type='number'
              placeholder='Số chổ còn lại'
              className='col-span-1 p-2 border rounded'
            />
            </div>
            <div>
            <p>Giá vé</p>
            <Input
              {...register('price')}
              type='number'
              placeholder='Giá vé'
              className='col-span-1 p-2 border rounded'
            />
            </div>
          </div>
        </div>
      </form>
      <div className='flex justify-center mt-5 space-x-[30%]'>
          <Button type='button' className='w-[20rem]' onClick={handleBack}>
            Hủy bỏ 
          </Button>
          <Button type='submit' className='w-[20rem]' disabled={loading} onClick={handleSubmit(onSubmit)}>
            Lưu
          </Button>
      </div>
    </div>
  )
}
