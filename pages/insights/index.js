import Image from "next/image";
import MediaQuery from "react-responsive";
import { NewsSection } from "../../components/Section";
import { insights } from "../api/insights";
import { Pagination } from "../../components/Pagination";
import { InsightsSection } from "../../components/Section";

export default function Insights() {
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
      <div className="container my-3 pt-5">
        <div className="row">
          <h1 className="m-3">Our Work</h1>
          <div className="">
            <form className="form-inline">
              <div className="form-group row justify-content-md-center">
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 1
                </button>
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 2
                </button>
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 3
                </button>
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 4
                </button>
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 5
                </button>
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 6
                </button>
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 7
                </button>
                <button className="btn btn-outline-primary col-md-1 m-1">
                  Tag 8
                </button>
                <div className="col-md-2 m-1">
                  <input
                    // className="form-control mr-sm-2 col-md-8"
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>

                <button
                  className="btn btn-outline-primary col-md-1 m-1"
                  // className="btn btn-outline-primary my-2 my-sm-0 col-md-4"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="container">
              {insights.map((each) => (
                <InsightsSection insights={each} key={each.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
