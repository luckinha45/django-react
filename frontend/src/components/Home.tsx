import React, {useState} from "react";

import styles from './Home.module.css';
import {Link} from "react-router-dom";

import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip'
import Grid from "@mui/material/Grid";


export default function Home(props:object) {
	return <>
		<center>
			<h1 className={styles.title}> Helldo </h1>

			<Grid container spacing={4} justifyContent="center">
				<Grid item >
					<Link to={'to-do-list'}>
						<Button variant="contained" color="primary"> Tarefas </Button>
					</Link>
				</Grid>
				
				<Grid item >
					<Link to={'about'}>
						<Button variant="contained" color="primary"> Stocks </Button>
					</Link>
				</Grid>
			</Grid>

			<Link to={'about'}>
				<Tooltip title="Sobre">
					<Button className={styles.btn_about} color="secondary" variant="contained"> <Icon>info</Icon> </Button>
				</Tooltip>
			</Link>
		</center>
	</>;
}