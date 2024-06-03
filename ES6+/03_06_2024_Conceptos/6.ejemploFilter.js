const amazonItems = [
  {
    name: "Echo Dot (4th Gen)",
    price: 49.99,
    category: "Smart Home",
    rating: 4.7,
    link: "https://www.amazon.com/dp/B07XJ8C8F5",
  },
  {
    name: "Instant Pot Duo 7-in-1",
    price: 89.99,
    category: "Kitchen Appliances",
    rating: 4.6,
    link: "https://www.amazon.com/dp/B00FLYWNYQ",
  },
  {
    name: "Apple AirPods Pro",
    price: 249.0,
    category: "Electronics",
    rating: 4.8,
    link: "https://www.amazon.com/dp/B07ZPC9QD4",
  },
  {
    name: "Kindle Paperwhite",
    price: 129.99,
    category: "E-readers",
    rating: 4.7,
    link: "https://www.amazon.com/dp/B07CXG6C9W",
  },
  {
    name: "Samsung Galaxy S21",
    price: 799.99,
    category: "Smartphones",
    rating: 4.5,
    link: "https://www.amazon.com/dp/B08N2FRMPN",
  },
  {
    name: "Samsung Galaxy S22",
    price: 899.99,
    category: "Smartphones",
    rating: 4.5,
    link: "https://www.amazon.com/dp/B08N2FRMPN",
  },
];

const filterItems = (keyword) => {
  const result = amazonItems.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(result);
};

filterItems("sAmSung");
