import Navbar from "./components/navbar";
import Hero from "./components/hero.tsx";

export default function App() {
  return (
    <>
      <main className="min-h-screen">
          <Navbar />
            <Hero/>
      </main>
    </>
  );
}
