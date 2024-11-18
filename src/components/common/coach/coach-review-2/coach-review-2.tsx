import { flightreview3, flightreview4, flightreview5, flightreview6 } from '@/assets/images'
import SectionInViewUp from '@/components/common/animation/SectionInViewUp'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next';
export default function CoachReview2() {
  const { t } = useTranslation();
  return (
    <SectionInViewUp>
      <div className='w-full mt-[5rem] mb-[12rem]'>
        <div className='relative mx-36'>
          <h1 className='flex items-start justify-start pt-0 mb-4 text-3xl font-medium'>{t('travelCoach')}</h1>
          <div className='flex flex-wrap justify-between '>
            <p className='w-[970px] text-xl mb-8 font-light'>
            {t('textTravelCoach')}
            </p>
            <Button className='absolute right-0 text-black bg-white border border-primary top-8'>{t('see')}</Button>
          </div>
        </div>
        <div className='flex gap-4 mx-36'>
          <div className='flex flex-col  h-[31rem] w-[50rem] bg-primary justify-between border border-primary rounded-2xl '>
            <div className='flex justify-between mx-10 mt-5'>
              {' '}
              <p className='h-20 text-5xl w-[20rem]'>{t('Backpacking')}</p>
              <div className='flex flex-col items-center justify-center w-16 h-16 text-xl bg-white border rounded-lg border-primary'>
                <p> From</p>
                <p className='font-bold'>$700</p>
              </div>
            </div>

            <p className='mx-10 mb-3 text-md'>
            {t('textBackpacking')}
            </p>

            <Button className='mt-20 mb-4 text-black bg-white mx-11 hover:bg-slate-300'>{t('BookCoach')}</Button>
          </div>
          <div className='flex flex-col gap-4 h-[30rem] w-[50rem] '>
            <div className='flex gap-4 '>
              <img src={flightreview3} className='w-1/2 h-[15rem] object-cover rounded-lg border border-primary' />
              <img src={flightreview4} className='w-1/2 h-[15rem]object-cover rounded-lg border border-primary' />
            </div>
            <div className='flex gap-4'>
              <img src={flightreview5} className='w-1/2 h-[15rem] object-cover rounded-lg border border-primary' />
              <img src={flightreview6} className='w-[48%] h-[15rem] object-cover rounded-lg border border-primary' />
            </div>
          </div>
        </div>
      </div>
    </SectionInViewUp>
  )
}
