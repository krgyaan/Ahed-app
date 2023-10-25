import Navbar from "./Navbar/page";
import HomePage from "./HomePage/page"
import Logo from '../public/logo.png'
import EQbeatsIQ from "./EQIQ/page";
import SoundsFamiliar from "./SoundsFamiliar/page";

export default function Home() {
  const navLinks = [
    { name: "Emotion", url: "/emotion" },
    { name: "Manifesto", url: "/manifesto" },
    { name: "Self-awareness test", url: "/self-awareness-test" },
    { name: "Work With Us", url: "/work-with-us" },
  ];
  return (
    <div>
      <Navbar logo={Logo} links={navLinks} button="Download" />
      <HomePage title="Ahead app" />
      <EQbeatsIQ />
      <SoundsFamiliar />
    </div>
  )
}
