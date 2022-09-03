<template>
      <div class="wrapper">
            <v-new-task
            :show="showNewTask"
            @closeAddNewTask="closeAddTask"
            />
            <div :class="{center:!task.length,'left-top':task.length}">
            <ui-btn @click.prevent="openAddTask()">
                  <i class="material-icons"
                  >add</i>
                  </ui-btn>
      </div>

            <v-task v-if="task.length"/>

      </div>
</template>

<script>
import VTask from "@/components/v-task";
import VNewTask from "@/components/v-newTask";
import {mapGetters} from "vuex";
import UiBtn from "@/components/UI/ui-btn";

export default {
      name: "V-wrapper",
      components: {UiBtn, VNewTask, VTask},
      data(){
            return {
                  showNewTask:false
            }
      },
      methods:{
            openAddTask(){
                  this.showNewTask = true
            },
            closeAddTask(){
                  this.showNewTask = false
            }
      },
      computed: {
            ...mapGetters({
                  task: 'tasks/Task'
            })
      }
}
</script>

<style scoped>
.wrapper{
      display: flex;
      justify-content: center;
      flex-direction: column;


      font-family: "Arial", sans-serif;
      font-style: normal;
      font-size: 20px;
      line-height: 20px;
      font-weight: 700;
      overflow: hidden;
      color: #00093C;
}
.center{
      display: flex;
      justify-content: center;
      align-items: center;

}
.left-top{
      top: 0;
      left: 0;
}
</style>