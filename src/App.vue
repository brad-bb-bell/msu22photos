<template>
  <div>
    <h1>MSU 2022 Photos of the Year</h1>
  </div>
  <ImageLightbox :thumbnail="images[0]" :images="images" />
</template>

<script>
import ImageLightbox from "./components/ImageLightbox.vue";

export default {
  name: "App",
  components: {
    ImageLightbox,
  },
  data() {
    return {
      images: ["image-one.png", "image-two.jpeg", "image-three.jpeg", "image-four.jpeg", "image-five.jpeg"],
    };
  },
};
</script>

<style></style>
