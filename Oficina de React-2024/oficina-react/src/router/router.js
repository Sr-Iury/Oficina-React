import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomeView } from '../views/home/home';
import { paths } from './paths';
import { ContadorView } from '../views/contador/contador';


export const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path={paths.home} element={<HomeView />} />
                <Route path={paths.contador} element={<ContadorView />} />
            </Routes>
        </Router>
    )
}