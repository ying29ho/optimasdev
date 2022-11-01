import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { Field, useFormik, FormikProvider } from "formik";
import * as yup from "yup";
import { SubmitButton, MobileSubmitButton } from "../../components/Buttons";
import MediaQuery from "react-responsive";
import { CgClose } from "react-icons/cg";

function Oct() {
  <Head>
    <title>Optimas - Optimas - Digital Marketing Agency in Brunei</title>
    <meta property="og:title" content="Optimas - Building a Digital Brunei Adtech Ecosystem" />
    <meta
      property="og:description"
      content="Building a Digital Brunei Adtech Ecosystem"
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
              src={"/images/event/finaleventbanner.png"}
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
              src={"/images/event/finaleventbanner.png"}
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
              <div>
                <h1 className="p-3 m-3">
                  Join The #DigitalBrunei<br></br>Adtech Ecosystem
                </h1>
                <div className="mx-4 py-1 px-4">
                  <div className="text-center">
                    <Image
                      src={"/images/event/eventprogram300922.png"}
                      objectFit="contain"
                      quality={100}
                      height={750}
                      width={750}
                      alt="event day details"
                    />
                  </div>

                  <p>
                    Good news! We&apos;re here to bring you The{" "}
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      #DigitalBrunei
                    </span>{" "}
                    Adtech Ecosystem Networking Event (
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      #DBATE2022
                    </span>
                    ).
                  </p>

                  <br></br>
                  <br></br>
                  <p>
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      Event:{" "}
                    </span>
                    Panel Discussion and Networking Session
                  </p>

                  <p>
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      Date:{" "}
                    </span>
                    Wednesday, 5 October 2022
                  </p>

                  <p>
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      Venue:{" "}
                    </span>
                    Ruang, Yayasan Complex, Bandar Seri Begawan
                  </p>
                  <br></br>
                  <br></br>

                  <p>
                    Introducing the{" "}
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      #DigitalBrunei
                    </span>{" "}
                    Advertising Technology (AdTech) Ecosystem Networking Event,{" "}
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      #DBATE
                    </span>{" "}
                    for short, an in-person full-day experience that includes
                    panel discussions, industry networking opportunities, news,
                    insights and, most importantly, conversations that will
                    propel a greater grasp and thereby elicit new opportunities
                    in the exciting area of digital marketing in Brunei and
                    beyond.
                  </p>
                  <br></br>
                  <br></br>
                </div>
                <div className="p-5" align="center">
                <h1> Registration closed</h1>
                  <p>
                    Thank you for your interest in joining{" "}
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      #DBATE
                    </span>
                    . Unfortunately, registration has been closed due to high
                    demand. We hope to see you in our future events.
                  </p>    
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={901}>
              <div className="row pt-5">
                <div className="col-6">
                  <h1>Join The #DigitalBrunei Adtech Ecosystem</h1>
                  <div className="p-2 mx-auto" align="ceter">
                    <p>
                      Good news! We&apos;re here to bring you The{" "}
                      <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                        #DigitalBrunei
                      </span>{" "}
                      Adtech Ecosystem Networking Event (
                      <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                        #DBATE2022
                      </span>
                      ).
                    </p>

                    <br></br>
                    <br></br>

                    <p>
                      Introducing the{" "}
                      <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                        #DigitalBrunei
                      </span>{" "}
                      Advertising Technology (AdTech) Ecosystem Networking
                      Event,{" "}
                      <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                        #DBATE
                      </span>{" "}
                      for short, an in-person full-day experience that includes
                      panel discussions, industry networking opportunities,
                      news, insights and, most importantly, conversations that
                      will propel a greater grasp and thereby elicit new
                      opportunities in the exciting area of digital marketing in
                      Brunei and beyond.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <Image
                    src={"/images/event/eventprogram300922.png"}
                    objectFit="contain"
                    quality={100}
                    height={650}
                    width={650}
                    alt="event day details"
                  />

                  <div className="px-4">
                    <p>
                      <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                        Event:{" "}
                      </span>
                      Panel Discussion and Networking Session
                    </p>

                    <p>
                      <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                        Date:{" "}
                      </span>
                      Wednesday, 5 October 2022
                    </p>

                    <p>
                      <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                        Venue:{" "}
                      </span>
                      Ruang, Yayasan Complex, Bandar Seri Begawan
                    </p>
                  </div>
                </div>
              </div>
              <div className="row pb-5">
                <div className="col p-5" align="center">
                  <h1> Registration closed</h1>
                  <p>
                    Thank you for your interest in joining{" "}
                    <span style={{ color: "#EE3932", fontWeight: "1000" }}>
                      #DBATE
                    </span>
                    . Unfortunately, registration has been closed due to high
                    demand. We hope to see you in our future events.
                  </p>
                
                </div>
              </div>
            </MediaQuery>
          </div>
        </div>
      </FormikProvider>
    </div>
  );
}

export default Oct;
