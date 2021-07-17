<template>
  <div class="progress-bar">
    <div class="progress-bar__text">Прогресс</div>
    <div class="progress-bar__status">
      <i class="progress-bar__status-indicator" :style="{ width: `${state}%` }" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    state: { type: Number, default: 0 },
  },
}
</script>

<style lang="scss" scoped>

.progress-bar {
  background: linear-gradient(to bottom, #00183A, #00336E);
  padding: 14px;
  padding-top: 5px;
  border-radius: 14px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  &__text {
    font-size: 19px;
    text-align: center;
    margin-bottom: 2px;
  }
  &__status {
    background: linear-gradient(to bottom, #00061F, #002055);
    box-shadow: 0 3px 3px rgba(255,255,255,.25);
    height: 28px;
    border-radius: 28px;

    &-indicator {
      display: block;
      border-radius: inherit;
      height: 100%;
      background: linear-gradient(to top, #00FF00, #009C00, #CDFF8D);
    }
  }
}

</style>
