import React from "react";
import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useLocalStorage("favorite", []);

  const addFavorite = (longitude, latitude, location) => {
    setFavorite([
      ...favorite,
      {
        location: location,
        longitude: longitude,
        latitude: latitude,
      },
    ]);
  };

  const removeFavorite = (location) => {
    const restFavorite = favorite.filter((local) => {
      return local.location !== location;
    });

    setFavorite(restFavorite);
  };
  return (
    <FavoriteContext.Provider value={{ favorite, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteProvider;
