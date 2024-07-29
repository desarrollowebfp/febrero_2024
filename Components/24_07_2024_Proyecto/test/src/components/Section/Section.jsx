import "./Section.css";

const Section = ({ title, items }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li>
            <img src={item.cover} alt={item.title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
