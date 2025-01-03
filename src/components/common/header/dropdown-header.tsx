import { meApi } from '@/apis/me'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { clearLS } from '@/shared/utils/storage'
import { useQuery } from '@tanstack/react-query'
import { CreditCard, Keyboard, LogOut, Settings, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DropdownHeader() {
  const { data: getMe } = useQuery({
    queryKey: ['getMe'],
    queryFn: () => meApi.getMe()
  })

  const handleLogout = () => {
    clearLS()
    window.location.reload()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='select-none'>
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src={getMe?.avatar} alt={getMe?.name || 'Avatar'} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 mr-6'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <div className='flex flex-col ml-4'>
          <h1 className='text-sm'>{getMe?.email}</h1>
          <span className='text-xs text-gray-400'>{getMe?.name || 'Guest'}</span>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to='/profile' className='flex items-center justify-between w-full'>
              <User className='w-4 h-4 mr-2' />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className='w-4 h-4 mr-2' />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className='w-4 h-4 mr-2' />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className='w-4 h-4 mr-2' />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className='w-4 h-4 mr-2' />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
