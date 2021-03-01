import React, { useState, useEffect } from 'react';
import './App.css';

function Clock() {
	const [ clockState, setClockState ] = useState();

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setClockState(date.toLocaleTimeString());
		}, 1000);
	}, []);

	const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "Morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "Night"
    styles.color = "#D90000"
  }

	return (
		<div className="clock-wrapper">
			<div>
				<h1>Good {timeOfDay}</h1>
			</div>

			<div class="clock">{clockState}</div>
		</div>
	);
}

export default Clock;
