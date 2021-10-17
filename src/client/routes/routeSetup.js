
import DashboardComponent from '../component/dashboard/DashboardComponent';

export const routesList = [
    {
        name: 'Home',
        path: '/home',
        renderComponent: function routeList(routeProps) {
            return (
                <DashboardComponent />
            );
        },
        redirect: '',
        title: 'Team Managment, Scrum',
    }
];