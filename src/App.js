import React, { useState, useEffect } from "react";
import StoreInfoCard from "./StoreInfoCard.js";

function Main() {
	const [storeHoursData, setStoreHoursData] = useState(Object);
	

	
	useEffect(() => {
		getStoreHoursData();
	});

	var getStoreHoursUrl = `https://xhvvmqq4od.execute-api.us-east-1.amazonaws.com/dev/list-store-hours`;

	const getStoreHoursData = async () => {
		const response = await fetch(getStoreHoursUrl);
		const jsonData = await response.json()
		if (jsonData && jsonData.message !== "Not Found") {
      console.log(JSON.parse(jsonData.body).Items)

			setStoreHoursData(JSON.parse(jsonData.body).Items);
		//	console.log(jsonData.body.Items)
		}
		else {
			setStoreHoursData({})
		}
	};
	
	return (
		<div>
			<StoreInfoCard storeHoursData={storeHoursData} />
		</div>
	);
}

export default Main;
