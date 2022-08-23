import Image from "next/image";
import { Field, useFormik, FormikProvider } from "formik";
import { SubmitButton } from "../components/Buttons";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      role: "Agency",
      basedIn: "Brunei",
      monetiseAdSpace: false, 
      manageAdCampaigns: false,
      digitalPresenceAdviseSupport: false,
      marketInsights: false,
      mediaTrading: false,
      other: false,
      terms: false,
      
    },
    onSubmit: (values, {resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
      fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(values),
        
      });
      resetForm();
      // document.getElementById("monetiseAdSpace").checked = false;
      // document.getElementById("manageAdCampaigns").checked = false;
      // document.getElementById("digitalPresenceAdviseSupport").checked = false;
      // document.getElementById("marketInsights").checked = false;
      // document.getElementById("mediaTrading").checked = false;
      // document.getElementById("other").checked = false;
      // document.getElementById("terms").checked = false;
      alert("Success! Your Message has been sent!");
      // console.log("formdata", values);
    },
  });
  return (
    <div>
      <FormikProvider value={formik}>
        {/* <Form> */}

        <div className="mainContainer d-flex justify-content-center">
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
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="monetiseAdSpace"
                      onChange={formik.handleChange}
                      value={formik.values.monetiseAdSpace}
                    />
                    <label className="form-check-label" htmlFor="monetiseAdSpace">
                      Monetisaton of my Ad Space
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="manageAdCampaigns"
                      onChange={formik.handleChange}
                      value={formik.values.manageAdCampaigns}
                    />
                    <label className="form-check-label" htmlFor="manageAdCampaigns">
                      Managing Ad Campaigns
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="digitalPresenceAdviseSupport"
                      onChange={formik.handleChange}
                      value={formik.values.digitalPresenceAdviseSupport}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="digitalPresenceAdviseSupport"
                    >
                      Digital Presence Advisory & Support
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="marketInsights"
                      onChange={formik.handleChange}
                      value={formik.values.marketInsights}
                    />
                    <label className="form-check-label" htmlFor="marketInsights">
                      Market Insights
                    </label>
                  </div>

                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="mediaTrading"
                      onChange={formik.handleChange}
                      value={formik.values.mediaTrading}
                    />
                    <label className="form-check-label" htmlFor="mediaTrading">
                      Media Trading
                    </label>
                  </div>

                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="other"
                      onChange={formik.handleChange}
                      value={formik.values.other}
                    />
                    <label className="form-check-label" htmlFor="other">
                      Other Digital Media Needs
                    </label>
                  </div>
                </div>

                <div className="form-group pt-5">
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      onChange={formik.handleChange}
                      value={formik.values.terms}
                      required
                    />

                    <label className="form-check-label" htmlFor="terms">
                      Click here to receive updates on our latest news and
                      upcoming solutions
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
          </div>
        </div>
        {/* </Form> */}
      </FormikProvider>
    </div>
  );
};
export default Contact;
