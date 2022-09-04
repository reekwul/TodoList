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
            //получение из локального хранилища данных и запись их в стейт
            this.inLocal()
      },
}
</script>

<style scoped>

</style>
