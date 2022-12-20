<template>
  <div class="relative">
    <img class="w-full" style="opacity: 1" src="../assets/images/title-image.jpg" />
    <p
      class="absolute inset-0 flex items-center justify-center text-center text-4xl font-serif font-bold text-white tracking-wider"
    >
      Welcome to MSU
    </p>
    <p
      class="absolute inset-0 pt-20 flex items-center justify-center text-center text-2xl font-serif italic text-white tracking-wider"
    >
      2022 Images of the Year
    </p>
  </div>

  <TextBase
    headline="Academic Life"
    text="Academic Life Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum."
  />

  <div>
    <Container>
      <ImageBase :image="images[0].full" @show="show(0)" />
      <ImageDouble
        :imageLeft="images[1].full"
        :indexLeft="1"
        :imageRight="images[2].full"
        :indexRight="2"
        @show="show"
      />
      <ImageBase :image="images[3].full" @show="show(3)" />
      <ImageDouble
        :imageLeft="images[4].full"
        :indexLeft="4"
        :imageRight="images[5].full"
        :indexRight="5"
        @show="show"
      />
    </Container>

    <TextBase
      headline="Campus Life"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />

    <!-- <div>
      <div class="container w-4/5 p-4 ml-auto mr-auto">
        <div class="grid gap-2">
          <ImageSingle :image="images[6].full" />
        </div>
      </div>
    </div> -->

    <Teleport to="body">
      <TheLightbox :images="images" :index="index" v-if="visible" @close="hide()" />
    </Teleport>
  </div>
</template>

<script>
import TheLightbox from "../components/TheLightbox.vue";
import ImageDouble from "../components/ImageDouble.vue";
import ImageBase from "../components/ImageBase.vue";
import Container from "../components/ContainerBase.vue";
import TextBase from "../components/TextBase.vue";

export default {
  components: {
    TheLightbox,
    ImageDouble,
    ImageBase,
    Container,
    TextBase,
  },
  data() {
    return {
      visible: false,
      index: 0,
      images: [
        {
          full: "academic-life/academic-one.jpeg",
          thumb: "",
          alt: "",
          caption: "",
        },
        {
          full: "academic-life/academic-two.jpg",
          thumb: "",
          alt: "",
          caption: "",
        },
        {
          full: "academic-life/academic-three.jpeg",
          thumb: "",
          alt: "",
          caption: "",
        },
        {
          full: "academic-life/academic-four.jpg",
          thumb: "",
          alt: "",
          caption: "",
        },
        {
          full: "academic-life/academic-five.jpeg",
          thumb: "",
          alt: "",
          caption: "",
        },
        {
          full: "academic-life/academic-six.jpg",
          thumb: "",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-one.jpg",
          thumb: "campus-life/campus-one-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-two.jpg",
          thumb: "campus-life/campus-two-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-three.jpeg",
          thumb: "campus-life/campus-three-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-four.jpg",
          thumb: "campus-life/campus-four-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-five.jpg",
          thumb: "campus-life/campus-five-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-six.jpg",
          thumb: "campus-life/campus-six-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-seven.jpg",
          thumb: "campus-life/campus-seven-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-eight.jpg",
          thumb: "campus-life/campus-eight-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-nine.jpg",
          thumb: "campus-life/campus-nine-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "campus-life/campus-ten.jpg",
          thumb: "campus-life/campus-ten-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-one.jpg",
          thumb: "scenic/scenic-one-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-two.jpg",
          thumb: "scenic/scenic-two-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-three.jpeg",
          thumb: "scenic/scenic-three-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-four.jpg",
          thumb: "scenic/scenic-four-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-five.jpeg",
          thumb: "scenic/scenic-five-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-six.jpg",
          thumb: "scenic/scenic-six-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-seven.jpg",
          thumb: "scenic/scenic-seven-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "scenic/scenic-eight.jpg",
          thumb: "scenic/scenic-eight-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-one.jpg",
          thumb: "sports/sports-one-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-two.jpg",
          thumb: "sports/sports-two-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-three.jpg",
          thumb: "sports/sports-three-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-four.jpg",
          thumb: "sports/sports-four-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-five.jpg",
          thumb: "sports/sports-five-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-six.jpg",
          thumb: "sports/sports-six-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-seven.jpg",
          thumb: "sports/sports-seven-thumb.jpg",
          alt: "",
          caption: "",
        },
        {
          full: "sports/sports-eight.jpg",
          thumb: "sports/sports-eight-thumb.jpg",
          alt: "",
          caption: "",
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    },
    hide() {
      this.visible = false;
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    },
  },
};
</script>

<style>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.3s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
