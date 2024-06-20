import UserDetails from "./nav_components/UserDetails";
import SearchBox from "./nav_components/SearchBox";
import Buttons from "./nav_components/Buttons";

export default function Nav() {
  return (
    <div className="h-[10%] w-[85vw] bg-[#77839f] rounded-large flex justify-around items-center mx-auto mt-6 gap-56">
      <UserDetails premiumState={true} />
      <SearchBox />
      <Buttons />
    </div>
  );
}
