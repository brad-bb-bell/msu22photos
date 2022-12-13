<template>
  <div>
    <h1>MSU 2022 Photos of the Year</h1>
  </div>

  <div>
    <a href="#">
      <div class="container">
        <div class="grid">
          <div v-for="(image, index) in images" :key="index">
            <img class="w-full h-full" @click.prevent="show(index)" :src="require(`@/assets/${image}`)" />
          </div>
        </div>
      </div>
    </a>

    <!-- lightbox -->
    <div
      class="lightbox absolute top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center"
      v-if="visible"
      @click="hide"
    >
      <TheCircle class="absolute top-0 right-0 text-white cursor-pointer text-3xl p-1 mr-2" @click.stop="hide">
        &times;
      </TheCircle>

      <div
        class="absolute left-0 cursor-pointer self-center px-8"
        @click.stop="prev"
        :class="{ invisible: !hasPrev() }"
      >
        <TheCircle>
          <PrevIcon />
        </TheCircle>
      </div>

      <div @click.stop="">
        <img :src="require(`@/assets/${images[index]}`)" />
      </div>

      <div
        class="absolute right-0 cursor-pointer self-center px-8"
        @click.stop="next"
        :class="{ invisible: !hasNext() }"
      >
        <TheCircle>
          <NextIcon />
        </TheCircle>
      </div>
    </div>
    <!-- lightbox -->
  </div>
</template>

<script>
import TheCircle from "./components/TheCircle.vue";
import NextIcon from "./assets/icons/IconNext.vue";
import PrevIcon from "./assets/icons/IconPrev.vue";

export default {
  name: "App",
  components: {
    TheCircle,
    NextIcon,
    PrevIcon,
  },
  data() {
    return {
      visible: false,
      index: 0,
      images: [
        "image-one.jpg",
        "image-two.jpg",
        "image-three.jpeg",
        "image-four.jpg",
        "image-five.jpg",
        "image-six.jpg",
        "image-seven.jpg",
        "image-eight.jpg",
        "image-nine.jpeg",
        "image-ten.jpg",
        "image-eleven.jpg",
        "image-twelve.jpg",
        "image-thirteen.jpeg",
        "image-fourteen.jpg",
        "image-fifteen.jpg",
        "image-sixteen.jpg",
        "image-seventeen.jpg",
        "image-eighteen.jpg",
        "image-nineteen.jpg",
        "image-twenty.jpg",
        "image-twentyone.jpeg",
        "image-twentytwo.jpg",
        "image-twentythree.jpg",
        "image-twentyfour.jpeg",
        "image-twentyfive.jpg",
        "image-twentysix.jpg",
        "image-twentyseven.jpg",
        "image-twentyeight.jpg",
        "image-twentynine.jpg",
        "image-thirty.jpeg",
        "image-thirtyone.jpg",
        "image-thirtytwo.jpg",
        "image-thirtythree.jpeg",
        "image-thirtyfour.jpg",
        "image-thirtyfive.jpeg",
        "image-thirtysix.jpg",
        "image-thirtyseven.jpg",
        "image-thirtyeight.jpg",
        "image-thirtynine.jpg",
        "image-forty.jpg",
        "image-fortyone.jpg",
        "image-fortytwo.jpg",
      ],
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
          case "Escape":
            this.hide();
            break;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  unmounted() {
    window.removeEventListener("keydown", this.onKeydown);
  },
};
</script>

<style>
.lightbox {
  background: rgba(0, 0, 0, 0.8);
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
</style>
