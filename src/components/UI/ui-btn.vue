<template>
      <button :class="{btn:true, color:color}"
      >
            <slot></slot>
      </button>
</template>

<script>
export default {
      name: "ui-btn",
      props: {
            //изменеие стиля кнопки
            color: {
                  type: Boolean,
                  default() {
                        return false
                  }
            }
      }
}
</script>

<style scoped>
.btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 5px;
      padding: 7px 18px;
      box-sizing: border-box;

      font-family: "Arial", sans-serif;
      font-style: normal;
      font-size: 20px;
      line-height: 20px;
      font-weight: 700;
      text-align: center;
      color: #00093C;

      background: #ffffff;
      border: 2px solid #00093C;
      border-radius: 6px;


      transition: color 0.45s;

      will-change: auto;
}

.color {
      color: #ffffff;

      background: #F7941D;
      border: 2px solid #F7941D;
}

.btn:hover {
      color: #ffffff;

      background: #00093C;
}

.color:hover {
      background: #FFAE4D;
      border: 2px solid #FFAE4D;
}
</style>