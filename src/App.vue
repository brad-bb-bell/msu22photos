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
        "image-one.png",
        "image-two.jpeg",
        "image-three.jpeg",
        "image-four.jpeg",
        "image-five.jpeg",
        "image-six.jpg",
      ],
    };
  },
};
</script>

<style></style>
