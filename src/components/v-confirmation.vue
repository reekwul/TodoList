<template>
<div v-show="show">
      <h3>Необходимо подтверждение {{forWhat}}</h3>
      <button @click.prevent="confirmationTrue" value="true">да</button>
      <button @click.prevent="confirmationFalse" value="false">нет</button>
</div>
</template>

<script>
export default {
      name: "v-confirmation",
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