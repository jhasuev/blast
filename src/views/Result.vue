<template>
  <popup title="Результат">
    <div class="circle-number">{{ getScore }}</div>
    <div class="info-box  coins">
      Рекорд:
      <div class="coins--bigger">{{ getRecord }}</div>
    </div>
    <div class="menu-buttons">
      <button class="menu-buttons__item  btn  btn--red" @click="goToGame()">Играть еще</button>
      <button class="menu-buttons__item  btn  btn--red" @click="goToMenu()">В меню</button>
    </div>
  </popup>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Result",
  computed: {
    ...mapGetters([
      'getScore',
      'getRecord',
    ]),
  }
}
</script>
