<template>

      <div
            class="new-Task"
            v-show="show">
            <div class="blok-Note">
                  <h2>Название заметки</h2>
                  <input
                        maxlength="25"
                        class="task-bord"
                        v-model="task.name" placeholder="Введите название заметки">
                  <h3>Создайте задачу</h3>
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
                  <transition-group name="list">
                        <h3 v-if="task.arrTask.length">Список задач</h3>
                        <div
                              class="flex"
                              v-for="i in task.arrTask.length"
                              :key="i">
                              <h3>{{ i }}.</h3>
                              <input
                                    class="task-bord"
                                    v-model="task.arrTask[i-1].task">

                              <ui-btn @click.prevent="removeTask(i-1)">
                                    <i class="material-icons">delete</i>
                              </ui-btn>
                        </div>
                  </transition-group>
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
            //удаление пункта заметки
            removeTask(key) {
                  this.task.arrTask.splice(key, 1)
            },
            //добавление заметки в общий список всех заметок
            pushTask() {
                  if (!this.task.name || !this.task.arrTask.length) return
                  this.addTask(this.task)
                  this.closeAddTask()
            },
            //добавление задачи в список с задачами для заметки
            pushingInTask() {
                  if (!this.mission.task) return
                  this.task.arrTask.push(JSON.parse(JSON.stringify(this.mission)))
                  this.mission = {
                        ...missionPattern
                  }
            },
            //закрытие всплывающего окна
            closeAddTask() {
                  this.resetTask()
                  this.$emit('closeAddNewTask')
            },
            //сброс обьекта добавления
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

.flex {
      display: flex;
      align-items: center;
}

.task-bord {
      flex: 1;
      margin: 10px;
      padding: 10px;
      font-size: 20px;
      border: none;
      background: rgba(0, 9, 60, 0.2);
      border-radius: 6px;
      outline: none;
}

.list-item {
      display: inline-block;
      margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
      transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
      opacity: 0;
      transform: translateY(30px);
}
</style>