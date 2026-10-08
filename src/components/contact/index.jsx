import "./style.css";

function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container contact-card">
        <div className="contact-copy">
          <span className="section-tag">Let’s bake together</span>
          <h2>Order for your next special moment.</h2>
          <p>
            Whether it is a birthday, bridal shower, or quiet evening treat, we
            are here to make it sweeter.
          </p>
        </div>

        <div className="contact-details">
          <p>Email: hello@cravings_by_ummi.com</p>
          <p>Phone: (000) 123-4567</p>
          <p>Open: Mon – Sat • 8:00 AM – 6:00 PM</p>
          <p>Location: Brooklyn, NY</p>
          <a href="mailto:hello@cravingsbyummi.com" className="primary-btn">
            Request a Custom Order
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
