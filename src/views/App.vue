<template>
  <div class="dark:bg-black">
    <div class="relative">
      <ImageBase
        image="title-image.jpg"
        alt="The College “M” on Mount Baldy is outlined in lights under a stary evening sky for the annual Lighting of the M homecoming event. (MSU Photo by Kelly Gorham)"
      />
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

      <Teleport to="body">
        <TheLightbox :images="images" :photographers="photographers" :index="index" v-if="visible" @close="hide()" />
      </Teleport>

      <div>
        <p class="text-center text-sm my-10 dark:text-white">Developed by the MSU University Communications team</p>
      </div>
    </div>
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
      photographers: [
        "Colter Peterson", // 0
        "Adrian Sanchez-Gonzalez", // 1
        "Kelly Gorham", // 2
        "Marcus 'Doc' Cravens", // 3
      ],
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
          alt: "MSU researchers Gaurav Jha and Paul Nugent perform tests using a leaf spectrometer and thermal camera in the teaching greenhouse of the Plant Growth Center on campus. (MSU Photo by Adrian Sanchez Gonzalez)",
          cred: 1,
        },
        {
          full: "academic-life/academic-two.jpg",
          thumb: "academic-life/academic-two-thumb.jpg",
          alt: "Sean Sherman, renowned chef of Native American cuisine and chief executive of The Sioux Chef, stirs a utensil in a large pot while students surrounding him peer inside the pot. Sherman is teaching a class in the Hospitality Management Culinary Arts kitchen on campus. (MSU Photo by Adrian Sanchez Gonzalez)",
          cred: 1,
        },
        {
          full: "academic-life/academic-three.jpg",
          thumb: "academic-life/academic-three-thumb.jpg",
          alt: "Students sit around the professor at long curved tables during the first class ever held in Cruzado Auditorium in Romney Hall. The auditorium is situated on the top floor of Romney Hall where a wooden basketball court once was. During the renovation some of the original basketball flooring was left as a nod to the once beloved gym. (MSU Photo by Kelly Gorham)",
          cred: 2,
        },
        {
          full: "academic-life/academic-four.jpg",
          thumb: "academic-life/academic-four-thumb.jpg",
          alt: "Sheikh Parvez, a doctoral student in MSU's materials science, tests a device designed to stimulate and control 2D quantum materials with radio frequency excitations. (MSU Photo by Adrian Sanchez Gonzalez)",
          cred: 1,
        },
        {
          full: "academic-life/academic-five.jpg",
          thumb: "academic-life/academic-five-thumb.jpg",
          alt: "Gallatin College students work with laser instruments in a Montana State University lab. (MSU Photo by Kelly Gorham)",
          cred: 2,
        },
        {
          full: "academic-life/academic-six.jpg",
          thumb: "academic-life/academic-six-thumb.jpg",
          alt: "Savannah Emens rests her head upon Chevy, the cow she has raised since birth, before the 4H livestock sale during the Big Sky Country Fair at the Gallatin County Fairgrounds. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "campus-life/campus-one.jpg",
          thumb: "campus-life/campus-one-thumb.jpg",
          alt: "A student on a snowboard slides down a rail as part of MSU's inaugural “Rail Jam” freestyle snowboard and ski competition held on a compact slopestyle course. The competition was held in front of Rendezvous Dining Pavilion on Montana State University's campus. (MSU Photo by Kelly Gorham)",
          cred: 2,
        },
        {
          full: "campus-life/campus-two.jpg",
          thumb: "campus-life/campus-two-thumb.jpg",
          alt: "Montana State students, faculty and community members join hands to celebrate Indigenous Peoples Day with a round dance in front of American Indian Hall. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "campus-life/campus-three.jpg",
          thumb: "campus-life/campus-three-thumb.jpg",
          alt: "A young Montana State University fan sits on Champ's lap during MSU's homecoming pep rally held in downtown Bozeman. The fan faces toward the crowd with a smile on her face for being briefly included in the pep rally. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "campus-life/campus-four.jpg",
          thumb: "campus-life/campus-four-thumb.jpg",
          alt: "Two MSU students smile for a selfie on top of Mount Baldy after hiking the M trail during the annual Lighting of the M event during homecoming week. (MSU Photo by Kelly Gorham)",
          cred: 2,
        },
        {
          full: "campus-life/campus-five.jpg",
          thumb: "campus-life/campus-five-thumb.jpg",
          alt: "A group of four students walk across a snowy campus on the first day of the 2022 spring semester. Behind the students a snowblower is clearing fresh snow from the sidewalks. (MSU Photo by Adrian Sanchez Gonzalez)",
          cred: 1,
        },
        {
          full: "campus-life/campus-six.jpg",
          thumb: "campus-life/campus-six-thumb.jpg",
          alt: "Two volunteers carrying a large couch squeeze into an elevator in a campus residence hall during Montana State University's Move-In weekend. They are laughing at the situation. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "campus-life/campus-seven.jpg",
          thumb: "campus-life/campus-seven-thumb.jpg",
          alt: "Montana State University students gather on Romney Oval for a food truck rodeo event as part of MSU Debut. The nearby sprinklers are going off adding a glittery-look to the photo. (MSU Photo by Marcus “Doc” Cravens)",
          cred: 3,
        },
        {
          full: "campus-life/campus-eight.jpg",
          thumb: "campus-life/campus-eight-thumb.jpg",
          alt: "A student with a paint brush and bucket of white paint leans over to paint the rocks that form the college “M”. Painting the rocks is an annual tradition at Montana State University. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "campus-life/campus-nine.jpg",
          thumb: "campus-life/campus-nine-thumb.jpg",
          alt: "Three people walk towards Romney Hall after the Lighting of Montana Hall holiday event. For the first time, Romney Hall is also adorned in blue and gold lights. (MSU Photo by Marcus “Doc” Cravens)",
          cred: 3,
        },
        {
          full: "campus-life/campus-ten.jpg",
          thumb: "campus-life/campus-ten-thumb.jpg",
          alt: "Two graduating students embrace after receiving their diplomas at Montana State University's spring commencement ceremony. (MSU Photo by Adrian Sanchez Gonzalez)",
          cred: 1,
        },
        {
          full: "scenic/scenic-one.jpg",
          thumb: "scenic/scenic-one-thumb.jpg",
          alt: "Three students hike across rocks at Hyalite Reservoir on a sunny summer day. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "scenic/scenic-two.jpg",
          thumb: "scenic/scenic-two-thumb.jpg",
          alt: "The morning dew glistens as the sun rises over campus. A tipi is shown on the lawn behind Montana Hall. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "scenic/scenic-three.jpg",
          thumb: "scenic/scenic-three-thumb.jpg",
          alt: "A person bikes across campus as the golden light from the morning sun touches Montana Hall. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "scenic/scenic-four.jpg",
          thumb: "scenic/scenic-four-thumb.jpg",
          alt: "A student walks underneath orange fall foliage on Montana State University's campus. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "scenic/scenic-five.jpg",
          thumb: "scenic/scenic-five-thumb.jpg",
          alt: "A hot air balloon hovers in the sky over what's commonly called “the noodle” sculpture on Montana State University's campus on a fall afternoon. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "scenic/scenic-six.jpg",
          thumb: "scenic/scenic-six-thumb.jpg",
          alt: "A student walks underneath bright red leaves on their way through campus in the fall. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "scenic/scenic-seven.jpg",
          thumb: "scenic/scenic-seven-thumb.jpg",
          alt: "A person walks past Jabs Hall on Montana State University's campus after a snowstorm. Snow outlines every branch on nearby trees. (MSU Photo by Adrian Sanchez Gonzalez)",
          cred: 1,
        },
        {
          full: "scenic/scenic-eight.jpg",
          thumb: "scenic/scenic-eight-thumb.jpg",
          alt: "Undergraduate student Jeremiah Peterson rides horseback to round up a herd of angus cows at MSU's Red Bluff Research Ranch. (MSU Photo by Adrian Sanchez Gonzalez)",
          cred: 1,
        },
        {
          full: "sports/sports-one.jpg",
          thumb: "sports/sports-one-thumb.jpg",
          alt: "Football athletes Tommy Melot, Treyton Pickering, and Burke Mastel, proudly carry the Great Divide Trophy across the field at Bobcat Stadium after defeating the University of Montana Grizzlies in the annual Cat-Griz rivalry football game. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "sports/sports-two.jpg",
          thumb: "sports/sports-two-thumb.jpg",
          alt: "Host Rece Davis and GameDay analysts Desmond Howard, Kirk Herbstreit, Lee Corso, Pat McAfee and David Pollack sit at the ESPN College GameDay desk on stage during the live show. MSU Bobcat and UofM Grizzly fans hold signs cheering for their respective teams behind the stage. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "sports/sports-three.jpg",
          thumb: "sports/sports-three-thumb.jpg",
          alt: "Football athlete Blake Glessner carries the American flag while his teammates storm the field behind him at Bobcat Stadium before their game against Weber State. (MSU Photo by Marcus “Doc” Cravens)",
          cred: 3,
        },
        {
          full: "sports/sports-four.jpg",
          thumb: "sports/sports-four-thumb.jpg",
          alt: "The College GameDay bus arrives at Montana State University's campus. Students greet the bus upon its arrival. A student-made signs says, “Check my math. 7-0 (MSU's football record) is greater than 4-3 (UM's football record). Go Cats Go.” (MSU Photo by Kelly Gorham)",
          cred: 2,
        },
        {
          full: "sports/sports-five.jpg",
          thumb: "sports/sports-five-thumb.jpg",
          alt: "Paige Rasmussen, a MSU rodeo team member, rides horseback while lassoing. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "sports/sports-six.jpg",
          thumb: "sports/sports-six-thumb.jpg",
          alt: "Montana State University women's basketball team cheers in excitement on the court during the home opener for their season in the Brick Breeden Fieldhouse. (MSU Photo by Kelly Gorham)",
          cred: 2,
        },
        {
          full: "sports/sports-seven.jpg",
          thumb: "sports/sports-seven-thumb.jpg",
          alt: "The Montana State University Volleyball team cheers after winning their home opener. (MSU Photo by Colter Peterson)",
          cred: 0,
        },
        {
          full: "sports/sports-eight.jpg",
          thumb: "sports/sports-eight-thumb.jpg",
          alt: "Montana State University Track athlete jumps over a hurdle. (MSU Photo by Kelly Gorham)",
          cred: 2,
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
