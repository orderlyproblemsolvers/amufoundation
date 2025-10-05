<template>
  <div class="relative bg-gray-50 min-h-screen">


    <!-- Welcome Section - Matching main page style -->
    <section class="relative bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div class="text-center py-12">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Three Pillars of <span class="text-rose-700 leckerli">Impact</span> <br />
            Choose Your Path.
          </h1>
          <p class="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Million of Us Foundation transforms lives through three powerful initiatives. 
            Your support creates ripples of change that transform communities across Nigeria. 
            Choose where your heart leads you - every naira makes a difference.
          </p>
        </div>

        <!-- Featured Banner -->
        <div class="shadow-[0px_-14px_62px_-31px_#c70036] flex flex-col text-left banner w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] rounded-lg h-64 sm:h-72 md:h-80 lg:h-84 place-self-center mb-12">
          <NuxtImg
            src="/img/bs6.jpg"
            alt="AMU Foundation Impact Banner"
            class="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="eager"
            sizes="95vw sm:90vw lg:85vw xl:80vw"
            quality="85"
          />
          <div class="relative justify-center flex flex-col bg-gradient-to-r from-black to-transparent bg-opacity-20 p-4 sm:p-6 lg:p-8 rounded-lg text-white h-full z-10">
            <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
              3000+ Children Need Your Help Today
            </h2>
            <p class="mb-4 sm:mb-6 lg:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base lg:text-lg leading-relaxed">
              Join us in making a difference in the lives of children through education, sports, and music. 
              Your donation today could be the key that unlocks their potential tomorrow.
            </p>
            <div class="w-fit">
              <div class="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200 cursor-pointer">
                <Icon name="i-lucide-heart" class="w-4 h-4" />
                <span class="text-sm font-medium">Make Your Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Pillars Section -->
    <section id="programs" class="relative bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
      <!-- Program Selection Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-12 sm:mb-16">
        <!-- B&S Music School -->
        <div @click="selectedProgram = 'music'" 
             :class="[
               'bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-4 xs:p-5 sm:p-6 border cursor-pointer transform hover:scale-105 active:scale-95',
               selectedProgram === 'music' ? 'border-rose-700 ring-2 ring-rose-700 ring-opacity-50 scale-105' : 'border-gray-100 hover:border-rose-300'
             ]">
          <div class="flex items-start mb-3 xs:mb-4">
            <div class="bg-purple-100 p-2 xs:p-3 rounded-lg flex-shrink-0">
              <Icon name="i-lucide-music" class="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-rose-700" />
            </div>
          </div>
          <h3 class="text-lg xs:text-xl sm:text-xl font-semibold text-gray-900 mb-2 xs:mb-3 leading-tight">
            B&S Music School
          </h3>
          <p class="text-gray-600 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed line-clamp-3">
            Nurturing musical talents through professional education, instruments, and performance opportunities.
          </p>
          <div class="text-xs xs:text-sm text-rose-700 font-medium">
            150+ children trained annually
          </div>
        </div>

        <!-- KACIS Education Support -->
        <div @click="selectedProgram = 'kacis'" 
             :class="[
               'bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-4 xs:p-5 sm:p-6 border cursor-pointer transform hover:scale-105 active:scale-95',
               selectedProgram === 'kacis' ? 'border-rose-700 ring-2 ring-rose-700 ring-opacity-50 scale-105' : 'border-gray-100 hover:border-rose-300'
             ]">
          <div class="flex items-start mb-3 xs:mb-4">
            <div class="bg-blue-100 p-2 xs:p-3 rounded-lg flex-shrink-0">
              <Icon name="i-lucide-graduation-cap" class="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-blue-600" />
            </div>
          </div>
          <h3 class="text-lg xs:text-xl sm:text-xl font-semibold text-gray-900 mb-2 xs:mb-3 leading-tight">
            KACIS Education Support
          </h3>
          <p class="text-gray-600 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed line-clamp-3">
            Keeping children in school through fees, supplies, and mentorship programs.
          </p>
          <div class="text-xs xs:text-sm text-rose-700 font-medium">
            200+ children sponsored
          </div>
        </div>

        <!-- Safe Haven Project -->
        <div @click="selectedProgram = 'shelter'" 
             :class="[
               'bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-4 xs:p-5 sm:p-6 border cursor-pointer transform hover:scale-105 active:scale-95 sm:col-span-2 lg:col-span-1',
               selectedProgram === 'shelter' ? 'border-rose-700 ring-2 ring-rose-700 ring-opacity-50 scale-105' : 'border-gray-100 hover:border-rose-300'
             ]">
          <div class="flex items-start mb-3 xs:mb-4">
            <div class="bg-green-100 p-2 xs:p-3 rounded-lg flex-shrink-0">
              <Icon name="i-lucide-home" class="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-green-600" />
            </div>
          </div>
          <h3 class="text-lg xs:text-xl sm:text-xl font-semibold text-gray-900 mb-2 xs:mb-3 leading-tight">
            Safe Haven Project
          </h3>
          <p class="text-gray-600 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed line-clamp-3">
            Providing shelter, care, and hope for vulnerable children in safe environments.
          </p>
          <div class="text-xs xs:text-sm text-rose-700 font-medium">
            Proposed 1000+ shelter
          </div>
        </div>
      </div>

      <!-- Selected Program Details -->
      <div class="transition-all duration-500">
        <div :class="`${programs[selectedProgram].gradientClass} rounded-lg text-white p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 mb-8 xs:mb-10 sm:mb-12 shadow-2xl`">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
            <!-- Program Description -->
            <div class="order-2 lg:order-1">
              <div class="flex flex-col xs:flex-row xs:items-center mb-4 xs:mb-6">
                <div class="bg-white/20 backdrop-blur-sm p-3 xs:p-4 rounded-lg mb-3 xs:mb-0 xs:mr-4 self-start xs:self-auto">
                  <Icon :name="programs[selectedProgram].icon" class="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h3 class="text-xl xs:text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                    {{ programs[selectedProgram].title }}
                  </h3>
                  <p class="text-base xs:text-lg sm:text-xl opacity-90 mt-1">
                    {{ programs[selectedProgram].subtitle }}
                  </p>
                </div>
              </div>
              <p class="text-sm xs:text-base sm:text-lg leading-relaxed mb-4 xs:mb-6 opacity-95">
                {{ programs[selectedProgram].description }}
              </p>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 xs:p-5 sm:p-6">
                <h4 class="text-lg xs:text-xl font-semibold mb-2">Our Impact:</h4>
                <p class="text-sm xs:text-base sm:text-lg">{{ programs[selectedProgram].impact }}</p>
              </div>
            </div>
            
            <!-- Donation Options -->
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 xs:p-5 sm:p-6 order-1 lg:order-2">
              <h4 class="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6 text-center">
                How You Can Help
              </h4>
              <div class="space-y-3 xs:space-y-4">
                <div v-for="need in programs[selectedProgram].needs" :key="need.item" 
                     class="bg-white/20 backdrop-blur-sm rounded-lg p-3 xs:p-4 flex justify-between items-center hover:bg-white/30 transition-colors cursor-pointer">
                  <div class="flex items-center min-w-0 flex-1">
                    <span class="text-lg xs:text-xl sm:text-2xl mr-2 xs:mr-3 flex-shrink-0">{{ need.icon }}</span>
                    <span class="font-medium text-xs xs:text-sm sm:text-base truncate">{{ need.item }}</span>
                  </div>
                  <span class="font-bold text-sm xs:text-base sm:text-lg lg:text-xl ml-2 flex-shrink-0">
                    {{ need.amount }}
                  </span>
                </div>
              </div>
              <button @click="scrollToPayment" 
                      class="w-full bg-white text-gray-900 py-2.5 xs:py-3 px-4 xs:px-6 rounded-lg font-bold text-sm xs:text-base sm:text-lg mt-4 xs:mt-6 hover:bg-gray-100 active:bg-gray-200 transition-colors transform hover:scale-105 active:scale-95">
                Donate to {{ programs[selectedProgram].title }}
              </button>
            </div>
          </div>
        </div>

        <!-- Non-Monetary Support -->
        <div class="bg-white rounded-lg shadow-lg p-4 xs:p-6 sm:p-8 mb-8 xs:mb-10 sm:mb-12 border border-gray-100">
          <h4 class="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-4 xs:mb-6 text-center leading-tight">
            Beyond Money: Other Ways to Support {{ programs[selectedProgram].title }}
          </h4>
          <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4">
            <div v-for="item in programs[selectedProgram].nonMonetary" :key="item"
                 class="bg-gray-50 rounded-lg p-3 xs:p-4 text-center border border-gray-200 hover:border-rose-300 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              <span class="text-gray-700 font-medium text-xs xs:text-sm sm:text-base leading-tight block">
                {{ item }}
              </span>
            </div>
          </div>
          <div class="text-center mt-4 xs:mt-6">
            <p class="text-gray-600 mb-3 xs:mb-4 text-sm xs:text-base">
              Ready to donate items or volunteer your time?
            </p>
            <button class="bg-rose-700 text-white px-4 xs:px-6 py-2.5 xs:py-3 rounded-lg font-semibold text-sm xs:text-base hover:bg-rose-800 active:bg-rose-900 transition-colors shadow-lg transform hover:scale-105 active:scale-95">
              Contact Us About Non-Monetary Support
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>



    <!-- Payment Section -->
    <section id="payment" class="relative bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Make Your <span class="text-rose-700">Impact</span>
          </h2>
        </div>

       
      </div>
    </section>

    <!-- Bank Details Section -->
    <section class="relative bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            <Icon name="i-lucide-credit-card" class="w-8 h-8 inline-block mr-3 text-rose-700" />
            Secure Bank Transfer
          </h2>
          <p class="text-lg text-gray-600">
            Transfer directly to our official account. All donations are tracked and receipted.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p class="font-semibold text-gray-900 mb-1">Account Name</p>
                <p class="text-lg font-mono text-gray-800">A Million Of Us</p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p class="font-semibold text-gray-900 mb-1">Bank Name</p>
                <p class="text-lg text-gray-800">Guaranty Trust Bank (GTB)</p>
              </div>
            </div>
            <div class="space-y-6">
              <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p class="font-semibold text-gray-900 mb-1">Account Number</p>
                <p class="text-xl md:text-2xl lg:text-2xl font-mono font-bold text-rose-700">Naira - 0585408744 <br/>
 Dollar - 0585408751 <br/>
 Pound - 0585408768 <br/>
 Euro - 0585408775
