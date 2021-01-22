import { SAVE_WEATHER_INFO } from "actions";
const initialForecastDataState = []

const forecast = (state = initialForecastDataState, action) => {
  switch (action.type) {
    case SAVE_WEATHER_INFO:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default forecast;
