import Toppage from "./pages/Toppage";
import "./App.css";
import countriesJson from "./countries.json";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState(" ");
    const getCountryDate =()=>{
        fetch(`https://api.covid19api.com/country/${country}`)
        .then(res =>res.json())
        .then(data=>console.log(data))
    }
	return (
		<div>
			<Toppage />
		</div>
	);
}

export default App;
