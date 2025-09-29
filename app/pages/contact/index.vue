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
                      +234 (0)91 347 91980
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

    <!-- Submission Stats (only visible to authenticated users) -->
    <section v-if="user" class="relative bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
        <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
            Submission Statistics
          </h2>
          
          <div v-if="stats" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Total Submissions -->
            <div class="bg-blue-50 rounded-lg p-6 text-center">
              <Icon name="i-lucide-inbox" class="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 class="text-2xl font-bold text-blue-600">{{ stats.total_submissions }}</h3>
              <p class="text-sm text-blue-700">Total Submissions</p>
            </div>
            
            <!-- New Submissions -->
            <div class="bg-yellow-50 rounded-lg p-6 text-center">
              <Icon name="i-lucide-bell" class="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <h3 class="text-2xl font-bold text-yellow-600">{{ stats.new_submissions }}</h3>
              <p class="text-sm text-yellow-700">New Submissions</p>
            </div>
            
            <!-- This Week -->
            <div class="bg-green-50 rounded-lg p-6 text-center">
              <Icon name="i-lucide-calendar-days" class="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 class="text-2xl font-bold text-green-600">{{ stats.week_submissions }}</h3>
              <p class="text-sm text-green-700">This Week</p>
            </div>
            
            <!-- This Month -->
            <div class="bg-purple-50 rounded-lg p-6 text-center">
              <Icon name="i-lucide-calendar-range" class="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 class="text-2xl font-bold text-purple-600">{{ stats.month_submissions }}</h3>
              <p class="text-sm text-purple-700">This Month</p>
            </div>
          </div>

          <div v-else class="text-center text-gray-500">
            Loading statistics...
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
              to="/events"
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
import { ref, onMounted } from "vue";

// Assuming you have Supabase client available
const supabase = useSupabaseClient();
const user = useSupabaseUser();

// Form data
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const showMessage = ref(false);
const message = ref("");
const messageType = ref("success"); // 'success' or 'error'

// Show message function
const showNotification = (msg, type = "success") => {
  message.value = msg;
  messageType.value = type;
  showMessage.value = true;
  
  setTimeout(() => {
    showMessage.value = false;
  }, 5000);
};

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Submit to Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.value.name,
          email: formData.value.email,
          subject: formData.value.subject,
          message: formData.value.message
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    // Reset form on success
    formData.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    showNotification("Thank you for your message! We will get back to you soon.", "success");
    

  } catch (error) {
    console.error('Error submitting form:', error);
    showNotification("There was an error sending your message. Please try again.", "error");
  } finally {
    isSubmitting.value = false;
  }
};




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
});

</script>