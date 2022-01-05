<template>
  <template v-if="loading">
    <loader></loader>
    <template v-if="submitted && !gameFinalized">
      <p class="text-center mt-3 mb-2">Bitte warte, während die anderen noch Voten...</p>
      <p class="text-center mb-8">{{ currentRound.currentRecord.votes.length }} / {{ currentRound.playerCount }} Spieler haben bereits abgestimmt. ({{ playersVoted }})</p>

      <div class="mx-4 mt-16">
        <h2>Deine Eingaben:</h2>
        <p>{{ currentRound.currentRecord.artist }} - {{ currentRound.currentRecord.title }}</p>
        <v-card
          class="mx-auto"
          tile
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Kreativität: <strong>{{ voteDTO.creativity }}</strong></v-list-item-title>
              <v-list-item-title>Ohrwurmfaktor: <strong>{{ voteDTO.earworm }}</strong></v-list-item-title>
              <v-list-item-title>Groove: <strong>{{ voteDTO.groove }}</strong></v-list-item-title>
              <v-list-item-title>Lyrics: <strong>{{ voteDTO.lyrics }}</strong></v-list-item-title>
              <v-list-item-title>Produktion: <strong>{{ voteDTO.production }}</strong></v-list-item-title>
              <v-list-item-title>Underdog-Faktor: <strong>{{ voteDTO.underdogness }}</strong></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>

      <div class="ma-4 mt-16">
      <v-text-field
        v-model="newPlayerCount"
        label="Anzahl Spieler"
        type="number"
        required
      ></v-text-field>
      <v-btn color="lighten-2" text @click="changePlayerCount" :disabled="newPlayerCount === 0">Spielerzahl ändern</v-btn>
      </div>
    </template>
  </template>
  <template v-else-if="!gameFinalized">
    <v-card class="mx-4 my-12 pt-4 pb-4 pl-2 pr-2" max-width="374">
      <template v-if="currentRound?.currentRecord?.imageUrl">
        <v-img
          class="mb-4"
          height="250"
          :src="currentRound?.currentRecord?.imageUrl"
        ></v-img>
      </template>

      <v-card-title>{{ currentRound?.currentRecord?.title }}</v-card-title>
      <v-card-subtitle class="mb-4">{{ currentRound?.currentRecord?.artist }}</v-card-subtitle>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Kreativität</v-card-title>
      <v-card-text>
        <v-rating v-model="voteDTO.creativity" density="default" color="yellow" clearable half-increments/>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Ohrwurmfaktor</v-card-title>
      <v-card-text>
        <v-rating v-model="voteDTO.earworm" density="default" color="yellow" clearable half-increments/>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Groove</v-card-title>
      <v-card-text>
        <v-rating v-model="voteDTO.groove" density="default" color="yellow" clearable half-increments/>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Lyrics</v-card-title>
      <v-card-text>
        <v-rating v-model="voteDTO.lyrics" density="default" color="yellow" clearable half-increments/>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Produktion</v-card-title>
      <v-card-text>
        <v-rating v-model="voteDTO.production" density="default" color="yellow" clearable half-increments/>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Underdog-Faktor</v-card-title>
      <v-card-text>
        <v-rating v-model="voteDTO.underdogness" density="default" color="yellow" clearable half-increments/>
      </v-card-text>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text :disabled="!voteDTO.isValid" @click="submitVote">Abstimmen</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  <template v-else>
    <h2>Abschlussstatistiken</h2>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VuexObjectMixin from '@/mixins/VuexObjectMixin';
import { VoteDTO } from '@/dto/VoteDTO';

export default defineComponent({
  name: 'Game',
  data: () => ({
    voteDTO: new VoteDTO(),
    polling: null as any,
    submitted: false,
    gameFinalized: false,
    currentRecordBackup: '',
    newPlayerCount: 0,
  }),
  mixins: [VuexObjectMixin],
  async mounted() {
    await this.fetchCurrentRound();
    await this.startNewRound();
    this.newPlayerCount = this.currentRound?.playerCount;
  },
  methods: {
    async fetchCurrentRound() {
      this.loading = true;
      const { roundId } = this.$route.params;
      await this.$store.dispatch('fetchRound', roundId);
      this.loading = false;
    },
    async startNewRound() {
      this.currentRecordBackup = this.currentRound?.currentRecord?._id;
      if (this.currentRound.currentRecord === null) {
        this.showToast('Das Spiel ist abgeschlossen!');
        this.gameFinalized = true;
        this.showStats();
        return;
      }

      if (this.currentRound?.currentRecord?.votes) {
        const existingVoting = this.currentRound.currentRecord.votes.find((v: VoteDTO) => v.player === this.player);
        if (existingVoting) {
          this.voteDTO = VoteDTO.fromData(existingVoting);
          this.showToast('Dein Voting existiert bereits.');
          this.loading = true;
          this.submitted = true;
          await this.startPolling();
          return;
        }
      }
      this.voteDTO = new VoteDTO();
      if (this.currentRound && this.player) {
        this.voteDTO.round = this.currentRound._id;
        this.voteDTO.player = this.player;
      }
      this.loading = false;
      this.submitted = false;
    },
    async submitVote() {
      if (this.currentRound) {
        this.loading = true;
        this.submitted = true;
        await this.restClient.POST(`/api/rounds/${this.currentRound._id}/submit`, this.voteDTO);
        await this.startPolling();
      }
    },
    async startPolling() {
      await this.$store.dispatch('fetchRound', this.currentRound._id);
      this.polling = setInterval(async () => {
        if (this.currentRound) {
          await this.$store.dispatch('fetchRound', this.currentRound._id);
          if (this.currentRecordBackup !== this.currentRound?.currentRecord?._id) {
            this.showToast('Neues Album kommt!');
            this.endPolling();
            this.startNewRound();
          }

          if (this.currentRound.currentRecord === null) {
            this.showToast('Das Spiel ist beendet!');
            this.gameFinalized = true;
            this.showStats();
          }
        }
      }, 3000);
    },
    endPolling() {
      clearInterval(this.polling);
    },
    async changePlayerCount() {
      await this.restClient.POST(`/api/rounds/${this.currentRound?._id}`, { _id: this.currentRound._id, playerCount: this.newPlayerCount });
    },
    async showStats() {
      const results = await this.restClient.GET(`/api/rounds/${this.currentRound?._id}/stats`);
      this.loading = false;
    },
  },
  beforeUnmount() {
    this.endPolling();
  },
  computed: {
    playersVoted(): string {
      const votedPlayers = this.currentRound?.currentRecord?.votes.map((v: VoteDTO) => v.player);
      return votedPlayers.join(', ');
    }
  }
});
</script>
