import logo from './logo.svg';
import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/Profile.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Post from './components/Profile/MyPosts/Post/Post';

const App = (props) => (
	<BrowserRouter>
		<div className={'app-wrapper'}>
			<Header />
			<Navbar />
			<div className={'app-wrapper-content'}>
				<Route
					path='/dialogs'
					render={() => <Dialogs state={props.state.dialogsPage} />}
				/>
				New Branch1
				<Route
					path='/profile'
					render={() => <Profile state={props.state.profilePage} />}
				/>
			</div>
		</div>
	</BrowserRouter>
);

export default App;
