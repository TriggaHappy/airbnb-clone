import airbnbLogo from "../assets/AirBnb.svg";

export default function Navbar() {
  return (
    <>
      <nav className="block top-0 w-full overflow-hidden shadow-md h-70 top-nav z-50">
        <img src={airbnbLogo} alt="airbnbLogo" className="w-40 pl-10 py-5" />
      </nav>
    </>
  );
}
