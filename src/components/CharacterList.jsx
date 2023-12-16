import { EyeIcon } from "@heroicons/react/24/outline";

const allCharacters = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      created: "2017-11-04T19:09:56.428Z",
    },
  ];

function CharacterList() {
  return (
    <div className="character-list">
      {allCharacters.map((item) => (
            <Character key={item.id} item={item} />
          ))}
      {console.log(allCharacters)}
    </div>
  );
}

export default CharacterList;


function Character({item}) {
  return <div className="list__item">
    <img src={item.image} alt={item.name} />
   <h3 className="name">
    <span>{item.gender === "Male" ? "👱🏼‍♂️" : "👩🏻"}</span>
    <span>{item.name}</span>
   </h3>
   <div className="list-item__info info">
    <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
    <span> {item.status} </span>
    <span> - {item.species}</span>
   </div>
   <button className="icon red">
    <EyeIcon/>
   </button>
    </div>;
}
