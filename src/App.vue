<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer">
      <app-navigation-content></app-navigation-content>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="<ml></ml>-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Survey Chain</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon  @click="clickYellow">
        <v-icon color="yellow">notifications</v-icon>
      </v-btn>
      <v-btn icon @click="clickRed">
        <v-icon color="red">notifications</v-icon>
      </v-btn>
      <v-btn icon @click="clickBlue">
        <v-icon color="blue">notifications</v-icon>
      </v-btn>
      <v-btn icon  @click="clickGreen">
        <v-icon color="green">notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <app-dialog-content></app-dialog-content>
    </v-dialog>
  </v-app>
</template>

<script>
  import appNavigationContent from './components/NavigationContent.vue'
  import appDialogContent from './components/DialogContent.vue'
  import web3 from 'web3'
  

  export default {
    data (){
      return {
        dialog: false,
        drawer: null
      }
    },
    components: {
      appNavigationContent,
      appDialogContent
    },
    props: {
      source: String
    },
    methods: {
      clickYellow() {
        alert('yello')
      },
      clickRed() {
        alert('red')
      },
      clickBlue() {
        alert('blue')
      },
      clickGreen() {
        alert('green')
      },
      onCreate() {
        // alert('onCreate')
        console.log(web3)
      }
    },
    created() {
      this.onCreate()
    }
  }
</script>