<template>
  <v-container fluid grid-list-lg>
    <v-layout justify-center align-center row wrap>
      <v-flex sm8>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            :src="survey.src"
            >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text">{{ survey.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span></span><br>
              <span class="grey--text">{{survey.date}}</span>
              <span><v-icon color="red">face</v-icon>{{survey.count}}</span> <span><v-icon color="grey">payment</v-icon>$ {{survey.budget}}</span>
            </div>
          </v-card-title>
          <v-card-text>
            {{survey.description}}
          </v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex sm8 v-for="question in survey.questionlist">
        <v-card>
           <v-card-title primary-title>
            <h3 class="headline">{{ question.title }}</h3>
           </v-card-title>
           <v-card-text>
            <template v-for="answer in question.answer">
              <div>
                <v-badge class="pl-3 py-1" color="orange">
                  <span slot="badge">{{answer.count}}</span>
                  <span class="subheading">{{answer.title}}</span>
                </v-badge>
              </div>
            </template>
           </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm8> 
        <v-btn block color="success" @click="submit">ok</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import data from '../data'

export default {
    data() {
        return {
            survey: {},
            selected: null
        }
    },
    created(){
        console.log(this.$route.params.id)
        this.survey = data.surveylist[this.$route.params.id]
        console.log(this.survey)
    },
    methods: {
      submit() {
        this.$router.push({name:'SurveyListPage'})
      }
    }
}
</script>
