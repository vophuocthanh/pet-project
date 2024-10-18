export const path = {
  home: '/',
  login: '/login',
  register: '/register',
  verify_code: '/verify-code',
  hotel: '/hotel',
  hotelId: '/hotel/:id',
  flight: 'vehicle/flight',
  coach: 'vehicle/coach',
  flight_detail: 'vehicle/flight/:id',
  coach_detail: 'vehicle/coach/:id',
  tour: '/tour',
  tourDetailView: '/tour/:id',
  tourId: '/tour/all-tour',
  forgot_password: '/forgot-password',
  reset_password: '/reset-password',
  profile: '/profile',
  all_flight: 'vehicle/flight/all-flight',
  all_coach: 'vehicle/coach/all-coach',
  home_stay: '/hotel/home-stay',
  hotel_detail: '/hotel/home-stay/hotel-detail',
  admin: '/admin',
  users: '/admin/users',
  users_id: '/admin/users/:id',
  billing: '/admin/billing',
  admin_tour: '/admin/tours',
  admin_create_tour: '/admin/tours/create',
  admin_tourID: '/admin/tours/:id',
  admin_flight: '/admin/flights',
  admin_flightID: '/admin/flights/:id',
  admin_hotel: '/admin/hotels',
  admin_employee: '/admin/employee',
  admin_road_vehicle: '/admin/road-vehicle',
  admin_payment: '/admin/payments',
  coach_payment: '/vehicle/coach/all-coach/coach-payment/:id',
  flight_payment: '/vehicle/flight/all-flight/flight-payment/:id',
  tour_payment: '/tour/all-tour/tour-payment/:id',
  hotel_payment: '/hotel/home-stay/hotel-payment/:id',
  admin_hotelID: '/admin/hotels/:id',
  all_view: '/admin/billing/all-view',
  hotel_view: '/admin/billing/hotel-view',
  flight_view: '/admin/billing/flight_view/:id',
  tour_view: '/admin/billing/tour-view/:billingID',
  road_vehicleID: '/admin/road-vehicle/:id',
  payment_view: '/admin/payment/payment-view'
} as const
