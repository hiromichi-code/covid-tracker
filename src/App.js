import Toppage from "./pages/Toppage";
import "./App.css";
import countriesJson from "./countries.json";
import { useState } from "react";

function App() {
	const [country, setCountry] = useState(" ");
	const [countryData, setCountryData] = useState({
		data: "",
    newConfirmed: "",
    totalConfirmed: "",
		newRecovered: "",
		totalRecovered: "",
	});

	const getCountryData = () => {
		fetch(`https://api.covid19api.com/country/${country}`)
			.then((res) => res.json())
			.then(data => {
          setCountryData({
            data: data[data.length -1].Date,
            newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,
            totalConfirmed: data[data.length -1].Confirmed,
		        newRecovered: data[data.length -1].Recovered - data[data.length -2].Recovered,
		        totalRecovered: data[data.length -1].Recovered,
          });
      })
	};
	return (
		<div>
      <Toppage 
        countriesJson={countriesJson} 
        setCountry={setCountry} 
        getCountryData={getCountryData}
        countryData={countryData}
      />
		</div>
	);
}

export default App;
