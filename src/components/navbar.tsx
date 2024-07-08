import airbnbLogo from "../assets/AirBnb.svg";
import reactLogo from "../assets/react.svg";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 w-full overflow-hidden bg-[#333]">
        <img src={airbnbLogo} alt="airbnbLogo" className="w-40" />
      </nav>
    </>
  );
}
