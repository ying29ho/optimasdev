import Image from "next/image";
import { useState } from "react";
import { Field, useFormik, FormikProvider } from "formik";
import * as yup from "yup";
import { SubmitButton, MobileSubmitButton } from "../components/Buttons";
import MediaQuery from "react-responsive";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      role: "Agency",
      basedIn: "Brunei",
      request: [],
      // monetiseAdSpace: false,
      // manageAdCampaigns: false,
      // digitalPresenceAdviseSupport: false,
      // marketInsights: false,
      // mediaTrading: false,
      // other: false,
      terms: false,
    },

    onSubmit: (values, { setSubmitting, resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      // resetForm({ values:''});
      setTimeout(() => {
        fetch("/api/contact", {
          method: "post",
          body: JSON.stringify(values),
        });
        setMessage(
          "Success! Your message has been sent. Our team will get back to you shortly"
        );
        setSubmitted(true);
        resetForm({ values: "" });
        alert("Success! Your Message has been sent!");
        setSubmitting(false);
      }, 1000);
    },
    validationSchema: yup.object({
      firstName: yup.string().trim().required("First name is required"),
      lastName: yup.string().trim().required("Last name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      subject: yup.string().trim().required("Subject is required"),
      message: yup.string().trim().required("Message is required"),
      terms: yup.bool().oneOf([true], "Terms must be accepted"),
    }),
  });
  return (
    <div>
      <FormikProvider value={formik}>
        {/* <Form> */}

        <div className="mainContainer2 d-flex justify-content-center">
          <Image
            src={"/images/contact/header.png"}
            // layout="fill"
            objectFit="contain"
            quality={100}
            height={567}
            width={1440}
            alt="contact page header image"
          />
        </div>
        <div className="container">
          <div className="row">
            <MediaQuery maxWidth={900}>
              <div>
              <h1 className="m-3">Get In Touch!</h1>
              <div className="">
                <form className="mx-5" onSubmit={formik.handleSubmit}>
                  <label className="pt-3" htmlFor="firstName" style={{fontSize: "27px"}}>
                    First Name
                  </label>
                  <div className="row ">
                    <div className="col" >
                      <input
                        className="form-control"
                        placeholder="First Name"
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        required
                        style={{height: "80px", fontSize: "25px"}}
                      />
                      {formik.errors.firstName && (
                        <div className="text-danger">
                          {formik.errors.firstName}
                        </div>
                      )}
                    </div>
                    </div>
                    <label className="pt-3" htmlFor="firstName" style={{fontSize: "27px"}}>
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
                        style={{height: "80px", fontSize: "25px"}}

                        required
                      />
                      {formik.errors.lastName && (
                        <div className="text-danger">
                          {formik.errors.lastName}
                        </div>
                      )}
                    </div>
                    </div>
                  
                  <label className="pt-3" htmlFor="email" style={{fontSize: "27px"}}>
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
                      style={{height: "80px", fontSize: "25px"}}
                      required
                    />
                    <small className="form-text text-muted" style={{fontSize: "27px"}}>
                      We&apos;ll never share your email with anyone else.
                    </small>
                    {formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
                  </div>
                  <label className="pt-4" htmlFor="subject" style={{fontSize: "27px"}}>
                    Subject
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Subject"
                      id="subject"
                      name="subject"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      style={{height: "80px", fontSize: "25px"}}
                      required
                    />
                    {formik.errors.subject && (
                      <div className="text-danger">{formik.errors.subject}</div>
                    )}
                  </div>
                  <label className="pt-3" htmlFor="message" style={{fontSize: "27px"}}>
                    Message
                  </label>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Type your message here...."
                      id="message"
                      name="message"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      rows="8"
                      style={{ fontSize: "25px"}}
                      required
                    />
                    {formik.errors.message && (
                      <div className="text-danger">{formik.errors.message}</div>
                    )}
                  </div>

                  <label className="pt-4" htmlFor="services" style={{fontSize: "27px"}}>
                    I&apos;m a...
                  </label>
                  <Field
                    className="form-select"
                    id="role"
                    as="select"
                    name="role"
                    style={{height: "80px", fontSize: "25px"}}
                    onChange={formik.handleChange}
                  >
                    <option value="Agency" id="agency">
                      Agency
                    </option>
                    <option value="Brand" id="brand">
                      Brand
                    </option>
                    <option value="Publisher" id="publisher">
                      Publisher
                    </option>
                  </Field>

                  <label className="pt-3" htmlFor="basedIn" style={{fontSize: "27px"}}>
                    Based in...
                  </label>
                  <Field
                    className="form-select"
                    id="basedIn"
                    as="select"
                    name="basedIn"
                    style={{height: "80px", fontSize: "25px"}}
                    onChange={formik.handleChange}
                  >
                    <option value="Brunei" id="brunei">
                      Brunei
                    </option>
                    <option value="Kalimantan" id="kalimantan">
                      Kalimantan
                    </option>
                    <option value="Sabah" id="sabah">
                      Sabah
                    </option>
                    <option value="Sarawak" id="sarawak">
                      Sarawak
                    </option>
                    <option value="BeyondBorneo" id="beyondBorneo">
                      Beyond Borneo
                    </option>
                  </Field>

                  <label className="pt-4" htmlFor="services" style={{fontSize: "27px"}}>
                    How can Optimas support me?
                  </label>
                  <div className="form-group mb-4">
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="monetiseAdSpace"
                      onChange={formik.handleChange}
                      value={formik.values.monetiseAdSpace}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="monetiseAdSpace"
                        style={{fontSize: "27px"}}
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="monetiseAdSpace"
                          className="form-check-input"
                          value="monetiseAdSpace"
                          style={{height: "30px", width:"30px", fontSize: "25px"}}
                        />
                        Monetisaton of my Ad Space
                      </label>
                    </div>
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="manageAdCampaigns"
                      onChange={formik.handleChange}
                      value={formik.values.manageAdCampaigns}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="manageAdCampaigns"
                        style={{fontSize: "27px"}}
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="manageAdCampaigns"
                          className="form-check-input"
                          value="manageAdCampaigns"
                          style={{height: "30px", width:"30px", fontSize: "25px"}}
                        />
                        Managing Ad Campaigns
                      </label>
                    </div>
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="digitalPresenceAdviseSupport"
                      onChange={formik.handleChange}
                      value={formik.values.digitalPresenceAdviseSupport}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="digitalPresenceAdviseSupport"
                        style={{fontSize: "27px"}}
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="digitalPresenceAdviseSupport"
                          className="form-check-input"
                          value="digitalPresenceAdvisorySupport"
                          style={{height: "30px", width:"30px", fontSize: "25px"}}
                        />
                        Digital Presence Advisory &amp; Support
                      </label>
                    </div>
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="marketInsights"
                      onChange={formik.handleChange}
                      value={formik.values.marketInsights}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="marketInsights"
                        style={{fontSize: "27px"}}
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="marketInsights"
                          className="form-check-input"
                          value="marketInsights"
                          style={{height: "30px", width:"30px", fontSize: "25px"}}
                        />
                        Market Insights
                      </label>
                    </div>

                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="mediaTrading"
                      onChange={formik.handleChange}
                      value={formik.values.mediaTrading}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="mediaTrading"
                        style={{fontSize: "27px"}}
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="mediaTrading"
                          className="form-check-input"
                          value="mediaTrading"
                          style={{height: "30px", width:"30px", fontSize: "25px"}}
                        />
                        Media Trading
                      </label>
                    </div>

                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="other"
                      onChange={formik.handleChange}
                      value={formik.values.other}
                    /> */}
                      <label className="form-check-label" htmlFor="other" style={{fontSize: "27px"}}>
                        <Field
                          type="checkbox"
                          name="requests"
                          id="other"
                          className="form-check-input"
                          value="other"
                          style={{height: "30px", width:"30px", fontSize: "25px"}}
                        />
                        Other Digital Media Needs
                      </label>
                    </div>
                  </div>

                  <div className="form-group pt-5">
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      onChange={formik.handleChange}
                      value={formik.values.terms}
                      required
                    /> */}

                      <label className="form-check-label" htmlFor="terms" style={{fontSize: "27px"}}>
                        <Field
                          className="form-check-input"
                          type="checkbox"
                          name="terms"
                          style={{height: "30px", width:"30px", fontSize: "25px"}}
                        />
                        Click here to receive updates on our latest news and
                        upcoming solutions
                        {formik.errors.terms && (
                          <div className="text-danger" style={{fontSize: "25px"}}>
                            {formik.errors.terms}
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="p-auto" align="center" >

                    <MobileSubmitButton text="Send Message" />
                  </div>
                  {/* <FormButton type="submit" text="Send Email" /> */}
                  {/* <button type="submit">Submit</button> */}
                </form>
              </div>

              <div className="mx-5 p-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.297581442316!2d114.941786915221!3d4.889756496449691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228ad3c7eacc5d%3A0x1cbca74133a28b05!2sRegus%20-%20Bandar%20Seri%20Begawan%2C%20PGGMB!5e0!3m2!1sen!2sbn!4v1660093871934!5m2!1sen!2sbn"
                  width="750"
                  height="600"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={901}>
              <div className="col pt-5">
                <h1>Get In Touch!</h1>
                <div className="mt-5 pt-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.297581442316!2d114.941786915221!3d4.889756496449691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32228ad3c7eacc5d%3A0x1cbca74133a28b05!2sRegus%20-%20Bandar%20Seri%20Begawan%2C%20PGGMB!5e0!3m2!1sen!2sbn!4v1660093871934!5m2!1sen!2sbn"
                    width="600"
                    height="750"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col">
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
                  <label className="pt-4" htmlFor="subject">
                    Subject
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Subject"
                      id="subject"
                      name="subject"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      required
                    />
                    {formik.errors.subject && (
                      <div className="text-danger">{formik.errors.subject}</div>
                    )}
                  </div>
                  <label className="pt-3" htmlFor="message">
                    Message
                  </label>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Type your message here...."
                      id="message"
                      name="message"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      rows="5"
                      required
                    />
                    {formik.errors.message && (
                      <div className="text-danger">{formik.errors.message}</div>
                    )}
                  </div>

                  <label className="pt-4" htmlFor="services">
                    I&apos;m a...
                  </label>
                  <Field
                    className="form-select"
                    id="role"
                    as="select"
                    name="role"
                    onChange={formik.handleChange}
                  >
                    <option value="Agency" id="agency">
                      Agency
                    </option>
                    <option value="Brand" id="brand">
                      Brand
                    </option>
                    <option value="Publisher" id="publisher">
                      Publisher
                    </option>
                  </Field>

                  <label className="pt-3" htmlFor="basedIn">
                    Based in...
                  </label>
                  <Field
                    className="form-select"
                    id="basedIn"
                    as="select"
                    name="basedIn"
                    onChange={formik.handleChange}
                  >
                    <option value="Brunei" id="brunei">
                      Brunei
                    </option>
                    <option value="Kalimantan" id="kalimantan">
                      Kalimantan
                    </option>
                    <option value="Sabah" id="sabah">
                      Sabah
                    </option>
                    <option value="Sarawak" id="sarawak">
                      Sarawak
                    </option>
                    <option value="BeyondBorneo" id="beyondBorneo">
                      Beyond Borneo
                    </option>
                  </Field>

                  <label className="pt-4" htmlFor="services">
                    How can Optimas support me?
                  </label>
                  <div className="form-group mb-4">
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="monetiseAdSpace"
                      onChange={formik.handleChange}
                      value={formik.values.monetiseAdSpace}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="monetiseAdSpace"
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="monetiseAdSpace"
                          className="form-check-input"
                          value="monetiseAdSpace"
                        />
                        Monetisaton of my Ad Space
                      </label>
                    </div>
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="manageAdCampaigns"
                      onChange={formik.handleChange}
                      value={formik.values.manageAdCampaigns}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="manageAdCampaigns"
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="manageAdCampaigns"
                          className="form-check-input"
                          value="manageAdCampaigns"
                        />
                        Managing Ad Campaigns
                      </label>
                    </div>
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="digitalPresenceAdviseSupport"
                      onChange={formik.handleChange}
                      value={formik.values.digitalPresenceAdviseSupport}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="digitalPresenceAdviseSupport"
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="digitalPresenceAdviseSupport"
                          className="form-check-input"
                          value="digitalPresenceAdvisorySupport"
                        />
                        Digital Presence Advisory & Support
                      </label>
                    </div>
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="marketInsights"
                      onChange={formik.handleChange}
                      value={formik.values.marketInsights}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="marketInsights"
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="marketInsights"
                          className="form-check-input"
                          value="marketInsights"
                        />
                        Market Insights
                      </label>
                    </div>

                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="mediaTrading"
                      onChange={formik.handleChange}
                      value={formik.values.mediaTrading}
                    /> */}
                      <label
                        className="form-check-label"
                        htmlFor="mediaTrading"
                      >
                        <Field
                          type="checkbox"
                          name="requests"
                          id="mediaTrading"
                          className="form-check-input"
                          value="mediaTrading"
                        />
                        Media Trading
                      </label>
                    </div>

                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="other"
                      onChange={formik.handleChange}
                      value={formik.values.other}
                    /> */}
                      <label className="form-check-label" htmlFor="other">
                        <Field
                          type="checkbox"
                          name="requests"
                          id="other"
                          className="form-check-input"
                          value="other"
                        />
                        Other Digital Media Needs
                      </label>
                    </div>
                  </div>

                  <div className="form-group pt-5">
                    <div className="form-check m-3">
                      {/* <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      onChange={formik.handleChange}
                      value={formik.values.terms}
                      required
                    /> */}

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
                    <SubmitButton text="Send Message" />
                  </div>
                  {/* <FormButton type="submit" text="Send Email" /> */}
                  {/* <button type="submit">Submit</button> */}
                </form>
              </div>
            </MediaQuery>
          </div>
        </div>

        {/* </Form> */}
      </FormikProvider>
    </div>
  );
};
export default Contact;
