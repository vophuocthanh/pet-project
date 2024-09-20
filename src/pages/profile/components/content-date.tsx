import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useState } from 'react'
import { toast } from 'sonner'
import { meApi } from '@/apis/me'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SquarePen } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { DateOfBirthSchema } from '@/shared/utils/schema'
import { MeResponse } from '@/shared/ts/types/meresponse'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  title: string
  content?: string | undefined
}

export default function ContentDate({ title, content }: Props) {
  const [openDateOfBirthDialog, setOpenDateOfBirthDialog] = useState(false)

  const [profileData, setProfileData] = useState<MeResponse>({
    date_of_birth: content
  })

  const formDateOfBirth = useForm<{ date_of_birth: string }>({
    resolver: zodResolver(DateOfBirthSchema),
    defaultValues: { date_of_birth: profileData.date_of_birth }
  })

  const updateDateOfBirthMutation = useMutation({
    mutationKey: ['update-date-of-birth'],
    mutationFn: (data: z.infer<typeof DateOfBirthSchema>) => meApi.updateAccount(data),
    onSuccess: (updatedData: MeResponse) => {
      toast.success('Update date of birth successfully!')
      setProfileData((prev) => ({ ...prev, date_of_birth: updatedData.date_of_birth }))
      formDateOfBirth.reset(updatedData)
      setOpenDateOfBirthDialog(false)
    },
    onError: () => {
      toast.error('Update date of birth failed!')
    }
  })

  function onSubmitDateOfBirth(data: { date_of_birth: string }) {
    if (data.date_of_birth && data.date_of_birth !== profileData.date_of_birth) {
      updateDateOfBirthMutation.mutate({ date_of_birth: data.date_of_birth })
    }
  }

  return (
    <>
      <div className='relative items-center justify-between p-2'>
        <label htmlFor='' className='text-base font-normal'>
          {title}
        </label>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-xl font-semibold'>
              {profileData.name || profileData.phone || profileData.date_of_birth || profileData.country || content}
            </p>
          </div>
          <div className='flex space-x-2'>
            <Dialog open={openDateOfBirthDialog} onOpenChange={setOpenDateOfBirthDialog}>
              <DialogTrigger asChild>
                <Button className='flex items-center p-2 space-x-2 text-sm bg-white border rounded-md shadow-md border-primary'>
                  <SquarePen className='w-4 h-4' />
                  <p>Change Date of Birth</p>
                </Button>
              </DialogTrigger>
              <DialogContent className='w-full'>
                <DialogHeader>
                  <DialogTitle>Edit Date of Birth</DialogTitle>
                  <DialogDescription>
                    Make changes to your date of birth here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <Form {...formDateOfBirth}>
                  <form onSubmit={formDateOfBirth.handleSubmit(onSubmitDateOfBirth)} className='w-full space-y-6'>
                    <FormField
                      control={formDateOfBirth.control}
                      name='date_of_birth'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{title}</FormLabel>
                          <FormControl>
                            <Input type='date' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type='submit' className='flex ml-auto text-white'>
                      Saves {title}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  )
}