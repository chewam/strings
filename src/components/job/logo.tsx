import Image from "next/image";

import logo from "../../../public/images/php.svg";

const Logo = () => (
  <div>
    <Image width="64" height="64" src={logo} alt="php logo" />
  </div>
);

export default Logo;
