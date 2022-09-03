<template>
      <div>
            <v-new-task
            :show="showNewTask"
            @closeAddNewTask="closeAddTask"
            />
            <button @click.prevent="openAddTask()"><img src="../assets/vector-plus-sign-line-black-icon.svg" alt=""></button>
            <v-task/>
      </div>
</template>

<script>
import VTask from "@/components/v-task";
import VNewTask from "@/components/v-newTask";
import {mapGetters} from "vuex";

export default {
      name: "V-wrapper",
      components: {VNewTask, VTask},
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
                  task: 'tasks/TaskChange'
            })
      }
}
</script>

<style scoped>


</style>