import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

import './App.scss';
import Home from './components/home/Home';
import Education from './components/education/Education';
import Works from './components/works/Works';
import Skills from './components/skills/Skills';
import Page404 from "./components/404/404";
import 'uikit/dist/css/uikit.min.css';
import Header from "./components/header/Header";

function App() {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	localStorage.setItem("theme", theme);

	useEffect(() => {
		setTheme(localStorage.getItem('theme'))
	}, [])
	
	return (
		<Router>
			<div className={theme === "light" ? "app" : "app__dark"}>
				<div className={theme === "light" ? "container" : "container__dark"}>
					<Header setTheme={setTheme} theme={theme}/>
					<Routes>
						<Route path="/" element={<Navigate replace to='/home' />} />
						<Route path="/home" element={<Home theme={theme}/>} />
						<Route path="/education" element={<Education theme={theme}/>} />
						<Route path="/skills" element={<Skills theme={theme}/>} />
						<Route path="/works" element={<Works/>} />
						<Route path='*' element={<Page404/>}/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
