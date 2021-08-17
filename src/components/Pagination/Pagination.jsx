import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Conteiner = styled.div`
	width: max-content;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
	overflow: auto;
`;


const Button = styled.a`
  background-color: #141a35;
  color: #e2e2e2;
  border-radius: 3px;
  padding: .3rem .5rem;
  margin: .5rem .05rem;
  text-decoration:none;
  display: inline-block;
  width: 1rem;
  &:hover{
  	transform: translate(0rem, -.07rem);
  	transition: all .1s;
  	
  	background-color: #141a35ee;
  }
`;

export function Pagination ({ countriesPerPage, totalCountries, paginate }){
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
		pageNumbers.push(i);
	}

	return (
			<Conteiner >
			{pageNumbers.map( number => 
						<Button 
							key={number} 
							onClick={() => paginate(number)} 
							href="#"
						>
							{number}
						</Button >
			)}
			</Conteiner>
		);
}

export default Pagination;


/*

<div className={paginationStyle.conteiner}>
			{pageNumbers.map( number => {
				return (
						<Button key={number} onClick={() => paginate(number)} href="#" className={paginationStyle.pages}>
							{number}
						</Button >
					)
			})}
			</div>
		);

*/