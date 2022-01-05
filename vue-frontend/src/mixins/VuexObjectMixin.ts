import { mapGetters } from 'vuex';
import { useToast, TYPE } from 'vue-toastification';
import { RestClient } from '@/service/RestClient';
import Loader from '@/components/loader/Loader.vue';

export default {
  data: () => ({
    restClient: new RestClient(),
    loading: false,
  }),
  components: {
    Loader,
  },
  computed: {
    ...mapGetters({
      rounds: 'getRounds',
      player: 'getPlayer',
      currentRound: 'getCurrentRound',
    }),
  },
  methods: {
    showToast(message: string, options: any = { type: TYPE.INFO }) {
      const toast = useToast();
      toast(message, options);
    },
  },
};
