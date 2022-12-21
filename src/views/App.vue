<template>
  <div class="relative">
    <ImageBase image="title-image.jpg" />
    <div class="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <h1 class="text-center mb-6 text-2xl md:text-5xl xl:text-7xl font-serif font-bold text-white">
        An Extraordinary Year
      </h1>
      <p class="text-center text-xl italic text-white">
        Favorite images of Montana State University's photographers from 2022
      </p>
    </div>
  </div>

  <TextBase :headline="this.text[0].headline" :text="this.text[0].text" />

  <div>
    <Container>
      <ImageBase :image="images[0].thumb" @show="show(0)" />
      <ImageDouble
        :imageLeft="images[1].thumb"
        :indexLeft="1"
        :imageRight="images[2].thumb"
        :indexRight="2"
        @show="show"
      />
      <ImageBase :image="images[3].thumb" @show="show(3)" />
      <ImageDouble
        :imageLeft="images[4].thumb"
        :indexLeft="4"
        :imageRight="images[5].thumb"
        :indexRight="5"
        @show="show"
      />
    </Container>

    <TextBase :headline="this.text[1].headline" :text="this.text[1].text" />

    <Container>
      <ImageBase :image="images[6].thumb" @show="show(6)" />
      <ImageTriple
        :imageLeft="images[7].thumb"
        :indexLeft="7"
        :imageCenter="images[8].thumb"
        :indexCenter="8"
        :imageRight="images[9].thumb"
        :indexRight="9"
        @show="show"
      />
      <ImageDouble
        :imageLeft="images[10].thumb"
        :indexLeft="10"
        :imageRight="images[11].thumb"
        :indexRight="11"
        @show="show"
      />
      <ImageTriple
        :imageLeft="images[12].thumb"
        :indexLeft="12"
        :imageCenter="images[13].thumb"
        :indexCenter="13"
        :imageRight="images[14].thumb"
        :indexRight="14"
        @show="show"
      />
      <ImageBase :image="images[15].thumb" @show="show(15)" />
    </Container>

    <TextBase :headline="this.text[2].headline" :text="this.text[2].text" />

    <Container>
      <ImageBase :image="images[16].thumb" @show="show(16)" />
      <ImageDouble
        :imageLeft="images[17].thumb"
        :indexLeft="17"
        :imageRight="images[18].thumb"
        :indexRight="18"
        @show="show"
      />
      <ImageTriple
        :imageLeft="images[19].thumb"
        :indexLeft="19"
        :imageCenter="images[20].thumb"
        :indexCenter="20"
        :imageRight="images[21].thumb"
        :indexRight="21"
        @show="show"
      />
      <ImageDouble
        :imageLeft="images[22].thumb"
        :indexLeft="22"
        :imageRight="images[23].thumb"
        :indexRight="23"
        @show="show"
      />
    </Container>

    <TextBase :headline="this.text[3].headline" :text="this.text[3].text" />

    <Container>
      <ImageBase :image="images[24].thumb" @show="show(24)" />
      <ImageTriple
        :imageLeft="images[25].thumb"
        :indexLeft="25"
        :imageCenter="images[26].thumb"
        :indexCenter="26"
        :imageRight="images[27].thumb"
        :indexRight="27"
        @show="show"
      />
      <ImageBase :image="images[28].thumb" @show="show(28)" />
      <ImageDouble
        :imageLeft="images[29].thumb"
        :indexLeft="29"
        :imageRight="images[30].thumb"
        :indexRight="30"
        @show="show"
      />
      <ImageBase :image="images[31].thumb" @show="show(31)" />
    </Container>

    <div class="w-[800px] max-w-[80%] flex flex-col items-center my-[80px] mx-auto">
      <hr class="w-24 h-1 bg-[#eab715] mb-5" />
      <p class="text-center text-sm">Developed by the MSU University Communications team</p>
    </div>

    <Teleport to="body">
      <TheLightbox :images="images" :index="index" v-if="visible" @close="hide()" />
    </Teleport>
  </div>
</template>

<script>
import TheLightbox from "../components/TheLightbox.vue";
import ImageBase from "../components/ImageBase.vue";
import ImageDouble from "../components/ImageDouble.vue";
import ImageTriple from "../components/ImageTriple.vue";
import TextBase from "../components/TextBase.vue";
import Container from "../components/ContainerBase.vue";

export default {
  components: {
    TheLightbox,
    ImageBase,
    ImageDouble,
    ImageTriple,
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
          full: "academic-life/academic-one.jpg",
          thumb: "academic-life/academic-one-thumb.jpg",
          alt: "",
          caption: "",
          cred: "Colter Peterson",
        },
        {
          full: "academic-life/academic-two.jpg",
          thumb: "academic-life/academic-two-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "academic-life/academic-three.jpg",
          thumb: "academic-life/academic-three-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "academic-life/academic-four.jpg",
          thumb: "academic-life/academic-four-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "academic-life/academic-five.jpg",
          thumb: "academic-life/academic-five-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "academic-life/academic-six.jpg",
          thumb: "academic-life/academic-six-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "campus-life/campus-one.jpg",
          thumb: "campus-life/campus-one-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "campus-life/campus-two.jpg",
          thumb: "campus-life/campus-two-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "campus-life/campus-three.jpg",
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
          cred: "",
        },
        {
          full: "campus-life/campus-six.jpg",
          thumb: "campus-life/campus-six-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "campus-life/campus-seven.jpg",
          thumb: "campus-life/campus-seven-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "campus-life/campus-eight.jpg",
          thumb: "campus-life/campus-eight-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
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
          cred: "",
        },
        {
          full: "scenic/scenic-three.jpg",
          thumb: "scenic/scenic-three-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "scenic/scenic-four.jpg",
          thumb: "scenic/scenic-four-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "scenic/scenic-five.jpg",
          thumb: "scenic/scenic-five-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "scenic/scenic-six.jpg",
          thumb: "scenic/scenic-six-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "scenic/scenic-seven.jpg",
          thumb: "scenic/scenic-seven-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "scenic/scenic-eight.jpg",
          thumb: "scenic/scenic-eight-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-one.jpg",
          thumb: "sports/sports-one-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-two.jpg",
          thumb: "sports/sports-two-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-three.jpg",
          thumb: "sports/sports-three-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-four.jpg",
          thumb: "sports/sports-four-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-five.jpg",
          thumb: "sports/sports-five-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-six.jpg",
          thumb: "sports/sports-six-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-seven.jpg",
          thumb: "sports/sports-seven-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
        },
        {
          full: "sports/sports-eight.jpg",
          thumb: "sports/sports-eight-thumb.jpg",
          alt: "",
          caption: "",
          cred: "",
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

/* @media screen and (max-width: 1200px) {
  h1 {
    font-size: 30px !important;
  }
} */
</style>
