import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="content flex max-w-screen-xl">
        <Image
          width="150"
          height="150"
          src="/images/logo.svg"
          alt="company logo"
        />
        <nav className="flex-1 flex justify-evenly">
          <Link href="#home">
            <a>Home</a>
          </Link>
          <Link href="#candidates">
            <a>Candidates</a>
          </Link>
          <Link href="#employers">
            <a>Employers</a>
          </Link>
          <Link href="#process">
            <a>Process</a>
          </Link>
          <Link href="#it-expertise">
            <a>IT Expertise</a>
          </Link>
          <Link href="#team">
            <a>Team</a>
          </Link>
          <Link href="#remote">
            <a>Remote</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
          <button>Submit CV</button>
          <button>IT Jobs</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
