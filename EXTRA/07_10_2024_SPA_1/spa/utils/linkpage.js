const linkpage = (id, page) => {
  document.querySelector(id).addEventListener("click", () => {
    page();
  });
};

export default linkpage;
