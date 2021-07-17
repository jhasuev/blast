<template>
  <transition name="fade" mode="in-out">
    <div v-if="modelValue" class="popup">
      <i class="popup__bg" @click="onBackgroundClick()" />

      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "Popup",
  props: {
    modelValue: { type: Boolean },
    bgClick: { type: Boolean, default: true },
  },
  methods: {
    onBackgroundClick() {
      if(this.bgClick && this.modelValue) {
        this.$emit("update:modelValue", false)
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(0,0,0,.5);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
