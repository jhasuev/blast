<template>
  <div class="navbar">
    <div class="navbar__item">
      <div class="text-box text-box--pink">{{ getTime }}</div>
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

  computed: {
    ...mapGetters([ 'getScore' ]),

    getPercent() {
      return this.timer / config.timer * 100
    },

    getTime() {
      return Math.max(parseInt(this.timer / 1000), 0)
    },
  },

  mounted() {
    eventEmitter.on("vue:updateTimer", time => {
      this.timer = time
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
