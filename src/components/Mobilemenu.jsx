import React from 'react';
 import { useState } from 'react'
 import '../css.home.css';
import menu from '../assets/menu.png';


export default function Mobilemenu(){

	const [open, setOpen] = useState(false);


	return (
		<>
			<div>
				<img src={menu} />
			
			</div>
		</>
	)
}