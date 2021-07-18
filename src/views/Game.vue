<template>
  <navbar />
</template>

<script>
import eventEmitter from "@/eventEmitter"
import Navbar from "@/components/Navbar"
export default {
  name: "Game",
  components: {
    Navbar,
  },
  mounted(){
    eventEmitter.emit("phaser:startGame")
    eventEmitter.emit("vue:startGame")
  },
}
</script>
