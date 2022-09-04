<template>
      <div
            class="confi"
            v-show="show">
            <div class="window">
                  <h3>Необходимо подтверждение {{ forWhat }}</h3>
                  <div class="btn">
                        <ui-btn
                              @click.prevent="confirmationTrue"
                        >да
                        </ui-btn>
                        <ui-btn
                              :color="true"
                              @click.prevent="confirmationFalse"
                        >нет
                        </ui-btn>
                  </div>

            </div>
      </div>
</template>

<script>
import UiBtn from "@/components/UI/ui-btn";

export default {
      name: "v-confirmation",
      components: {UiBtn},
      props: {
            forWhat: {
                  type: String,
                  default() {
                        return ''
                  }
            },
            show: {
                  type: Boolean,
                  default() {
                        return false;
                  }
            }
      },
      methods: {

            confirmationTrue() {
                  this.$emit('ActionPopupBtnTrue');
            },
            confirmationFalse() {
                  this.$emit('ActionPopupBtnFalse');
            }
      }
}
</script>

<style scoped>
.confi {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 100;

      display: flex;
      align-items: center;
      justify-content: center;

      background: rgba(0, 9, 60, 0.2);;

}

.window {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      max-width: 500px;
      margin: 10px;
      padding: 10px;

      background: white;
      border-radius: 12px;
      box-shadow: 0 0 2px 2px rgba(221, 221, 255, 1);

}

.btn {
      display: flex;
}
</style>