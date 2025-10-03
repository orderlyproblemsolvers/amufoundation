<template>
  <!-- Hero Video Section with Statistics -->
  <section class="relative h-screen overflow-hidden">
    <!-- Background Video -->
    <video
      ref="heroVideo"
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline

    >
      <source src="/vid/intro.mp4" type="video/mp4">
      <!-- Fallback image -->
      <img src="/img/bs9.jpeg" alt="Children in need of education support" class="w-full h-full object-cover">
    </video>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/90"></div>

    <!-- Statistics Content -->
    <div class="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
      <div class="text-center text-white max-w-4xl mx-auto">
        <!-- Main Statistic Display -->
        <div class="mb-8">
          <div 
            class="statistic-container"
            :class="{ 'fade-in': isVisible }"
          >
            <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 text-shadow-lg">
              {{ currentStatistic.number }}
            </h1>
            <p class="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-shadow">
              {{ currentStatistic.text }}
            </p>
            <div class="w-24 h-1 bg-rose-700 mx-auto mb-6"></div>
            <p class="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-shadow">
              {{ currentStatistic.description }}
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-12 opacity-90">
          <p class="text-lg mb-6 text-shadow">
            Together, we can change these numbers
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
           <ButtonPrimary title="Make a Difference" path="/donate"/>
            <ButtonSecondary title="Learn More" path="/about/kacis" />
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
      <div class="text-center py-12">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Welcome Believe <span class="text-rose-700 leckerli">Talent</span> Should <br />
          Open Doors.
        </h1>
        <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          AMU is a Foundation committed to the professional development of the
          child. It is a foundation, and not-for-profit, non-sectarian,
          non-partisan, ethically and morally bound in principles,
          non-religious, and working to achieve the overall development of
          children
        </p>
        <div class="mt-8 flex justify-center space-x-4">
          <ButtonPrimary
            path="/events"
            title="Register"
            icon="i-lucide-arrow-right"
          />
          <ButtonSecondary path="/donate" title="Donate" icon="i-lucide-gift" />
        </div>
      </div>
      <div class="shadow-[0px_-14px_62px_-31px_#c70036] flex flex-col text-left banner w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] rounded-lg h-64 sm:h-72 md:h-80 lg:h-84 place-self-center">
        <NuxtImg
          src="/img/bs9.jpeg"
          alt="Support Our Cause Banner"
          class="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="eager"
          sizes="95vw sm:90vw lg:85vw xl:80vw"
          quality="85"
        />
        <div class="relative justify-center flex flex-col bg-gradient-to-r from-black to-transparent bg-opacity-20 p-4 sm:p-6 lg:p-8 rounded-lg text-white h-full z-10">
          <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
            Support Our Cause
          </h2>
          <p class="mb-4 sm:mb-6 lg:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base lg:text-lg leading-relaxed">
            Join us in making a difference in the lives of children through
            education, sports, and music. Your support can help unlock their
            potential and create a brighter future.
          </p>
          <div class="w-fit">
            <ButtonGlass
              path="/donate"
              title="Donate Now"
              icon="i-lucide-heart"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="relative bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 py-12">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <!-- Text Content - Left Side -->
        <div class="flex-1 text-left">
          <div class="flex flex-col justify-between gap-5">
            <h2 class="text-xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            More Than a Foundation - <span class="text-rose-700">A Movement</span>
          </h2>
          <p class="mt-6 text-lg text-gray-600">
            Born from B&S Education Services, AMU is dedicated to creating equal
            opportunities for children through education, sports, and music. We
            believe talent should open doors — not privilege. <br /><br />
            Our Mission is to create an enabling environment for children and
            use it to develop and showcase their talents and skills.
          </p>
          <ButtonPrimary
            path="/about/vision-mission"
            title="Learn More"
            icon="i-lucide-arrow-right"
          />
          </div>
        </div>

        <!-- Image Container - Right Side -->
        <div class="flex-1 w-full">
          <div class="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
            <NuxtImg
              src="/img/bs4.jpg"
              alt="AMU Foundation - Creating opportunities for children"
              class="w-full h-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
              quality="80"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-8"
        >
          Our <span class="text-rose-700">Approach</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          The Foundation strongly believes in the true and active participation
          of all key stakeholders particularly program beneficiaries. Fair
          efforts are taken to ensure that stakeholders participate and
          contribute to all the stages of the interventions. The following are
          the key elements of AMU program Strategies and Work Approach.
        </p>
      </div>

      <!-- 4x4 Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Skills Acquisitions and Training -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon
              name="i-lucide-graduation-cap"
              class="w-8 h-8 text-rose-700"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Skills Acquisitions and Training
          </h3>
          <p class="text-gray-600 text-sm">
            Empowering individuals through comprehensive skill development and
            professional training programs.
          </p>
        </div>

        <!-- Advocacy -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon name="i-lucide-megaphone" class="w-8 h-8 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Advocacy</h3>
          <p class="text-gray-600 text-sm">
            Championing causes and raising awareness for educational and social
            justice initiatives.
          </p>
        </div>

        <!-- Exchange Program and Networking -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon name="i-lucide-globe" class="w-8 h-8 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Exchange Program and Networking
          </h3>
          <p class="text-gray-600 text-sm">
            Building global connections and facilitating knowledge exchange
            opportunities.
          </p>
        </div>

        <!-- Capacity Development -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon name="i-lucide-trending-up" class="w-8 h-8 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Capacity Development
          </h3>
          <p class="text-gray-600 text-sm">
            Strengthening organizational and individual capabilities for
            sustainable growth.
          </p>
        </div>

        <!-- Social Media Mobilization/Promotion -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon name="i-lucide-share-2" class="w-8 h-8 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Social Media Mobilization/Promotion
          </h3>
          <p class="text-gray-600 text-sm">
            Leveraging digital platforms to amplify our message and engage
            communities.
          </p>
        </div>

        <!-- Core Partnership and Endorsements -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon name="i-lucide-handshake" class="w-8 h-8 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Core Partnership and Endorsements
          </h3>
          <p class="text-gray-600 text-sm">
            Building strategic alliances and securing endorsements for maximum
            impact.
          </p>
        </div>

        <!-- Concerts and Sports Activities -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon name="i-lucide-music" class="w-8 h-8 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Concerts and Sports Activities
          </h3>
          <p class="text-gray-600 text-sm">
            Organizing cultural and sporting events to showcase talent and build
            community.
          </p>
        </div>

        <!-- Registrations -->
        <div
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <div class="flex items-start mb-4">
            <Icon
              name="i-lucide-clipboard-list"
              class="w-8 h-8 text-rose-700"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Registrations
          </h3>
          <p class="text-gray-600 text-sm">
            Streamlined registration processes for programs, events, and
            services.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-gray-50 py-16">
    <EventCards />
  </section>

  <section class="relative bg-gray-50 py-16">
    <Testimonials />
  </section>

  <section class="relative place-items-center bg-gray-50 py-16 sm:py-20">
    <NuxtLink 
      to="/stories/gallery"
      class="shadow-[0px_-14px_62px_-31px_#c70036] flex flex-col text-left banners w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] rounded-lg h-64 sm:h-72 md:h-80 lg:h-84 place-self-center hover-scale cursor-pointer"
    >
      <div class="relative justify-center flex flex-col bg-black p-4 sm:p-6 lg:p-8 rounded-lg text-white h-full overflow-hidden">
        <!-- Gallery Grid Background -->
        <div class="absolute inset-0 gallery-grid">
          <NuxtImg
            v-for="(image, index) in galleryImages" 
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="gallery-image rounded-sm"
            loading="lazy"
            sizes="(max-width: 640px) 50vw, 33vw"
            quality="70"
          />
        </div>
        
        <!-- Content Overlay -->
        <div class="relative z-10">
          <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
            Explore Our Gallery
          </h2>
          <p class="mb-4 sm:mb-6 lg:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base lg:text-lg leading-relaxed">
            Discover amazing stories and moments captured in our community gallery. 
            Click to explore all our featured content and memories.
          </p>
          <div class="w-fit">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200">
              <Icon name="lucide:image" class="w-4 h-4" />
              <span class="text-sm font-medium">View Gallery</span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.text-shadow-lg {
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
}

