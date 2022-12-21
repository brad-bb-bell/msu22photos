<template>
  <div class="fixed w-screen h-screen top-0 bg-black">
    <div class="w-full h-full flex justify-center items-center">
      <button class="absolute top-3 right-3" @click="$emit('close')">
        <TheCircle>
          <CloseIcon />
        </TheCircle>
      </button>

      <div class="fixed" @click.stop="">
        <img :src="require(`@/assets/images/${images[position].full}`)" />
        <p class="absolute right-1 bottom-1 text-sm bg-black opacity-50 text-white">
          Photo: {{ images[position].cred }}
        </p>
      </div>

      <button class="absolute left-3" @click.stop="prev" v-if="hasPrev()">
        <TheCircle>
          <PrevIcon />
        </TheCircle>
      </button>
      <button class="absolute right-3" @click.stop="next" v-if="hasNext()">
        <TheCircle>
          <NextIcon />
        </TheCircle>
      </button>
    </div>
  </div>
</template>
<script>
import TheCircle from "../components/TheCircle.vue";
import NextIcon from "../assets/icons/IconNext.vue";
import PrevIcon from "../assets/icons/IconPrev.vue";
import CloseIcon from "../assets/icons/IconClose.vue";

export default {
  components: {
    TheCircle,
    NextIcon,
    PrevIcon,
    CloseIcon,
  },
  props: {
    images: Array,
    index: Number,
  },
  data() {
    return {
      position: 0,
    };
  },
  methods: {
    hasNext() {
      return this.position + 1 < this.images.length;
    },
    hasPrev() {
      return this.position - 1 >= 0;
    },
    next() {
      if (this.hasNext()) {
        this.position += 1;
      }
    },
    prev() {
      if (this.hasPrev()) {
        this.position -= 1;
      }
    },
    onKeydown(e) {
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
          this.$emit("close");
          break;
      }
    },
  },
  mounted() {
    this.position = this.index;
    window.addEventListener("keydown", this.onKeydown);
  },
  unmounted() {
    window.removeEventListener("keydown", this.onKeydown);
  },
};
</script>
