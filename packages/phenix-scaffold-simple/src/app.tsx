import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div id="app">
        <h1>Hello App!</h1>
        <router-view></router-view>
      </div>
    );
  },
});
