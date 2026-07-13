<template>


<section class="relative min-h-screen lg:min-h-[85dvh] lg:h-[85dvh] w-full flex items-center overflow-hidden bg-rose-800 pb-20 lg:py-0">

  <NuxtImg
    src="/img/amu-track-light.svg"
    alt=""
    aria-hidden="true"
    loading="lazy"
    class="pointer-events-none select-none absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 md:-right-16 lg:-right-20 xl:-right-24
           w-[95%] sm:w-[95%] md:w-[70%] lg:w-[65%] xl:w-[65%] max-w-4xl
           opacity-[0.20] sm:opacity-[0.20] lg:opacity-[0.25]
           z-0"
  />

  <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mt-8 lg:mt-0">
    <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

      <!-- Text Content - Left (Bottom on mobile) -->
      <div class="w-full lg:w-1/2 text-left text-white flex flex-col justify-center">
        <div class="min-h-[280px] sm:min-h-[220px] lg:min-h-[260px] flex flex-col justify-center mb-2">
          <div
            class="statistic-container"
            :class="{ 'fade-in': isVisible }"
          >
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-shadow-sm leading-tight">
              {{ currentStatistic.number }}
            </h1>
            <p class="text-xl sm:text-2xl lg:text-3xl font-light mb-5 text-shadow-sm">
              {{ currentStatistic.text }}
            </p>
            <div class="w-20 h-1 bg-white mb-5 rounded-full"></div>
            <p class="text-base sm:text-lg lg:text-xl text-gray-100 max-w-lg leading-relaxed text-shadow-sm">
              {{ currentStatistic.description }}
            </p>
          </div>
        </div>

        <div class="mt-4 opacity-90">
          <p class="text-base lg:text-lg mb-5 text-shadow font-medium">
            Together, we can change these numbers.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <ButtonSecondary title="Sponsor a child" path="/donate" icon="i-lucide-heart"/>
            <ButtonOutline title="Learn More" path="/about/kacis" />
          </div>
        </div>
      </div>

      <!-- Video - Right (Top on mobile) -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
        <div class="relative w-full max-w-md lg:max-w-xl aspect-video rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
          <video
            ref="heroVideo"
            class="absolute inset-0 w-full h-full object-cover"
            autoplay
            muted
            loop
            playsinline
          >
            <source src="/vid/intro.mp4" type="video/mp4">
            <img src="/img/bs9.webp" alt="Children in need of education support" class="w-full h-full object-cover">
          </video>
        </div>
      </div>

    </div>
  </div>

  <div class="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
    <svg class="w-6 h-6 lg:w-8 lg:h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

