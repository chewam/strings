import Image from "next/image";

import logo from "../../public/images/logo.svg";

function Footer() {
  return (
    <footer className="pb-20">
      <div className="container mx-auto flex items-center justify-between border-t border-black mt-8 text-sm">
        <div>Strings 2021 © All rights reserved</div>
        <Image width="60" height="60" alt="company logo" src={logo} />
      </div>
    </footer>
  );
}

export default Footer;
