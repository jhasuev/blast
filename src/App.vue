<template>
  <div v-if="downloaded" class="game-container">
    <div ref="ui">
      <navbar />
      <popup v-model="popup" title="Меню">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias porro aliquam quos vero voluptatem voluptas rerum unde quibusdam natus, praesentium aspernatur incidunt libero maxime exercitationem magni facere eum! Aspernatur!
      </popup>
    </div>
    <div :id="containerId" class="game-container__inner" />
  </div>
  <div v-else class="preload-text">
    Игра загружается ...
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Popup from "./components/common/Popup"
export default {
  name: "App",
  components: {
    Navbar,
    Popup,
  },
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container',
      popup: true,
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
