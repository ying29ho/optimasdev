import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { Field, useFormik, FormikProvider } from "formik";
import * as yup from "yup";
import { SubmitButton, MobileSubmitButton } from "../../components/Buttons";
import MediaQuery from "react-responsive";
import { CgClose } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import {
  PrimaryButton,
  SecondaryButton,
  MobilePrimaryButton,
} from "../../components/Buttons";
import Link from "next/link";

function Dbate() {
  <Head>
    <title>Optimas - Optimas - Digital Marketing Agency in Brunei</title>
    <meta
      property="og:title"
      content="Optimas - Building a Digital Brunei Adtech Ecosystem"
    />
    <meta
      property="og:description"
      content="Optimas, Building a Digital Brunei Adtech Ecosystem. We are a Digital Marketing Agency based in Brunei who cater to Borneo. We are able to help you buy and sell online ads and run digital marketing campaigns."
    />
    <meta
      property="og:image:secure_url"
      itemProp="image"
      content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/eventgraphicsfb.png"
    />
    <meta property="og:image:width" content="252" />
    <meta property="og:image:height" content="111" />
    <meta
      property="og:url"
      content="https://www.optimasmgmt.com/events/8YrHJivGVmt"
    />
    <meta property="og:type" content="article" />
  </Head>;
  const [msge, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const closeIcon = (
    <CgClose
      className="close"
      size="15px"
      color="#262626"
      onClick={() => setSubmitted(false)}
    />
  );
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      company: "",
      jobtitle: "",
      workshop1: false,
      workshop2: false,
      workshop3: false,
      workshop4: false,
      notinterested: false,
      terms: false,
    },

    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        fetch("/api/event", {
          method: "post",
          body: JSON.stringify(values),
        });
        setMessage(
          "Success! Your registration is received. Our team will confirm your reservation status via mail."
        );
        setSubmitted(true);
        resetForm({ values: "" });
        setSubmitting(false);
        window.scrollTo(0, 0);
      }, 1000);
    },
    validationSchema: yup.object({
      firstName: yup.string().trim().required("First name is required"),
      lastName: yup.string().trim().required("Last name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      number: yup.number().required("Valid contact number is required"),
      company: yup.string().trim().required("Company name is required"),
      terms: yup.bool().oneOf([true], "You must agree to our terms"),
      // requests: yup.array().oneOf([true], "Please tell us how we can help")
    }),
  });
  return (
    <div>
      <FormikProvider value={formik}>
        <MediaQuery maxWidth={900}>
          <div
            className="mainContainer2 d-flex justify-content-center"
            style={{ height: "100vh" }}
          >
            <Image
              className="fixed-bottom"
              src={"/images/event/header.png"}
              objectFit="contain"
              quality={100}
              height={567}
              width={1440}
              alt="optimas digital brunei adtech ecosystem header image"
            />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={901}>
          <div className="mainContainer2 d-flex justify-content-center">
            <Image
              className="fixed-bottom"
              src={"/images/event/header.png"}
              objectFit="contain"
              quality={100}
              height={567}
              width={1440}
              alt="event page header image"
            />
          </div>
        </MediaQuery>
        <div className="container">
          <div className="row">
            <MediaQuery maxWidth={900}>
              <div className="p-3 m-3">
                
                <h3>
                      <span
                        style={{
                          color: "#262626",
                          fontWeight: "400",
                          fontSize: "70px",
                        }}
                      >
                        Explore the Digital Media Landscape of Borneo!
                      </span>
                    </h3>
                    <br></br><br></br><br></br>
                <div className="mx-4 py-1 px-4">
                  {/* <div className="text-center">
                    <Image
                      src={"/images/event/eventprogram300922.png"}
                      objectFit="contain"
                      quality={100}
                      height={750}
                      width={750}
                      alt="event day details"
                    />
                  </div> */}

                  <p>
                        The "Digital Brunei Advertising Technologies Ecosystem",
                        or{" "}
                        <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                          DBATE
                        </span>
                        , is a platform dedicated to embracing experiences and
                        seizing untapped opportunities in the fields of AdTech &
                        MarTech.
                        <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                          #DBATE2023
                        </span>{" "}
                        marks the second instalment in this series.
                      </p>

                      <p>
                        The two-day event will feature panel sessions,
                        presentations, workshops, fireside chats, and networking
                        sessions. It is expected to draw 500 attendees,
                        including publishers, agencies, and brands to discuss
                        digital media in and around Borneo.
                      </p>

                      <div className="text-center">
                    <Image
                      src={"/images/event/bar.png"}
                      objectFit="contain"
                      quality={100}
                      height={550}
                      width={1000}
                      alt="event day details"
                    />
                  </div>
                  <div className="text-center">
                    <Image
                      src={"/images/event/our_partners.png"}
                      objectFit="contain"
                      quality={100}
                      height={550}
                      width={1000}
                      alt="our partners"
                    />
                  </div>
                  <br></br><br></br>
                  <div align="center">
                    <Link href="https://forms.gle/7BHAvhiq4gHncFMJ8">
                      <PrimaryButton text="Register Now" />
                    </Link>
                  </div>
                  <br></br><br></br>
                  <br></br><br></br><br></br><br></br>
                  <div>
                    <h1>Program To Be Announced Soon</h1>
                  </div>
                  <br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                {/* <div className="p-5" align="center">
                  <h1> TEST</h1>
                  <p>
                    Thank you for your interest in joining{" "}
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      #DBATE
                    </span>
                    . Unfortunately, registration has been closed due to high
                    demand. We hope to see you in our future events.
                  </p>
                </div> */}
              </div>
            </MediaQuery>
            <MediaQuery minWidth={901}>
              {/* <div className="row pt-5 overlayContainer">
                <div className="overlay-text">
                  <h1>
                    <span style={{ color: "#262626", fontWeight: "400" }}>
                      Explore the Digital Media Landscape of Borneo!
                    </span>
                  </h1>
                </div>
                <Image
                  src={"/images/event/borneo_line_map.png"}
                  alt="borneo map"
                  layout="responsive"
                  width={650}
                  height={650}
                />
              </div> */}
              <div className="overlayContainer">
                <div className="row pt-5">
                  <Image
                    style={{ translate: ("0px", "-40%") }}
                    className="overlay-img"
                    src={"/images/event/borneo_line_map.png"}
                    objectFit="contain"
                    quality={100}
                    height={1080}
                    width={1920}
                    // layout="responsive"
                    alt="borneo map"
                  />
                </div>
                <div className="row pt-5" style={{ height: "50px" }}>
                  <div
                    className="col-6 overlayContainer"
                    style={{ top: "-800px" }}
                  >
                    <h3 className="overlay-text">
                      {/* <h3> */}
                      <span
                        style={{
                          color: "#262626",
                          fontWeight: "400",
                          fontSize: "70px",
                        }}
                      >
                        Explore the Digital Media Landscape of Borneo!
                      </span>
                    </h3>
                    {/* <Image
                //   style={{translate: ("0px", "150px")}}
                    className="overlay-img"
                    src={"/images/event/borneo_line_map.png"}
                    objectFit="contain"
                    quality={100}
                    height={1080}
                    width={1920}
                    alt="event day details"
                  /> */}
                  </div>

                  <div
                    className="col-6 overlayContainer"
                    style={{ top: "-800px" }}
                  >
                    {/* <Image
                    className="overlay-img2"
                    src={"/images/event/borneo_line_map.png"}
                    objectFit="contain"
                    quality={100}
                    height={750}
                    width={750}
                    alt="event day details"
                  /> */}
                    <div className="p-2 mx-auto" align="left">
                      <p>
                        The "Digital Brunei Advertising Technologies Ecosystem",
                        or{" "}
                        <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                          DBATE
                        </span>
                        , is a platform dedicated to embracing experiences and
                        seizing untapped opportunities in the fields of AdTech &
                        MarTech.
                        <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                          #DBATE2023
                        </span>{" "}
                        marks the second instalment in this series.
                      </p>

                      <p>
                        The two-day event will feature panel sessions,
                        presentations, workshops, fireside chats, and networking
                        sessions. It is expected to draw 500 attendees,
                        including publishers, agencies, and brands to discuss
                        digital media in and around Borneo.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="row overlayContainer"
                  style={{ height: "50px" }}
                >
                  <div>
                    <Image
                      className="overlay-img2"
                    //   style={{ top: "-800px" }}
                      src={"/images/event/bar.png"}
                      objectFit="contain"
                      quality={100}
                      height={1080}
                      width={1920}
                      //   layout="responsive"
                      alt="event details"
                    />
                  </div>
                </div>
                {/* </div> */}
              </div>
              <div className="row pb-5">
                <div className="col p-5" align="center">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  {/* <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br> */}
                </div>
              </div>
              <div className="row pb-5" align="center">
                <div>
                  <Image
                    src={"/images/event/our_partners.png"}
                    objectFit="contain"
                    quality={100}
                    height={1008}
                    width={1913}
                    alt="event details"
                  />
                  <br></br>
                <br></br>
                <br></br>
                <br></br>
                  <div style={{ marginRight: "75%" }}>
                    <Link href="https://forms.gle/7BHAvhiq4gHncFMJ8">
                      <PrimaryButton text="Register Now" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row pb-5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
              </div>
              <div className="row pb-5" align="center">
                <h1>Program To Be Announced Soon</h1>
              </div>

              <div className="row pb-5">
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </MediaQuery>
          </div>
        </div>
      </FormikProvider>
    </div>
  );
}

export default Dbate;
