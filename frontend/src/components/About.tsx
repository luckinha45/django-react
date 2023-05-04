import React, {Component, useState} from "react";

import styles from './Home.module.css';
import {Link} from "react-router-dom";

export default function About(props:object): JSX.Element {
	return <>
		<p>This is a about Page.</p>
		<Link to={'/'}> Home </Link>
	</>;
}