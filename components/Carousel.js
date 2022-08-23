import { useRef, useState } from "react";
import { Parallax, Autoplay, Navigation, Pagination, EffectFade, EffectCreative, A11y, FreeMode, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Components.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Image from "next/image";
import Link from "next/link"
import { PrimaryButton } from "../components/Buttons";


export const Team = ({ teamDesc }) => {
  const paginationRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
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
                          height={609}
                          width={599}
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
          <SwiperSlide
            key={each.id}
           
          >
            <div className="slide-wrapper">
            
                  <div data-swiper-parallax="-500">
                    <h1>{each.name}</h1>
                    <h3>{each.role}</h3>
                  </div>
                  <div className="" data-swiper-parallax="-200">
                    <p>{each.desc}</p>
                  </div>
                  {each.quote === true ? (
                    <div>
                      <p>{each.quoteDesc}</p>
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




export const Carousel = () => {
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
          delay: 3000,
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
            <div className="row pt-5 m-5">
              <div className="col-8 pt-5">
                <div data-swiper-parallax="-500">
                  <h1>Building a data-driven digital Borneo</h1>
                </div>
                <div className="my-5" data-swiper-parallax="-200">
                  <h2>
                    Offering AdTech and MarTech solutions for clear and
                    effeFtive digital campaigns across the region
                  </h2>
                </div>
              </div>
              <div className="col mx-5 align-self-end">
                <Link href="/contact"><PrimaryButton text="Be Part of the Movement"/></Link> 
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.sliderCont1} align="center">
        <Image src={"/images/home/carousel/carousel03.png"} width={1440} height={700} alt="carousel background image" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.sliderCont1} align="center">
        <Image src={"/images/home/carousel/carousel04.png"} width={1440} height={700} alt="carousel background image"/>
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
                <PrimaryButton text="Learn More"  />
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
          <div className={styles.sliderCont}>
            <div className="pt-3 mt-2" align="center">
              <div className="d-flex flex-column" data-swiper-parallax="-500">
                <h1>Connect with prospects and customers</h1>
              </div>
              <div className="mt-2" align="center" data-swiper-parallax="-200">
                <h2>
                  Plan, activate and execute ad and marketing campaigns that
                  speak to specific end users
                </h2>
              <Image
            
              src={"/images/home/connect.png"}
              height={550}
              width={1000}
              alt="carousel background image"
              />
        
              </div><div className="">
              <Link href="/contact">
              <PrimaryButton text="Connect to Explore" />
              </Link>
              </div>
             
            </div>
          </div>
        </SwiperSlide>

        <div className={styles.sliderController}>
          <div className="row justify-content-center">
            <div className="col-4"></div>
            <div className="col-1 text-primary mr-0 " ref={navigationPrevRef}>
              <Image src={"/left-filled-arrow.png"} width={15} height={15} alt="left arrow button for carousel" />
            </div>
            <div className="col text-center " ref={paginationRef}></div>
            <div className="col-1 text-center ml-0 " ref={navigationNextRef}>
              <Image src={"/right-filled-arrow.png"} width={15} height={15} alt="right arrow button for carousel" />
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
