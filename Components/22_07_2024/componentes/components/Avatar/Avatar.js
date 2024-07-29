import "./Avatar.css";

const Avatar = (
  type = "medium",
  src = "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg",
  alt = "User profile"
) => {
  return `
  <img class="avatar ${type}" src="${src}" alt="${alt}"/>
  `;
};

export default Avatar;
