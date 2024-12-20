export interface ReactWithChild {
  children?: React.ReactNode
}

export type Dictionary<T> = Record<string, T>

export type ValidValue<T> = Exclude<T, null | undefined | 0 | '' | false>

export const BooleanFilter = <T>(x: T): x is ValidValue<T> => Boolean(x)
export type LazyLoadElement = () => Promise<{ default: React.ComponentType }>

export interface RouteLazy {
  path: string
  element: LazyLoadElement
  children?: RouteLazy[]
}

export interface ListResponse<T> {
  data: T[]
  total: number
  page: number
  items_per_page: number
  sort_by_price: string
  min_price: number | undefined
  max_price: number | undefined
  start_day?: string
  end_day?: string
  branch: string
}

export interface ListResponseFlight<F> {
  data: F[]
  total: number
  currentPage: number
  items_per_page: number
}
export interface ListResponseTour<Tour> {
  data: Tour[]
  total: number
  currentPage: number
  items_per_page: number
}

export interface HotelParams {
  items_per_page: number
  page: number
  sort_by_price?: string
  min_price?: number | undefined
  max_price?: number | undefined
  star_number?: number | undefined
  search?: string
  place?: string
}
export interface TourParams {
  items_per_page: number
  page: number
  min_price?: number
  max_price?: number
  search?: string
  sort_by_price?: string
  rating?: number
  start_date?: string
  end_date?: string
  starting_gate?: string
  road_vehicle?: string
  type?: string
}
