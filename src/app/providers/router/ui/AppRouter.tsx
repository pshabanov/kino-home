import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <Routes>
                {Object.values(routeConfig).map(({element, path})=>(
                    <Route
                        path={path}
                        key={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;