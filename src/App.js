import "./styles.css";
import { useState } from "react";

const ImageView = ({ image, width, height }) => {
  return (
    <div>
      <img
        src={image}
        style={{ width: { width }, height: { height } }}
        alt="img"
      />
    </div>
  );
};

const cartoons = [
  {
    id: 1,
    name: "Mickey Mouse",
    superpower: "Invisibility",
    magnitude: 1
  },
  {
    id: 2,
    name: "Spongebob Squarepants",
    superpower: "Super Strength",
    magnitude: 3
  },
  {
    id: 3,
    name: "Bugs Bunny",
    superpower: "Teleportation",
    magnitude: 9
  },
  {
    id: 4,
    name: "Tom and Jerry",
    superpower: "Intelligence",
    magnitude: 8
  },
  {
    id: 5,
    name: "The Powerpuff Girls",
    superpower: "Flight",
    magnitude: 10
  }
];

const CartoonDispay = ({ cartoons }) => {
  return (
    <div>
      {cartoons.map((cartoon) => {
        return (
          <>{cartoon.magnitude > 5 ? <div>{cartoon.name}</div> : <div></div>}</>
        );
      })}
    </div>
  );
};

const EverPowerCartoons = ({ cartoons }) => {
  return (
    <>
      {cartoons.map((cartoon) => {
        return (
          <>
            {cartoon.magnitude % 2 === 0 ? (
              <div>
                <h3>{cartoon.name}</h3>
                <p>{cartoon.superpower}</p>
                <p>{cartoon.magnitude}</p>
              </div>
            ) : (
              <></>
            )}
          </>
        );
      })}
    </>
  );
};

const CartoonWithSuperPower = ({ cartoons, superpower }) => {
  return (
    <>
      {cartoons.map((cartoon) => {
        return (
          <>
            {cartoon.superpower === superpower ? (
              <span>
                {cartoon.name} - {cartoon.superpower} - {cartoon.magnitude}
              </span>
            ) : (
              <></>
            )}
          </>
        );
      })}
    </>
  );
};

const vegetables = [
  {
    id: 1,
    name: "Carrots",
    pickDate: "2023-03-25"
  },
  {
    id: 2,
    name: "Broccoli",
    pickDate: "2023-03-30"
  },
  {
    id: 3,
    name: "Peppers",
    pickDate: "2023-03-25"
  },
  {
    id: 4,
    name: "Tomatoes",
    pickDate: "2023-03-27"
  },
  {
    id: 5,
    name: "Ladies Finger",
    pickDate: "2023-03-30"
  }
];

const FreshVegetables = ({ vegetables }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setClicked(true);
        }}
      >
        Highlight Fresh Vegetables
      </button>
      {vegetables.map((vegetable) => {
        return (
          <>
            <p
              style={
                vegetable.pickDate === "2023-03-30" && clicked
                  ? { color: "green" }
                  : {}
              }
            >
              {vegetable.name}
            </p>
            <p>{vegetable.pickDate}</p>
          </>
        );
      })}
    </>
  );
};

const flowers = [
  {
    id: 1,
    flowers: ["rose", "lily", "marigold"],
    totalFlowers: 9,
    price: 1400
  },
  {
    id: 2,
    flowers: ["rose", "snapdragon", "sunflower"],
    totalFlowers: 10,
    price: 3400
  }
];

const RoseFlowerPrice = ({ bouquets }) => {
  const roseBouquet = bouquets.filter((bouquet) => bouquet.flowers === "rose");
  return <div>{console.log(roseBouquet)}</div>;
};

export default function App() {
  return (
    <div className="App">
      {/* <ImageView image={"https://picsum.photos/200"} width="200px" height="100px"/> */}

      {/* <CartoonDispay cartoons={cartoons} /> */}
      {/* <EverPowerCartoons cartoons={cartoons} /> */}
      {/* <CartoonWithSuperPower cartoons={cartoons} superpower={"Teleportation"} /> */}
      {/* <FreshVegetables vegetables={vegetables} /> */}
      <RoseFlowerPrice bouquets={flowers} />
    </div>
  );
}
