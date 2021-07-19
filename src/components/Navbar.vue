<template>
  <div class="navbar">
    <div class="navbar__item">
      <div class="text-box text-box--pink">{{ getRecord }}</div>
    </div>
    <div class="navbar__item  navbar__item--bigger">
      <timer :progress="getPercent" />
    </div>
    <div class="navbar__item">
      <div class="text-box text-box--red">{{ getScore }}</div>
    </div>
  </div>
</template>

<script>
import eventEmitter from "@/eventEmitter"
import Timer from "./Timer"
import { mapGetters } from "vuex"
import config from "@/config"
export default {
  name: "Navbar",
  components: {
    Timer,
  },

  data(){
    return {
      timer: config.timer,
    }
  },

  watch: {
    getPercent(current) {
      if (current === 0) {
        eventEmitter.emit("vue:timeover")
      }
    },
  },

  computed: {
    ...mapGetters([
      'getScore',
      'getRecord',
    ]),

    getPercent() {
      return this.timer / config.timer * 100
    },
  },

  mounted() {
    eventEmitter.on("vue:updateTimer", dt => {
      this.timer = Math.max(this.timer - dt, 0)
    })
  },
}
</script>

<style lang="scss" scoped>

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  &__item {
    margin-right: 15px;
    
    &--bigger {
      min-width: 380px;

      @media screen and (max-width: 650px){
        min-width: 0;
        flex-grow: 1;
      }
    }

    &:last-child {
      margin-right: 0;
    }
    
  }

}

</style>
