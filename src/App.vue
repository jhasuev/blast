<template>
  <div v-if="downloaded" class="game-container">
    <div ref="ui">
      <router-view />
    </div>
    <div :id="containerId" class="game-container__inner" />
  </div>
  <div v-else class="preload-text">
    Игра загружается ...
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container',
    }
  },
  async mounted() {
    const game = await import('@/game/')
    this.downloaded = true
    this.stopHandlersFromUI()
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId)
    })
  },
  methods: {
    stopHandlersFromUI() {
      const ui = this.$refs.ui;
      if(!ui) return setInterval(() => this.stopHandlersFromUI(), 16);

      const events = ['mousedown', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'touchcancel']
      for (const eventName of events){
        ui.addEventListener(eventName, e => e.stopPropagation())
      }
    },
  },
  destroyed() {
    this.gameInstance.destroy(false)
  },
}
</script>

<style lang="scss">

.game-container {
  height: 100vh;
  width: 100vw;
  padding: 100px 15px;

  &__inner {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    canvas {
      max-width: 100%;
      max-height: 100%;
    }
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
