<template>
  <div class="navbar">
    <div class="navbar__item">
      <text-box text="59" />
    </div>
    <div class="navbar__item  navbar__item--bigger">
      <progress-bar :progress="50" />
    </div>
    <div class="navbar__item">
      <text-box text="227" />
    </div>
  </div>
</template>

<script>
import TextBox from "./TextBox"
import ProgressBar from "./ProgressBar"
export default {
  name: "Navbar",
  components: {
    TextBox,
    ProgressBar,
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
