import React from "react";

const Card = ({ title, subtitle, price , image, roomNo }) => {
  
    return (
      <>

     
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-20">
          <img className="w-full" src={image} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <div className="text-md mb-2">{subtitle}</div>
            <p className="text-gray-700 text-base">{roomNo}</p>
          </div>
          <div className="px-6  pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Select Room
            </button>
          </div>
        </div>
      </>
    );
};

const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Room A",
      image: "https://source.unsplash.com/random/800x600",
      description: "Description for card 1",
      subtitle: "Price 100$",
      roomNo: "Room No. 101",
    },
    {
      id: 2,
      title: "Room B",
      image: "https://source.unsplash.com/random/800x601",
      description: "Description for card 2",
      subtitle: "Price 80$",
      roomNo: "Room No. 102",
    },
    {
      id: 3,
      title: "Room C",
      image: "https://source.unsplash.com/random/800x602",
      description: "Description for card 3",
      subtitle: "Price 100$",
      roomNo: "Room No. 103",
    },
    {
      id: 4,
      title: "Room A",
      image: "https://source.unsplash.com/random/800x603",
      description: "Description for card 4",
      subtitle: "Price 100$",
      roomNo: "Room No. 104",
    },
    {
      id: 5,
      title: "Room B",
      image: "https://source.unsplash.com/random/800x604",
      description: "Description for card 5",
      subtitle: "Price 80$",
      roomNo: "Room No. 105",
    },
    {
      id: 6,
      title: "Room B",
      image: "https://source.unsplash.com/random/800x605",
      description: "Description for card 6",
      subtitle: "Price 80$",
      roomNo: "Room No. 106",
    },
    {
      id: 7,
      title: "Room A",
      image: "https://source.unsplash.com/random/800x606",
      description: "Description for card 7",
      subtitle: "Price 100$",
      roomNo: "Room No. 107",
    },
    {
      id: 8,
      title: "Room A",
      image: "https://source.unsplash.com/random/800x607",
      description: "Description for card 8",
      subtitle: "Price 100$",
      roomNo: "Room No. 108",
    },
    {
      id: 9,
      title: "Room B",
      image: "https://source.unsplash.com/random/800x608",
      description: "Description for card 9",
      subtitle: "Price 80$",
      roomNo: "Room No. 109",
    },
    {
      id: 10,
      title: "Room C",
      image: "https://source.unsplash.com/random/800x608",
      description: "Description for card 9",
      subtitle: "Price 50$",
      roomNo: "Room No. 110",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 ">
             
             
              {cards.map((card) => (
        <div className="w-full md:w-1/5 p-5" key={card.id}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default Home;
