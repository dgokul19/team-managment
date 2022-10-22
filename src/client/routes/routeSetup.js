
import DashboardComponent from '../component/dashboard/DashboardComponent';
import CreateRoomComponent from '../component/gameRoom/CreateRoomModal';

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
    },
    {
        name: 'createRoom',
        path: '/createRoom',
        renderComponent: function routeList(routeProps) {
            return (
                <CreateRoomComponent />
            );
        },
        redirect: '',
        title: 'Team Managment Scrum',
    }
];