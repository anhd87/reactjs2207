import {
    createBrowserRouter
} from "react-router-dom";
import React from 'react';
import LoadingMovie from '../components/Loading';

// load component theo tung page rieng biet
const PopularPage = React.lazy(() => import('../pages/Popular'));
const SearchPage  = React.lazy(() => import('../pages/Search'));
const UpcomingPage = React.lazy(() => import('../pages/Upcoming'));
const DetailPage = React.lazy(() => import('../pages/Detail'));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<LoadingMovie/>}>
                <PopularPage/>
            </React.Suspense>
        )
    },
    {
        path: "upcoming",
        element: (
            <React.Suspense fallback={<LoadingMovie/>}>
                <UpcomingPage/>
            </React.Suspense>
        )
    },
    {
        path: "search",
        element: (
            <React.Suspense fallback={<LoadingMovie/>}>
                <SearchPage/>
            </React.Suspense>
        )
    },
    {
        path:"movie/:slug-:id",
        element: (
            <React.Suspense fallback={<LoadingMovie/>}>
                <DetailPage/>
            </React.Suspense>
        )
    }
]);
export default router;