import { bookingHotelApi } from "@/apis/booking-hotel.api";
import { meApi } from "@/apis/me";
import { hoteldetail1 } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftToLine } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function BillingHotelView() {
  const { userId, id } = useParams<{ userId: string, id: string }>()


  const { data: getbyIdHotelBiling } = useQuery({
    queryKey: ['getbyIdHotelBiling', id],
    queryFn: () => bookingHotelApi.getBookingDetail(id || '')
  })

  const { data: getbyIdUser } = useQuery({
    queryKey: ['getbyIdUser', userId],
    queryFn: () => meApi.getUserById(userId || '')
  })

  const navigate = useNavigate();



  const handleBack = () => {
    navigate('/admin/billing');
  };

  const getStatusClass = () => {
    switch (getbyIdHotelBiling?.status) {
      case "CONFIRMED":
        return "bg-green-300";
      case "PENDING":
        return "bg-yellow-300";
      case "CANCELLED":
        return "bg-red-300";
      default:
        return "";
    }
  };

  return (
    <div className="w-full p-2 mb-5">
      <h1 className="mb-2 text-2xl font-bold">View Billing {id}</h1>
      <Button className="flex mb-4 mr-auto text-white" onClick={handleBack}>
        <ArrowLeftToLine />
      </Button>
      <form className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold">Customer Information</h2>
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div className='w-[10rem] p-2 h-[10rem] col-span-1 flex mx-auto'>
              <img src={getbyIdUser?.avatar} alt='hotel' className='w-full h-full rounded-full' />
            </div>
            <div className="grid col-span-1 gap-x-6 gap-y-4 ">
              <Input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={getbyIdUser?.name}
                className="p-2 border rounded "
                disabled
              />
              <Input
                type="email"
                name="customerEmail"
                placeholder="Customer Email"
                value={getbyIdUser?.email}
                className="p-2 border rounded "
                disabled
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold">Hotel Information</h2>
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div className='w-[10rem] p-2 h-[10rem] col-span-1 flex mx-auto my-auto'>
              <img src={hoteldetail1} alt='hotel' className='w-full h-full rounded-full' />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="col-span-1">
                  <p>Hotel Name</p>
                  <Input
                    type="text"
                    name="hotelName"
                    placeholder="Hotel Name"
                    value={getbyIdHotelBiling?.hotel_names}
                    className="p-2 border rounded "
                    disabled
                  />
                </div>
                <div className="col-span-1">
                  <p>Hotel Location</p>
                  <Input
                    type="text"
                    name="hotelLocation"
                    placeholder="Hotel Location"
                    value={getbyIdHotelBiling?.place}
                    className="p-2 border rounded "
                    disabled
                  />
                </div>
                <div className="col-span-1">
                  <p>Hotel Checkin</p>
                  <Input
                    type="text"
                    name="hotelCheckIn"
                    placeholder="Check-In Time"
                    value={getbyIdHotelBiling?.giveback_time}
                    className="col-span-1 p-2 border rounded"
                    disabled
                  />
                </div>
                <div className="col-span-1">
                  <p>Hotel Checkout</p>
                  <Input
                    type="text"
                    name="hotelCheckOut"
                    placeholder="Check-Out Time"
                    value={getbyIdHotelBiling?.received_time}
                    className="col-span-1 p-2 border rounded"
                    disabled
                  />
                </div>
                <div className="col-span-1">
                  <p>Room</p>
                  <Input
                    type="number"
                    name="hotelRooms"
                    placeholder="Number of Rooms"
                    value={getbyIdHotelBiling?.hotelQuantity}
                    className="col-span-1 p-2 border rounded"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold">Billing Information</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="col-span-1">
              <p>Billing ID</p>
              <Input
                type="text"
                name="id"
                placeholder="Billing ID"
                value={getbyIdHotelBiling?.id}
                className="p-2 border rounded"
                disabled
              />
            </div>
            <div className="col-span-1">
              <p>Billing Time</p>
              <Input
                type="text"
                name="billingTime"
                placeholder="Billing Time"
                value={"Billing Time"}
                className="p-2 border rounded"
                disabled
              />
            </div>
            <div className="col-span-1">
              <p>Plan</p>
              <Input
                type="text"
                name="plan"
                placeholder="Plan"
                value={"plan"}
                className="p-2 border rounded"
                disabled
              />
            </div>
            <div className="col-span-1">
              <p>Amount</p>
              <Input
                type="number"
                name="amount"
                placeholder="Amount"
                value={getbyIdHotelBiling?.price}
                className="p-2 border rounded"
                disabled
              />
            </div>
            <div className="col-span-1">
              <p>Status</p>
              <Input
                type="text"
                name="status"
                placeholder="Status"
                value={getbyIdHotelBiling?.status}
                className={`col-span-1 p-2 border rounded ${getStatusClass()}`}
                disabled
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
