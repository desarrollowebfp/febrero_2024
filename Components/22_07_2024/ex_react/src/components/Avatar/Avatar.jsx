import "./Avatar.css";

const Avatar = ({ src, alt, type }) => {
  return <img className={"avatar " + type} src={src} alt={alt} />;
};

export default Avatar;
