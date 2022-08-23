import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (

    <footer>
      <div className="container p-5">
        <div className="row">
          <div className="col-sm-4 ">
            <h3>Contact Us</h3>
            <div className="row">
              <div className="col-4">Phone:</div>
              <div className="col-8">+673 236 7069</div>
            </div>
            <div className="row">
              <div className="col-4">Email:</div>
              <div className="col-8">info@optimasmgmt.com</div>
            </div>
            <div className="row">
              <div className="col-4">Address:</div>
              <div className="col-8">
                8th Floor PGGMB Building, Jalan Kianggeh, Bandar Seri Begawan,
                BS8111, Brunei Darussalam
              </div>
            </div>
          </div>
          <div className="col-sm-4 ">
            <h3>Lets Connect</h3>
            <a>LinkedIn | </a>
            <a>Facebook | </a>
            <a>Instagram </a>
            <br></br>
             <a>Careers</a>
          </div>
          <div className="col-sm-4 d-flex justify-content-end">
            <Link className="" href="/">
              <Image src={"/OptimasLogo.png"} width={180} height={80} objectFit="contain" alt="optimas brand logo in orange for footer" />
            </Link>
          </div>
        </div>
        <div className="mt-5 mb-1 row justify-content-center">
          Copyright 2022 Optimas MGMT
        </div>
        </div>
      
    </footer>
     
  );
};

export default Footer;
