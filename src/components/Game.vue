<template>
  <div
    v-if="downloaded"
    :id="containerId"
    class="game-container"
  />
  <div
    v-else
    class="preload-text"
  >
    Игра загружается ...
  </div>
</template>

<script>
export default {
  name: "Game",
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
