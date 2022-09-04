<template>
      <div class="note-Block">
            <div
                  v-for="(task, index) in tasks"
                 :key="task"
                 class="Note-List"
            >
                  <h3>{{ task.name }}</h3>
                  <div>
                        <p
                              class="flex"
                              v-for="i in task.arrTask.length>3 ? 2 : task.arrTask.length"
                              :key="task.arrTask[i-1]"
                        >{{i}}. {{ task.arrTask[i-1].task}}</p>
                        <p v-if="task.arrTask.length>3">
                              <i class="material-icons">more_horiz</i>
                        </p>
                  </div>
                  <ui-btn class="btn-edit" @click.prevent="changePage(task, index)">
                        <i class="material-icons-outlined">edit</i>
                  </ui-btn>
                  <ui-btn class="btn-delete" @click.prevent="confirmations(task, index)">
                        <i class="material-icons-outlined">delete</i>
                  </ui-btn>
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
import UiBtn from "@/components/UI/ui-btn";

export default {
      name: "v-task",
      components: {UiBtn, VConfirmation},
      data() {
            return {
                  visibleBtnUpdeteDelete :false,
                  confirmationShow: false,
                  tasking:{}
            }
      },
      methods: {
            ...mapActions({
                  remove: 'tasks/delTask',
                  changeTask: 'tasks/addChange'
            }),
            //добавление изменяющейся заметки в стейт, переход на новую страницу
            changePage(task, index) {
                  task.index = index
                  this.changeTask(task)
                  this.$router.push('/change')
            },
            //вызов диалогового окна подтверждения
            confirmations(task, index) {
                  task.index = index
                  this.tasking = task
                  this.confirmationShow = true
            },
            //закрытие диалогового окна подтверждения
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
.note-Block {
      display: flex;
      flex: 1;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 90%;
      margin: 10px;
      padding: 10px;

}

.Note-List {
      position: relative;

      display: flex;
      flex: 1;
      flex-direction: column;

      background: rgba(255, 227, 142, 1);
      box-shadow: 3px 3px 4px 4px rgba(250, 222, 137, 1);
      border-radius: 14px;
      min-width: 160px;
      max-width: 260px;

      padding: 15px;
      margin: 10px;
}
.flex{
      overflow: hidden
}
.btn-edit{
      position: absolute;
      top: -25px;
      right:25px;
      z-index: 5;

      width: 45px;
}
.btn-delete{
      position: absolute;
      top: -25px;
      right:-25px;
      z-index: 5;

      width: 45px;
}
</style>