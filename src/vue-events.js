import { mapActions } from "vuex"
import eventEmitter from "@/eventEmitter"

export default {
  mounted() {
    eventEmitter.on("vue:timeover", () => {
      eventEmitter.emit("phaser:stopGaming")
      this.$router.push({ name: "result" })
    })
    
    eventEmitter.on("vue:addScore", score => {
      this.addScore(score)
    })

    eventEmitter.on("vue:startGame", score => {
      this.setScore(0)
    })
  },

  methods: {
    ...mapActions([
      'addScore',
      'setScore',
    ]),
  },
}