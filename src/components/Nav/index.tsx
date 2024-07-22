import "./index.css";
import Link from "next/link";
import Image from "next/image";

import logo from "./logo.png";

export default function Nav() {
  return (
    <nav className="nav_container">
      <Link href="/">
        <Image src={logo} alt="ABC Health Systems logo" />
      </Link>
    </nav>
  );
}
