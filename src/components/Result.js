const Result = (props) => {
	return (
		<div>
			<p>日付： {props.countryData.data}</p>
			<p>新規感染者： {props.countryData.newConfirmed}</p>
			<p>感染者総数： {props.countryData.totalConfirmed}</p>
			<p>新規回復者： {props.countryData.newRecovered}</p>
			<p>回復者総数： {props.countryData.totalRecovered}</p>
		</div>
	);
};

export default Result;
