import React from "react";
import Page from "./Page";
import WeatherProvider from "./provider/Provider";
import FavoriteProvider from "./provider/FavoriteProvider";
import SearchLocationProvider from "./provider/SearchLocationProvider";

export default function App() {
  return (
    <>
      <SearchLocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <Page />
          </FavoriteProvider>
        </WeatherProvider>
      </SearchLocationProvider>
    </>
  );
}
