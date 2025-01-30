import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ofetch } from 'ofetch';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_URL = process.env.OPENWEATHERMAP_API_URL;
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

export const apiFetch = ofetch.create({
  baseURL: API_URL,
  params: {
    appId: API_KEY,
    units: 'metric',
  },
  async onRequestError({ error }) {
    throw error.message;
  },
  async onResponseError({ response }) {
    throw response._data.message ?? response.statusText;
  },
});
