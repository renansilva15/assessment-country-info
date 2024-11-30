import { sharedAxiosInstance } from '@/lib/axios';

export async function fetcher<T>(url: string): Promise<T> {
  const response = await sharedAxiosInstance.get<T>(url);
  return response.data;
}
