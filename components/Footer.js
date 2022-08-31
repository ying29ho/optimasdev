import Image from "next/image";
import Link from "next/link";
import MediaQuery from "react-responsive";

const Footer = () => {
  return (
    <div className="">
      <MediaQuery maxWidth={900}>
        <footer>
          <div className="container p-5">
            <div className="row">
              <div className="col-sm-4 ">
                <div className="">
                  <Link className="footer-brand" href="/">
                    <Image
                      src={"/OptimasLogo.png"}
                      width={225}
                      height={97}
                      alt="optimas brand logo in orange for footer"
                    />
                  </Link>
                  <h3>Lets Connect</h3>
                  <div className="">
               

                  <a
                  className="mx-1"
                    target="_blank"
                    href="https://www.linkedin.com/company/optimas-mgmt"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/socmed/linkedin.png"}
                      width={30}
                      height={30}
                      alt="find optimas on linked in"
                    />
                  </a>
                  <a
                  className="mx-1"
                    target="_blank"
                    href="https://www.facebook.com/OptimasMGMT"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/socmed/fb.png"}
                      width={30}
                      height={30}
                      alt="find optimas on facebook"
                    />
                  </a>
                  <a
                  className="mx-1"
                    target="_blank"
                    href="https://www.instagram.com/optimasmgmt/"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/socmed/ig.png"}
                      width={30}
                      height={30}
                      alt="find optimas on instagram"
                    />
                  </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mt-4">
                <h3>Explore More</h3>
                <div className="row">
                  <a>Careers</a>
                  <Link className="" href="/contact">
                    <a className="">Contact Us</a>
                  </Link>
                </div>
              </div>
              <div className="col-sm-4 mt-4">
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
                    8th Floor PGGMB Building, Jalan Kianggeh, Bandar Seri
                    Begawan, BS8111, Brunei Darussalam
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-1 row justify-content-center">
              Copyright 2022 Optimas MGMT
            </div>
          </div>
        </footer>
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <footer>
          <div className="container p-5">
            <div className="row">
              <div className="col-sm-4 ">
                <h3>Explore More</h3>
                <div className="row">
                  <a>Careers</a>
                  <Link className="" href="/contact">
                    <a className="">Contact Us</a>
                  </Link>
                </div>
              </div>
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
                    8th Floor PGGMB Building, Jalan Kianggeh, Bandar Seri
                    Begawan, BS8111, Brunei Darussalam
                  </div>
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-end ">
                <div className="footer-brand">
                  <Link className="" href="/">
                    <Image
                      src={"/OptimasLogo.png"}
                      width={225}
                      height={97}
                      alt="optimas brand logo in orange for footer"
                    />
                  </Link>
                  <h3>Lets Connect</h3>
                  <div className="">

                 
                  <a
                  className="mx-2"
                    target="_blank"
                    href="https://www.linkedin.com/company/optimas-mgmt"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/socmed/linkedin.png"}
                      width={30}
                      height={30}
                      alt="find optimas on linked in"
                    />
                  </a>
                  <a
                  className="mx-2"
                    target="_blank"
                    href="https://www.facebook.com/OptimasMGMT"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/socmed/fb.png"}
                      width={30}
                      height={30}
                      alt="find optimas on facebook"
                    />
                  </a>
                  <a
                  className="mx-2"
                    target="_blank"
                    href="https://www.instagram.com/optimasmgmt/"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/socmed/ig.png"}
                      width={30}
                      height={30}
                      alt="find optimas on instagram"
                    />
                  </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-4 d-flex justify-content-end">
            
          </div> */}
            </div>
            <div className="mt-5 mb-1 row justify-content-center">
              Copyright 2022 Optimas MGMT
            </div>
          </div>
        </footer>
      </MediaQuery>
    </div>
  );
};

export default Footer;
