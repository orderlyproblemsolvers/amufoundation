<!-- pages/stories/events.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transform Lives Through <span class="text-rose-700">Action</span>
          </h1>
          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our signature programs are designed to empower individuals and strengthen communities through education, sports, and creative expression.
          </p>
        </div>
      </div>
    </section>

    <!-- Events Grid Section -->
    <section ref="eventsSection" class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          <!-- B&S Music School Card -->
          <div class="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 transform">
            <!-- Card Header -->
            <div class="h-48 bg-gradient-to-br from-rose-500 to-rose-700 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/10"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Icon name="i-lucide-music" class="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 class="text-xl sm:text-2xl font-bold">B&S Music School</h3>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 sm:p-8">
              <div class="space-y-6">
                <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Experience the transformative power of music in building communities and fostering creativity. Our comprehensive music program offers professional instruction across multiple instruments and vocal training.
                </p>

                <!-- Features Grid -->
                <div class="grid grid-cols-2 gap-3 sm:gap-4">
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-rose-700 mr-2 flex-shrink-0" />
                    Professional Instructors
                  </div>
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-rose-700 mr-2 flex-shrink-0" />
                    All Skill Levels
                  </div>
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-rose-700 mr-2 flex-shrink-0" />
                    Performance Opportunities
                  </div>
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-rose-700 mr-2 flex-shrink-0" />
                    Community Building
                  </div>
                </div>

                <!-- Event Details -->
                <div class="bg-rose-50 rounded-lg p-4 space-y-2 border border-rose-100">
                  <div class="flex items-center justify-between">
                    <span class="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Icon name="i-lucide-clock" class="w-4 h-4 text-rose-700" />
                      Duration
                    </span>
                    <span class="text-xs sm:text-sm font-bold text-rose-700">12 Weeks</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Icon name="i-lucide-users" class="w-4 h-4 text-rose-700" />
                      Age Group
                    </span>
                    <span class="text-xs sm:text-sm font-bold text-rose-700">All Ages</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3">
                  <button 
                    @click="scrollToRegistration('music')"
                    class="flex-1 bg-white border-2 border-rose-700 text-rose-700 px-4 py-2.5 rounded-lg font-medium hover:bg-rose-700 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Icon name="i-lucide-user-plus" class="w-4 h-4" />
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- AMU Sports Camp Card -->
          <div class="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 transform">
            <!-- Card Header -->
            <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/10"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Icon name="i-lucide-trophy" class="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 class="text-xl sm:text-2xl font-bold">AMU Sports Camp</h3>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 sm:p-8">
              <div class="space-y-6">
                <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Empower young athletes through comprehensive sports training and character development programs. Our camp focuses on building both physical excellence and strong moral character.
                </p>

                <!-- Features Grid -->
                <div class="grid grid-cols-2 gap-3 sm:gap-4">
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                    Expert Coaching
                  </div>
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                    Character Building
                  </div>
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                    Team Sports
                  </div>
                  <div class="flex items-center text-xs sm:text-sm text-gray-600">
                    <Icon name="i-lucide-check-circle" class="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                    Leadership Training
                  </div>
                </div>

                <!-- Event Details -->
                <div class="bg-blue-50 rounded-lg p-4 space-y-2 border border-blue-100">
                  <div class="flex items-center justify-between">
                    <span class="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Icon name="i-lucide-clock" class="w-4 h-4 text-blue-600" />
                      Duration
                    </span>
                    <span class="text-xs sm:text-sm font-bold text-blue-600">2 Weeks</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Icon name="i-lucide-users" class="w-4 h-4 text-blue-600" />
                      Age Group
                    </span>
                    <span class="text-xs sm:text-sm font-bold text-blue-600">Children & Youth</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3">

                  <button 
                    @click="scrollToRegistration('sports')"
                    class="flex-1 bg-white border-2 border-blue-600 text-blue-600 px-4 py-2.5 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Icon name="i-lucide-user-plus" class="w-4 h-4" />
                    Join Camp
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Registration Section -->
    <section id="registration" ref="registrationSection" class="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="i-lucide-clipboard-list" class="w-8 h-8 text-rose-700" />
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Event <span class="text-rose-700">Registration</span>
          </h2>
          <p class="text-sm sm:text-base text-gray-600">Register for upcoming AMU Foundation events</p>
        </div>

        <!-- Event Selection -->
        <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
          <label class="block text-sm font-semibold text-gray-900 mb-3">
            Select Event <span class="text-rose-700">*</span>
          </label>
          <div class="relative">
            <Icon name="i-lucide-calendar" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              v-model="selectedEventId"
              @change="onEventChange"
              required
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all appearance-none bg-white"
            >
              <option value="">Choose an event...</option>
              <option 
                v-for="event in events" 
                :key="event.id" 
                :value="event.id"
              >
                {{ event.name }} - {{ formatDate(event.date) }}
              </option>
            </select>
            <Icon name="i-lucide-chevron-down" class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <!-- Event Details -->
        <div v-if="selectedEvent" class="bg-rose-50 rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-rose-100">
          <div class="flex items-start gap-3 sm:gap-4">
            <div class="w-12 h-12 bg-rose-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="i-lucide-calendar-check" class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ selectedEvent.name }}</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">{{ selectedEvent.description }}</p>
              <p class="text-xs sm:text-sm text-rose-700 font-semibold flex items-center gap-1">
                <Icon name="i-lucide-clock" class="w-4 h-4" />
                Event Date: {{ formatDate(selectedEvent.date) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Registration Form -->
        <form  v-if="selectedEvent" @submit.prevent="submitRegistrationF" class="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
          <div class="space-y-5 sm:space-y-6">
            <div v-for="field in selectedEvent.customFields" :key="field.id">
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                {{ field.label }}
                <span v-if="field.required" class="text-rose-700">*</span>
              </label>

              <!-- Text Input -->
              <input
                v-if="field.type === 'text' || field.type === 'email' || field.type === 'number' || field.type === 'tel'"
                v-model="registrationForm[field.id]"
                :type="field.type"
                :required="field.required"
                :placeholder="`Enter ${field.label.toLowerCase()}`"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
              >

              <!-- Textarea -->
              <textarea
                v-else-if="field.type === 'textarea'"
                v-model="registrationForm[field.id]"
                :required="field.required"
                rows="4"
                :placeholder="`Enter ${field.label.toLowerCase()}`"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all resize-none"
              ></textarea>

              <!-- Select Dropdown -->
              <select
                v-else-if="field.type === 'select'"
                v-model="registrationForm[field.id]"
                :required="field.required"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all appearance-none bg-white"
              >
                <option value="">Choose an option...</option>
                <option 
                  v-for="option in field.options" 
                  :key="option" 
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>

              <!-- Checkbox -->
              <div v-else-if="field.type === 'checkbox'" class="flex items-center">
                <input
                  v-model="registrationForm[field.id]"
                  type="checkbox"
                  :required="field.required"
                  class="rounded border-gray-300 text-rose-700 focus:ring-rose-700 w-5 h-5 cursor-pointer"
                >
                <span class="ml-3 text-sm text-gray-700">Yes, I agree</span>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="mt-8 pt-6 border-t border-gray-100">
            <button
              type="submit"
              :disabled="submitting"
              class="w-full bg-rose-700 hover:bg-rose-800 text-white py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              <Icon v-if="submitting" name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
              <Icon v-else name="i-lucide-send" class="w-5 h-5" />
              <span>{{ submitting ? 'Submitting...' : 'Register for Event' }}</span>
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div v-if="submissionSuccess" class="bg-white rounded-lg shadow-lg border border-rose-200 p-6 sm:p-8 text-center">
          <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="i-lucide-check-circle" class="w-10 h-10 text-rose-700" />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
          <p class="text-sm sm:text-base text-gray-600 mb-6">Thank you for registering for the event. We'll contact you with more details soon.</p>
          <button
            @click="submissionSuccess = false"
            class="bg-rose-700 hover:bg-rose-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            Register for Another Event
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { $firestore } = useNuxtApp()
const { events, loading, error, fetchEvents } = useEvents()
const { submitRegistration, loading: submitting } = useRegistrations()

// SEO Meta
useHead({
  title: 'Events & Programs - AMU Foundation',
  meta: [
    { name: 'description', content: 'Join AMU Foundation events including B&S Music School and AMU Sports Camp. Empowering communities through music education and sports training programs.' },
    { name: 'keywords', content: 'AMU Foundation, events, music school, sports camp, community programs, education' }
  ],
  link: [
    { rel: 'canonical', href: 'https://amufoundation.org/stories/events' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AMU Foundation",
        "url": "https://amufoundation.org",
        "logo": "https://amufoundation.org/img/amulogo.png",
      })
    }
  ],
})

