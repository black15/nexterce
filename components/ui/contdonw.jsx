import { useEffect, useState } from "react";


function CountdownTimer(){
   const [expiryTime, setExpiryTime] = useState("5 feb 2023 15:30:25");
   const [countdownTime, setCountdownTime]= useState(
		{
			countdownDays:'',
			countdownHours:'',
			countdownMinutes:'',
			countdownSeconds:''
		}
   );
	const countdownTimer=()=>{
	const timeInterval= setInterval(() => {
		const countdownDateTime = new Date(expiryTime).getTime(); 
		const currentTime = new Date().getTime();
		const remainingDayTime = countdownDateTime - currentTime;
		const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
		const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
		const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

		const runningCountdownTime={
			countdownDays: totalDays,
			countdownHours: totalHours,
			countdownMinutes: totalMinutes,
			countdownSeconds: totalSeconds
		}
	
		setCountdownTime(runningCountdownTime);

		if (remainingDayTime < 0) {
			clearInterval(timeInterval);
			setExpiryTime(false);
		}

	}, 1000);
	}
	
	useEffect(() => {
		countdownTimer();
	});
   
	return(
		<div className="flex items-center text-gray-50 bg-[#158BD4] p-6 rounded">
			<p className="flex flex-col items-center space-y-2 lg:h-16 pr-6 pl-2 border-r">
				<span className="text-3xl font-semibold">{countdownTime.countdownDays}</span>
				<sub className="text-lg">Days</sub>
			</p>
			<p className="flex flex-col items-center space-y-2 lg:h-16 px-6 border-r">
				<span className="text-3xl font-semibold">{countdownTime.countdownHours}</span>
				<sub className="text-lg">Hours</sub>
			</p>
			<p className="flex flex-col items-center space-y-2 lg:h-16 px-6 border-r">
				<span className="text-3xl font-semibold">{countdownTime.countdownMinutes}</span>
				<sub className="text-lg">Minutes</sub>
			</p>
			<p className="flex flex-col items-center space-y-2 lg:h-16 pl-6 pr-2">
				<span className="text-3xl font-semibold">{countdownTime.countdownSeconds}</span>
				<sub className="text-lg">Seconds</sub>
			</p>
		</div>
	)
}
export default CountdownTimer;