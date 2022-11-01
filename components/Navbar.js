import Link from "next/link";
import Image from "next/image";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLinks } from "./NavLinks";
import { useState } from "react";

export const DesktopNavbar = () => {
  return (
    <nav className="navbar navigation px-3">
      <Link className="navbar-brand" href="/">
        <Image
          className=""
          src={"/OptimasLogo.png"}
          width={225}
          height={97}
          // objectFit="contain"
          alt="optimas brand logo in orange for navbar. click to redirect to homepage"
        />
      </Link>
      <NavLinks />
    </nav>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      className="hamburger"
      size="60px"
      color="#E8554F"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className="hamburger"
      size="60px"
      color="#E8554F"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu =()=> setOpen(false);
  return (
    <nav className="mobile-navigation">
      <Link className="brand" href="/">
        <Image
          className="brand"
          src={"/OptimasLogo.png"}
          width={337}
          height={145}
          // width={281}
          // height={121}
          objectFit="contain"
          alt="optimas brand logo in orange for navbar. click to redirect to homepage"
        />
      </Link>

      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </nav>
  );
};

export const Navbar = () => {
  return (
    <div className="navbar">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};
