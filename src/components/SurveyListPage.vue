<template>
    <v-container fluid grid-list-lg>
        <v-layout justify-center align-center row wrap>
        <!--<v-flex xs12 sm6 offset-sm3>-->
        
        <template v-for="item in items">
        <v-flex sm8>
            <v-card>
                <v-card-media
                class="white--text"
                height="200px"
                :src="item.src"
                >
                <v-container fill-height fluid>
                    <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline white--text">{{ item.title }}</span>
                    </v-flex>
                    </v-layout>
                </v-container>
                </v-card-media>
                <v-card-title>
                <div>
                    <span>{{item.description}}</span><br>
                    <span class="grey--text">{{item.date}}</span><br><br>
                    <span><v-icon color="red">face</v-icon>{{item.count}}</span> <span><v-icon color="grey">payment</v-icon>$ {{item.budget}}</span>
                    
                </div>
                </v-card-title>
                <v-card-actions>
                    <v-spacer/>
                    <router-link tag="v-btn" flat color="orange" :to="'/survey/' + item.id">상세보기</router-link>
                </v-card-actions>
            </v-card>
            </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
import data from '../data'
export default {
    data() {
        return {
            items: data.surveylist
        }
    }
}
</script>