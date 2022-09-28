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
    <title>Optimas</title>
    <meta property="og:title" content="Optimas" />
    <meta
      property="og:description"
      content="Building a Digital Brunei Adtech Ecosystem"
    />
    <meta
      property="og:image:secure_url"
      itemProp="image"
      content="https://optimas-bucket.s3.ap-south-1.amazonaws.com/OptimasLogo.png"
    />
    <meta
      property="og:url"
      content="https://www.optimasmgmt.com/events/8YrHJivGVmt"
    />
    <meta property="og:type" content="website" />
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
              alt="event page header image"
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
                      src={"/images/event/updatedeventprogram260922.png"}
                      objectFit="contain"
                      quality={100}
                      height={750}
                      width={750}
                      alt="event day details"
                    />
                  </div>
                  <p>
                    OPTIMAS proudly presents a 1-day event for digital media,
                    broadcasting and marketing sectors. <br></br>
                    <br></br>
                    Packed with panel discussions, presentations, workshops,
                    fireside chats and networking sessions to deliver insights
                    and strategies of &quot;The #DigitalBrunei AdTech
                    Ecosystem&quot;.
                  </p>
                </div>
                <div className="">
                  {submitted === true ? (
                    <div className="submit-success">
                      <div className="row">
                        <div className="col-11">{msge}</div>
                        <div className="col-1">{closeIcon}</div>
                      </div>
                    </div>
                  ) : null}
                  <form className="mx-5" onSubmit={formik.handleSubmit}>
                    <label
                      className="pt-3"
                      htmlFor="firstName"
                      style={{ fontSize: "27px" }}
                    >
                      First Name
                    </label>
                    <div className="row ">
                      <div className="col">
                        <input
                          className="form-control"
                          placeholder="First Name"
                          id="firstName"
                          name="firstName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                          required
                          style={{ height: "80px", fontSize: "25px" }}
                        />
                        {formik.errors.firstName && (
                          <div className="text-danger">
                            {formik.errors.firstName}
                          </div>
                        )}
                      </div>
                    </div>
                    <label
                      className="pt-3"
                      htmlFor="firstName"
                      style={{ fontSize: "27px" }}
                    >
                      Last Name
                    </label>
                    <div className="row">
                      <div className="col">
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          id="lastName"
                          name="lastName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                          style={{ height: "80px", fontSize: "25px" }}
                          required
                        />
                        {formik.errors.lastName && (
                          <div className="text-danger">
                            {formik.errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                    <label
                      className="pt-4"
                      htmlFor="company"
                      style={{ fontSize: "27px" }}
                    >
                      Company Name
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Company Name"
                        id="company"
                        name="company"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.company}
                        style={{ height: "80px", fontSize: "25px" }}
                        required
                      />
                      {formik.errors.company && (
                        <div className="text-danger">
                          {formik.errors.company}
                        </div>
                      )}
                    </div>
                    <label
                      className="pt-4"
                      htmlFor="jobtitle"
                      style={{ fontSize: "27px" }}
                    >
                      Job Title (Optional)
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Job Title"
                        id="jobtitle"
                        name="jobtitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.jobtitle}
                        style={{ height: "80px", fontSize: "25px" }}
                      />
                      {/* {formik.errors.jobtitle && (
                        <div className="text-danger">
                          {formik.errors.jobtitle}
                        </div>
                      )} */}
                    </div>
                    <label
                      className="pt-4"
                      htmlFor="subject"
                      style={{ fontSize: "27px" }}
                    >
                      Contact Number
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Contact Number"
                        id="number"
                        name="number"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        style={{ height: "80px", fontSize: "25px" }}
                        required
                      />
                      {formik.errors.number && (
                        <div className="text-danger">
                          {formik.errors.number}
                        </div>
                      )}
                    </div>

                    <label
                      className="pt-3"
                      htmlFor="email"
                      style={{ fontSize: "27px" }}
                    >
                      Email
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="example@mail.com"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        style={{ height: "80px", fontSize: "25px" }}
                        required
                      />
                      <small
                        className="form-text text-muted"
                        style={{ fontSize: "27px" }}
                      >
                        We&apos;ll never share your email with anyone else.
                      </small>
                      {formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>

                    <div className="form-group pt-5">
                      <div className="form-check m-3">
                        <label
                          className="form-check-label"
                          htmlFor="terms"
                          style={{ fontSize: "27px" }}
                        >
                          <Field
                            className="form-check-input"
                            type="checkbox"
                            name="terms"
                            style={{
                              height: "30px",
                              width: "30px",
                              fontSize: "25px",
                            }}
                          />
                          Click here to receive updates on our latest news and
                          upcoming solutions
                          {formik.errors.terms && (
                            <div
                              className="text-danger"
                              style={{ fontSize: "25px" }}
                            >
                              {formik.errors.terms}
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className="p-auto" align="center">
                      <MobileSubmitButton text="RSVP" />
                    </div>
                  </form>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={901}>
              <div className="row pt-5">
                <div className="col-6">
                  <h1>Join The #DigitalBrunei Adtech Ecosystem</h1>
                  <div className="p-2 mx-auto" align="ceter">
                    <p>
                      OPTIMAS proudly presents a 1-day event for digital media,
                      broadcasting and marketing sectors. <br></br>
                      <br></br>Packed with panel discussions, presentations,
                      workshops, fireside chats and networking sessions to
                      deliver insights and strategies of &quot; The
                      #DigitalBrunei AdTech Ecosystem &quot;.
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <Image
                    src={"/images/event/updatedeventprogram260922.png"}
                    objectFit="contain"
                    quality={100}
                    height={650}
                    width={650}
                    alt="event day details"
                  />
                </div>
              </div>
              <div className="row pb-5">
                <div className="col-3">{""}</div>
                <div className="col-6">
                  {submitted === true ? (
                    <div className="submit-success">
                      <div className="row">
                        <div className="col-11">{msge}</div>
                        <div className="col-1">{closeIcon}</div>
                      </div>
                    </div>
                  ) : null}

                  <form onSubmit={formik.handleSubmit}>
                    <label className="pt-5" htmlFor="firstName">
                      Full Name
                    </label>
                    <div className="row ">
                      <div className="col">
                        <input
                          className="form-control"
                          placeholder="First Name"
                          id="firstName"
                          name="firstName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                          required
                        />
                        {formik.errors.firstName && (
                          <div className="text-danger">
                            {formik.errors.firstName}
                          </div>
                        )}
                      </div>
                      <div className="col">
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          id="lastName"
                          name="lastName"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                          required
                        />
                        {formik.errors.lastName && (
                          <div className="text-danger">
                            {formik.errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>

                    <label className="pt-4" htmlFor="company">
                      Company Name
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Company Name"
                        id="company"
                        name="company"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.company}
                        required
                      />
                      {formik.errors.company && (
                        <div className="text-danger">
                          {formik.errors.company}
                        </div>
                      )}
                    </div>
                    <label className="pt-4" htmlFor="jobtitle">
                      Job Title (Optional)
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Job Title"
                        id="jobtitle"
                        name="jobtitle"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.jobtitle}
                      />
                      {/* {formik.errors.subject && (
                      <div className="text-danger">{formik.errors.subject}</div>
                    )} */}
                    </div>
                    <label className="pt-4" htmlFor="number">
                      Contact Number
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Contact Number"
                        id="number"
                        name="number"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        required
                      />
                      {formik.errors.number && (
                        <div className="text-danger">
                          {formik.errors.number}
                        </div>
                      )}
                    </div>
                    <label className="pt-3" htmlFor="email">
                      Email
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="example@mail.com"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required
                      />
                      <small className="form-text text-muted">
                        We&apos;ll never share your email with anyone else.
                      </small>
                      {formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                    </div>
                    <div className="form-group pt-5">
                      <div className="form-check m-3">
                        <label className="form-check-label" htmlFor="terms">
                          <Field
                            className="form-check-input"
                            type="checkbox"
                            name="terms"
                          />
                          Click here to receive updates on our latest news and
                          upcoming solutions
                          {formik.errors.terms && (
                            <div className="text-danger">
                              {formik.errors.terms}
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className="p-5" align="center">
                      <SubmitButton text="RSVP" />
                    </div>
                  </form>
                </div>
                <div className="col-3">{""}</div>
              </div>
            </MediaQuery>
          </div>
        </div>
      </FormikProvider>
    </div>
  );
}

export default Oct;
