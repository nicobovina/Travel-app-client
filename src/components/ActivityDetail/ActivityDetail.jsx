import React from 'react';

// import actDetailStyle from './ActivityDetail.module.css';


export function ActivityDetail({activity: {name, difficulty, duration, season}}){
	return (
		<div >
			<h1>{name}</h1>
			<div >
				<div >
					<label htmlFor="difficulty">Dificultad</label>
					<p>{difficulty}</p>
				</div>
				<div >
					<label htmlFor="duration">Duracion</label>
					<p>{duration}</p>
				</div>
				<div >
					<label htmlFor="season">Temporada</label>
					<p>{season}</p>
				</div>
			</div>
		</div>
		);
}

export default ActivityDetail;