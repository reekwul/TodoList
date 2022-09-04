<template>
      <div>
            <router-view></router-view>
      </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
      name: 'App',
      methods: {
            ...mapActions({
                  inLocal: 'tasks/inLocalStorage',
            }),
      },
      mounted() {
            this.inLocal()
      },
}
</script>

<style scoped>
#app{
      right: 0;
      left: 0;
      width: 80%;
}
</style>
