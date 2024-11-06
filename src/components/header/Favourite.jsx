import HeartImage from "../.././assets/heart.svg";
export default function Favourite({handleClick}) {
  return (
    <div onClick={handleClick} className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={HeartImage} alt="heart" />
      <span>Favourite Locations</span>
    </div>
  );
}
