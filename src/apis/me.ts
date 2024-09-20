import axiosClient from '@/apis/axios-client'
import { MeResponse } from '@/shared/ts/interface'
export interface UpdateAccountPayload {
  name?: string
  phone?: string
  country?: string
  address?: string
  date_of_birth?: string
}

export const meApi = {
  getMe(): Promise<MeResponse> {
    const url = '/user/me'
    return axiosClient.get(url)
  },

  getAllUsers() {
    const url = '/user'
    return axiosClient.get(url)
  },

  uploadAvatar(avatar: File) {
    const url = '/user/upload-avatar'
    const formData = new FormData()
    formData.append('avatar', avatar)
    return axiosClient.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  updateAccount(data: UpdateAccountPayload): Promise<MeResponse> {
    const url = '/user/me'
    return axiosClient.put(url, data)
  }


}
