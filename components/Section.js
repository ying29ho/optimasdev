import Link from "next/link";
import styles from "../styles/Components.module.css";
// import "../styles/scss/Components.scss";
import cn from "classnames";
import Image from "next/image";
import MediaQuery from "react-responsive";

export const DesktopNewsSection = ({ articles }) => {
  return (
    <div className="p-5 row " style={{ width: "100%" }}>
      <div className="col-md-5" style={{backgroundColor: "#FBF8F6"}}>
        <Image
        className="p-1"
          src={articles.urlToImage}
          width={470}
          height={350}
          alt={articles.altImage}
        />
      </div>
  
      <div className="py-4 px-4 col-md-7">
        <br></br>
        <h3 style={{textTransform: "capitalize"}}>{articles.title}</h3>
        <br></br>
        <h5>
          {articles.source.name} | {articles.publishedAt}
        </h5>
        <br></br>
        <br></br>
        <Link href={articles.url}>
          <a target="_blank" rel="noopener noreferrer">
            Read More &gt;
          </a>
        </Link>
      </div>
    </div>
  );
};

export const MobileNewsSection = ({ articles }) => {
  return (
    <div className="p-5 row d-flex justify-content-center" style={{ width: "100%" }}>
      <div className="col-5">
        <Image
          src={articles.urlToImage}
          width={470}
          height={350}
          alt="aticle image"
        />
      </div>
      <div className="col-7 p-3" >
    
        <h3 style={{textTransform: "capitalize", fontSize: "27px"}}>{articles.title}</h3>
        <br></br>
        <h5 style={{fontSize: "25px"}}>
          {articles.source.name} | {articles.publishedAt}
        </h5>
        <br></br>
        <br></br>
        <Link href={articles.url} >
          <a style={{fontSize: "25px"}} target="_blank" rel="noopener noreferrer">
            Read More &gt;
          </a>
        </Link>
      </div>
    </div>
  );
};

export const InsightsSection = ({ insights }) => {
  return (
    <div className="p-5 row insights" style={{ width: "100%" }}>
      <div className="col-6">
        <h1>{insights.title}</h1>
        <br></br>
        {/* <br></br>

        <br></br> */}
        <div className="row justify-content-center">
          <div className="col">
            <button className="btn btn-outline-primary m-1 px-4"> Tag 1</button>
          </div>
          <div className="col">
            <button className="btn btn-outline-primary m-1 px-4"> Tag 2</button>
          </div>
          <div className="col">
            <button className="btn btn-outline-primary m-1 px-4"> Tag 3</button>
          </div>
          <div className="col-2"></div>
        </div>
        <br></br><br></br>
        <div className="row justify-content-center">
          <div className="col">
            <Image height={100} width={120} src={insights.urlToImage} />
          </div>
          <div className="col my-auto">
            <button className="btn btn-primary ">
              <a
                style={{
                  color: "#FBF8F6",
                  textDecoration: "none",
                  fontWeight: "600",
                  padding: "0 15px",
                }}
                href={insights.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </button>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="col-6">
        <p style={{ fontWeight: "900" }}>{insights.description}</p>
        <p>{insights.subDescription}</p>
      </div>
    </div>
  );
};
