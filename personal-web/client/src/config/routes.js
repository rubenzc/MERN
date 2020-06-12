//Layout
import LayoutAdmin from '../layouts/LayoutAdmin';

//Admin pages
//AdminHome because it brings the export default. You can use any name
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

const routes = [{
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [{
            path: "/admin",
            component: AdminHome,
            exact: true
        },
        {
            path: "/admin/login",
            component: AdminSignIn,
            exact: true
        }
    ]
}];

export default routes;