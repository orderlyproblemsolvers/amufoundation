<!-- pages/register/[program].vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="!program" class="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-3">Program not found</h1>
      <NuxtLink to="/stories/events" class="text-rose-700 font-medium">Back to Events</NuxtLink>
    </div>

    <template v-else>
      <!-- Header -->
      <section class="bg-white border-b border-gray-100">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <div :class="`w-16 h-16 ${program.theme.bgLighter} rounded-full flex items-center justify-center mx-auto mb-4`">
            <Icon :name="program.icon" :class="`w-8 h-8 ${program.theme.text}`" />
          </div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Register for <span :class="program.theme.text">{{ program.name }}</span>
          </h1>
          <p class="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            {{ program.description }}
          </p>
        </div>
      </section>

      <section class="py-10 sm:py-16">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Form -->
          <form v-if="!submissionSuccess" @submit.prevent="onSubmit" class="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100 space-y-5">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  First Name <span class="text-rose-700">*</span>
                </label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  placeholder="Enter first name"
                  :class="inputClass"
                >
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name <span class="text-rose-700">*</span>
                </label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  placeholder="Enter last name"
                  :class="inputClass"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Date of Birth <span class="text-rose-700">*</span>
              </label>
              <input
                v-model="form.dob"
                type="date"
                required
                :max="maxDob"
                :class="inputClass"
              >
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Email <span class="text-rose-700">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  :class="inputClass"
                >
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number <span class="text-rose-700">*</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="e.g. 080XXXXXXXX"
                  :class="inputClass"
                >
              </div>
            </div>

            <!-- Terms -->
            <div class="flex items-start gap-3 pt-2">
              <input
                v-model="form.termsAccepted"
                type="checkbox"
                required
                id="terms"
                class="mt-1 rounded border-gray-300 text-rose-700 focus:ring-rose-700 w-5 h-5 cursor-pointer flex-shrink-0"
              >
              <label for="terms" class="text-sm text-gray-700 leading-relaxed">
                I have read and agree to AMU Foundation's
                <NuxtLink to="/policies/data-use" target="_blank" class="font-semibold underline text-rose-700 hover:text-rose-800">
                  Terms of Data Use
                </NuxtLink>,
                and I consent to my information being collected and processed for the purpose of this registration.
                <span class="text-rose-700">*</span>
              </label>
            </div>

            <div class="pt-4">
              <button
                type="submit"
                :disabled="submitting"
                :class="`w-full ${program.theme.bg} ${program.theme.bgHover} text-white py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`"
              >
                <Icon v-if="submitting" name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
                <Icon v-else name="i-lucide-send" class="w-5 h-5" />
                <span>{{ submitting ? 'Submitting...' : 'Complete Registration' }}</span>
              </button>
            </div>
          </form>

          <!-- Success -->
          <div v-else class="bg-white rounded-lg shadow-lg border border-gray-100 p-6 sm:p-8 text-center">
            <div :class="`w-16 h-16 ${program.theme.bgLighter} rounded-full flex items-center justify-center mx-auto mb-4`">
              <Icon name="i-lucide-check-circle" :class="`w-10 h-10 ${program.theme.text}`" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
            <p class="text-sm sm:text-base text-gray-600 mb-6">
              Thank you for registering for {{ program.name }}. We'll be in touch with more details soon.
            </p>
            <NuxtLink
              to="/stories/events"
              :class="`inline-flex items-center gap-2 ${program.theme.bg} ${program.theme.bgHover} text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200`"
            >
              Back to Events
            </NuxtLink>
          </div>

        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()
const { getProgram } = usePrograms()
const { submitRegistration, loading: submitting } = useRegistrations()

const program = computed(() => getProgram(route.params.program))

if (!program.value) {
  throw createError({ statusCode: 404, statusMessage: 'Program not found' })
}

useHead({
  title: computed(() => program.value ? `Register - ${program.value.name} - AMU Foundation` : 'Register')
})

const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all'

const maxDob = new Date().toISOString().split('T')[0]

const form = ref({
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  phone: '',
  termsAccepted: false
})

const submissionSuccess = ref(false)

const onSubmit = async () => {
  const id = await submitRegistration(program.value.collectionKey, { ...form.value })
  if (id) {
    submissionSuccess.value = true
    form.value = { firstName: '', lastName: '', dob: '', email: '', phone: '', termsAccepted: false }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>