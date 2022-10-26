import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cXC6V5v/0-Aura-1-1920x1080.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/cXC6V5v/0-Aura-1-1920x1080.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/cXC6V5v/0-Aura-1-1920x1080.png",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/cXC6V5v/0-Aura-1-1920x1080.png",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/cXC6V5v/0-Aura-1-1920x1080.png",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
