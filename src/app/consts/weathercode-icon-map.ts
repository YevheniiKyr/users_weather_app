import {IconInfo} from "../models/icon-info.model";
import {
  ICON_CLOUDY,
  ICON_FOGGY,
  ICON_GRAINY,
  ICON_PARTLY_CLOUDY_DAY,
  ICON_RAINY, ICON_SHOWER,
  ICON_SNOWY, ICON_THUNDERSTORM,
  ICON_WB_SUNNY
} from "./icons";

export const WEATHER_ICON_MAP: Record<number, IconInfo> = {
  0: {label: 'Clear sky', icon: ICON_WB_SUNNY},
  1: {label: 'Mainly clear', icon: ICON_WB_SUNNY},
  2: {label: 'Partly cloudy', icon: ICON_PARTLY_CLOUDY_DAY, isSvg: true},
  3: {label: 'Overcast', icon: ICON_CLOUDY},
  45: {label: 'Fog', icon: ICON_FOGGY},
  48: {label: 'Depositing rime fog', icon: ICON_FOGGY},
  51: {label: 'Light drizzle', icon: ICON_GRAINY},
  53: {label: 'Moderate drizzle', icon: ICON_GRAINY},
  55: {label: 'Dense drizzle', icon: ICON_GRAINY},
  61: {label: 'Slight rain', icon: ICON_RAINY},
  63: {label: 'Moderate rain', icon: ICON_RAINY},
  65: {label: 'Heavy rain', icon: ICON_RAINY},
  71: {label: 'Slight snow fall', icon: ICON_SNOWY},
  73: {label: 'Moderate snow fall', icon: ICON_SNOWY},
  75: {label: 'Heavy snow fall', icon: ICON_SNOWY},
  80: {label: 'Slight rain showers', icon: ICON_SHOWER},
  81: {label: 'Moderate rain showers', icon: ICON_SHOWER},
  82: {label: 'Violent rain showers', icon: ICON_SHOWER},
  95: {label: 'Thunderstorm', icon: ICON_THUNDERSTORM},
  96: {label: 'Thunderstorm with slight hail', icon: ICON_THUNDERSTORM},
  99: {label: 'Thunderstorm with heavy hail', icon: ICON_THUNDERSTORM},
};