<!-- SECTION 1: Who Are We? -->
  <section class="relative bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- Image Container - Left Side -->
        <div class="flex-1 w-full">
          <div class="relative w-full h-72 sm:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <NuxtImg
              src="/events/grids.webp"
              alt="AMU Foundation - Who We Are"
              class="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality="85"
            />
          </div>
        </div>

        <!-- Text Content - Right Side -->
        <div class="flex-1 text-left">
          <div class="flex flex-col justify-between gap-6">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Who <span class="text-rose-700">We Are</span>
            </h2>
            <div class="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                AMU is a not-for-profit, non-sectarian foundation committed to the professional and holistic development of the child.
              </p>
              <p>
                We are ethically and morally bound in our principles to create an enabling environment where children can develop and showcase their talents through education, sports, and music.
              </p>
            </div>
            
            <div class="mt-4 flex flex-col sm:flex-row gap-4">
              <ButtonPrimary
                path="/about/vision-mission"
                title="Learn More"
                icon="i-lucide-info"
              />
              <ButtonSecondary 
                path="/stories/programs" 
                title="View Events" 
                icon="i-lucide-calendar" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- SECTION 2: How You Can Help (KACIS) -->
  <section class="relative bg-blue-500 py-16 lg:py-24 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- Text Content - Left Side -->
        <div class="flex-1 text-left">
          <div class="flex flex-col justify-between gap-6">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              <span class="text-white">Keep A Child In School</span> <br/>
              <span class="text-white">(KACIS)</span>
            </h2>
            <div class="space-y-4 text-lg text-gray-100">
              <p>
                <strong>KACIS</strong> is our flagship educational initiative designed to eliminate financial barriers that prevent children from accessing quality education. 
              </p>
              <p>
                We believe that <em>talent should open doors, not privilege</em>. By providing full or partial tuition coverage, essential school materials, and dedicated mentorship, we ensure that vulnerable children not only stay in school but thrive academically and personally.
              </p>
              <p>
                Every child deserves the opportunity to learn, grow, and become a future change-maker in their community.
              </p>
            </div>
            
            <div class="mt-4 flex flex-col sm:flex-row gap-4">
              <ButtonPrimary
                path="/donate"
                title="Donate to KACIS"
                icon="i-lucide-heart"
              />
              <ButtonSecondary
                path="/about/kacis"
                title="Program Details"
                icon="i-lucide-arrow-right"
              />
            </div>
          </div>
        </div>

        <!-- Image Container - Right Side -->
        <div class="flex-1 w-full">
          <div class="relative w-full h-72 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img
              src="/img/kacis.webp"
              alt="Keep A Child In School Initiative"
              class="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality="85"
            />
            <!-- Decorative gradient to make the image pop -->
            <div class="absolute inset-0 bg-gradient-to-tr from-rose-900/20 to-transparent mix-blend-overlay"></div>
          </div>
        </div>

      </div>
    </div>
  </section>

<section class="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">

    <!-- Header Section -->
    <div class="text-center mb-16">
      <span class="inline-block text-sm font-semibold tracking-widest text-rose-700 uppercase mb-3">
        How We Work
      </span>
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-8">
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

    <!-- 4x2 Numbered Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <!-- 01 - Skills Acquisitions and Training -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          01
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-graduation-cap" class="w-5 h-5 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Skills Acquisitions and Training
          </h3>
          <p class="text-gray-600 text-sm">
            Empowering individuals through comprehensive skill development and
            professional training programs.
          </p>
        </div>
      </div>

      <!-- 02 - Advocacy -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          02
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-megaphone" class="w-5 h-5 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Advocacy</h3>
          <p class="text-gray-600 text-sm">
            Championing causes and raising awareness for educational and social
            justice initiatives.
          </p>
        </div>
      </div>

      <!-- 03 - Exchange Program and Networking -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          03
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-globe" class="w-5 h-5 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Exchange Program and Networking
          </h3>
          <p class="text-gray-600 text-sm">
            Building global connections and facilitating knowledge exchange
            opportunities.
          </p>
        </div>
      </div>

      <!-- 04 - Capacity Development -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          04
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-trending-up" class="w-5 h-5 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Capacity Development
          </h3>
          <p class="text-gray-600 text-sm">
            Strengthening organizational and individual capabilities for
            sustainable growth.
          </p>
        </div>
      </div>

      <!-- 05 - Social Media Mobilization/Promotion -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          05
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-share-2" class="w-5 h-5 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Social Media Mobilization/Promotion
          </h3>
          <p class="text-gray-600 text-sm">
            Leveraging digital platforms to amplify our message and engage
            communities.
          </p>
        </div>
      </div>

      <!-- 06 - Core Partnership and Endorsements -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          06
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-handshake" class="w-5 h-5 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Core Partnership and Endorsements
          </h3>
          <p class="text-gray-600 text-sm">
            Building strategic alliances and securing endorsements for maximum
            impact.
          </p>
        </div>
      </div>

      <!-- 07 - Concerts and Sports Activities -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          07
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-music" class="w-5 h-5 text-rose-700" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Concerts and Sports Activities
          </h3>
          <p class="text-gray-600 text-sm">
            Organizing cultural and sporting events to showcase talent and build
            community.
          </p>
        </div>
      </div>

      <!-- 08 - Registrations -->
      <div class="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group overflow-hidden hover:-translate-y-1">
        <span class="absolute -top-4 -right-2 text-8xl font-black text-rose-700/[0.06] group-hover:text-rose-700/[0.10] leading-none select-none transition-colors duration-300 pointer-events-none">
          08
        </span>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 mb-4">
            <Icon name="i-lucide-clipboard-list" class="w-5 h-5 text-rose-700" />
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
  </div>
