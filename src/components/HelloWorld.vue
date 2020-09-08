<template>
  <div class="hello">
    <video id="myvideo" @click="click" autoplay="autoplay"></video>
  </div>
</template>

<script>
import flv from "flv.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      player: true,
      playing: true,
      autoplay: true
    };
  },
  created() {
    if (flv.isSupported()) {
      this.player = flv.createPlayer({
        type: "flv",
        url:
          "http://pull-flv-l1.douyincdn.com/third/stream-107342375283327014.flv",
      });
    }
  },
  mounted() {
    var video = document.querySelector("#myvideo");
    this.player.attachMediaElement(video);
    this.player.load();
   
  },
  methods: {
    click() {
      if (this.playing) {
        this.player.pause();
        this.playing = false;
      } else {
        this.player.play();
        this.playing = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.hello {
  width: 100%;
  height: 100%;
}
video {
  width: 100%;
  height: 100%;
}
</style>