.statistic-container {
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
}

.statistic-container.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 4px;
  opacity: 0.3;
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.02);
}

.banners {
  position: relative;
  overflow: hidden;
}

.banner {
  position: relative;
  overflow: hidden;
}

/* Ensure video covers the full viewport */
video {
  min-width: 100%;
  min-height: 100%;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
useHead({

  title: 'AMU Foundation - Empowering Children Through Education, Sports, and Music',
  meta: [
    {
      name: 'description',
      content: 'AMU Foundation is dedicated to creating equal opportunities for children through education, sports, and music. Join us in making a difference.'
    },
    {
      name: 'keywords',
      content: 'AMU Foundation, education, sports, music, children empowerment, non-profit, charity, skill development, advocacy'
    },
    {
      name: 'author',
      content: 'AMU Foundation'
    },
    {
      property: 'og:title',
      content: 'AMU Foundation - Empowering Children Through Education, Sports, and Music'
    },
    {
      property: 'og:description',
      content: 'AMU Foundation is dedicated to creating equal opportunities for children through education, sports, and music. Join us in making a difference.'
    },
    {
      property: 'og:image',
      content: '/img/bs9.jpeg'
    },
    {
      property: 'og:url',
      content: 'https://www.amufoundation.org'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
})

useSeoMeta({
  title: 'AMU Foundation - Empowering Children Through Education, Sports, and Music',
  description: 'AMU Foundation is dedicated to creating equal opportunities for children through education, sports, and music. Join us in making a difference.',
  ogType: 'website',
  ogImage: '/img/bs9.jpeg',
  ogUrl: 'https://www.amufoundation.org',
  twitterCard: 'summary_large_image',
  twitterSite: '@amufoundation',
  twitterCreator: '@amufoundation',
  twitterImage: '/img/bs9.jpeg',
  keywords: ['AMU Foundation', 'education', 'sports', 'music', 'children empowerment', 'non-profit', 'charity', 'skill development', 'advocacy'],
})

// Gallery images data (keeping only the existing assets)
const galleryImages = ref([
  {
    src: '/img/bs4.jpg',
    alt: 'AMU Foundation community event - children participating in educational activities'
  },
  {
    src: '/img/bs5.jpg',
    alt: 'Sports activities organized by AMU Foundation for youth development'
  },
  {
    src: '/img/bs6.jpg',
    alt: 'Music and arts program showcasing talented children'
  },
  {
    src: '/img/bs7.jpeg',
    alt: 'Educational workshop and skill development session'
  },
  {
    src: '/img/bs8.jpeg',
    alt: 'Community gathering and networking event'
  },
  {
    src: '/img/bs9.jpeg',
    alt: 'AMU Foundation impact story and success celebration'
  }
])

// Statistics data with real emotional impact
const statistics = ref([
  {
    number: '244 Million',
    text: 'Children Are Out of School Globally',
    description: 'Sub-Saharan Africa accounts for more than one-third of the global out-of-school children population, with many never having the chance to step foot in a classroom.'
  },
  {
    number: '20 Million',
    text: 'Nigerian Children Out of School',
    description: 'Nigeria has the highest number of out-of-school children in the world. These children are denied their fundamental right to education and a chance at a better future.'
  },
  {
    number: '38%',
    text: 'Adult Illiteracy Rate in Nigeria',
    description: 'More than 65 million Nigerian adults cannot read or write, limiting their opportunities and perpetuating cycles of poverty across generations.'
  },
  {
    number: '60%',
    text: 'Of African Youth Lack Basic Skills',
    description: 'Despite completing primary education, many young Africans lack the foundational literacy and numeracy skills needed to thrive in the modern world.'
  },
  {
    number: '1 in 5',
    text: 'Children Will Never Learn to Read',
    description: 'Without intervention, millions of children across Africa will grow up unable to read, write, or perform basic mathematics, limiting their life opportunities.'
  }
])

// Component state
const currentIndex = ref(0)
const currentStatistic = ref(statistics.value[0])
const isVisible = ref(false)
const heroVideo = ref(null)
let statisticInterval = null

// Methods
const nextStatistic = () => {
  isVisible.value = false
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % statistics.value.length
    currentStatistic.value = statistics.value[currentIndex.value]
    isVisible.value = true
  }, 400)
}

// Lifecycle hooks
onMounted(() => {
  // Start the statistics animation
  isVisible.value = true
  
  // Set interval for cycling through statistics
  statisticInterval = setInterval(nextStatistic, 4000)
  
  // Ensure video plays on mobile devices
  if (heroVideo.value) {
    heroVideo.value.play().catch(error => {
      console.warn('Video playback failed:', error)
    })
  }
})

onUnmounted(() => {
  if (statisticInterval) {
    clearInterval(statisticInterval)
  }
})
</script>