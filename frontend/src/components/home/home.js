import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, subtitle, image, roomNo }) => {

   const navigate = useNavigate();
   function handleClick(event) {
     navigate("/details" , {state: {title, subtitle, image, roomNo}});
   }
  return (
    <>
      <div
        onClick={() => {}}
        className="max-w-sm rounded overflow-hidden shadow-lg mt-20"
      >
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-md mb-2">{subtitle}</div>
          <p className="text-gray-700 text-base">{roomNo}</p>
        </div>
        <div className="px-6  pb-2">
          <button 
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Select Room
          </button>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("http://127.0.0.1:8000/rooms");

      const data = await response.json();

      for (var item in data) {
        rooms.push(data[item]);
      }

      // console.log(data);

      setRooms(rooms);

      // console.log(rooms);
    };

    fetchRooms();
  }, []);

  const cards = [
    {
      id: 1,
      title: "Room A",
      image:"https://media.istockphoto.com/id/543687878/photo/classic-style-hotel-bedroom-interior.jpg?s=612x612&w=0&k=20&c=Ctb4YwPf5He0ja4VlvriqJj4yDBlSfZIpoUXTAp1NiA=",
      description: "Description for card 1",
      subtitle: "Price 100$",
      roomNo: "Room No. 101",
    },
    {
      id: 2,
      title: "Room B",
      image:
        "https://media.istockphoto.com/id/934123520/photo/3d-rendering-modern-luxury-bedroom-suite-in-resort-with-bathroom.jpg?s=612x612&w=0&k=20&c=Es7IaaoVajNKqxU6estoa1TbxoSUy86MzGz48p78Oj0=",
      description: "Description for card 2",
      subtitle: "Price 80$",
      roomNo: "Room No. 102",
    },
    {
      id: 3,
      title: "Room C",
      image:
        "https://media.istockphoto.com/id/185113199/photo/shangri-la-hotel-room-in-new-delhi.jpg?s=612x612&w=0&k=20&c=DtV_QwIh2lolcCYN1cIGqpT1yH3Cw1HvwHTjSEi4Vhs=",
      description: "Description for card 3",
      subtitle: "Price 100$",
      roomNo: "Room No. 103",
    },
    {
      id: 4,
      title: "Room A",
      image:
        "https://media.istockphoto.com/id/185083188/photo/luxury-shangri-la-hotel-room.jpg?s=612x612&w=0&k=20&c=5O6xdH0CYU008xoBbySJ81pKaNlvaRki5CFcM2orcBQ=",
      description: "Description for card 4",
      subtitle: "Price 100$",
      roomNo: "Room No. 104",
    },
    {
      id: 5,
      title: "Room B",
      image:
        "https://media.istockphoto.com/id/492645154/photo/bedroom.jpg?s=612x612&w=0&k=20&c=dMKZS_LqJAdCJSRTc3Zfh-8h3W1adeg6TD7NKwnitek=",
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
