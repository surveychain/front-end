import Vue from 'vue'
import Router from 'vue-router'
import SurveyListPage from '../components/SurveyListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SurveyListPage',
      component: SurveyListPage
    }
  ]
})
