import Image from "next/image";
import MediaQuery from "react-responsive";

export default function News() {
  return (
    <div>

    <div>
      <MediaQuery maxWidth={900}>
        <div className="mainContainer d-flex justify-content-center" style={{height: "100vh"}}>
        <Image
          src={"/images/home/header.png"}
          layout="fill"
          objectFit="contain"
          // quality={100}
          height={567}
          width={1440}
          alt="home page header image"
          priority/>
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
    <div style={{width: '100%', height:"80px", backgroundColor:"#F3A712"}}>

    </div>
    <div className="container my-3 pt-5">
<div>
  <h1 className="mx-4 mx-md-3">News</h1>
</div>
    </div>
    </div>
  );
}

