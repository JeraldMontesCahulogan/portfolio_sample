import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">

      {/* logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>

      {/* navigation links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaLinkedin />
        <FaLinkedin />
        <FaLinkedin />
      </div>
    </nav>
  )
}