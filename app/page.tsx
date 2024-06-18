import Home from "@/app/components/home/home";
import Image from "next/image";
import About from "./components/about/about";

export default function App() {
  return (
    <main className="h-screen">
      <Home />
      <About/>
    </main>
  );
}
