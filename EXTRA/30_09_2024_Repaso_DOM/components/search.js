import "./search.css";

const users = [
  {
    name: "Brent Lehner Jr.",
    job: "International Data Strategist",
    id: "1",
  },
  {
    name: "Ms. Darnell Stokes I",
    job: "Lead Tactics Manager",
    id: "2",
  },
  {
    name: "Dale Torp",
    job: "Legacy Quality Supervisor",
    id: "3",
  },
  {
    name: "Marguerite Stokes",
    job: "Product Implementation Agent",
    id: "4",
  },
  {
    name: "Julia Gusikowski",
    job: "Customer Accounts Associate",
    id: "5",
  },
  {
    name: "Javier Bauch DVM",
    job: "Customer Integration Architect",
    id: "6",
  },
  {
    name: "Alejandro Nicolas PhD",
    job: "Regional Operations Liaison",
    id: "7",
  },
  {
    name: "Ramona Kovacek",
    job: "Legacy Quality Strategist",
    id: "8",
  },
  {
    name: "Melba Jacobson PhD",
    job: "Principal Infrastructure Specialist",
    id: "9",
  },
  {
    name: "Arturo Beahan",
    job: "Product Response Coordinator",
    id: "10",
  },
];

const template = () => `
  <h2>Search filter</h2>
  <input type="text" id="searchInput" />
  <article id="userList">
  ${users
    .map(
      (user) => `
    <div>
      <h3>${user.name}</h3>
      <h4>${user.job}</h4>
    </div>
  `
    )
    .join("")}
  </article>
`;

const listeners = () => {
  //Recuperamos el input
  const searchInput = document.querySelector("#searchInput");
  //Le añadimos un evento al input
  searchInput.addEventListener("input", () => {
    //Filtramos los usuarios en base a lo que hay escrito en el input y ademas le añadimos el tolowercase para que tengamos libertad a la hora de escribir mayus y minus
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
        user.job.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    if (filteredUsers.length) {
      //Volvemos a repintar la lista de usuarios pero esta vez con la que hemos generado
      document.querySelector("#userList").innerHTML = filteredUsers
        .map(
          (user) => `
        <div>
          <h3>${user.name}</h3>
          <h4>${user.job}</h4>
        </div>
`
        )
        .join("");
    } else {
      document.querySelector("#userList").innerHTML =
        "<h2>No hay coincidencias</h2>";
    }
  });
};

const Search = () => {
  document.querySelector("#search").innerHTML = template();
  listeners();
};

export default Search;
