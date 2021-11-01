import Image from "next/image";

import logo from "../../public/images/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div>Strings 2021 © All rights reserved</div>
        <div className="logo"></div>
        {/* <Image width="60" height="60" alt="company logo" src={logo} /> */}
      </div>
    </footer>
  );
}

export default Footer;
