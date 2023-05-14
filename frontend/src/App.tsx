import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';

import Home from "./components/Home";
import About from "./components/About";
import Tarefa from "./components/Tarefa";

// const Home = React.lazy(() => import("./components/Home"));
// const About = React.lazy(() => import("./components/About"));
// const Tarefa = React.lazy(() => import("./components/Tarefa"));

import './App.css'

export default function App() {
	console.log("dsds");
	return (
			<StyledEngineProvider injectFirst> {/* permite que os module.css sejam injetados sobre o mui */} 
				<BrowserRouter basename="app">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='to-do-list' element={<Tarefa />} />
					</Routes>
				</BrowserRouter>
			</StyledEngineProvider>
	);
}

