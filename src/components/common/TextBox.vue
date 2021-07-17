<template>
  <div :class="['text-box', type]">
    <div class="text-box__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    text: { type: String, default: "" },
    type: { type: String, default: "red" },
  },
}
</script>

<style lang="scss" scoped>

.text-box {
  position: relative;
  display: inline-block;
  min-width: 104px;
  height: 42px;

  border-radius: 21px;
  box-shadow: 0 3px 4px rgba(0,0,0,.5);
  background: #333;

  &.pink {
    background: linear-gradient( to top, #850DEE, #AA07B7, #FF97FF);
  }

  &.red {
    background: linear-gradient( to top, #E3025F, #AE014C, #FF91DE);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
  }

  &:before {
    top: 6px;
    right: 17px;
    width: 8px;
    height: 11px;
    transform: rotate(-33deg);
  }

  &:after {
    top: 16px;
    right: 7px;
    width: 3px;
    height: 3px;
  }

  &__text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 0 30px;
    text-align: center;
    font-size: 24px;
  }
}

</style>
