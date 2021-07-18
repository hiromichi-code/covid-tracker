import countriesJson from "../countries.json";
import { useState } from "react";

const Selector = () => {
    const [country, setCountry] = useState(" ");
    const getCountryDate =()=>{
        fetch(`https://api.covid19api.com/country/${country}`)
        .then(res =>res.json())
        .then(data=>console.log(data))
    }
	return (
		<div>
			<select onChange={(e) => setCountry(e.target.value)}>
                <option>Get A Country</option>
				{countriesJson.map((country, index) => (
					<option key={index} value={country.Slug}>
						{country.Country}
					</option>
				))}
			</select>
			<button onClick={getCountryDate}>Get data</button>
		</div>
	);
};

export default Selector;
