import { cn } from '@/shared/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-slate-50 hover:bg-primary dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
        destructive: 'bg-red-500 hover:bg-red-500/90 dark:hover:bg-red-900/90',
        outline:
          'border border-slate-200 bg-white hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        secondary: 'bg-slate-100 dark:hover:bg-slate-800/80',
        ghost: 'hover:bg-slate-100 dark:hover:text-slate-50',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50'
      },
      size: {
        default: 'h-10 px-4 rounded-md py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp disabled={loading} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {loading && <Loader2 className='w-4 h-4 mr-2 animate-spin' />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
