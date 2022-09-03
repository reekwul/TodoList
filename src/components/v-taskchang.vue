<template>
      <div>
            <h1>Изменение заметки</h1>
            <div>
                  <h2><input v-model="changeTask.name"></h2>
                  <div v-for="i in changeTask.arrTask.length"
                       :key="i">
                        <input v-model="changeTask.arrTask[i-1].task"
                               placeholder="Добавить задачу">
                        <input type="checkbox" v-model="changeTask.arrTask[i-1].checked">
                        <ui-btn @click.prevent="removeTask(i-1)"><img src="../assets/vector_plus.svg" alt=""></ui-btn>
                  </div>
                  <ui-btn @click.prevent="updateTask()">сохранить изменения</ui-btn>
                  <ui-btn @click.prevent="confirmationsDefault()">отменить изменения</ui-btn>
                  <ui-btn @click.prevent="confirmationsRemove()">удалить</ui-btn>
                  <input
                        v-model="mission.task"
                        placeholder="Добавить задачу">
                  <ui-btn @click.prevent="pushingInTask()">add</ui-btn>
            </div>
            <v-confirmation
                  :show="confirmationRemoveShow"
                  @ActionPopupBtnTrue="confirmationsRemoveClose()"
                  @ActionPopupBtnFalse="confirmationRemoveShow = false"
            />
            <v-confirmation
                  :show="confirmationDefaultShow"
                  @ActionPopupBtn="confirmationsDefaultClose()"
                  @ActionPopupBtnFalse="confirmationDefaultShow = false"
            />
      </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import VConfirmation from "@/components/v-confirmation";
import UiBtn from "@/components/UI/ui-btn";

const missionPattern = {
      task: '',
      checked: false
}

export default {
      name: "v-taskchang",
      components: {UiBtn, VConfirmation},
      data() {
            return {
                  confirmationRemoveShow:false,
                  confirmationDefaultShow:false,
                  changeTask: {},
                  mission: {
                        ...missionPattern
                  }
            }
      },
      methods: {
            ...mapActions({
                  update: 'tasks/addTask',
                  remove: 'tasks/delTask'
            }),
            removeTask(key) {
                  this.changeTask.arrTask.splice(key, 1)
            },
            updateTask() {
                  this.update(this.changeTask)
                  this.$router.push("/")
            },
            defaultTask(){
                  this.changeTask = {
                        ...JSON.parse(JSON.stringify(this.task))
                  }
            },
            pushingInTask() {
                  this.changeTask.arrTask.push(JSON.parse(JSON.stringify(this.mission)))
                  this.mission = {
                        ...missionPattern
                  }
            },
            confirmationsRemove() {
                  this.confirmationRemoveShow = true
            },
            confirmationsDefault() {
                  this.confirmationDefaultShow = true
            },
            confirmationsRemoveClose() {
                  this.remove(this.changeTask)
                  this.confirmationRemoveShow = false
                  this.$router.push("/")
            },
            confirmationsDefaultClose(){
                  this.defaultTask()
                  this.confirmationDefaultShow = false
            },
      },
      computed: {
            ...mapGetters({
                  task: 'tasks/TaskChange'
            })
      },
      beforeMount() {
            this.changeTask = {
                  ...JSON.parse(JSON.stringify(this.task))
            }
      }
}
</script>

<style scoped>
img {
      height: 10px
}
</style>