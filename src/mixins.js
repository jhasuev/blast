export default {
  methods: {
    goToMenu() {
      this.$router.push({ name: "home" })
    },

    goToGame() {
      this.$router.push({ name: "game" })
    },
  },
}