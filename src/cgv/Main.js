import {
    RouterProvider
} from "react-router-dom";
import router from "./route/web";

export default function Main(){
    return (
        <RouterProvider router={router} />
    )
}