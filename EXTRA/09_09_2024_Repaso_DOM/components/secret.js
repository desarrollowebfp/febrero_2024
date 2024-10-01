import "./secret.css";

const template = () => `
<h2>Secret messages</h2>
<textarea placeholder="Write your message..." id="message"></textarea/>
<button id="encryptBtn">Encrypt</button>
<button id="decryptBtn">Decrypt</button>
`;

//ENCRIPTAR
const encrypt = () => {
  const textAreaText = document.querySelector("#message").value;
  const encryptedText = btoa(textAreaText);
  document.querySelector("#message").value = encryptedText;
};
//DESENCRIPTAR
const decrypt = () => {
  const textAreaText = document.querySelector("#message").value;
  const decryptedText = atob(textAreaText);
  document.querySelector("#message").value = decryptedText;
};

const listeners = () => {
  document.querySelector("#encryptBtn").addEventListener("click", () => {
    encrypt();
  });
  document.querySelector("#decryptBtn").addEventListener("click", () => {
    decrypt();
  });
};

const Secret = () => {
  document.querySelector("#secret").innerHTML = template();
  listeners();
};

export default Secret;
