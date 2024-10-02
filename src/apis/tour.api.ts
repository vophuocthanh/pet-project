import axiosClient from '@/apis/axios-client'
import { TourResponseType } from '@/shared/ts/interface/data.interface'
import { TourResponse } from '@/shared/utils/data-response'

export const tourApi = {
  getAll(page: number | string, limit: number | string) {
    const url = '/tour'
    return axiosClient.get(url, {
      params: {
        _page: page,
        _limit: limit
      }
    })
  },
  getById(id: string | undefined) :Promise<TourResponseType> {
    const url = `/tour/${id}`
    return axiosClient.get(url)
  },
  addTour(data: TourResponse) {
    const url = '/tour'
    return axiosClient.post(url, data)
  },
  updateTour(id: string, data: TourResponse) {
    const url = `/tour/${id}`
    return axiosClient.put(url, data)
  },
  deleteTour(id: string) {
    const url = `/tour/${id}`
    return axiosClient.delete(url)
  },
  favoriteTourID(id: string | undefined):Promise<TourResponseType> {
    const url = `/tour/${id}/favorite`
    
    return axiosClient.post(url)
  },
  unfavoriteTourID(id: string | undefined):Promise<TourResponseType> {
    const url = `/tour/${id}/unfavorite`
    return axiosClient.post(url)
  }
}
