const Selector = (props) => {
	return (
		<div>
			<select onChange={(e) => props.setCountry(e.target.value)}>
                <option>Get A Country</option>
				{props.countriesJson.map((country, index) => (
					<option key={index} value={country.Slug}>
						{country.Country}
					</option>
				))}
			</select>
			<button onClick={props.getCountryDate}>Get data</button>
		</div>
	);
};

export default Selector;