// Refs
const eventsSection = ref(null)
const registrationSection = ref(null)
const selectedEventId = ref('')
const selectedEvent = ref(null)
const registrationForm = ref({})
const submissionSuccess = ref(false)

// Methods
const scrollToEvents = () => {
  if (eventsSection.value) {
    eventsSection.value.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToRegistration = (eventType) => {
  if (registrationSection.value) {
    registrationSection.value.scrollIntoView({ behavior: 'smooth' })
  }
}


const registerForEvent = (eventType) => {
  if (eventType === 'music') {
    navigateTo('/register/music-school')
  } else if (eventType === 'sports') {
    navigateTo('/register/sports-camp')
  }
}

const onEventChange = async () => {
  if (selectedEventId.value) {
    const event = events.value.find(e => e.id === selectedEventId.value)
    selectedEvent.value = event
    resetRegistrationForm()
  } else {
    selectedEvent.value = null
  }
}

const resetRegistrationForm = () => {
  registrationForm.value = {}
  if (selectedEvent.value && selectedEvent.value.customFields) {
    selectedEvent.value.customFields.forEach(field => {
      registrationForm.value[field.id] = field.type === 'checkbox' ? false : ''
    })
  }
}

const submitRegistrationF = async () => {
  try {
    const registrationId = await submitRegistration(selectedEventId.value, registrationForm.value)
    if (registrationId) {
      submissionSuccess.value = true
      resetRegistrationForm()
      selectedEventId.value = ''
      selectedEvent.value = null
      
      // Scroll to success message
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
      
      // Reset success message after 10 seconds
      setTimeout(() => {
        submissionSuccess.value = false
      }, 10000)
    }
  } catch (err) {
    console.error('Error submitting registration:', err)
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Fetch events on component mount
onMounted(() => {
  fetchEvents()
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>