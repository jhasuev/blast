<template>
  <popup title="404">
    <div class="info-box">
      Упс... ошибка
    </div>
    <div class="menu-buttons">
      <button class="menu-buttons__item  btn  btn--red" @click="goToMenu()">В меню</button>
    </div>
  </popup>
</template>

<script>
export default {
  name: "404",
}
</script>

<style scoped>
.info-box {
  font-size: 15px;
}
</style>