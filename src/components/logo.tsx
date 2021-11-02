import Image from "next/image";

import logo from "../../public/images/logo.svg";

const Logo = ({
  width = 120,
  height = 120,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      priority
      src={logo}
      width={width}
      height={height}
      alt="Strings IT recuitment logo"
    />
  );
};

export default Logo;
