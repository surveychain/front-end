import Vue from 'vue'
import Router from 'vue-router'
import SurveyListPage from '../components/SurveyListPage'
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
      path: '/survey/:id', component: SurveyDetailPage},
  ]
})
