<script setup>
import { useDisplay } from 'vuetify';
  const cards= ['Today', 'Yesterday'];
  const drawer= true;
  const links= [
    ['mdi-inbox-arrow-down', 'Inbox'],
    ['mdi-send', 'Send'],
    ['mdi-delete', 'Trash'],
    ['mdi-alert-octagon', 'Spam'],
  ];
  const { xs, sm } = useDisplay()
console.log(xs.value, sm.value)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer      
      class="border bg-grey-lighten-3 fill-height"
      v-model="drawer"
      :permanent="true"
      :sticky="true"
      :rail="true"
      rail-width="174"
      :expand-on-hover="true"
      width="260"
      location="end"      
    >
      <v-sheet
        color="grey-lighten-2"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>

          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
      <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>