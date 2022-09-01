import { useRef, useState } from "react";
import {
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCreative,
  A11y,
  FreeMode,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Components.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../components/Buttons";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

export const DesktopTeam = ({ teamDesc }) => {
  const paginationRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="row">
      <div className="col-7 swiper-container thumbs">
        <Swiper
          onSwiper={setThumbsSwiper}
          style={{
            "--swiper-pagination-color": "#E8554F",
          }}
          dir="rtl"
          loop={false}
          centeredSlides={false}
          spaceBetween={-200}
          slidesPerView={3}
          slidesPerGroup={3}
          loopFillGroupWithBlank={true}
          freeMode={true}
          grabCursor={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Pagination, Thumbs]}
          className="mySwiper"
        >
          {teamDesc.map((each) => (
            <SwiperSlide key={each.id} className="swiper-slide">
              <Image
                className=""
                src={each.img}
                alt={each.name}
                height={600}
                width={650}
              />
            </SwiperSlide>
          ))}

          <div className="d-flex justify-content-center pt-5">
            <div className="col"></div>
            <div className="col" align="center" ref={paginationRef}></div>
            <div className="col"></div>
          </div>
        </Swiper>
      </div>
      <div className="col-4 swiper-cont">
        <Swiper
          style={{
            "--swiper-pagination-color": "#E8554F",
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          navigation={false}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = paginationRef.current;
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Pagination]}
          className="mySwiper2"
        >
          {teamDesc.map((each) => (
            <SwiperSlide key={each.id}>
              <div className="slide-wrapper">
                <div data-swiper-parallax="-500">
                  <h1>{each.name}</h1>
                  <h3>{each.role}</h3>
                </div>
                <div className="" data-swiper-parallax="-200">
                  <p>{each.desc}</p>
                </div>
                {each.quote === true ? (
                  <div className="quote">
                    <p style={{ color: "#EE3932" }}>{each.quoteDesc}</p>
                  </div>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export const MobileTeam = ({ teamDesc }) => {
  const paginationRef = useRef(null);
  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-pagination-color": "#E8554F",
          "--swiper-pagination-bullet-size": "13px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        modules={[Parallax, Autoplay, Pagination]}
        loop={true}
        parallax={true}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current;
        }}
      >
        {/* <div className={styles.sliderController}> */}
        <div style={{ top: "0" }}>
          <div className="row justify-content-center">
            <div className="col text-center" ref={paginationRef}></div>
          </div>
        </div>
        {teamDesc.map((each) => (
          <SwiperSlide key={each.id}>
            <div className="px-2">
              <div className="row d-flex justify-content-start">
                <div className="col-6" style={{ zIndex: "99" }}>
                  <div
                    data-swiper-parallax="-500"
                    style={{ height: "655px",width:"551px"}}
                  >
                    <Image
                      className=""
                      src={each.img}
                      alt={each.name}
                      // height={655}
                      // width={550}
                      height={935}
                      width={786}
                      style={{transform: "translate(-38px, -50px)"}}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>
                <div
                  className="col-6"
                  style={{ transform: "translateX(-5px)" }}
                >
                  <div className="my-3" data-swiper-parallax="-300" style={{ paddingTop: "30px"}}>
                    <h1>{each.name}</h1>
                    <h3 style={{ fontSize: "35px" }}>{each.role}</h3>
                    {each.quote === true ? (
                      <div className="quote mt-4 m-2">
                        <p style={{ color: "#EE3932", fontSize: "30px" }}>{each.quoteDesc}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="row" style={{transform: "translateY(-50px"}}>
                <div
                  className="px-4"
                  data-swiper-parallax="-100"
                >
                  <p>{each.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const DesktopCarousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);
  return (
    // <div className={`${styles.sliderWrapper} ${styles.sliderContainer}`}>
    <div className="">
      <Swiper
        style={{
          "--swiper-nagivation-color": "#E8554F",
          "--swiper-pagination-color": "#E8554F",
        }}
        modules={[Parallax, Autoplay, Navigation, Pagination]}
        loop={true}
        parallax={true}
        speed={600}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        spaceBetween={0}
        slidesPerView={1}
        // navigation={(true, { el: ".sliderController" })}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}
      >
        <SwiperSlide>
          <div className={styles.sliderCont}>
            <div className="row pt-5 mx-5">
              <div className="col-8 pt-5">
                <div data-swiper-parallax="-500">
                  <h1>Building a data-driven digital Borneo</h1>
                </div>
                <div className="my-5" data-swiper-parallax="-200">
                  <h2>
                    Offering AdTech and MarTech solutions for clear and
                    effective digital campaigns across the region
                  </h2>
                </div>
              </div>
              <div className="col mx-5 align-self-end">
                <Link href="/contact">
                  <PrimaryButton text="Be Part of the Movement" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderCont}
            align="left"
            style={{
              backgroundImage: "url(/images/home/carousel/carousel03.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="row pt-5 mx-5" align="left">
              <div
                className="pt-5 d-flex flex-column"
                data-swiper-parallax="-500"
              >
                <h1>Managing Effective &amp; Efficient Ads</h1>
              </div>
              <div
                className="my-5"
                align="left"
                data-swiper-parallax="-200"
                style={{ width: "400px" }}
              >
                <h2>
                  We handle ad ops and management so your team always knows how
                  well ads are performing
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderCont}
            align="center"
            style={{
              backgroundImage: "url(/images/home/carousel/carousel04.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="row pt-5 mx-5 " align="left">
              <div
                className="pt-5  d-flex flex-column"
                data-swiper-parallax="-500"
              >
                <h1>Improving, Optimising, Thriving</h1>
              </div>
              <div
                className="my-5"
                align="left"
                data-swiper-parallax="-200"
                style={{ width: "500px" }}
              >
                <h2>
                  Helping you pick the end-to-end solutions from creation,
                  targeting and execution to meet your campaign objectives and
                  maximise results
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.sliderCont1}>
            <div className="row pt-5 mx-5 mb-5">
              <div className="col-6 mt-5">
                <div data-swiper-parallax="-500">
                  <h1>Discover opportunities with insights</h1>
                </div>
                <div className="my-5" data-swiper-parallax="-200">
                  <h2>
                    Using simple yet impactful key data to reach audiences,
                    allowing smarter monetisation of your platform and better
                    yield on ads
                  </h2>
                </div>
                <Link href="/contact">
                  <PrimaryButton text="Learn More" />
                </Link>
              </div>
              <div className="col">
                {" "}
                <Image
                  src="/images/home/discover-insights.png"
                  width={684}
                  height={594}
                  alt="carousel background image"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderCont}
            style={{
              backgroundImage: "url(/images/home/carousel/carousel05.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="row pt-5 mx-5 " align="center">
              <div
                className="pt-5 d-flex flex-column"
                data-swiper-parallax="-500"
              >
                <h1>Connect with prospects and customers</h1>
              </div>
              <div className="mt-2" align="center" data-swiper-parallax="-200">
                <h2>
                  Plan, activate and execute ad and marketing campaigns that
                  speak to specific end users
                </h2>
                {/* <Image
                  src={"/images/home/connect.png"}
                  height={550}
                  width={1000}
                  alt="carousel background image"
                /> */}
              </div>
              {/* <div className="">
                <Link href="/contact">
                  <PrimaryButton text="Connect to Explore" />
                </Link>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <div className={styles.sliderController}>
          <div className="row justify-content-center">
            <div className="col-4"></div>
            <div className="col-1 text-primary mr-0" ref={navigationPrevRef}>
              <RiArrowLeftSFill size="35px" color="#E8554F" />
            </div>
            <div className="col text-center" ref={paginationRef}></div>
            <div className="col-1 text-center ml-0" ref={navigationNextRef}>
              <RiArrowRightSFill size="35px" color="#E8554F" />
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export const MobileCarousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);
  return (
    // <div className={`${styles.sliderWrapper} ${styles.sliderContainer}`}>
    <div className={styles.sliderWrapperMobile}>
      <Swiper
        style={{
          "--swiper-pagination-color": "#E8554F",
          "--swiper-pagination-bullet-size": "13px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        modules={[Parallax, Autoplay, Navigation, Pagination]}
        loop={true}
        parallax={true}
        speed={600}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        spaceBetween={0}
        slidesPerView={1}
        // navigation={(true, { el: ".sliderController" })}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}
      >
        <SwiperSlide>
          <div className={styles.sliderCont1Mobile}>
            <div className="row pt-5 mx-5" style={{ top: "30vh" }}>
              <div className="py-5">
                <div data-swiper-parallax="-500">
                  <h1>Building a data-driven digital Borneo</h1>
                </div>
                <div
                  className="my-5"
                  data-swiper-parallax="-200"
                  style={{ width: "600px", fontSize: "40px" }}
                >
                  <h2 style={{ fontSize: "40px" }}>
                    Offering AdTech and MarTech solutions for clear and
                    effective digital campaigns across the region
                  </h2>
                </div>
              </div>
              <div className="mt-5 x-5 px-5" align="right">
                <Link href="/contact">
                  <PrimaryButton text="Be Part of the Movement" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderContMobile}
            align="left"
            style={{
              backgroundImage: "url(/images/home/carousel/carousel03.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="row pt-5 mx-5" align="left">
              <div
                className="pt-5 d-flex flex-column"
                data-swiper-parallax="-500"
              >
                <h1>Managing Effective &amp; Efficient Ads</h1>
              </div>
              <div
                className="my-5"
                align="left"
                data-swiper-parallax="-200"
                style={{ width: "400px" }}
              >
                <h2 style={{ fontSize: "40px" }}>
                  We handle ad ops and management so your team always knows how
                  well ads are performing
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderContMobile}
            align="center"
            style={{
              backgroundImage: "url(/images/home/carousel/carousel04.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="row pt-5 mx-5 " align="left">
              <div
                className="pt-5  d-flex flex-column"
                data-swiper-parallax="-500"
              >
                <h1>Improving, Optimising, Thriving</h1>
              </div>
              <div
                className="my-5"
                align="left"
                data-swiper-parallax="-200"
                style={{ width: "550px" }}
              >
                <h2 style={{ fontSize: "40px" }}>
                  Helping you pick the end-to-end solutions from creation,
                  targeting and execution to meet your campaign objectives
                  <br></br> and maximise results
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={styles.sliderContMobile}
            style={{
              backgroundImage: "url(/images/home/carousel/carousel02.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="row pt-5 mx-5 mb-5">
              <div className="mt-5">
                <div data-swiper-parallax="-500">
                  <h1>Discover opportunities with insights</h1>
                </div>
                <div
                  className="my-5"
                  data-swiper-parallax="-200"
                  style={{ width: "500px" }}
                >
                  <h2 style={{ fontSize: "40px" }}>
                    Using simple yet impactful key data to reach audiences,
                    allowing smarter monetisation of your platform and better
                    yield on ads
                  </h2>
                </div>
                <Link href="/contact">
                  <PrimaryButton text="Learn More" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={styles.sliderContMobile}
            style={{
              backgroundImage: "url(/images/home/carousel/carousel05.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="row pt-5 mx-5 " align="center">
              <div
                className="pt-5 d-flex flex-column"
                data-swiper-parallax="-500"
              >
                <h1>Connect with prospects and customers</h1>
              </div>
              <div className="mt-5" align="center" data-swiper-parallax="-200">
                <h2 style={{ fontSize: "40px" }}>
                  Plan, activate and execute ad and marketing campaigns that
                  speak to specific end users
                </h2>
                {/* <Image
                  src={"/images/home/connect.png"}
                  height={550}
                  width={1000}
                  alt="carousel background image"
                /> */}
              </div>
              {/* <div className="">
                <Link href="/contact">
                  <PrimaryButton text="Connect to Explore" />
                </Link>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <div className={styles.sliderController}>
          <div className="row justify-content-center">
            <div className="col-4"></div>
            <div
              className="col-1 text-primary mr-0 "
              ref={navigationPrevRef}
            ></div>
            <div className="col text-center " ref={paginationRef}></div>
            <div
              className="col-1 text-center ml-0 "
              ref={navigationNextRef}
            ></div>
            <div className="col-4"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
