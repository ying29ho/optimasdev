import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg px-5 d-flex align-items-start ">
      <div className="container-fluid">
      <Link className="navbar-brand mt-4" href="/">
        <Image className="mt-4" src={"/OptimasLogo.png"} width={170} height={100} objectFit="contain" alt="optimas brang logo in orange for navbar. click to redirect to homepage" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      
      <div
        className="collapse navbar-collapse justify-content-end mt-5"
        id="navbarNav"
      >
        {/* <div className="navbar-nav"> */}
        {/* <Link className="nav-item nav-link" href="/">
        <a className="nav-item nav-link">Home</a>
        </Link> */}
        {/* <div className="navbar-nav me-auto mb-2 mb-lg-0"> */}
          
        <Link className="nav-item" href="/about">
          <a className="nav-link px-5">About Us</a>
        </Link>
        {/* <Link className="nav-item" href="/news">
          <a className="nav-link disabled">News</a>
        </Link>
        <Link className="nav-item" href="/insights">
          <a className="nav-link disabled">Insights</a>
        </Link>
        <Link className="nav-item" href="/solutions">
          <a className="nav-link disabled">Solutions</a>
        </Link> */}
        <Link className="nav-item" href="/contact">
          <a className="nav-link px-5">Contact</a>
        </Link>
        {/* </ul> */}
        </div>
      {/* </div> */}
    </div>
    </nav>
  );
};

export default Navbar;
