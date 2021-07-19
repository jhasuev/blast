<template>
  <div v-if="downloaded" :class="['game-container', { 'is-gaming' : isGaming }]">
    <div ref="ui" :class="[ 'ui' ]">
      <i class="ui__bg-layout" />
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div :id="containerId" class="game-container__inner" />
  </div>
  <div v-else class="preload-text">
    Игра загружается ...
  </div>
</template>

<script>
import eventEmitter from "@/eventEmitter"
import { mapActions } from "vuex"
export default {
  name: "App",
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container',
    }
  },
  computed: {
    isGaming(){
      return this.$route.name === 'game'
    },
  },
  async mounted() {
    const game = await import('@/game/')
    this.downloaded = true
    this.stopHandlersFromUI()
    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId)
    })

    this.setEvents()
  },
  methods: {
    ...mapActions([
      'addScore',
      'setScore',
    ]),

    stopHandlersFromUI() {
      const ui = this.$refs.ui;
      if(!ui) return setInterval(() => this.stopHandlersFromUI(), 16);

      const events = ['mousedown', 'mouseup', 'touchstart', 'touchmove', 'touchend', 'touchcancel']
      for (const eventName of events){
        ui.addEventListener(eventName, e => e.stopPropagation())
      }
    },

    setEvents() {
      eventEmitter.on("vue:gameover", () => {
        this.$router.push({ name: "result" })
      })
      
      eventEmitter.on("vue:addScore", score => {
        this.addScore(score)
      })

      eventEmitter.on("vue:startGame", () => {
        this.setScore(0)
      })
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
  overflow: hidden;
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

      filter: blur(50px);

      transition: .3s;

      .is-gaming & {
        filter: none;
      }
    }
  }
}

.ui {
  &__bg-layout {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);

    transition: .3s;

    .is-gaming & {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

}

.preload-text {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  font-size: min(2rem, 7vw);
}

.slide {
  &-enter-active,
  &-leave-active {
    transition: .5s;
  }
  
  &-enter-from,
  &-leave-to {
    transform: translateY(-100%);
  }
}



</style>
