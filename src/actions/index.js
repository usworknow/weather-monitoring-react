export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const SAVE_WEATHER_INFO = "SAVE_WEATHER_INFO";

export const saveUserInfo = (user) => {
  return {
    type: SAVE_USER_INFO,
    payload: user
  };
};
export const saveWeatherInfo = (forecast) => {
  return {
    type: SAVE_WEATHER_INFO,
    payload: forecast
  };
};
