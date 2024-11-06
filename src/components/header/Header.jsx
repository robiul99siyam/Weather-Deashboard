import { useState } from "react";
import Favourite from "./Favourite";
import FavouriteListModal from "./FavouriteListModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        {/* ============= LOGO Part Here ===================== */}
        <Logo />
        <div className="flex items-center gap-4 relative">
          {/* ================ Search Bar Part Here ============= */}
          <Search />
          {/* ================= Favourite Part Here Now  */}
          <Favourite handleClick={handleClick} />

          {/* ================== Favourite List Model Here Now  */}
          {show && <FavouriteListModal />}
        </div>
      </nav>
    </header>
  );
}
