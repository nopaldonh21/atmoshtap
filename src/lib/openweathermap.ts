import { CityResponse, ForecastResponse } from '@/types';
import { apiFetch } from './utils';

export function findCities(q: string) {
  return apiFetch<CityResponse>('/find', {
    params: { q },
  });
}

export function getWeatherByCityId(id: number) {
  return apiFetch<ForecastResponse>('/forecast', {
    params: { id },
  });
}
