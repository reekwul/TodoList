<template>
<div v-show="show">
      <h3>Необходимо подтверждение {{forWhat}}</h3>
      <ui-btn @click.prevent="confirmationTrue" value="true">да</ui-btn>
      <ui-btn @click.prevent="confirmationFalse" value="false">нет</ui-btn>
</div>
</template>

<script>
import UiBtn from "@/components/UI/ui-btn";
export default {
      name: "v-confirmation",
      components: {UiBtn},
      props:{
            forWhat:{
                  type:String,
                  default(){
                        return ''
                  }
            },
            show: {
                  type:Boolean,
                  default() {
                        return false;
                  }
            }
      },
      methods:{
            confirmationTrue(){
                  this.$emit('ActionPopupBtnTrue');
            },
            confirmationFalse(){
                  this.$emit('ActionPopupBtnFalse');
            }
      }
}
</script>

<style scoped>

</style>