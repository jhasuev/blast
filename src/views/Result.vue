<template>
  <popup title="Победа/поражение">
    <div class="circle-number">37</div>
    <div class="info-box  coins">
      очки:
      <div class="coins--bigger">221</div>
    </div>
    <div class="menu-buttons">
      <button class="menu-buttons__item  btn  btn--red">Играть еще</button>
      <button class="menu-buttons__item  btn  btn--red" @click="goToMenu()">В меню</button>
    </div>
  </popup>
</template>

<script>
export default {
  name: "Result",
}
</script>
