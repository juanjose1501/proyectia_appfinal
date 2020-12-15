import vueRouter from 'vue-router'
import CreateProject from './components/CreateProject'
import ConsultarProjectName from './components/ConsultarProjectName' 
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },

        
        {
            path: '/proyecto/crear',
            name: "crear",
            component: CreateProject
        },
        {
            path: '/proyecto/consulta/',
            name: "consultanombre",
            component: ConsultarProjectName
        },
    ]
})
export default router