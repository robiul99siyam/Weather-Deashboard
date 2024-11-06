import { useContext } from "react";
import { FavoriteContext, SearchLocaltionContext } from "../../context";

export default function FavouriteListModal() {
  const { favorite } = useContext(FavoriteContext);
  const { setSelectLocation } = useContext(SearchLocaltionContext);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorite.map((fav) => {
          const { location, latitude } = fav;
          return (
            <li key={latitude} className="hover:bg-gray-200">
              <a onClick={() => setSelectLocation({ ...fav })}>
                {location}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
