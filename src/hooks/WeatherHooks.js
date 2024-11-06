import { useContext, useEffect, useState } from "react";
import { SearchLocaltionContext } from "../context";

const useWeather = () => {
  // =========  manually object create and wrap the state ============>
  const { selectLocation } = useContext(SearchLocaltionContext);
  const [weather, setWeather] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  // ========== handle loadding state here ==================>
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  //   ================ handle error state here ======================>
  const [Error, setError] = useState(null);

  //   ====================== data fetch for api =======================>

  const fetchData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetch the weather data ",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const meessageError = `Fatching Weather Failedd ${response.status}`;
        throw new Error(meessageError);
      }

      const data = await response.json();
      
      console.log(selectLocation);

      console.log("H");
      const updateWeatherData = {
        ...weather,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeather(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  // =========== event call ==================

  useEffect(() => {
    //  ========= when find the location then show loadding ===============>
    setLoading({
      ...loading,
      state: true,
      message: "Find Location ....",
    });

    if (selectLocation.latitude && selectLocation.longitude) {
      fetchData(selectLocation.latitude, selectLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchData(position.coords.latitude, position.coords.longitude);
      });
    }
    // clean up
  }, [selectLocation.latitude, selectLocation.longitude]);

  return {
    weather,
    Error,
    loading,
  };
};

export default useWeather;
