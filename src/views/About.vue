<template>
  <popup title="Об игре">
    <div class="info-box">
      Вlast - игра, в которую можно играть. <br />
      Еще одно оригинальное предложение.
    </div>
    <div class="menu-buttons">
      <button class="menu-buttons__item  btn  btn--red" @click="goToMenu()">В меню</button>
    </div>
  </popup>
</template>

<script>
export default {
  name: "About",
}
</script>

<style scoped>
.info-box {
  font-size: 15px;
}
</style>