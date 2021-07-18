<template>
  <popup title="Меню">
    <div class="menu-buttons">
      <button class="menu-buttons__item  btn  btn--red" @click="onMenuItemClick('game')">Играть</button>
      <button class="menu-buttons__item  btn  btn--red" @click="onMenuItemClick('record')">Рекорд</button>
      <button class="menu-buttons__item  btn  btn--red" @click="onMenuItemClick('about')">Об игре</button>
    </div>
  </popup>
</template>

<script>
export default {
  name: "Home",
  methods: {
    onMenuItemClick(type) {
      this.$router.push({ name: type })
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-buttons {
  margin-top: 0;
}
</style>
