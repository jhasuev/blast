<template>
  <div class="navbar">
    <div class="navbar__item">
      <div class="text-box text-box--pink">{{ getScores.record }}</div>
    </div>
    <div class="navbar__item  navbar__item--bigger">
      <progress-bar :progress="50" />
    </div>
    <div class="navbar__item">
      <div class="text-box text-box--red">{{ getScores.current }}</div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar"
import { mapGetters } from "vuex"
export default {
  name: "Navbar",
  components: {
    ProgressBar,
  },
  computed: {
    ...mapGetters([ 'getScores' ]),
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
    }

    &:last-child {
      margin-right: 0;
    }
    
  }

}

</style>
