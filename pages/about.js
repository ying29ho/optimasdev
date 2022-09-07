// import styles from "../styles/Home.module.css";
// import styles from "../styles/scss/about.scss";

import Image from "next/image";
import { PrimaryButton } from "../components/Buttons";
import { DesktopTeam, MobileTeam } from "../components/Carousel";
import MediaQuery from "react-responsive";
const teamDesc = [
  {
    id: 1,
    img: "/images/about/team/bani.png",
    name: "Bani",
    role: "Founder",
    desc: (
      <p>
        Friends and Family Call me Bani.<br></br>
        <br></br> You may be thinking that once again, you are viewing yet
        another profile of someone who is passionate about Digital Marketing,
        Sports, Technology and Entertainment.<br></br>
        <br></br>We might not have met yet, or may only be an acquaintance, or
        have not seen each other in a while. But, I trust, despite that, we will
        be introduced through our mutual interests and make a valuable
        connection.
      </p>
    ),
    quote: true,
    quoteDesc:
      "Rabbani believes in building Brunei's digital ecosystem towards data-driven marketing in Borneo.",
  },
  {
    id: 2,
    img: "/images/about/team/wafi.png",
    name: "Wafi",
    role: "Digital Marketing Specialist",
    desc: (
      <p>
        Why did the digital marketer get into display advertising?<br></br>
        <br></br>Because he wanted to make a lasting impression.<br></br>
        <br></br>Hello, I am Wafi and I hold a Masters in Digital Marketing and
        a degree in Media Production, allowing me to navigate seamlessly from
        the creative to the strategic and analytical sides of marketing.
        Experiencing marketing internationally as an everyday consumer has
        aligned me to pursue a career with Optimas, in which I intend to help
        create a data-driven borneo.<br></br>
        <br></br>When I&apos;m not working, you can find me in the gym throwing
        punches…<br></br>or getting punched in the face.
      </p>
    ),
    quote: false,

    // quoteDesc: ""
  },
  {
    id: 3,
    img: "/images/about/team/amar.png",
    name: "Amar",
    role: "Business Development Associate",
    desc: (
      <p>
        The team member who has high spirits and ambitious.<br></br>Knows one or
        two dad jokes to make you laugh.<br></br>
        <br></br>She serves as the supporting role in Optimas in creating the
        conversation of AdTech and Martech. <br></br>
        <br></br>With a background in project coordinating and civic engagement.
        She has been in youth based work and has represented Brunei in various
        international and local platforms. And is also active in CrossFit.
      </p>
    ),
    quote: false,
    // quoteDesc: ""
  },
];

