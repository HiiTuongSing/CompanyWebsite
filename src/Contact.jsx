import { TextContainerTitle } from "./PageComponent";

export default function Contact() {
  return (
    <>
      <TextContainerTitle
        text="Make First Contact"
        description="Ready to take your cybersecurity to the next level? Contact us today
            with the form below and let our expert hackers secure your digital
            world."
        img="Space"
        textStyle={{
          background: "rgba(255, 255, 255, 0.5)",
          width: "100%",
          textAlign: "center",
          padding: "1rem",
        }}
      />

      <form id="user-contact" className="p-5">
        <div className="form-group mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Enter your company name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
