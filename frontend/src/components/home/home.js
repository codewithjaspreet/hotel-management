import React from "react";

const Card = ({ title, image, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-20">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6  pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          View Details
        </button>
      </div>
    </div>
  );
};


const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      image: "https://source.unsplash.com/random/800x600",
      description: "Description for card 1",
    },
    {
      id: 2,
      title: "Card 2",
      image: "https://source.unsplash.com/random/800x601",
      description: "Description for card 2",
    },
    {
      id: 3,
      title: "Card 3",
      image: "https://source.unsplash.com/random/800x602",
      description: "Description for card 3",
    },
    {
      id: 4,
      title: "Card 4",
      image: "https://source.unsplash.com/random/800x603",
      description: "Description for card 4",
    },
    {
      id: 5,
      title: "Card 5",
      image: "https://source.unsplash.com/random/800x604",
      description: "Description for card 5",
    },
    {
      id: 6,
      title: "Card 6",
      image: "https://source.unsplash.com/random/800x605",
      description: "Description for card 6",
    },
    {
      id: 7,
      title: "Card 7",
      image: "https://source.unsplash.com/random/800x606",
      description: "Description for card 7",
    },
    {
      id: 8,
      title: "Card 8",
      image: "https://source.unsplash.com/random/800x607",
      description: "Description for card 8",
    },
    {
      id: 9,
      title: "Card 9",
      image: "https://source.unsplash.com/random/800x608",
      description: "Description for card 9",
    },
    {
      id: 10,
      title: "Card 10",
      image: "https://source.unsplash.com/random/800x608",
      description: "Description for card 9",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card) => (
        <div className="w-full md:w-1/5 p-5" key={card.id}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default Home;
