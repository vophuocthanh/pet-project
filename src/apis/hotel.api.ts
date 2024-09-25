import axiosClient from '@/apis/axios-client'
import { HotelResponseType } from '@/shared/ts/interface/data.interface'

export const hotelApi = {
  getAll(page: number | string, limit: number | string) {
    const url = '/hotel-crawl/crawl';
    
    return axiosClient.get(url, {
      params: {
        _page: Number(page), 
        _limit: Number(limit) 
      }
    });
  },
  getById(id: string |undefined) :Promise<HotelResponseType> {
    const url = `/hotel/crawl/${id}`
    return axiosClient.get(url)
  },
  addHotel(data: HotelResponseType) {
    const url = '/hotel'
    return axiosClient.post(url, data)
  },
  updateHotel(id: string, data: HotelResponseType) {
    const url = `/hotel/${id}`
    return axiosClient.put(url, data)
  },
  deleteHotel(id: string) {
    const url = `/hotel/${id}`
    return axiosClient.delete(url)
  }
}
