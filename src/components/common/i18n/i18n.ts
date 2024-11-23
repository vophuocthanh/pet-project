import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const locals = {
  en: 'ENG 🇨🇰',
  vi: 'VIE 🇻🇳'
}
const resources = {
  en: {
    translation: {
      //home
      tour: 'Find Tour',
      hotel: 'Find Hotel',
      vehicle: 'Vehicle',
      flight: 'Find Flight',
      coach: 'Find Coach',
      login: 'Login',
      signup: 'Sign up',
      trip: 'Plan your perfect trip',
      textTrip: 'Search Flights & Places Hire to our most popular destinations',
      see: 'See All',
      Flights: 'Flights',
      textFlights: 'Search Flights & Places Hire to our most popular destinations',
      ShowFlights: 'Show Flights',
      Hotels: 'Hotels',
      textHotels: 'Search hotels & Places Hire to our most popular destinations',
      ShowHotels: 'Show Hotels',
      Tour: 'Tours',
      textTour: 'Search Tours & Places Hire to our most popular destinations',
      Reviews: 'Reviews',
      textReviews: 'What people says about Golobe facilities',
      Showtour: 'Show tour',
      Coachs:'Coach',
      textcoach: 'Search coach & Places Hire to our most popular',
      Showcoach: 'Show coach',
      //tour
      whereTour: 'Where are you tour ?',
      travel: 'Fall into travel',
      textTravel:
        'Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.',
      Booktour: 'Book tour',

      Sortby: 'Sort by price',
      sorting: 'No sorting',
      High: 'High to low',
      Low: 'Low to high',
      ViewDeals: 'View Deals',
      available: 'No tours available.',
      availableFlight: 'No flights available.',

      PriceRange: 'Price Range',
      Rating: 'Rating',
      Filter: 'Filter',
      CancelFilter: 'Cancel Filter',

      DEPARTURE: 'DEPARTURE SCHEDULE',
      TRANSPORTATION: 'TRANSPORTATION',
      ReturnDate: 'Return Date',
      DepartureDate: 'Departure Date',
      TOURPRICE: 'TOUR PRICE',
      Adults: 'Adults',
      older: '12 years and older',
      Children: 'Children',
      Ages: 'Ages 2 to 12',
      Infants: 'Infants',
      Under: 'Under 2 years',
      Room: 'Single Room Supplement',

      Price: 'Price',
      Guests: 'Guests',
      Code: 'Tour Code',
      Departure: 'Departure',
      Date: 'Departure Date',
      Duration: 'Duration',
      Available: 'Available Seats',
      seats: 'seats',

      ADDITIONAL: 'ADDITIONAL INFORMATION ABOUT THE TRIP',
      Attractions: 'Attractions',
      Cuisine: 'Cuisine',
      Suitable: 'Suitable Audience',
      Ideal: 'Ideal Duration',
      Transportation: 'Transportation',
      Offers: 'Offers',

      //review
      Overview: 'Overview',
      Level: 'Satisfaction Level.',
      Delete: 'Delete',
      Reply: 'Reply',
      Send: 'Send',
      Itinerary: 'Itinerary',
      Date1: 'Date',

      //hotel

      wherehotel: 'Where is the hotel you want to go?',
      Promo: 'Add Promo Code',
      places: 'Show places',
      searches: 'Your recent searches',
      travelHotel: 'Discover Your Perfect Stay',
      textTravelHotel:
        'Where are you heading this season? Whether you are planning a retreat or an adventure, we offer hotel booking tools to help you find your ideal accommodation.',
      BookHotel: 'Book Hotel',

      Availab: 'Available',
      rooms: 'rooms',
      Select: 'Select date',

      Rooms: 'Available Rooms',
      select: 'Select',
      Selected: 'Deselect',

      Amenities: 'Amenities',
      Outdoor: 'Outdoor pool',
      Indoor: 'Indoor pool',
      Spa: 'Spa and wellness center',
      Restaurant: 'Restaurant',
      service: 'Room service',
      Fitness: 'Fitness center',
      Bar: 'Bar/Lounge',
      Free: 'Free Wi-Fi',
      Tea: 'Tea/coffee machine',
      more: 'more',

      //flight
      flying: 'Where are you flying?',
      together: `Let's go places together`,
      texttogether: 'Discover the latest offers and news and start planning your next trip with us.',
      travelFlight: 'Take Flight on Your Journey',
      textTravelFlight: 
        'Where will you fly to celebrate this season? Whether you are heading home or exploring new destinations, we offer flight booking tools to help you reach your desired place with ease.',
      BookFlight: 'Book Flight',

      Airlines: 'Airlines',
      DepartureTime: 'Departure Time',

      Economy: 'Basic Economy Features',
      economy: 'Economy',
      First: 'First Class',
      Business: 'Business Class',
      Emirates: 'Emirates Airlines Policies',
      installation: 'Pre-flight cleaning, installation of cabin HEPA filters.',
      screening: 'Pre-flight health screening questions.',
      SelectFlight: 'Select Flight Date',
      FlightTicket: 'Select Flight Ticket Type',
      Ticket: 'Ticket',

      TicketPrice: 'Ticket Price',
      Baggage: 'Baggage',
      BaggageFee: 'Baggage Fee',
      Creation: 'Creation Date',

      //coach
      WhereCoach: 'Where are you coach?',
      togetherCoach: `Let's go places together`,
      textTogetherCoach: 'Discover the latest offers and news and start planning your next trip with us.',
      travelCoach: 'Start Your Journey',
      textTravelCoach:
        'Where will you go to celebrate this season? Whether you are heading home or exploring new destinations, we offer bus booking tools to help you reach your desired place with ease.',
      BookCoach: 'Book Coach',
      Coach: 'Coach',
      Seat: 'Seat',

      Safety: 'Coach Service Health and Safety Policies',
      cleaned:
        'Pre-Trip Cleaning: Coaches are thoroughly cleaned before every trip, with extra care on high-touch surfaces.',
      fitted:
        'Air Filtration: Coaches are fitted with HEPA filters to purify the air, removing up to 99.97% of particles.',
      complete:
        'Health Screening: Passengers must complete a short health questionnaire before boarding to ensure safe travel for all.',
      //Flight Payment
      flightpayment: 'Flight Payment',
      CashPayment: 'Cash Payment',
      Withpayment: 'With the cash payment method, you will pay the full cost of the tour immediately at the sales point or office.',
      booking:'Your booking is protected by',
      PriceDetails:'Price Details',
      Prices:'Price',
      Discount:'Discount',
      Taxes:'Taxes',
      ServiceFee:'Service Fee',
      Total:'Total',
      Payment:'Payment',
      Selectpayment: 'Select payment method',
      paymentMOMO: 'Payment via MOMO',
      WithMOMO: 'With the MOMO e-wallet payment method, you can pay part of the amount now, and the remaining balance will be automatically deducted from your account on a specific date without any additional fees.',
      CoachPayment:'Coach Payment',
      HotelPayment:'Hotel Payment',
      TourPayment:'Tour Payment',
      Transportations: 'Transportation',
      HotelPrice:'Hotel Price',
      TourPrice:'Tour Price',

      travelwhishlist:'Make your travel whishlist , we will do the rest',
      Special:'Special offers to suit your plan',
      Backpacking:'Backpacking Sri Lanka',
      textBackpacking:'Traveling is a unique experience as it is the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.',
      CreateCoach:'Create your travel wishlist, and let our bus service take you there!',

      //footer
      Subscribe:'Subscribe',
      Newsletter:'Newsletter',
      TheTravel:'The Travel',
      Receivetravel:'Get inspired! Receive travel discounts, tips and behind the scenes stories.',
      Destinations:'Our Destinations',

      Activities:'Our Activities',
      Northern:'Northern Lights',
      Cruising:'Cruising & sailing',
      Multi:'Multi-activities',
      Kayaing:'Kayaing',

      TravelBlogs:'Travel Blogs',
      Tips:'Travel Tips',
      Guide:'Travel Guide',
      TravelDestination:'Travel Destination',

      AboutUs:'About Us',
      OurStory:'Our Story',
      Workwith:'Work with us',

      ContactUs:'Contact Us',
      Copyright:'Copyright',
    }
  },
  vi: {
    translation: {
      //home
      tour: 'Tìm Tour',
      hotel: 'Tìm Khách sạn',
      vehicle: 'Phương tiện',
      flight: 'Tìm Chuyến bay',
      coach: 'Tìm Xe khách',
      login: 'Đăng nhập',
      signup: 'Đăng ký',
      trip: 'Lên kế hoạch cho chuyến đi hoàn hảo của bạn',
      textTrip: 'Tìm kiếm Chuyến bay & Địa điểm Thuê tại những điểm đến phổ biến nhất của chúng tôi',
      see: 'Xem tất cả',
      Flights: 'Chuyến bay',
      textFlights: 'Tìm kiếm Chuyến bay & Địa điểm Thuê tại những điểm đến phổ biến nhất của chúng tôi',
      Hotels: 'Khách sạn',
      textHotels: 'Tìm kiếm khách sạn & Địa điểm Thuê tại những điểm đến phổ biến nhất của chúng tôi',
      Tour: 'Tour du lịch',
      textTour: 'Tìm kiếm Tour & Địa điểm Thuê tại những điểm đến phổ biến nhất của chúng tôi',
      Reviews: 'Đánh giá',
      textReviews: 'Mọi người nói gì về các tiện nghi của Golobe',
      Showtour: 'Hiển thị tour',
      ShowFlights: 'Hiển thị Chuyến bay',
      ShowHotels: 'Hiển thị Khách sạn',
      Coachs: 'Xe khách',
      textcoach: 'Tìm kiếm xe khách & địa điểm thuê tại những nơi phổ biến nhất của chúng tôi',
      Showcoach: 'Hiển thị xe khách',
      //tour
      whereTour: 'Bạn đang ở tour nào?',
      travel: 'Đắm mình trong hành trình',
      textTravel:
        'Bạn đang đi đâu để kỷ niệm mùa này? Dù bạn về nhà hay đi khám phá, chúng tôi có các công cụ du lịch để đưa bạn đến điểm đến của mình.',
      Booktour: 'Đặt tour',

      Sortby: 'Sắp xếp theo giá',
      sorting: 'Không sắp xếp',
      High: 'Từ cao đến thấp',
      Low: 'Từ thấp đến cao',
      ViewDeals: 'Xem ưu đãi',
      available: 'Không có tour nào phù hợp.',
      availableFlight: 'Không có vé nào cho chuyến bay này',

      PriceRange: 'Khoảng giá',
      Rating: 'Đánh giá',
      Filter: 'Lọc',
      CancelFilter: 'Hủy lọc',

      DEPARTURE: 'LỊCH KHỞI HÀNH',
      TRANSPORTATION: 'PHƯƠNG TIỆN DI CHUYỂN',
      DepartureDate: 'Ngày đi',
      ReturnDate: 'Ngày về',
      TOURPRICE: 'GIÁ TOUR',
      Adults: 'Người lớn',
      older: 'Từ 12 tuổi trở lên',
      Children: 'Trẻ em',
      Ages: 'Từ 2 tuổi đến 12 tuổi',
      Infants: 'Em bé',
      Under: 'Dưới 2 tuổi',
      Room: 'Phụ thu phòng đơn',

      Price: 'Giá',
      Guests: 'Khách',
      Code: 'Mã tour',
      Departure: 'Khởi hành',
      Date: 'Ngày khởi hành',
      Duration: 'Thời gian',
      Available: 'Số chỗ còn',
      seats: 'chỗ',

      ADDITIONAL: 'THÔNG TIN THÊM VỀ CHUYẾN ĐI',
      Attractions: 'Điểm tham quan',
      Cuisine: 'Ẩm thực',
      Suitable: 'Đối tượng thích hợp',
      Ideal: 'Thời gian lý tưởng',
      Transportation: 'Phương tiện',
      Offers: 'Ưu đãi',

      Overview: 'Tổng quan',
      Level: 'Mức độ hài lòng.',
      Delete: 'Xoá',
      Reply: 'Trả lời',
      Send: 'Gửi',
      Itinerary: 'Lịch trình',
      Date1: 'Ngày',

      //hotel
      wherehotel: 'Khách sạn bạn muốn đến ở đâu?',
      Promo: 'Thêm mã khuyến mãi',
      places: 'Hiển thị địa điểm',
      searches: 'Tìm kiếm gần đây của bạn',
      travelHotel: 'Khám Phá Điểm Đến Hoàn Hảo',
      textTravelHotel:
        'Bạn đang tìm nơi nghỉ dưỡng cho mùa này? Dù bạn đang lên kế hoạch nghỉ ngơi hay khám phá, chúng tôi cung cấp các công cụ đặt phòng khách sạn giúp bạn tìm được chỗ ở lý tưởng.',
      BookHotel: 'Đặt khách sạn',

      Availab: 'Còn',
      rooms: 'phòng',
      Select: 'Chọn ngày',
      Rooms: 'Phòng còn trống',
      select: 'Chọn',
      Selected: 'Bỏ chọn',
      Seat: 'Chỗ ngồi',

      Amenities: 'Tiện nghi',
      Outdoor: 'Hồ bơi ngoài trời',
      Indoor: 'Hồ bơi trong nhà',
      Spa: 'Trung tâm spa và chăm sóc sức khỏe',
      Restaurant: 'Nhà hàng',
      service: 'Dịch vụ phòng',
      Fitness: 'Trung tâm thể dục',
      Bar: 'Quầy bar/Phòng chờ',
      Free: 'Wi-Fi miễn phí',
      Tea: 'Máy pha trà/cà phê',
      more: 'xem thêm',

      //flight
      flying: 'Bạn đang bay đến đâu?',
      together: 'Hãy cùng nhau đi khắp nơi',
      texttogether:
        'Khám phá những ưu đãi và tin tức mới nhất và bắt đầu lên kế hoạch cho chuyến đi tiếp theo của bạn cùng chúng tôi.',
      travelFlight: 'Chắp Cánh Hành Trình Của Bạn',
      textTravelFlight:
        'Bạn sẽ bay đến đâu để kỷ niệm mùa này? Dù bạn trở về nhà hay khám phá những miền đất mới, chúng tôi có các công cụ đặt vé máy bay giúp bạn dễ dàng đến nơi mình mong muốn.',
      BookFlight: 'Đặt chuyến bay',

      Airlines: 'Hãng hàng không',
      DepartureTime: 'Thời gian khởi hành',

      Economy: 'Các tính năng kinh tế cơ bản',
      economy: 'Kinh tế',
      First: 'Hạng nhất',
      Business: 'Hạng thương gia',
      Emirates: 'Chính sách của Emirates Airlines',
      installation: 'Vệ sinh trước chuyến bay, lắp đặt bộ lọc HEPA trong cabin.',
      screening: 'Câu hỏi kiểm tra sức khỏe trước chuyến bay.',
      SelectFlight: 'Chọn ngày chuyến bay',
      FlightTicket: 'Chọn loại vé máy bay',
      Ticket: 'Vé',

      TicketPrice: 'Giá vé',
      Baggage: 'Hành lý',
      BaggageFee: 'Phí hành lý',
      Creation: 'Ngày tạo',

      //coach
      WhereCoach: 'Bạn đang đi xe đến đâu?',
      togetherCoach: 'Hãy cùng nhau đi khắp nơi',
      textTogetherCoach:
        'Khám phá những ưu đãi và tin tức mới nhất và bắt đầu lên kế hoạch cho chuyến đi tiếp theo của bạn cùng chúng tôi.',
      travelCoach: 'Khởi Hành Hành Trình Của Bạn',
      textTravelCoach:
        'Bạn sẽ đi đâu để kỷ niệm mùa này? Dù bạn trở về nhà hay khám phá những điểm đến mới, chúng tôi có các công cụ đặt xe khách giúp bạn dễ dàng đến nơi mình mong muốn.',
      BookCoach: 'Đặt xe',
      Coach: 'Xe khách',

      Safety: 'Chính sách về sức khỏe và an toàn của dịch vụ xe khách',
      cleaned:
        'Vệ sinh trước chuyến đi: Xe khách được vệ sinh kỹ lưỡng trước mỗi chuyến đi, đặc biệt chú ý đến các bề mặt thường xuyên tiếp xúc.',
      fitted: 'Lọc không khí: Xe khách được lắp đặt bộ lọc HEPA để làm sạch không khí, loại bỏ tới 99.97% các hạt bụi.',
      complete:
        'Kiểm tra sức khỏe: Hành khách phải hoàn thành một bảng câu hỏi sức khỏe ngắn trước khi lên xe để đảm bảo an toàn cho tất cả mọi người.',
      //Flight Payment
      flightpayment: 'Thanh Toán Chuyến Bay',
      CashPayment:'Thanh toán tiền mặt',
      Withpayment:'Với phương thức thanh toán tiền mặt, bạn sẽ trả toàn bộ chi phí của tour ngay lập tức tại điểm bán hoặc văn phòng.',
      booking: 'Đặt chỗ của bạn được bảo vệ bởi',
      PriceDetails: 'Chi tiết giá',
      Prices: 'Giá',
      Discount: 'Giảm giá',
      Taxes: 'Thuế',
      ServiceFee: 'Phí dịch vụ',
      Total: 'Tổng cộng',
      Payment:'Thanh toán',
      Selectpayment:'Chọn phương thức thanh toán',
      paymentMOMO:'Thanh toán qua MOMO',
      WithMOMO:' Với phương thức thanh toán qua ví điện tử MOMO, bạn có thể thanh toán một phần ngay bây giờ và phần còn lại sẽ tự động được trừ từ tài khoản của bạn vào một ngày cụ thể, mà không mất thêm phí phát sinh.',
      CoachPayment:'Thanh toán xe khách',
      HotelPayment:'Thanh toán khách sạn',
      TourPayment: 'Thanh toán tour',
      Transportations: 'Phương tiện',
      HotelPrice: 'Giá khách sạn',
      TourPrice: 'Giá tour',

      travelwhishlist: 'Lập danh sách điểm đến mơ ước của bạn, chúng tôi sẽ lo phần còn lại',
      Special: 'Ưu đãi đặc biệt phù hợp với kế hoạch của bạn',
      Backpacking: 'Du lịch Sri Lanka',
      textBackpacking: 'Du lịch là một trải nghiệm độc đáo vì đó là cách tốt nhất để tạm rời xa những áp lực và căng thẳng của cuộc sống hàng ngày. Nó giúp chúng ta quên đi những vấn đề, sự bực bội và nỗi lo lắng ở nhà. Trong hành trình của mình, chúng ta trải nghiệm cuộc sống theo nhiều cách khác nhau. Chúng ta khám phá những địa điểm mới, nền văn hóa, ẩm thực, truyền thống và lối sống đa dạng.',
      CreateCoach:'Hãy tạo danh sách điểm đến mơ ước của bạn, và để dịch vụ xe buýt của chúng tôi đưa bạn đến đó!',
    
      //footer
      Subscribe: 'Đăng ký',
      Newsletter: 'Bản tin',
      TheTravel: 'Chuyến đi',
      Receivetravel: 'Hãy lấy cảm hứng! Nhận ưu đãi du lịch, mẹo và những câu chuyện hậu trường.',
      Destinations: 'Điểm đến của chúng tôi',

      Activities: 'Hoạt động của chúng tôi',
      Northern: 'Cực quang phương Bắc',
      Cruising: 'Du thuyền & chèo thuyền',
      Multi: 'Nhiều hoạt động',
      Kayaing: 'Chèo thuyền kayak',

      TravelBlogs: 'Blog du lịch',
      Tips: 'Mẹo du lịch',
      Guide: 'Hướng dẫn du lịch',
      TravelDestination: 'Điểm đến du lịch',

      AboutUs: 'Giới thiệu về chúng tôi',
      OurStory: 'Câu chuyện của chúng tôi',
      Workwith: 'Hợp tác với chúng tôi',

      ContactUs: 'Liên hệ với chúng tôi',
      Copyright:'Bản quyền',
    }
  }
}
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
})
