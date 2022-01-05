import { createStore } from 'vuex';
import { RestClient } from '@/service/RestClient';
import { RoundDTO } from '@/dto/RoundDTO';
import { RootState } from '@/interfaces/RootState';

export default createStore<RootState>({
  state: {
    player: null,
    rounds: [],
    currentRound: null,
  },
  mutations: {
    setPlayer(state: RootState, player: string | null) {
      state.player = player;
      if (typeof player === 'string') {
        localStorage.setItem('player', player);
      } else {
        localStorage.removeItem('player');
      }
    },
    setRounds(state: RootState, rounds: any[]) {
      state.rounds = rounds;
    },
    setCurrentRound(state: RootState, round: RoundDTO | null) {
      state.currentRound = round;
      if (round !== null) {
        localStorage.setItem('currentRound', JSON.stringify(round));
      } else {
        localStorage.removeItem('currentRound');
      }
    },
  },
  getters: {
    getPlayer(state): string | null {
      return state.player;
    },
    getRounds(state): RoundDTO[] {
      return state.rounds;
    },
    getCurrentRound(state): RoundDTO | null {
      return state.currentRound;
    },
  },
  actions: {
    async fetchRounds(context) {
      const restClient = new RestClient();
      const resp = await restClient.GET('/api/rounds');
      if (resp.response) {
        context.commit('setRounds', resp.response);
      }
    },
    async fetchRound(context, id: string) {
      const restClient = new RestClient();
      const resp = await restClient.GET(`/api/rounds/${id}`);
      if (resp.response) {
        context.commit('setCurrentRound', resp.response);
      }
    },
  },
  modules: {
  },
});
