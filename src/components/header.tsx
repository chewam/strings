import Link from "next/link";

import Logo from "@/components/logo";

function Header({ noBackground = false }: { noBackground?: boolean }) {
  return (
    <header className={noBackground ? "no-background" : ""}>
      <div className="container mx-auto flex items-center">
        <Logo />
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
        <Link href="/jobs">
          <a className="btn">IT Jobs</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
