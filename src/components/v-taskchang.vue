<template>
      <div class="font">
            <h1>Изменение заметки</h1>
            <div class="wrapper">
                  <div class="block">
                        <div>
                              <h2>
                                    <input
                                          maxlength="25"
                                          class="task-bord"
                                          v-model="changeTask.name">
                              </h2>
                              <transition-group name="list">
                              <div class="flex"
                                   v-for="i in changeTask.arrTask.length"
                                   :key="i">
                                   <h2>{{i}}.</h2>
                                    <input
                                          :class="{'task-bord':true, 'task-text':changeTask.arrTask[i-1].checked}"
                                          v-model="changeTask.arrTask[i-1].task"
                                          placeholder="Добавить задачу">
                                    <input
                                          class="task-check"
                                          type="checkbox"
                                          v-model="changeTask.arrTask[i-1].checked">
                                    <ui-btn @click.prevent="removeTask(i-1)">
                                          <i class="material-icons-outlined">delete</i>
                                    </ui-btn>
                              </div>
                              </transition-group>
                              <div class="flex">
                                    <ui-btn
                                          :color="true"
                                          @click.prevent="updateTask()"
                                    ><i class="material-icons">save</i>
                                    </ui-btn>
                                    <ui-btn @click.prevent="confirmationsDefault()"
                                    ><i class="material-icons-outlined">close</i>
                                    </ui-btn>
                                    <ui-btn @click.prevent="confirmationsRemove()"
                                    ><i class="material-icons-outlined">delete</i>
                                    </ui-btn>
                              </div>
                        </div>
                  </div>
                  <div class="flex-column">
                        <h2>
                              Добавление задачи
                        </h2>
                        <div class="add-task">
                              <input
                                    class="task-bord"
                                    v-model="mission.task"
                                    placeholder="Добавить задачу">
                              <ui-btn @click.prevent="pushingInTask()">
                                    <i class="material-icons">add</i>
                              </ui-btn>
                        </div>

                  </div>
                  <v-confirmation
                        :show="confirmationRemoveShow"
                        @ActionPopupBtnTrue="confirmationsRemoveClose()"
                        @ActionPopupBtnFalse="confirmationRemoveShow = false"
                  />
                  <v-confirmation
                        :show="confirmationDefaultShow"
                        @ActionPopupBtnTrue="confirmationsDefaultClose()"
                        @ActionPopupBtnFalse="confirmationDefaultShow = false"
                  />
            </div>
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
                  //для диалогового окна удаления
                  confirmationRemoveShow: false,
                  //для диалогового окна сброса к первоначальному обьекту
                  confirmationDefaultShow: false,
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
            //удаление задачи из списка задач
            removeTask(key) {
                  this.changeTask.arrTask.splice(key, 1)
            },
            //сохранение изменений заметки в общий список заметок
            updateTask() {
                  this.update(this.changeTask)
                  this.$router.push("/")
            },
            //возвращение заметки к первоначальному состоянию
            defaultTask() {
                  this.changeTask = {
                        ...JSON.parse(JSON.stringify(this.task))
                  }
            },
            //добавление заметки в общий список заметок со всеми изменениями
            pushingInTask() {
                  if(!this.mission.task) return
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
            //подтвержение удаления заметки
            confirmationsRemoveClose() {
                  this.remove(this.changeTask)
                  this.confirmationRemoveShow = false
                  this.$router.push("/")
            },
            //подтверждение возврата к исходному состоянию заметки
            confirmationsDefaultClose() {
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
.font{
      font-family: "Arial", sans-serif;
      font-style: normal;
      font-size: 13px;
      line-height: 20px;
      font-weight: 700;
}
.wrapper {
      display: flex;

      flex-wrap: wrap;
      justify-content: space-around;
}
.block {
      max-width: 500px;
      align-items: self-end;
      flex: 1;
}
.flex {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: end;
}
.flex-column{
      display: flex;
      flex-direction: column;
}
.add-task {
      display: flex;
      align-items: start ;
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

      transition: 1s;
}
.task-check {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      margin: 7px;
      padding: 20px;
      background-color: rgba(247, 148, 29, 1);
      border: 2px solid rgba(247, 148, 29, 1);
      border-radius: 10%;

      transition: 0.3s;
}
.task-check:hover {
      background: white;
      border: 2px solid rgba(247, 148, 29, 1);
}
.task-check:checked {
      background-color: rgba(0, 9, 60, 1);
      border: 2px solid rgba(0, 9, 60, 1);
}
.task-check:checked:before {
      color: white;
      padding: initial;
      font-weight: bold;
}
.task-check:checked:hover {
      background: white;
      border: 2px solid rgba(0, 9, 60, 1);
}
.task-text {
      font-style: italic;
      text-decoration: line-through;
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