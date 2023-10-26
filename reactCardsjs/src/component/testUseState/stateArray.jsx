import { useState } from 'react';

export default function UseStateArray() {
	const [useArray, setUseArray] = useState([
		{
			id:0,
			anime:"Naruto Shippuden",
			status: false
		},
		{
			id:1,
			anime:"Black anime",
			status: true
		},
		{
			id:2,
			anime:"Onepice",
			status: true
		},
		{
			id:3,
			anime:"Dragon Ball Z",
			status: false
		}
	]);
	return (
		<>
			{useArray.map((list)=> 
				<div key={list.id}>
					<h1>{list.anime}</h1>
				</div>
			)}	
		</>
	)
}