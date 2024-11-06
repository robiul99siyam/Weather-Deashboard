import { useContext, useState } from "react";
import SearchIogo from "../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import { SearchLocaltionContext } from "../../context";
import { useDebounce } from "../../hooks";
export default function Search() {
  const { setSelectLocation } = useContext(SearchLocaltionContext);
  // =========== Do search Debunceing function ==================>
  const doSearch = useDebounce((tearm) => {
    const filterData = getLocationByName(tearm);
    setSelectLocation({ ...filterData });
  }, 500);
  // ============== hanlde Change function ======================>
  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
