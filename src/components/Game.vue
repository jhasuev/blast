<template>
  <div v-if="downloaded" class="game-container">
    <navbar />
    <div :id="containerId" class="game-container__inner" />
  </div>
  <div v-else class="preload-text">
    Игра загружается ...
  </div>
</template>

<script>
import Navbar from "./Navbar"
export default {
  name: "Game",
  components: {
    Navbar,
  },
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container'
    }
  },
  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ '@/game/game')
    this.downloaded = true
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId)
    })
  },
  destroyed() {
    this.gameInstance.destroy(false)
  }
}
</script>

<style lang="scss" scoped>

.game-container {
  height: 100vh;
  width: 100vw;
  padding: 100px 15px;

  &__inner {
    width: 100%;
    height: 100%;
  }
}

.preload-text {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}

</style>
