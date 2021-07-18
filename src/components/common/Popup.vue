<template>
  <transition name="fade" mode="in-out">
    <div v-if="modelValue" class="popup">
      <i class="popup__bg" @click="onBackgroundClick()" />

      <div class="popup__inner">
        <h3 v-if="title" v-text="title" class="popup__title" />
        <div class="popup__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Popup",
  props: {
    modelValue: { type: Boolean },
    title: { type: String, default: "" },
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

  &__inner {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 290px;
    max-width: 320px;
  }

  &__title {
    position: relative;
    z-index: 1;

    min-width: 174px;
    padding: 10px 15px;

    align-self: center;
    min-height: 40px;
    font-size: 22px;

    background: linear-gradient(to bottom, #98CEFF, #004F81);
    border-radius: 14px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 0;

      background: linear-gradient(to top, #00306B 10%, #00306B 20%, #00D5FE 120%);
      border-radius: inherit;
    }
  }

  &__content {
    position: relative;
    z-index: 1;

    padding: 13px 32px 17px;

    background-color: #00539E;
    border: 7px solid #00D2EF;
    border-radius: 17px;

    box-shadow: 0 5px 5px rgba(0,0,0,.25);

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;

      box-shadow: 0 0 5px 2px rgba(0,0,0,.8), inset 0 0 6px 2px rgba(255,255,255,.35);
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
