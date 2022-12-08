<template>
  <div>
    <h1>MSU 2022 Photos of the Year</h1>
  </div>
  <TheLightbox :images="images" />
</template>

<script>
import TheLightbox from "./components/TheLightbox.vue";

export default {
  name: "App",
  components: {
    TheLightbox,
  },
  data() {
    return {
      images: [
        "image-one.jpg",
        "image-two.jpg",
        "image-three.jpeg",
        "image-four.jpg",
        "image-five.jpg",
        "image-six.jpg",
        "image-seven.jpg",
      ],
    };
  },
};
</script>

<style></style>
