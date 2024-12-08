import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface FlightCardProps {
  minPrice?: number
  maxPrice?: number
  rating?: number
  handlePriceRangeChange: (min: number | undefined, max: number | undefined) => void
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>
  setMaxPrice: React.Dispatch<React.SetStateAction<number | undefined>>
  handleRating: (val: number | undefined) => void
  data?: string[]
  handleSelectUniqueStartingGate?: (val: string | undefined) => void
  handleSelectUniqueRoadVehicle?: (val: string) => void
  dataRoadVehicle?: string[]
  handleSelectUniqueTourType?: (val: string) => void
  handleClear?: () => void
  selectedStartingGate?: string | undefined
  selectRoadVehicle?: string | undefined
  handleClearRoadVehicle?: () => void
  selectTourType?: string | undefined
  handleClearTourType?: () => void
}

export default function FilterTour(props: FlightCardProps) {
  const { t } = useTranslation()
  const {
    handlePriceRangeChange,
    handleRating,
    rating,
    setMinPrice,
    setMaxPrice,
    maxPrice,
    minPrice,
    data,
    handleSelectUniqueStartingGate,
    handleSelectUniqueRoadVehicle,
    dataRoadVehicle,
    handleSelectUniqueTourType,
    selectedStartingGate,
    handleClear,
    selectRoadVehicle,
    handleClearRoadVehicle,
    selectTourType,
    handleClearTourType
  } = props
  const isRatingVisible = true
  const [tempMinPrice, setTempMinPrice] = useState<number | undefined>(minPrice)
  const [tempMaxPrice, setTempMaxPrice] = useState<number | undefined>(maxPrice)
  return (
    <div className="w-[30%] max-lg:w-[25%] max-md:w-[100%]">
      <div className="flex flex-col gap-6 pt-10">
        <div className="pb-4 border-b-2 border-gray-300">
          <h2 className="text-xl font-semibold text-gray-700">{t('PriceRange')}</h2>
          <div className="w-full p-4 mt-4 space-y-4 bg-white rounded-lg shadow-2xl">
            <div className="flex items-center w-full space-x-4">
              <input
                className="w-full h-10 p-4 transition duration-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Min Price"
                value={tempMinPrice !== undefined ? tempMinPrice : ''}
                onChange={(e) => setTempMinPrice(e.target.value ? Number(e.target.value) : undefined)}
              />
              <span className="text-lg text-gray-600">-</span>
              <input
                className="w-full h-10 p-4 transition duration-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Max Price"
                value={tempMaxPrice !== undefined ? tempMaxPrice : ''}
                onChange={(e) => setTempMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
              />
            </div>
            <Button
              onClick={() => {
                setMinPrice(tempMinPrice)
                setMaxPrice(tempMaxPrice)
                handlePriceRangeChange(tempMinPrice, tempMaxPrice)
              }}
              className="w-full px-4 py-2 text-white transition duration-200 rounded-md bg-primary hover:bg-primary-dark"
            >
              {t('Filter')}
            </Button>
            <Button
              className="w-full mt-4 text-white transition duration-200 bg-gray-400 rounded hover:bg-gray-500"
              onClick={() => {
                setTempMinPrice(undefined)
                setTempMaxPrice(undefined)
                setMinPrice(undefined)
                setMaxPrice(undefined)
                handlePriceRangeChange(undefined, undefined)
              }}
            >
              {t('CancelFilter')}
            </Button>
          </div>
        </div>
        {isRatingVisible && (
          <div className="w-[30%] max-md:w-[100%]">
            <h2 className="text-xl font-semibold text-gray-700">{t('Rating')}</h2>
            <div className="flex gap-3 max-md:gap-4 max-lg:gap-1 w-[50%] max-lg:w-[25%] mt-4">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <Button
                  key={item}
                  className={`flex items-center ${
                    rating === item || (rating === undefined && item === 0) ? 'active' : ''
                  } ${
                    rating === item || (rating === undefined && item === 0) ? 'bg-primary' : 'bg-slate-400'
                  }  justify-center w-[50%]  h-8 text-sm font-medium text-white transition duration-200 rounded-md cursor-pointer  hover:bg-primary`}
                  onClick={() => {
                    if (item === 0) {
                      handleRating(undefined)
                    } else {
                      handleRating(item)
                    }
                  }}
                >
                  {item}+
                </Button>
              ))}
            </div>
          </div>
        )}
        <div className="relative flex flex-col space-y-4">
          <h1 className="text-xl font-semibold text-gray-700 max-md:text-xl max-lg:text-sm">Chọn nơi xuất phát</h1>
          <Select value={selectedStartingGate} onValueChange={handleSelectUniqueStartingGate}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn nơi xuất phát">
                {selectedStartingGate || <span>Chọn nơi xuất phát</span>}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Nơi xuất phát</SelectLabel>
                {data?.length ? (
                  data.map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">Không có nơi xuất phát</div>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
          {selectedStartingGate && (
            <button
              onClick={handleClear}
              className="absolute p-1 text-gray-500 rounded top-[2.2rem] right-10 hover:text-gray-700 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="relative flex flex-col space-y-4">
          <h1 className="text-xl font-semibold text-gray-700 max-md:text-xl max-lg:text-sm">Chọn phương tiện</h1>
          <Select value={selectRoadVehicle} onValueChange={handleSelectUniqueRoadVehicle}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a phương tiện">
                {selectRoadVehicle || <span>Chọn phương tiện</span>}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Phương tiện</SelectLabel>
                {dataRoadVehicle?.length ? (
                  dataRoadVehicle.map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">Không có phương tiện</div>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
          {selectRoadVehicle && (
            <button
              onClick={handleClearRoadVehicle}
              className="absolute p-1 text-gray-500 rounded top-[2.2rem] right-10 hover:text-gray-700 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="relative flex flex-col space-y-4">
          <h1 className="text-xl font-semibold text-gray-700 max-md:text-xl max-lg:text-sm">Chọn loại tour</h1>
          <Select value={selectTourType} onValueChange={handleSelectUniqueTourType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Chọn loại tour">{selectTourType || <span>Chọn loại tour</span>}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Loại tour</SelectLabel>
                <SelectItem value="open">Mở</SelectItem>
                <SelectItem value="closed">Đóng</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {selectTourType && (
            <button
              onClick={handleClearTourType}
              className="absolute p-1 text-gray-500 rounded top-[2.2rem] right-10 hover:text-gray-700 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
