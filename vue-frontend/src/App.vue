<template>
  <v-app theme="dark" class="game-container">
    <v-app-bar density="compact">
      <v-spacer></v-spacer>

      <template v-if="player">
        <v-app-bar-title>Hallo {{ player }}</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn text>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </v-btn>
        <v-btn class="mr-3" @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
      <v-divider inset vertical></v-divider>
    </v-app-bar>
    <v-main>
      <template v-if="player">
        <router-view/>
      </template>
      <template v-else>
        <v-form>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="newPlayer"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-btn color="deep-purple lighten-2" text @click="registerPlayer">Los</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </template>
    </v-main>
    <v-footer>
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="bg-grey text-center"
      ><p>Du bist 1 Pimmel</p>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { RestClient } from './service/RestClient';
import VuexObjectMixin from '@/mixins/VuexObjectMixin';

export default defineComponent({
  name: 'App',
  data: () => ({
    newPlayer: '',
  }),
  mixins: [VuexObjectMixin],
  async mounted() {
    const userString = localStorage.getItem('player');
    if (userString) {
      await Promise.all([
        this.$store.commit('setPlayer', userString),
        this.$store.dispatch('fetchRounds'),
      ]);
    }
  },
  methods: {
    async registerPlayer() {
      await Promise.all([
        this.$store.commit('setPlayer', this.newPlayer),
        this.$store.dispatch('fetchRounds'),
      ]);
    },
    logout() {
      this.$store.commit('setPlayer', null);
    },
  },
});
</script>

<style lang="scss">
.game-container {
  max-width: 100%;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: #f0f0f0;
}

.router-link-exact-active {
  color: #673ab7;
}
</style>
