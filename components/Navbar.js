import Link from "next/link";
import Image from "next/image";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLinks } from "./NavLinks";
import { useState } from "react";

// export const Navbar = () => {
//   return (
//     <nav className="navbar fixed-top navbar-expand-lg px-5 d-flex align-items-start ">
//       <div className="container-fluid">
//       <Link className="navbar-brand mt-4" href="/">
//         <Image className="mt-4" src={"/OptimasLogo.png"} width={170} height={100} objectFit="contain" alt="optimas brang logo in orange for navbar. click to redirect to homepage" />
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div
//         className="collapse navbar-collapse justify-content-end mt-5"
//         id="navbarNav"
//       >
//         {/* <div className="navbar-nav"> */}
//         {/* <Link className="nav-item nav-link" href="/">
//         <a className="nav-item nav-link">Home</a>
//         </Link> */}
//         {/* <div className="navbar-nav me-auto mb-2 mb-lg-0"> */}

//         <Link className="nav-item" href="/about">
//           <a className="nav-link px-5">About Us</a>
//         </Link>
//         {/* <Link className="nav-item" href="/news">
//           <a className="nav-link disabled">News</a>
//         </Link>
//         <Link className="nav-item" href="/insights">
//           <a className="nav-link disabled">Insights</a>
//         </Link>
//         <Link className="nav-item" href="/solutions">
//           <a className="nav-link disabled">Solutions</a>
//         </Link> */}
//         <Link className="nav-item" href="/contact">
//           <a className="nav-link px-5">Contact</a>
//         </Link>
//         {/* </ul> */}
//         </div>
//       {/* </div> */}
//     </div>
//     </nav>
//   );
// };

export const DesktopNavbar = () => {
  return (
    <nav className="navbar navigation px-5">
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
