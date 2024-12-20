import { hoteldetail1 } from "@/assets/images";
import { IconHotelpay } from "@/common/icons";
import { HotelBookingResponse } from "@/shared/ts/interface/booking-hotel.interface";
import { MapPin, MoveLeft, MoveRight } from "lucide-react";

interface hotelBookingType {
  hotel: HotelBookingResponse
}

export default function HotelInfo({ hotel }: hotelBookingType) {
  const formatCurrency = (value: string | undefined) => {
    if (!value) return 'N/A'
    const numberValue = parseFloat(value)
    return isNaN(numberValue)
      ? 'N/A'
      : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numberValue)
  }
  return (
    <div className="gap-6">
      <div key={hotel.id} className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-semibold">{hotel.status}</h2>
          <h2 className="text-2xl font-bold text-red-500">{formatCurrency(hotel.price?.toString())}</h2>
        </div>

        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="grid grid-cols-1 justify-center lg:grid-cols-3 gap-4 items-center">
            <img
              src={hoteldetail1}
              alt={hotel.hotel_names}
              className="object-cover h-32 w-full lg:h-40 lg:w-48 rounded-md mx-auto"
            />
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-center lg:text-left">{hotel.hotel_names}</h3>
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin className="w-4 h-4 mr-2 text-black" />
                <p className="text-sm text-gray-500">{hotel.location}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 items-center">
          <div className="text-center">
            <p className="font-medium text-md">{hotel.received_time}</p>
            <p className="text-sm text-gray-500">Check-In</p>
            <p className="font-medium text-md">{hotel.checkInDate}</p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <MoveLeft className="w-11 h-11" style={{ strokeWidth: 0.5 }} />
            <div className="flex justify-center w-10">
              <IconHotelpay />
            </div>
            <MoveRight className="w-11 h-11" style={{ strokeWidth: 0.5 }} />
          </div>

          <div className="text-center">
            <p className="font-medium text-md">{hotel.giveback_time}</p>
            <p className="text-sm text-gray-500">Check-Out</p>
            <p className="font-medium text-md">{hotel.checkOutDate}</p>
          </div>
        </div>

        <hr className="w-full mt-2 border-black border-1" />
      </div>
    </div>
  );
}
