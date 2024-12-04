import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../views/home/home';
import { paths } from './paths';


export const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route path={paths.home} element={<Home />} />
            </Routes>
        </Router>
    )
}