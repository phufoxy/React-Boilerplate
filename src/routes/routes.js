import { IndexPage, EatPage, IntroducPage, CusinessPage, HomePage } from '../components/pages';
const routes = {
    route: [
        {
            path: '/', exact: true, component: IndexPage
        },
        {
            path: '/eat', exact: true, component: EatPage
        },
        {
            path: '/intro', exact: true, component: IntroducPage
        },
        {
            path: '/cusiness', exact: true, component: CusinessPage
        },
        {
            path: '/home', exact: true, component: HomePage
        },
    ]
}
export default routes;