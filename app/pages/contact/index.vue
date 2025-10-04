<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Success/Error Messages -->
    <div v-if="showMessage" class="fixed top-4 right-4 z-50">
      <div 
        :class="[
          'p-4 rounded-lg shadow-lg transition-all duration-500 transform',
          messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        ]"
      >
        <div class="flex items-center space-x-2">
          <Icon 
            :name="messageType === 'success' ? 'i-lucide-check-circle' : 'i-lucide-x-circle'" 
            class="w-5 h-5" 
          />
          <span>{{ message }}</span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center py-12">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Get In Touch With <br />
            <span class="text-rose-700">AMU Foundation</span>
          </h1>
          <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. Whether
            you want to learn more about our programs, volunteer, or partner
            with us, we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form Section -->
    <section class="relative bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <p class="text-lg text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're
                committed to responding promptly to all inquiries.
              </p>
            </div>

            <!-- Contact Details Cards -->
            <div class="space-y-6">
              <!-- Address -->
              <div
                class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <Icon
                      name="i-lucide-map-pin"
                      class="w-8 h-8 text-rose-700"
                    />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Our Location
                    </h3>
                    <p class="text-gray-600">
                      The Kings Opposite NAF Conference Centre <br/> Ahmadu Bello Way
                      <br/>Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div
                class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <Icon name="i-lucide-phone" class="w-8 h-8 text-rose-700" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Phone Number
                    </h3>
                    <p class="text-gray-600">
                      +234 (0)802 500 7333
                    </p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div
                class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <Icon name="i-lucide-mail" class="w-8 h-8 text-rose-700" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Email Address
                    </h3>
                    <p class="text-gray-600">
                      info.go@amufoundation.org
                    </p>
                  </div>
                </div>
              </div>

              <!-- Office Hours -->
              <div
                class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0">
                    <Icon name="i-lucide-clock" class="w-8 h-8 text-rose-700" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                      Office Hours
                    </h3>
                    <p class="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h2>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Field -->
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              <!-- Email Field -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                />
              </div>

              <!-- Subject Field -->
              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  v-model="formData.subject"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select a subject</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="program-information">
                    Program Information
                  </option>
                  <option value="volunteer-opportunity">
                    Volunteer Opportunity
                  </option>
                  <option value="partnership">Partnership</option>
                  <option value="donation">Donation</option>
                  <option value="media-inquiry">Media Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message Field -->
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  :disabled="isSubmitting"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200 resize-vertical disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-rose-700 text-white font-semibold py-4 px-6 rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon
                    v-if="!isSubmitting"
                    name="i-lucide-send"
                    class="w-5 h-5"
                  />
                  <Icon
                    v-if="isSubmitting"
                    name="i-lucide-loader-2"
                    class="w-5 h-5 animate-spin"
                  />
                  <span>{{
                    isSubmitting ? "Sending..." : "Send Message"
                  }}</span>
                </button>
              </div>

              <p class="text-sm text-gray-500 text-center">
                * Required fields. We typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="relative bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 text-center">
        <div class="bg-white rounded-lg shadow-lg p-12 border border-gray-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in creating opportunities for children through education,
            sports, and music. Together, we can ensure that talent opens doors —
            not privilege.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <NuxtLink
              to="/stories/events"
              class="inline-flex items-center justify-center px-8 py-4 bg-rose-700 text-white font-semibold rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 transition-colors duration-200 space-x-2"
            >
              <Icon name="i-lucide-calendar" class="w-5 h-5" />
              <span>View Events</span>
            </NuxtLink>
            <NuxtLink
              to="/donate"
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-700 font-semibold rounded-lg border-2 border-rose-700 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 transition-colors duration-200 space-x-2"
            >
              <Icon name="i-lucide-heart" class="w-5 h-5" />
              <span>Support Us</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
defineOgImageComponent('AmuFoundation', {
  title: 'AMU Foundation',
  description: 'Partnering to create opportunities for children through education, sports, and music'
})

const { $firestore } = useNuxtApp()

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// UI state
const isSubmitting = ref(false)
const showMessage = ref(false)
const message = ref('')
const messageType = ref('success')

// Handle form submission
const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    
    // Basic validation
    if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
      showNotification('Please fill in all required fields', 'error')
      return
    }

    // Prepare submission data
    const submissionData = {
      name: formData.value.name.trim(),
      email: formData.value.email.trim().toLowerCase(),
      subject: formData.value.subject,
      message: formData.value.message.trim(),
      status: 'new',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }

    // Submit to Firebase
    await addDoc(collection($firestore, 'contact_submissions'), submissionData)

    // Success - reset form and show message
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success')
    resetForm()

  } catch (error) {
    console.error('Submission error:', error)
    showNotification('An unexpected error occurred. Please try again.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

// Reset form
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

// Show notification
const showNotification = (msg, type) => {
  message.value = msg
  messageType.value = type
  showMessage.value = true
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    showMessage.value = false
  }, 5000)
}

// SEO Meta
useHead({
  title: "Contact Us - AMU Foundation",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with AMU Foundation. Contact us for inquiries about our programs, volunteer opportunities, partnerships, and more. We're here to help create opportunities for children.",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],

})

useSeoMeta({
  title: "Contact Us - AMU Foundation",
  description:
    "Get in touch with AMU Foundation. Contact us for inquiries about our programs, volunteer opportunities, partnerships, and more. We're here to help create opportunities for children.",
  ogType: "website",
  ogImage: "/img/bs9.jpeg",
  ogUrl: "https://www.amufoundation.org/contact",
  twitterCard: "summary_large_image",
  twitterSite: "@amufoundation",
  twitterCreator: "@amufoundation",
  twitterImage: "/img/bs9.jpeg",
  keywords: [
    "AMU Foundation",
    "contact",
    "inquiries",
    "volunteer",
    "partnerships",
    "donations",
    "support",
    "children empowerment",
    "education",
    "sports",
    "music",
  ],
})
</script>