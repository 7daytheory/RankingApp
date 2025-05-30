import { FetchData } from './FetchData';
import { Home } from './components/Home';
import { RankItems } from './components/RankItems';

const AppRoutes = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: '/fetch-data',
        element: <FetchData />,
    },
    {
        path: '/rank-items',
        element: <RankItems />,
    }
]

export default AppRoutes;