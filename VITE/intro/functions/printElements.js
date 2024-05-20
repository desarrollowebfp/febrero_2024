const printElements = (elements) => {
  for (const element of elements) {
    const p = document.createElement("p");
    p.innerText = element.name;
    document.querySelector("#app").appendChild(p);
  }
};

export default printElements;
