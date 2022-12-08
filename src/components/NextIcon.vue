<template>
  <div class="cursor-pointer self-center px-8" @click.stop="$emit('next')" :class="{ invisible: !hasNext() }">
    <div class="w-12 h-12 bg-black flex justify-center rounded-full">
      <svg
        class="pointer-events-none"
        fill="#fff"
        height="48"
        viewBox="0 0 24 24"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
        <path d="M0-.25h24v24H0z" fill="none" />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: Number,
    length: Number,
  },
  methods: {
    hasNext() {
      return this.index + 1 < this.length;
    },
  },
};
</script>
