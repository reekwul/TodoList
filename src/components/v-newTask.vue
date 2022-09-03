<template>
      <div v-show="show">
            <h2>Создание списка задач</h2>
            <input
            v-model="mission.task"
            placeholder="Добавить задачу">
            <button @click.prevent="pushingInTask()">add</button>

            <h3>Название заметки</h3>
            <input v-model="task.name" placeholder="Введите название заметки">
            <h3 v-if="task.arrTask.length">Список задач</h3>
            <div v-for="i in task.arrTask.length"
                 :key="i">
                  <input v-model="task.arrTask[i-1].task">

                  <button @click.prevent="removeTask(i-1)">del</button>
            </div>
            <button @click.prevent="pushTask">Создать</button>
            <button @click.prevent="closeAddTask()">отменить создание</button>
      </div>
</template>

<script>
import {mapActions} from 'vuex'

const taskObjPattern = {
      name: '',
      arrTask: []
}
const missionPattern = {
      task:'',
      checked:false
}

export default {
      name: "v-newTask",

      data() {
            return {
                  task: {
                        ...taskObjPattern
                  },
                  mission: {
                        ...missionPattern
                  }
            }
      },
      props:{
        show:{
              type:Boolean,
              default(){
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
                  if(!this.task.name) return
                  this.addTask(this.task)
                  this.closeAddTask()
            },
            pushingInTask(){
                  if(!this.mission.task) return
                  this.task.arrTask.push(JSON.parse(JSON.stringify(this.mission)))
                  this.mission = {
                        ...missionPattern
                  }
            },
            closeAddTask(){
                  this.resetTask()
                  this.$emit('closeAddNewTask')
            },
            resetTask() {
                  this.task = {
                        ...taskObjPattern
                  }
            },
      }
}
</script>

<style scoped>
img {
      width: 10px;
}
</style>