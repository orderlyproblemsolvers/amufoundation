<template>
  <section class="relative bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-8">
          Meet Our <span class="text-rose-700">Team</span>
        </h1>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Meet The Team That Have Steered AMU Foundation In The Right Direction
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Team Member Card -->
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group"
        >
          <!-- Profile Image -->
          <div class="flex justify-center mb-6">
            <div class="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
              <NuxtImg
                v-if="member.image"
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover"
                width="128"
                height="128"
                format="webp"
                quality="85"
                loading="lazy"
                placeholder
                @error="handleImageError"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-rose-700 text-white text-2xl font-bold"
              >
                {{ getInitials(member.name) }}
              </div>
            </div>
          </div>

          <!-- Member Info -->
          <div class="text-center mb-4">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ member.name }}
            </h3>
            <p class="text-rose-700 font-medium text-sm mb-3">
              {{ member.position }}
            </p>
          </div>

          <!-- Description -->
          <p class="text-gray-600 text-sm mb-4 line-clamp-4">
            {{ member.description }}
          </p>

          <!-- Expertise Tags -->
          <div v-if="member.expertise && member.expertise.length > 0" class="mb-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in member.expertise.slice(0, 3)"
                :key="skill"
                class="inline-block bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium"
              >
                {{ skill }}
              </span>
              <span
                v-if="member.expertise.length > 3"
                class="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
              >
                +{{ member.expertise.length - 3 }} more
              </span>
            </div>
          </div>

          <!-- Skills Tags -->
          <div v-else-if="member.skills && member.skills.length > 0" class="mb-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in member.skills.slice(0, 3)"
                :key="skill"
                class="inline-block bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium"
              >
                {{ skill }}
              </span>
              <span
                v-if="member.skills.length > 3"
                class="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
              >
                +{{ member.skills.length - 3 }} more
              </span>
            </div>
          </div>

          <!-- Background Info -->
          <div class="text-xs text-gray-500 mb-4">
            <div v-if="member.background" class="mb-1">
              <Icon name="i-lucide-briefcase" class="w-3 h-3 inline mr-1" />
              {{ member.background }}
            </div>
            <div v-if="member.origin" class="mb-1">
              <Icon name="i-lucide-map-pin" class="w-3 h-3 inline mr-1" />
              {{ member.origin }}
            </div>
            <div v-if="member.location && member.location !== member.origin">
              <Icon name="i-lucide-globe" class="w-3 h-3 inline mr-1" />
              Currently in {{ member.location }}
            </div>
          </div>

          <!-- Read More Button -->
          <div class="text-center">
            <button
              @click="openModal(member)"
              class="inline-flex items-center text-rose-700 hover:text-rose-800 font-medium text-sm transition-colors duration-200"
            >
              Read More
              <Icon name="i-lucide-arrow-right" class="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedMember"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6">
          <!-- Modal Header -->
          <div class="flex items-start justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div class="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <NuxtImg
                  v-if="selectedMember.image"
                  :src="selectedMember.image"
                  :alt="selectedMember.name"
                  class="w-full h-full object-cover"
                  width="80"
                  height="80"
                  format="webp"
                  quality="90"
                  loading="lazy"
                  placeholder
                  @error="handleImageError"
                />
                <div
                  v-else
                  class="w-full h-full flex items-center justify-center bg-rose-700 text-white text-lg font-bold"
                >
                  {{ getInitials(selectedMember.name) }}
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">
                  {{ selectedMember.name }}
                </h3>
                <p class="text-rose-700 font-medium">
                  {{ selectedMember.position }}
                </p>
              </div>
            </div>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Icon name="i-lucide-x" class="w-6 h-6" />
            </button>
          </div>

          <!-- Modal Content -->
          <div class="space-y-6">
            <!-- Description -->
            <div v-if="selectedMember.description">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">About</h4>
              <p class="text-gray-600 leading-relaxed">
                {{ selectedMember.description }}
              </p>
            </div>

            <!-- Background & Focus -->
            <div class="grid md:grid-cols-2 gap-6">
              <div v-if="selectedMember.background">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Background</h4>
                <p class="text-gray-600">{{ selectedMember.background }}</p>
                <p v-if="selectedMember.focus" class="text-gray-600 mt-2">
                  <strong>Focus:</strong> {{ selectedMember.focus }}
                </p>
              </div>

              <div v-if="selectedMember.education && selectedMember.education.length > 0">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Education</h4>
                <ul class="text-gray-600 space-y-1">
                  <li v-for="edu in selectedMember.education" :key="edu" class="flex items-start">
                    <Icon name="i-lucide-graduation-cap" class="w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0" />
                    {{ edu }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Skills/Expertise -->
            <div v-if="(selectedMember.expertise && selectedMember.expertise.length > 0) || (selectedMember.skills && selectedMember.skills.length > 0)">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">
                {{ selectedMember.expertise ? 'Expertise' : 'Skills' }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in (selectedMember.expertise || selectedMember.skills)"
                  :key="skill"
                  class="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Work Experience -->
            <div v-if="selectedMember.work_experience && selectedMember.work_experience.length > 0">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Work Experience</h4>
              <ul class="text-gray-600 space-y-2">
                <li v-for="exp in selectedMember.work_experience" :key="exp" class="flex items-start">
                  <Icon name="i-lucide-briefcase" class="w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0" />
                  {{ exp }}
                </li>
              </ul>
            </div>

            <!-- Achievements -->
            <div v-if="selectedMember.achievements && selectedMember.achievements.length > 0">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
              <ul class="text-gray-600 space-y-2">
                <li v-for="achievement in selectedMember.achievements" :key="achievement" class="flex items-start">
                  <Icon name="i-lucide-award" class="w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0" />
                  {{ achievement }}
                </li>
              </ul>
            </div>

            <!-- Volunteer Work -->
            <div v-if="selectedMember.volunteer_work && selectedMember.volunteer_work.length > 0">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Volunteer Work</h4>
              <ul class="text-gray-600 space-y-2">
                <li v-for="volunteer in selectedMember.volunteer_work" :key="volunteer" class="flex items-start">
                  <Icon name="i-lucide-heart" class="w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0" />
                  {{ volunteer }}
                </li>
              </ul>
            </div>

            <!-- Activities -->
            <div v-if="selectedMember.activities && selectedMember.activities.length > 0">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Activities</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="activity in selectedMember.activities"
                  :key="activity"
                  class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {{ activity }}
                </span>
              </div>
            </div>

            <!-- Organizations -->
            <div v-if="selectedMember.organizations && selectedMember.organizations.length > 0">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Organizations</h4>
              <ul class="text-gray-600 space-y-2">
                <li v-for="org in selectedMember.organizations" :key="org" class="flex items-start">
                  <Icon name="i-lucide-building" class="w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0" />
                  {{ org }}
                </li>
              </ul>
            </div>

            <!-- Success Stories -->
            <div v-if="selectedMember.success_stories && selectedMember.success_stories.length > 0">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Success Stories</h4>
              <ul class="text-gray-600 space-y-2">
                <li v-for="story in selectedMember.success_stories" :key="story" class="flex items-start">
                  <Icon name="i-lucide-star" class="w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0" />
                  {{ story }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Team data from the JSON
const teamMembers = ref([
  {
    "name": "Terfa Timothy Addingi",
    "position": "Founder, Designer, Creator, Innovator and Inventor",
    "image": "/img/terfa.jpg",
    "background": "Industrial Designer",
    "description": "A dedicated and result-driven Industrial Designer with a successful background in achieving profitable business growth through product development and brand promotion.",
    "expertise": [
      "Product Design",
      "Mechanics",
      "Fabrication",
      "CAD Modeling",
      "Computer-Aided Design",
      "Digital Manufacturing Techniques",
      "Mechatronics"
    ],
    "focus": "Eco-friendly product development with consideration for material use, production process, and environmental impact",
    "activities": [
      "Tutoring",
      "Mentoring",
      "Training",
      "Impacting",
      "Equipping"
    ]
  },
  {
    "name": "Samantha Iyunade Addingi",
    "position": "Executive Director",
    "image": "/img/samantha.jpg",
    "background": "Educator, Writer, Justice Advocate & Entrepreneur",
    "description": "Samantha Iyunade Addingi is a dynamic and visionary leader in the fields of education, philanthropy, and entrepreneurship. As an accomplished educator, writer, and justice advocate, she has dedicated her career to empowering young people through innovative educational programs and community initiatives.",
    "education": [
      "Bachelor's degree in Mathematics from University of Jos",
      "Masters degree in Multidisciplinary Studies in Education from State University of New York, College at Buffalo"
    ],
    "organizations": [
      "Managing Director and CEO of B&S Educational Services",
      "MD/CEO of B&S Music School",
      "Executive Director of A Million of Us Foundation",
      "Education Consultant"
    ],
    "expertise": [
      "Educational Leadership",
      "International Student Placement",
      "Arts & Music Education",
      "Philanthropic Management",
      "Youth Empowerment",
      "Global Partnerships"
    ],
    "focus": "Fostering access to quality education and cultural enrichment through innovative educational programs",
    "achievements": [
      "Established multiple B&S Education study centers across Nigeria",
      "Partnerships with over 50 prestigious international institutions across UK, US, Canada, Australia, Hungary, Antigua, and various European countries",
      "Successfully placed countless Nigerian students in international programs"
    ],
    "success_stories": [
      "Organized over four annual editions of B&S Music School concerts featuring young performers",
      "Drew participation from more than 30 secondary schools in Nigeria for music concerts",
      "Established multiple B&S Education study centers providing vital resources for academic development",
      "Led philanthropic efforts supporting justice, peace, and community welfare through A Million of Us Foundation"
    ],
    "activities": [
      "Student mentoring",
      "International education consulting",
      "Music education promotion",
      "Community development"
    ],
    "origin": "Nigeria",
    "personal": "Happily married with three beautiful children"
  },
  {
    "name": "Nnamdi Okoye",
    "position": "Banker, Businessman, Consultant, Trainer, and Life Coach",
    "image": "/img/nnamdi.jpg",
    "background": "18 years in financial sector",
    "work_experience": [
      "Diamond Bank Plc",
      "Guaranty Trust Bank Plc",
      "Dynamone Consults (Lead Consultant)",
      "Denis Hotels Ltd (Personal Consultant to Chairman)"
    ],
    "skills": [
      "Banking operations",
      "Audit",
      "Marketing",
      "Customer Care",
      "Relationship Management",
      "Credit Management",
      "Staff Supervision",
      "General Administration",
      "Human Resources Management",
      "Emotional Intelligence",
      "Conflict Resolution",
      "Critical Thinking",
      "Problem Solving"
    ],
    "description": "Nnamdi Okoye is a banker, businessman, consultant, trainer, and life coach. For 18 years, Nnamdi has worked largely in the financial sector where his work experience was birthed in Diamond Bank Plc and later Guaranty Trust Bank Plc.",
    "passions": [
      "Positively impacting younger people",
      "Relationship and marital counselling",
      "Sexual rights",
      "Human rights issues"
    ],
    "church_service": [
      "Youth Coordinator and mentor at Foundation Faith Church (Salem Cathedral)",
      "Church Council member",
      "Various capacities at The Capital Assembly, Abuja"
    ],
    "education": ["Currently studying MBA at University of South Wales"],
    "certifications": [
      "Project Management",
      "Facility Management",
      "Renewable Energy"
    ]
  },
  {
    "name": "Anne Aburime",
    "position": "Operations Head at Respire",
    "image": "/img/anne.jpg",
    "background": "Non-profit executive and humanitarian worker",
    "current_role": "Governing executive and Operations Head at Respire (non-profit based in Abuja Nigeria)",
    "description": "Miss Anne Aburime has distinguished herself as a giant amongst men, with her selfless and relentless desire to meet the needs of the underprivileged in society, as well as making a difference in the life of everyone she comes across.",
    "projects": [
      "Renovation of classrooms in Bama/Gwoza IDP camp in Durumi Abuja",
      "Various educational and developmental projects in Abuja"
    ],
    "experience": "Advisory and coordinators role with several charities",
    "achievements": [
      "NYSC FCT state award for being one of the most outstanding corp members during 2012/2013 service year",
      "Commendations from local chieftains and corporate bodies"
    ],
    "characteristics": [
      "Patriot",
      "Entrepreneur",
      "Advocate for gender equality",
      "Women empowerment advocate"
    ],
    "focus": "Meeting needs of underprivileged in society and community development"
  },
  {
    "name": "Dr. Nneka Cos-Okpalla",
    "position": "Health Care Management & Policy Consultant",
    "image": "/img/nneka.jpg",
    "background": "Harvard trained consultant",
    "description": "Dr. Nneka Cos-Okpalla is a Harvard trained Health Care Management & Policy Consultant. She is an alumnus of the University of Jos Nigeria, Texas A & M University and Harvard University.",
    "education": [
      "University of Jos Nigeria",
      "Texas A & M University",
      "Harvard University"
    ],
    "current_work": "Works for United States federal government",
    "experience": "Various positions in private healthcare sector and academia",
    "passion": "Education as a tool to lift poverty shackles and bridge socioeconomic inequalities",
    "origin": "Native of Anambra State, Nigeria",
    "volunteer_work": [
      "Mentoring at-risk kids",
      "Helping elderly navigate Health Care System in America"
    ],
    "location": "United States of America"
  },
])

const selectedMember = ref(null)

const openModal = (member) => {
  selectedMember.value = member
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedMember.value = null
  // Restore body scroll
  document.body.style.overflow = 'auto'
}

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const handleImageError = (event) => {
  // Hide the broken image and show initials instead
  event.target.style.display = 'none'
  event.target.parentNode.innerHTML = `
    <div class="w-full h-full flex items-center justify-center bg-rose-700 text-white text-2xl font-bold">
      ${getInitials(event.target.alt)}
    </div>
  `
}

// Clean up on component unmount
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>