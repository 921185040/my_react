/*
 * @Description: 路由
 * @Date: 2021-04-20
 * @Author: LDZ <dongzhi.liu@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import Home from '../components/home';
import Knowledge from '../components/knowledge'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/Knowledge',
        component: Knowledge,
        exact: true,
    },
];

export default routes;