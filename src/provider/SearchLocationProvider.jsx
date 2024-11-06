import React, { useState } from "react";
import { SearchLocaltionContext } from "../context";

const SearchLocationProvider = ({ children }) => {
  const [selectLocation, setSelectLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  })
  return (
    <SearchLocaltionContext.Provider value={{selectLocation, setSelectLocation}}>
      {children}
    </SearchLocaltionContext.Provider>
  );
};



export default SearchLocationProvider