</section>

  <section class="relative bg-gray-50 py-16">
    <EventCards />
  </section>

  <section class="relative bg-gray-50 py-16">
    <Testimonials />
  </section>

<!-- Gallery Preview Section: Stacked/Fanned Photo Cards -->
<section class="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

      <!-- Fanned Photo Stack - Left on desktop, top on mobile -->
      <div class="flex-1 w-full flex justify-center">
        <NuxtLink
          to="/stories/gallery"
          class="group relative w-full max-w-sm h-72 sm:h-80 lg:h-96 mx-auto block"
        >
          <!-- Back card -->
          <div class="absolute inset-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] group-hover:rotate-[-14deg] transition-transform duration-300 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
            <NuxtImg
              :src="galleryImages[2].src"
              :alt="galleryImages[2].alt"
              class="w-full h-full object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 60vw, 25vw"
              quality="75"
            />
          </div>

          <!-- Middle card -->
          <div class="absolute inset-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[8deg] group-hover:rotate-[12deg] transition-transform duration-300 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
            <NuxtImg
              :src="galleryImages[1].src"
              :alt="galleryImages[1].alt"
              class="w-full h-full object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 60vw, 25vw"
              quality="75"
            />
          </div>

          <!-- Front card -->
          <div class="absolute inset-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] group-hover:rotate-[-4deg] group-hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white z-10">
            <NuxtImg
              :src="galleryImages[0].src"
              :alt="galleryImages[0].alt"
              class="w-full h-full object-cover"
              loading="eager"
              sizes="(max-width: 640px) 60vw, 25vw"
              quality="80"
            />

            <!-- Subtle hover overlay on front card -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>

          <!-- Photo count badge -->
          <div class="absolute z-20 -bottom-2 -right-2 sm:bottom-0 sm:right-0 lg:right-4 bg-rose-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            <Icon name="lucide:image" class="w-3.5 h-3.5" />
            {{ galleryImages.length }}+ Photos
          </div>
        </NuxtLink>
      </div>

      <!-- Text Content - Right on desktop, bottom on mobile -->
      <div class="flex-1 text-left w-full">
        <div class="flex flex-col gap-6">
          <div>
            <span class="inline-block text-sm font-semibold tracking-widest text-rose-700 uppercase mb-3">
              Moments &amp; Memories
            </span>
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Explore Our <span class="text-rose-700">Gallery</span>
            </h2>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
            Discover amazing stories and moments captured in our community gallery —
            from classrooms to concerts, sports camps to celebrations. Every photo tells
            a story of a child given the chance to thrive.
          </p>

          <div class="mt-2">
            <ButtonPrimary
              path="/stories/gallery"
              title="View Full Gallery"
              icon="i-lucide-arrow-right"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
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
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  opacity: 0;
  transform: translateY(15px);
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
      content: '/img/bs9.webp'
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
  ogImage: '/img/bs9.webp',
  ogUrl: 'https://www.amufoundation.org',
  twitterCard: 'summary_large_image',
  twitterSite: '@amufoundation',
  twitterCreator: '@amufoundation',
  twitterImage: '/img/bs9.webp',
  keywords: ['AMU Foundation', 'education', 'sports', 'music', 'children empowerment', 'non-profit', 'charity', 'skill development', 'advocacy'],
})

// Gallery images data (keeping only the existing assets)
const galleryImages = ref([
  {
    src: '/img/bs9.webp',
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
    src: '/img/bs4.webp',
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