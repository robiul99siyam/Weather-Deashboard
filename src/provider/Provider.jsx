import { weatherContext } from "../context";
import useWeather from "../hooks/WeatherHooks";

const WeatherProvider = ({ children }) => {
  const { Error, loading, weather } = useWeather();
  return (
    <weatherContext.Provider value={{ Error, loading, weather }}>
      {children}
    </weatherContext.Provider>
  );
};


export default WeatherProvider;
