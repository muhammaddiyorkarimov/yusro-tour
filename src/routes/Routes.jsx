import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/home/Home';
import AboutUs from './../pages/aboutUs/AboutUs';
import ErrorPage from '../helpers/ErrorPage';
import Haj from './../pages/haj/Haj';

function Routes() {
	return createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
					<Route index element={<Home/>}/>
					<Route path='/about-us' element={<AboutUs/>}/>
					<Route path='/haj' element={<Haj/>}/>
				</Route>
			</>
		)
	);
}

export default Routes;
