import axiosClient from '@/apis/axios-client'
import { ListResponse } from '@/shared/ts/interface'
import { FlightResponseType } from '@/shared/ts/interface/data.interface'

export const flightApi = {
  getAll(
    page: number | string,
    items_per_page: number | string,
    sort_by_price: string,
    min_price?: number,
    max_price?: number,
    start_day?: string,
    end_day?: string
  ): Promise<ListResponse<FlightResponseType>> {
    const url = '/flight-crawl/crawl'
    if (!start_day || !end_day) {
      return axiosClient.get(url, {
        params: {
          items_per_page: Number(items_per_page),
          page: Number(page),
          sort_by_price: String(sort_by_price),
          min_price: min_price,
          max_price: max_price
        }
      })
    }
    return axiosClient.get(url, {
      params: {
        items_per_page: Number(items_per_page),
        page: Number(page),
        sort_by_price: String(sort_by_price),
        min_price: min_price,
        max_price: max_price,
        start_day: String(start_day),
        end_day: String(end_day)
      }
    })
  },
  checkFavoriteStatus(id: string | undefined): Promise<{ favorited: boolean }> {
    const token = localStorage.getItem('access_token'); 
    const url = `/flight-crawl/${id}/is-favorite`;

    if (token) {
      return axiosClient.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      return Promise.reject(new Error('No token available'));
    }
  },

  favorite(id: string | undefined): Promise<void> {
    const token = localStorage.getItem('access_token')
    if (!token) {
      throw new Error('No access token found')
    }
    const url = `/flight-crawl/${id}/favorite`
    return axiosClient.post(url, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },

  unfavorite(id: string | undefined): Promise<void> {
    const token = localStorage.getItem('access_token')
    if (!token) {
      throw new Error('No access token found')
    }
    const url = `/flight-crawl/${id}/unfavorite`
    return axiosClient.post(url, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  getById(id: string | undefined): Promise<FlightResponseType> {
    const url = `/flight-crawl/crawl/${id}`
    return axiosClient.get(url)
  },
  addFlight(data: FlightResponseType) {
    const url = 'flight'
    return axiosClient.post(url, data)
  },
  putFlight(id: string, data: FlightResponseType) {
    const url = `/flight/${id}`
    return axiosClient.put(url, data)
  },
  deleteFlight(id: string) {
    const url = `/flight/${id}`
    return axiosClient.delete(url)
  },
  // isFavorite
  getFavoriteFlights() {
    const url = `/flight-crawl/favorites`
    return axiosClient.get(url)
  }
}