</p>
              </div>
            </div>
          </div>
          
          <div class="bg-rose-50 border border-rose-200 rounded-lg p-6 mt-8">
            <div class="flex items-start space-x-3">
              <Icon name="i-lucide-info" class="w-6 h-6 text-rose-700 mt-1 flex-shrink-0" />
              <div>
                <p class="font-semibold text-rose-800 mb-2">Important: Include this information</p>
                <ul class="text-sm text-rose-700 space-y-1">
                  <li>• Your full name and phone number in transfer description</li>
                  <li>• Email address for receipt and impact updates</li>
                  <li>• Program preference: {{ programs[selectedProgram].title }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- Success Stories Section -->
    <section id="stories" class="relative bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-8">
            Lives <span class="text-rose-700">Transformed</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Behind every donation is a story of transformation. Meet some of the children 
            whose lives have been changed through your generous support.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="story in successStories" :key="story.name" 
               class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
                <NuxtImg :src="story.image" :alt="story.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">{{ story.name }}</h3>
                <p class="text-rose-700 font-medium">{{ story.program }} • {{ story.age }}</p>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed mb-4">{{ story.story }}</p>
            <div class="text-sm text-rose-700 font-medium">{{ story.impact }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="relative bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Get in <span class="text-rose-700">Touch</span>
          </h2>
          <p class="text-lg text-gray-600">
            Questions about donating? We're here to help make your giving journey seamless.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Call Us -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 text-center">
            <div class="flex items-start mb-4">
              <Icon name="i-lucide-phone" class="w-8 h-8 text-rose-700" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
            <p class="text-gray-600 mb-2">+234-802-500-7333</p>
            <p class="text-sm text-gray-500">Official Line</p>
          </div>

          <!-- Email Us -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 text-center">
            <div class="flex items-start mb-4">
              <Icon name="i-lucide-mail" class="w-8 h-8 text-rose-700" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
            <p class="text-gray-600 mb-2">info.go@amufoundation.org</p>
            <p class="text-sm text-gray-500">Response within 24 hours</p>
          </div>

          <!-- Visit Us -->
          <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 text-center">
            <div class="flex items-start mb-4">
              <Icon name="i-lucide-map-pin" class="w-8 h-8 text-rose-700" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
            <p class="text-gray-600 mb-2">AMU Foundation HQ</p>
            <p class="text-sm text-gray-500">Suite 308, 3rd Floor
The Kings Opposite NAF Conference Centre
Ahmadu Bello Way
Abuja, Nigeria</p>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="border-t border-gray-200 mt-12 pt-8">
          <div class="text-center">
            <p class="text-gray-600 mb-6">Your donation is secure and makes a direct impact</p>
            <div class="flex flex-wrap justify-center items-center gap-8">
              <div class="flex items-center space-x-2">
                <Icon name="i-lucide-shield" class="w-5 h-5 text-green-600" />
                <span class="text-sm font-medium text-gray-700">Registered Non-profit</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="i-lucide-eye" class="w-5 h-5 text-blue-600" />
                <span class="text-sm font-medium text-gray-700">Full Transparency</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="i-lucide-users" class="w-5 h-5 text-purple-600" />
                <span class="text-sm font-medium text-gray-700">Community Driven</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="i-lucide-heart" class="w-5 h-5 text-rose-700" />
                <span class="text-sm font-medium text-gray-700">100% Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineOgImageComponent('AmuFoundation', {
  title: 'AMU Foundation',
  description: 'Donate to Empower Children through Education, Music and Shelter'
})

// Page meta - matching SEO approach
useHead({
  title: 'Donate - A Million Of Us Foundation | Transform Lives',
  meta: [
    { name: 'description', content: 'Support AMU Foundation\'s three pillars of impact: B&S Music School, KACIS Education Support, and Safe Haven Project. Transform lives across Nigeria through secure donations.' },
    { property: 'og:title', content: 'Donate - A Million Of Us Foundation' },
    { property: 'og:description', content: 'Transform lives through education, music, and shelter. Support AMU Foundation\'s mission across Nigeria.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.amufoundation.org/donate' }
  ],
})

useSeoMeta({
  title: 'Donate - A Million Of Us Foundation | Transform Lives',
  description: 'Support AMU Foundation\'s three pillars of impact: B&S Music School, KACIS Education Support, and Safe Haven Project. Transform lives across Nigeria through secure donations.',
  ogTitle: 'Donate - A Million Of Us Foundation',
  ogDescription: 'Transform lives through education, music, and shelter. Support AMU Foundation\'s mission across Nigeria.',
  ogImage: '/img/bs9.jpeg',
  canonical: 'https://www.amufoundation.org/donate',
})


// Reactive data
const selectedProgram = ref('music')

const programs = {
  music: {
    title: "B&S Music School",
    subtitle: "Nurturing Musical Talents",
    gradientClass: "bg-gradient-to-br from-rose-700 to-rose-800",
    icon: "i-lucide-music",
    description: "Every child has a melody waiting to be discovered. At B&S Music School, we transform raw talent into polished artistry, giving underprivileged children access to professional music education, instruments, and performance opportunities.",
    impact: "150+ children trained • annual performances • 8 scholarships awarded",
    needs: [
      { item: "Monthly tuition for one child", amount: "₦50,000", icon: "🎵" },
      { item: "Complete instrument set", amount: "₦100,000", icon: "🎸" },
      { item: "Music sheets & books", amount: "₦20,000", icon: "📚" },
      { item: "Recording studio session", amount: "₦25,000", icon: "🎤" }
    ],
    nonMonetary: [
      "Musical instruments (keyboards, guitars, violin)",
      "Audio equipment and speakers",
      "Music stands and storage",
      "Venue space for performances",
      "Refreshments for events",
      "Transportation for students",
      "Volunteer music teachers",
      "Sound engineering support"
    ]
  },
  kacis: {
    title: "KACIS Education Support",
    subtitle: "Keeping Children in School",
    gradientClass: "bg-gradient-to-br from-blue-600 to-blue-800",
    icon: "i-lucide-graduation-cap",
    description: "Education is the most powerful weapon to change the world. Through KACIS, we ensure that financial constraints never stop a bright mind from reaching its full potential. We sponsor school fees, provide learning materials, and offer mentorship.",
    impact: "200+ children sponsored • 95% completion rate",
    needs: [
      { item: "Annual school fees", amount: "₦35,000", icon: "🎓" },
      { item: "School uniform & supplies", amount: "₦12,000", icon: "👕" },
      { item: "Textbooks for one subject", amount: "₦8,000", icon: "📖" },
      { item: "Exam registration fees", amount: "₦5,000", icon: "📝" }
    ],
    nonMonetary: [
      "Textbooks and educational materials",
      "School uniforms and shoes",
      "Stationery and supplies", 
      "Laptops and tablets for learning",
      "Mentorship and tutoring",
      "Career guidance sessions",
      "Library books and resources",
      "Educational software licenses"
    ]
  },
  shelter: {
    title: "Safe Haven Project",
    subtitle: "Building Hope & Shelter",
    gradientClass: "bg-gradient-to-br from-green-600 to-green-800",
    icon: "i-lucide-home",
    description: "Every child deserves a safe place to call home. Our Safe Haven Project provides emergency shelter, builds transitional housing, and creates safe spaces where vulnerable children can heal, learn, and grow in a nurturing environment.",
    impact: "Proposed 1000+ people shelter• 24/7 care provided",
    needs: [
      { item: "Monthly shelter maintenance", amount: "₦50,000", icon: "🏠" },
      { item: "Food supplies for 20 children", amount: "₦30,000", icon: "🍽️" },
      { item: "Medical care & supplies", amount: "₦20,000", icon: "🏥" },
      { item: "Educational materials", amount: "₦15,000", icon: "📚" }
    ],
    nonMonetary: [
      "Building materials (cement, roofing, paint)",
      "Furniture (beds, tables, chairs)",
      "Kitchen equipment and appliances",
      "Bedding and linens",
      "Clothing donations",
      "Food supplies and ingredients",
      "Medical supplies and first aid kits",
      "Volunteer caregivers and counselors"
    ]
  }
}

const successStories = [
  {
    name: "Amina Abdullahi",
    age: "Age 14",
    program: "B&S Music School",
    image: "/img/bs4.jpg",
    story: "I never dreamed I could play piano until AMU believed in me. Now I perform at events and teach younger children. Music opened doors I never knew existed.",
    impact: "🎵 Now teaching 5 other children"
  },
  {
    name: "David Okafor", 
    age: "Age 16",
    program: "KACIS Education",
    image: "/img/bs5.jpg",
    story: "When my parents couldn't afford my school fees, I thought my dreams were over. KACIS gave me a second chance. I'm now preparing for university!",
    impact: "🎓 Graduating with honors this year"
  },
  {
    name: "Fatima Yusuf",
    age: "Age 10",
    program: "KACIS Education",
    image: "/img/bs3.webp",
    story: "I used to miss school because we couldn't afford the uniform. Now, with AMU's help, I attend every day and love learning new things.",
    impact: "📚 Top of her class in reading"
  },
]

// Methods
const scrollToPrograms = () => {
  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToStories = () => {
  document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToPayment = () => {
  document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })
}

// Lifecycle hooks
</script>

<style scoped>
/* Matching the exact styling from your main page */
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

.leckerli {
  font-family: 'Leckerli One', cursive;
}

.banner {
  position: relative;
  overflow: hidden;
}

/* Card hover effects matching your component */
.bg-white:hover {
  transform: translateY(-2px);
}

/* Custom input styling */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Shadow styling matching your component */
.shadow-\[0px_-14px_62px_-31px_\#c70036\] {
  box-shadow: 0px -14px 62px -31px #c70036;
}

/* Ensure full height video coverage */
video, .absolute.inset-0 {
  min-width: 100%;
  min-height: 100%;
}

/* Responsive grid adjustments */
@media (max-width: 768px) {
  .grid-cols-1 {
    gap: 1rem;
  }
}

/* Animation for pulse effect */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Button hover effects */
button:hover {
  transform: translateY(-1px);
}

/* Card scaling on hover */
.hover\:shadow-xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>