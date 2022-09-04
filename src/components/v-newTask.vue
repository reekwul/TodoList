<template>
      <div
            class="new-Task"
            v-show="show">
            <div class="blok-Note">
                  <h2>Создание списка задач</h2>
                  <div class="flex">
                        <input
                              class="task-bord"
                              v-model="mission.task"
                              placeholder="Добавить задачу">
                        <ui-btn
                              :color="true"
                              @click.prevent="pushingInTask()"
                        ><i class="material-icons">add</i></ui-btn>
                  </div>


                  <h3>Название заметки</h3>
                  <input
                        maxlength="25"
                        class="task-bord"
                        v-model="task.name" placeholder="Введите название заметки">
                  <h3 v-if="task.arrTask.length">Список задач</h3>
                  <div
                        class="flex"
                        v-for="i in task.arrTask.length"
                       :key="i">
                        <input
                              class="task-bord"
                              v-model="task.arrTask[i-1].task">

                        <ui-btn @click.prevent="removeTask(i-1)">
                              <i class="material-icons">delete</i>
                        </ui-btn>
                  </div>
                  <div class="flex">
                        <ui-btn
                              :color="true"
                              @click.prevent="pushTask">Создать
                        </ui-btn>
                        <ui-btn @click.prevent="closeAddTask()">отменить создание
                        </ui-btn>
                  </div>
            </div>

      </div>
</template>

<script>
import {mapActions} from 'vuex'
import UiBtn from "@/components/UI/ui-btn";

const taskObjPattern = {
      name: '',
      arrTask: []
}
const missionPattern = {
      task: '',
      checked: false
}

export default {
      name: "v-newTask",
      components: {UiBtn},
      data() {
            return {
                  task: JSON.parse(JSON.stringify(taskObjPattern)),
                  mission: {
                        ...missionPattern
                  }
            }
      },
      props: {
            show: {
                  type: Boolean,
                  default() {
                        return false
                  }
            }
      },
      methods: {
            ...mapActions({
                  addTask: 'tasks/addTask'
            }),
            removeTask(key) {
                  this.task.arrTask.splice(key, 1)
            },
            pushTask() {
                  if (!this.task.name || !this.task.arrTask.length ) return
                  this.addTask(this.task)
                  this.closeAddTask()
            },
            pushingInTask() {
                  if (!this.mission.task) return
                  this.task.arrTask.push(JSON.parse(JSON.stringify(this.mission)))
                  this.mission = {
                        ...missionPattern
                  }
            },
            closeAddTask() {
                  this.resetTask()
                  this.$emit('closeAddNewTask')
            },
            resetTask() {
                  this.task = JSON.parse(JSON.stringify(taskObjPattern))
            },
      }
}
</script>

<style scoped>
.new-Task {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;

      display: flex;
      align-items: center;
      justify-content: center;

      float: right;

      margin: 0;
      padding: 10px;

      background: rgba(0, 9, 60, 0.2);

}
.blok-Note {
      background: white;
      margin: 10px;
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 12px;
      max-width: 500px;
}
.flex{
      display: flex;
      align-items: center;
}
.task-bord{
      flex: 1;
      margin: 10px;
      padding: 10px;
      font-size: 20px;
      border: none;
      background: rgba(0, 9, 60, 0.2);
      border-radius: 6px;
      outline: none;
}
</style>