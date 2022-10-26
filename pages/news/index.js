import Image from "next/image";
import MediaQuery from "react-responsive";
import {
  DesktopNewsSection,
  MobileNewsSection,
} from "../../components/Section";
import { articles } from "../api/articles";
import { Pagination } from "../../components/Pagination";

export default function News() {
  return (
    <div>
      <div>
        <MediaQuery maxWidth={900}>
          <div
            className="mainContainer d-flex justify-content-center"
            style={{ height: "100vh" }}
          >
            <Image
              src={"/images/home/header.png"}
              layout="fill"
              objectFit="contain"
              // quality={100}
              height={567}
              width={1440}
              alt="home page header image"
              priority
            />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={901}>
          <div className="mainContainer d-flex justify-content-center">
            <Image
              src={"/images/home/header.png"}
              // layout="fill"
              objectFit="contain"
              // quality={100}
              height={567}
              width={1440}
              // layout="responsive"
              alt="home page header image"
            />
          </div>
        </MediaQuery>
      </div>
      {/* <div
        style={{ width: "100%", height: "80px", backgroundColor: "#F3A712" }}
      ></div> */}
      <div className="container my-3 pt-5">
        <div className="row">
          <h1 className="m-3">News</h1>
          <div className="justify-content-center">
            <MediaQuery maxWidth={900}>
              {articles.map((each) => (
                <>
                  <MobileNewsSection articles={each} />
                </>
              ))}
              {/* </div> */}
            </MediaQuery>
            <MediaQuery minWidth={901}>
              {/* <div className="justify-content-center"> */}
              {articles.map((each) => (
                <>
                  <DesktopNewsSection articles={each} />
                </>
              ))}
            </MediaQuery>
          </div>
        </div>
      </div>
    </div>
  );
}
