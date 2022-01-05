<template>
  <v-app>
    <template v-if="loading">
      <loader></loader>
    </template>
    <template v-else>
      <div>
        <v-defaults-provider :defaults="defaults">
          <template v-for="round in rounds" :key="round._id">
            <template v-if="round.currentRecord">
              <v-card class="ma-10">
                <v-card-title>{{ round.currentRecord.title }}</v-card-title>
                <v-card-subtitle>{{ round.currentRecord.artist }}</v-card-subtitle>
                <v-card-subtitle>Ersteller: {{ round.creator }}</v-card-subtitle>
                <v-card-subtitle>Mitspieler: {{ round.playerCount }}</v-card-subtitle>
                <v-card-subtitle>Erstellt: {{ new Date(round.createdAt).toLocaleString() }}</v-card-subtitle>
                <template v-if="round.currentRecord && round.currentRecord.imageUrl">
                  <v-img
                    height="250"
                    :src="round.currentRecord.imageUrl"
                    class="mt-4 mb-4"
                  ></v-img>
                </template>
                <v-card-actions>
                  <v-btn @click="startGame(round._id)"
                         class="ml-2 mb-2 mt-5"
                         variant="outlined"
                         rounded
                         text>Mitspielen
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
            <template v-else>
              <v-card class="ma-10">
                <v-card-title>Abgeschlossene Runde</v-card-title>
                <v-card-subtitle>Ersteller: {{ round.creator }}</v-card-subtitle>
                <v-card-subtitle>Mitspieler: {{ round.playerCount }}</v-card-subtitle>
                <v-card-subtitle>Erstellt: {{ new Date(round.createdAt).toLocaleString() }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn @click="startGame(round._id)"
                         class="ml-2 mb-2 mt-5"
                         variant="outlined"
                         rounded
                         text>Ergebnisse ansehen
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </template>
        </v-defaults-provider>
      </div>
    </template>
    <v-card class="ma-10 pa-4">
      <v-card-title>Neue Runde anlegen</v-card-title>
      <v-text-field
        v-model="newRoundPlayerCount"
        label="Anzahl Spieler"
        type="number"
        required
      ></v-text-field>
      <v-btn @click="createRound" :disabled="newRoundPlayerCount === 0">anlegen</v-btn>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VuexObjectMixin from '@/mixins/VuexObjectMixin';
import { RoundDTO } from '@/dto/RoundDTO';

export default defineComponent({
  name: 'Home',
  data: () => ({
    defaults: {
      global: {
        elevation: 10,
      },
    },
    newRoundPlayerCount: 0,
  }),
  async mounted() {
    this.loading = true;
    await this.$store.dispatch('fetchRounds');
    this.loading = false;
  },
  mixins: [VuexObjectMixin],
  methods: {
    startGame(id: string) {
      this.$router.push({ name: 'Game', params: { roundId: id } });
    },
    async createRound() {
      this.loading = true;
      if (this.player) {
        const roundDto = new RoundDTO();
        roundDto.creator = this.player;
        roundDto.playerCount = this.newRoundPlayerCount;
        await this.restClient.POST('api/rounds', roundDto);
        await this.$store.dispatch('fetchRounds');
      }
      this.loading = false;
      this.newRoundPlayerCount = 0;
    },
  },
});
</script>
