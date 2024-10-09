import "./Contact.css";

const template = () => `
<section class="contact">
  <h2>Contact</h2>
</section>
`;

const Contact = () => {
  document.querySelector("main").innerHTML = template();
};

export default Contact;
