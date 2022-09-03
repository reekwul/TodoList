<template>
      <div class="noteBlock">
            <div v-for="(task, index) in tasks"
                 :key="task"
                 class=""
            >
                  <h3>{{ task.name }}</h3>
                  <div>
                        <p
                              v-for="i in task.arrTask.length>3 ? 2 : task.arrTask.length"
                              :key="task.arrTask[i-1]"
                        >{{ task.arrTask[i-1].task}}</p>
                        <p v-if="task.arrTask.length>3">...</p>
                  </div>
                  <button @click.prevent="changePage(task, index)">редактировать</button>
                  <button @click.prevent="confirmations(task, index)"><img src="../assets/vector_plus.svg" alt=""></button>
            </div>
      </div>
      <v-confirmation
      :show="confirmationShow"
      @ActionPopupBtnTrue="confirmationsClose()"
      @ActionPopupBtnFalse="confirmationShow = false"
/>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import VConfirmation from "@/components/v-confirmation";

export default {
      name: "v-task",
      components: {VConfirmation},
      data() {
            return {
                  confirmationShow: false,
                  tasking:{}
            }
      },
      methods: {
            ...mapActions({
                  remove: 'tasks/delTask',
                  changeTask: 'tasks/addChange'
            }),
            changePage(task, index) {
                  task.index = index
                  this.changeTask(task)
                  this.$router.push('/change')
            },
            confirmations(task, index) {
                  task.index = index
                  this.tasking = task
                  this.confirmationShow = true
            },
            confirmationsClose() {
                  this.remove(this.tasking)
                  this.confirmationShow = false
            }

      },
      computed: {
            ...mapGetters({
                  tasks: 'tasks/Task',
                  gg: 'tasks/TaskChange'
            }),
      },
}
</script>

<style scoped>
.noteBlock {
      display: flex;
      box-sizing: border-box;
      margin: 5px;
      flex-wrap: wrap;
      justify-content: center;
}

.a1-a {
      border: 2px solid black;
      min-width: 160px;
      max-width: 260px;
      min-height: 250px;
      padding: 10px;
      margin: 10px;
      display: flex;
      flex-direction: column;
      flex: 1;
}

</style>