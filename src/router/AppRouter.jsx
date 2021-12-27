import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {  publicRoutes } from '../router/routes';

const AppRouter = () => {
    let accessibleRoutes = [...publicRoutes];
return (
    <Routes>
        {accessibleRoutes.map((route) => (
           <Route
                element={route.element}
                path={route.path}
                exact={route.exact}
                key={route.path}
            >
            </Route>
        ))}
    </Routes>
)
}




export default AppRouter;
