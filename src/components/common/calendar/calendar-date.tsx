'use client'

import * as React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/shared/lib/utils'

interface DatePickerWithPresetsProps {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}
export function DatePickerWithPresets({date, setDate}:DatePickerWithPresetsProps) {
  

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[160px] justify-start text-left font-normal mt-[10px] h-[3.1rem]',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='w-4 h-4 mr-2' />
          {date ? format(date, 'dd/MM/yyyy') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className='flex flex-col w-auto p-2 space-y-2'>
        <div className='border rounded-md'>
          <Calendar mode='single' selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