function About() {
  return (
    <div>
      <MediaQuery maxWidth={900}>
        <div
          className="mainContainer d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          <Image
            src={"/images/home/header.png"}
            objectFit="contain"
            layout="fill"
            quality={100}
            height={567}
            width={1440}
            alt="optimas header banner"
          />
        </div>
        <div className="about-container px-5 pt-1">
          <div className="hero mx-3 my-5 hero">
            <h1 className="mb-5">Powering the digital movement in Borneo</h1>
            <h2 style={{ fontSize: "40px" }}>
              Optimas is a data-enabled technology platform powering a global
              marketplace for premium advertising
            </h2>
          </div>

          <div className="row purposeimg">
            <div className="col-6 purposevision">
              <div className="purpose mx-5 mt-5">
                <h1>Our Purpose</h1>
                <br></br>
                <p>
                  To create meaningful connections that power the future of
                  advertising.
                </p>
              </div>
              <br></br>
              <br></br>
              <div className="vision mx-5 mb-5">
                <h1>Our Vision</h1>
                <br></br>
                <p>
                  To champion partnerships and create open industry alternative
                  solutions that tackle the greatest challenges for buyers and
                  sellers at the intersection of digital and tv.
                </p>
              </div>
            </div>
            <div className="col-6 shape-container" align="right">
              <Image
                className="shape"
                src={"/images/about/about1.png"}
                // layout="fill"
                width={667}
                height={900}
                alt="optimas image"
              />
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <div className="mainContainer d-flex justify-content-center">
          <Image
            src={"/images/home/header.png"}
            objectFit="contain"
            quality={100}
            height={567}
            width={1440}
            alt="optimas header banner"
          />
        </div>
        <div className="about-container pt-5 mx-5 mt-5">
          <div className="mx-3 my-5 hero">
            <h1 className="mb-5">Powering the digital movement in Borneo</h1>
            <h2 style={{ fontSize: "50px" }}>
              Optimas is a data-enabled technology platform powering a<br></br>
              global marketplace for premium advertising
            </h2>
          </div>

          <div className="row purposeimg">
            <div className="col-6 purposevision">
              <div className="purpose m-5">
                <h1>Our Purpose</h1>
                <br></br>
                <p>To create meaningful</p>
                <p>connections that power the</p>
                <p>future of advertising.</p>
              </div>

              <br></br>

              <div className="vision m-5">
                <h1>Our Vision</h1>
                <br></br>
                <p>To champion partnerships and</p>
                <p>create open industry</p>
                <p>alternative solutions that</p>
                <p>tackle the greatest challenges</p>
                <p>for buyers and sellers at the</p>
                <p>intersection of digital and tv.</p>
              </div>
            </div>
            <div className="col-6" align="right">
              <Image
                className="shape"
                src={"/images/about/about1.png"}
                // layout="fill"
                width={667}
                height={900}
                alt="optimas image"
              />
            </div>
          </div>
        </div>
      </MediaQuery>
      <div className="about-container py-1 mx-5"></div>

      <div className="color whatwedo">
        <div className="subheader mx-5 px-5">
          <h1 className="">What We Do</h1>
        </div>
        <div align="center">
          <Image
            src={"/images/about/whatwedo.jpg"}
            width={1440}
            height={1468}
            alt="optimas background image of a spaceship"
          />
        </div>
        {/* <div className="row mt-5"> */}
        {/* <div className="col-6 m-5 p-5"> */}
        <div className="desc1 pt-3">
          <h2>
            Optimas is the go-to agency for advertising (AdTech) and marketing
            (MarTech) technology in the Borneo region.
          </h2>
        </div>
        <div className="desc2">
          <p className="mb-4">
            We solve the greatest challenges for buyers and sellers by offering
            the only open end-to-end platform for scaled, sophisticated
            campaigns on premium inventory across screens, from OTT to CTV to
            video and more!
          </p>

          <p>
            Our combined assets, including trusted partnerships, powerful
            data-enabled technology and automation, and identity solutions,
            power one of the world’s largest marketplaces for premium
            advertising.
          </p>
        </div>
      </div>
      {/* <div className="col-6">{""}</div> */}
      {/* </div> */}

      <div className="timeline pt-2" align="center">
        {/* <div className="mx-auto px-5" align="center"> */}
        <Image
          src={"/images/about/timeline.png"}
          width={1400}
          height={900}
          alt="optimas timeline"
        />
        {/* </div> */}
      </div>

      <div className="teamheading m-5">
        <div className="row">
          <div className="col-7">
            <h1 className="px-5 pt-5">
              We are a group of passionate digital creators and tech-savvy
              marketers that strive to produce innovative, creative,
              provocative, and inspirational work for our clients.
            </h1>
          </div>
          <div className="col-5">
            <p className="subheading px-5 pt-5 mx-2">
              With our cutting-edge Advertising Serve Solutions and Marketing
              Technology, we will empower our clients with improved digital
              assets to create, target and launch multichannel digital marketing
              campaigns.
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <MediaQuery maxWidth={1120}>
          <MobileTeam teamDesc={teamDesc} />
        </MediaQuery>
        <MediaQuery minWidth={1121}>
          <DesktopTeam teamDesc={teamDesc} />
        </MediaQuery>
      </div>
      {/* <div className="row"> */}

      {/* </div> */}
    </div>
  );
}

export default About;
