import { useEffect, useState } from "react";
import getRandomNumber from "./utils/getRandomNumber";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import axios from "axios";
import ResidentList from "./components/ResidentList";
import LocationForm from "./components/LocationForm";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  //const [idLocation, setIdLocation] = useState(getRandomNumber(126))

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputId.value.trim();
    fetchDimension(inputValue);
  };

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const randomDimension = getRandomNumber(126);
    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const randomDimension = getRandomNumber(126);
    fetchDimension(randomDimension);
  }, []);

  return (
    <>
      {/* <div className="h-full w-full"
    style="background-image: url('https://cdn.pixabay.com/photo/2023/08/07/13/44/tree-8175062_640.jpg');">
      
    </div> */}

      <div className="">
        <div className="bg-[]">
          <LocationForm handleSubmit={handleSubmit} />
          <LocationInfo currentLocation={currentLocation} />

          <ResidentList
            residents={currentLocation?.residents ?? []}
            currentLocation={currentLocation}
          />
        </div>
      </div>
    </>
  );
}

export default App;
