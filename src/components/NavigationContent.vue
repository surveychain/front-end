<template>
  <v-list dense>
    <template v-for="item in items">
        <v-layout
        row
        v-if="item.heading"
        align-center
        :key="item.heading"
        >
        <v-flex xs6>
            <v-subheader v-if="item.heading">
            {{ item.heading }}
            </v-subheader>
        </v-flex>
        <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
        </v-flex>
        </v-layout>
        <v-list-tile v-else @click="" :key="item.text">
        <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
            {{ item.text }}
            </v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>
    </template>
  </v-list>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { icon: 'dashboard', text: 'Dashboard' },
        { icon: 'face', text: 'My Survey' },
        { icon: 'description', text: 'Active Survey' },
        { icon: 'check_circle', text: 'Finished Survey' },
        { icon: 'settings', text: 'Settings' }
      ]
    })
  }
</script>