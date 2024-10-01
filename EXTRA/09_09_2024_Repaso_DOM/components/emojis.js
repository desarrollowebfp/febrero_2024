import "./emojis.css";

const template = () => `
<h2>Emojis</h2>
 <select id="emojisSelect">
    <option value="🧑🏼‍🚀">🧑🏼‍🚀</option>
    <option value="👩‍❤️‍💋‍👩">👩‍❤️‍💋‍👩</option>
    <option value="👩🏿‍💻">👩🏿‍💻</option>
</select>
<h3 id="resultSpread"></h3>
`;

const listeners = () => {
  document.querySelector("#emojisSelect").addEventListener("change", (ev) => {
    const spreadEmoji = [...ev.target.value];
    document.querySelector("#resultSpread").innerHTML = spreadEmoji.join(" ");
  });
};

const Emojis = () => {
  document.querySelector("#emojis").innerHTML = template();
  listeners();
};

export default Emojis;
