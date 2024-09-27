import HeroImage from "../assets/img.png";

export default function Hero() {
  return (
    <>
      <div className="flex-box mt-8 pl-20">
        <img src={HeroImage} alt="hero-image" />
      </div>
      <div className="p-10">
        <h1 className="text-5xl font-extrabold"> Online Experience</h1>
        <div className="w-1/3 pt-5">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </div>
      </div>
    </>
  );
}
