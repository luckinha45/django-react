import React, {useState} from "react";

import styles from './Home.module.css';
import {Link} from "react-router-dom";

export default function Home(props:object) {
	const [inpt, SetInpt] = useState('');

	return <>
		<center>
			<h1 className={styles.title}> Hello {inpt} </h1>
			<input className={styles.inpt} value={inpt} onInput={e => SetInpt(e.currentTarget.value)}></input>
			<Link to={'about'}> Aboyut </Link>
		</center>
	</>;
}
