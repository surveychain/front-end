import Vue from 'vue'
import Router from 'vue-router'
import SurveyListPage from '../components/SurveyListPage'
import SurveyPage from '../components/SurveyPage'
import SurveyDetailPage from '../components/SurveyDetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SurveyListPage',
      component: SurveyListPage
    },
    {
      path: '/survey/:id', 
      name: 'SurveyPage',
      component: SurveyPage
    },
    {
      path: '/detail/:id', 
      name: 'SurveyDetailPage',
      component: SurveyDetailPage
    },
  ]
})
