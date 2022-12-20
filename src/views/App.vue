<template>
  <div class="relative">
    <img class="w-full" style="opacity: 1" src="../assets/images/title-image.jpg" />
    <p
      class="absolute inset-0 flex items-center justify-center text-center text-4xl font-serif font-bold text-white tracking-wider"
    >
      An Extraordinary Year
    </p>
    <p
      class="absolute inset-0 pt-20 flex items-center justify-center text-center text-xl font-serif italic text-white tracking-wider"
    >
      Favorite images of Montana State University's photographers from 2022
    </p>
  </div>

  <TextBase :headline="this.text[0].headline" :text="this.text[0].text" />

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

    <TextBase :headline="this.text[1].headline" :text="this.text[1].text" />

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
    TextBase,
    Container,
  },
  data() {
    return {
      visible: false,
      index: 0,
      text: [
        {
          headline: "Academic Life",
          text: "This fall, MSU welcomed its second-largest incoming class in history at 3,752 new students for a total enrollment of 16,688. As Montana's premier university, MSU's annual research expenditures topped $200 million for the first time in 2022, topping an all-time high for the fourth straight year.",
        },
        {
          headline: "Campus Life",
          text: "From the start-of-the-academic year traditions like the lighting of the “M” on Mount Baldy and the energetic Catapalooza on MSU's Centennial Mall to end-of-semester commencement celebrations in the spring and fall, students took advantage of all that MSU and the greater Bozeman area had to offer in 2022.",
        },
        {
          headline: "Scenic",
          text: "Situated in the Gallatin Valley between the dramatic backdrops of the Bridger and Gallatin mountain ranges, the MSU campus is stunning to behold in every season. As they have for nearly 130 years, students and faculty in 2022 were able to enjoy the mountain town's crisp spring days, rich fall colors and deep winter snows, all while pursuing educational and recreational adventures. Opportunities to enjoy the landscape include everything from taking time to recharge and enjoy the views on or near campus to venturing out to ski, fish, hunt and hike near Bozeman.",
        },
        {
          headline: "Athletics",
          text: "2022 will go down in history as an unforgettable year for Bobcat Athletics. In FCS National Championship action, the Bobcats swept all titles at the men's and women's basketball Big Sky Tournament and the men's tennis championship. The men's cross-country team qualified to compete at NCAA Nationals in November, the same month that brought us a Cat-Griz week with a conclusive win in the Brawl of the Wild by the Bobcat football team. Bobcat fans turned out enthusiastically for the fun-filled ESPN College GameDay, which made its first-ever stop in Montana at this House of Blue and Gold. After an undefeated performance against the Big Sky Conference teams during the regular season, the Bobcats are this year's football conference co-champions and the team advanced to the FCS semifinals. No wonder we called it the Year of the Bobcat!",
        },
      ],
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
