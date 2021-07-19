import Title from "../components/Title";
import Selector from "../components/Selector";
import Result from '../components/Result';

const Toppage = (props) => {
	return (
		<div>
			<Title />
            <Selector 
                countriesJson={props.countriesJson} 
                setCountry={props.setCountry} 
                getCountryData={props.getCountryData}
            />
            <Result />
		</div>
	);
};

export default Toppage;
