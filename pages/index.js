import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { DisplayCard, FlipCard, SolutionCard } from "../components/Card";
import MediaQuery from "react-responsive";


import { DesktopCarousel, MobileCarousel } from "../components/Carousel";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PrimaryButton } from "../components/Buttons";

const cardContentTop = [
  {
    id: 1,
    front: "Ads operation & management",
    back: "Take full advantage of the regional AdTech ecosystem, improve customer experience and achieve your business goals.",
    img: "/images/home/solutions/adsmgmt.png",
  },
  {
    id: 2,
    front: "Digital Presence Advisory & Support",
    back: "Plan, develop and improve your digital presence through MarTech solutions that align with your objectives.",
    img: "/images/home/solutions/plandevelopimprove.png",
  },
];

const cardContentBottom = [
  {
    id: 3,
    front: "Market Insights & Actionable Recommendations",
    back: "Get clarity from raw data that has been converted into powerful insights as benchmarked against best practices.",
    img: "/images/home/solutions/marketinsights.png",
  },
  {
    id: 4,
    front: "Media Trading",
    back: "Connect with end users through a premium inventory of media broadcasters and a variety of video and other ad formats that suit your needs.",
    img: "/images/home/solutions/mediatrading.png",
  },
];
const sliderContent = [
  {
    id: 1,
    title: "Building a data-driven digital Borneo",
    quote:
      "Offering AdTech and MarTech solutions for clear and effective digital campaigns across the region",
    hasImg: false,
    alt: "Data driven borneo",
    hasButton: true,
    buttonText: "Be Part of The Movement",
    buttonLink: "/contact",
  },
  {
    id: 2,
    title: "Managing effective and efficient ads ",
    quote:
      "Handling ad ops and management so your team always knows how well ads are performing",
    img: "/images/2.jpg",
    alt: "ads management",
    buttonText: "Gain A Team!",
  },
  {
    id: 3,
    title: "Improving, optimising, thriving",
    quote:
      "Helping you pick the end-to-end solutions from creation, targeting and execution to meet your campaign objectives and maximise results",
    img: "/images/3.jpg",
    alt: "improve, optimise, grow",
    buttonText: "Let's Grow Together",
  },
  {
    id: 4,
    title: "Discover opportunities with insights",
    quote:
      "Using simple yet impactful key data to reach audiences, allowing smarter monetisation of your platform and better yield on ads",
    img: "/images/4.jpg",
    alt: "improve, optimise, grow",
    buttonText: "Learn More",
  },
  {
    id: 5,
    title: "Connect with prospects and customers",
    quote:
      "Plan, activate and execute ad and marketing campaigns that speak to specific end users",
    img: "/images/5.jpg",
    alt: "improve, optimise, grow",
    buttonText: "Choose A Plan",
  },
];

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
      <meta
          name="description"
          content="Optimas, Building a Digital Brunei Adtech Ecosystem. We are a Digital Marketing Agency based in Brunei who cater to Borneo. We are able to help you buy and sell online ads and run digital marketing campaigns."
        />
          <meta name="keywords" content="Digital marketing agency brunei, Digital marketing brunei, Digital ads brunei,Digital marketing agency brunei, online marketing brunei, online ads brunei, buy ads brunei, sell ads brunei"/>
      {/* <meta property="og:title" content="Optimas"/>
        <meta property="og:description" content="Building a Digital Brunei Adtech Ecosystem"/>
        <meta property="og:image" content="/OptimasLogo.png"/>
        <meta property="og:url" content="https://www.optimasmgmt.com/"/>
        <meta property="og:type" content="website"/> */}
        {/* <title>Optimas</title> */}

        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}
      </Head>

      <Script
        id="next js script"
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></Script>
      <Script
        id="next js script"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      ></Script>
     
      <div className="">
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
          <MobileCarousel />
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
          <DesktopCarousel />
        </MediaQuery>
      </div>
      <div className="container my-3 pt-5">
        {/* <div className={styles.main}> */}
        {/* <div className={styles.container}> */}
        {/* <div> */}
        <div>
          <h1 className="mx-4 mx-md-3">Our Solutions</h1>
          <div className="row">
            {cardContentTop.map((each) => (
              <SolutionCard key={each.id} card={each} />
            ))}
          </div>
          <div className="row mb-5">
            {cardContentBottom.map((each) => (
              <SolutionCard key={each.id} card={each} />
            ))}
          </div>
        </div>

        {/* </div> */}
        {/* <div className={styles.grid}> */}

        {/* </div> */}
      </div>
      <div className="container my-3 pb-5">
        {/* <div className=""> */}
        <h1 className="mx-4 mx-md-3">Our Partners &amp; Clients</h1>
        {/* </div> */}
        {/* <div className={styles.partners}>
          <div className={styles.grid}> */}
        <div className="m-5 p-5d-flex justify-content-center" align="center">
          <div className="row align-items-center">
            <a
              className="col"
              target="_blank"
              href="https://www.mavens.live/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/Mavensdotlive.png"}
                width={266}
                height={50}
                alt="mavens dot live logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://www.rtbgo.bn/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/RTB.png"}
                width={78.4}
                height={66.5}
                alt="r t b logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://www.ipsb.com.my/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/iPSB-tech.png"}
                width={100}
                height={54.6}
                alt="i p s b logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://brunei.events/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/brunei-events.png"}
                width={241}
                height={34}
                alt="brunei events logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://www.instagram.com/begawanathlete/?hl=en"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/begawan-athlete.png"}
                width={266}
                height={56}
                alt="begawan athelete logo"
              />
            </a>
          </div>
          <div className="row align-items-center">
            <a
              className="col"
              target="_blank"
              href="https://www.coffeebeanbrunei.com/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/cbtl.png"}
                width={89}
                height={90}
                alt="coffee bean tea leaf logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://www.facebook.com/hartanahimpianika/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/hartanah-impianika.png"}
                width={90}
                height={90}
                alt="hartanah impianika logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://nissan.com.bn/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/Nissan.png"}
                width={97}
                height={97}
                alt="nissanlogo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://www.omnisportsinternational.com/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/Omni-Sports.png"}
                width={162}
                height={161}
                alt="omni sports logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://www.progresif.com/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/Progresif.png"}
                width={162}
                height={161}
                alt="progresiflogo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://thescoop.co/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/thescoop.png"}
                width={150}
                height={149}
                alt="the scoop logo"
              />
            </a>
            <a
              className="col"
              target="_blank"
              href="https://youtraining.sg/"
              rel="noopener noreferrer"
            >
              <Image
                src={"/brands/You.png"}
                width={172}
                height={172}
                alt="you logo"
              />
            </a>
          </div>

          {/* </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
