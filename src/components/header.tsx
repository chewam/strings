import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo.svg";

function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center">
        <Image width="120" height="120" alt="company logo" src={logo} />
        <nav className="flex-1 flex justify-evenly">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/#candidates">
            <a>Candidates</a>
          </Link>
          <Link href="/#employers">
            <a>Employers</a>
          </Link>
          <Link href="/#process">
            <a>Process</a>
          </Link>
          <Link href="/#it-expertise">
            <a>IT Expertise</a>
          </Link>
          <Link href="/#team">
            <a>Team</a>
          </Link>
          <Link href="/#remote">
            <a>Remote</a>
          </Link>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </nav>
        <Link href="/submit-cv">
          <a className="btn secondary mr-4">Submit CV</a>
        </Link>
        <button>IT Jobs</button>
      </div>
    </header>
  );
}

export default Header;
