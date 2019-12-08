import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage'
import TeacherRegister from '@/components/teacher/register'
import StudentRegister from '@/components/student/register'
import Login from '@/components/login'
import Register from '@/components/register'
import SIndex from '@/components/student/index'
import TIndex from '@/components/teacher/index'
import Course from '@/components/teacher/course'
import THomework from '@/components/teacher/homework'
import SHomework from '@/components/student/homework'
import WorkInfo from '@/components/teacher/workInfo'
import CourseMember from '@/components/teacher/courseMember'
import SubmitWork from '@/components/student/submitWork'
import SClassmate from '@/components/student/classmate'
import SGrade from '@/components/student/grade'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/teacher/register',
      name: 'TeacherRegister',
      component: TeacherRegister
    },
    {
      path: '/student/register',
      name: 'StudentRegister',
      component: StudentRegister
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/student/index',
      name: 'SIndex',
      component: SIndex
    },
    {
      path: '/teacher/index',
      name: 'TIndex',
      component: TIndex
    },
    {
      path:'/teacher/course',
      name:'Course',
      component:Course
    },
    {
      path:'/teacher/homework',
      name:'THomework',
      component:THomework
    },
    {
      path:'/student/homework',
      name:'SHomework',
      component:SHomework
    },
    {
      path:'/teacher/workInfo',
      name:'WorkInfo',
      component:WorkInfo
    },
    {
      path:'/teacher/courseMember',
      name:'CourseMember',
      component:CourseMember
    },
    {
      path:'/student/submitWork',
      name:'SubmitWork',
      component:SubmitWork
    },
    {
      path:'/student/classmate',
      name:'SClassmate',
      component:SClassmate
    },
    {
      path:'/student/grade',
      name:'SGrade',
      component:SGrade
    }
  ]
})
