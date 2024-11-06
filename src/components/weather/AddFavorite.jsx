import { useContext, useEffect, useState } from "react";
import AddToFavoraiteImage from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavoriteContext, weatherContext } from "../../context";
export default function AddFavorite() {
  const [isFavorite, toggleFavorite] = useState(false);
  const { favorite, addFavorite, removeFavorite } = useContext(FavoriteContext);
  const { weather } = useContext(weatherContext);

  const { longitude, latitude, location } = weather;
  function handleFavorite() {
    const found = favorite.find((local) => local.location === location);
    if (!found) {
      addFavorite(longitude, latitude, location);
    } else {
      removeFavorite(location);
    }
    toggleFavorite(!isFavorite);
  }

  useEffect(() => {
    const found = favorite.find((local) => local.location === location);
    toggleFavorite(found);
  }, []);

  
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? RedHeartIcon : AddToFavoraiteImage} alt="" />
        </button>
      </div>
    </div>
  );
}
