<template>
  <popup title="Рекорд">
    <div class="info-box  coins">
      Ваш рекорд
      <div class="coins--bigger">{{ getRecord }}</div>
    </div>
    <div class="menu-buttons">
      <button class="menu-buttons__item  btn  btn--red" @click="goToMenu()">В меню</button>
    </div>
  </popup>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Records",
  computed: {
    ...mapGetters([ 'getRecord' ]),
  },
}
</script>

