<template>
  <div class="relative bg-gray-50">
    <!-- Hero Donation Section -->
    <section class="relative bg-gray-50 py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main Donation Hero -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Every Child Deserves a 
            <span class="text-rose-700">Chance</span> to Shine
          </h1>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your donation doesn't just fund programs—it unlocks potential. It turns dreams into reality. 
            It transforms "I can't" into "I can" for children who simply need someone to believe in them.
          </p>
          <div class="bg-rose-700 text-white px-6 py-3 rounded-lg inline-block font-semibold text-lg mb-8">
            🎯 Goal: $50,000 to reach 1,000 more children this year
          </div>
        </div>

        <!-- Donation Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <!-- $25 Donation -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group hover:border-rose-300">
            <div class="text-center">
              <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-700 transition-colors duration-300">
                <Icon name="i-lucide-music" class="w-8 h-8 text-rose-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div class="text-3xl font-bold text-rose-700 mb-2">$25</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Music Lesson</h3>
              <p class="text-gray-600 text-sm mb-6">
                Provides one month of music lessons for a child, including instrument access and sheet music.
              </p>
              <button class="w-full bg-rose-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-rose-800 transition-colors duration-300">
                Donate $25
              </button>
            </div>
          </div>

          <!-- $50 Donation -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group hover:border-rose-300">
            <div class="text-center">
              <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-700 transition-colors duration-300">
                <Icon name="i-lucide-trophy" class="w-8 h-8 text-rose-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div class="text-3xl font-bold text-rose-700 mb-2">$50</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Sports Equipment</h3>
              <p class="text-gray-600 text-sm mb-6">
                Funds sports equipment for a team, enabling children to participate in football, basketball, or tennis.
              </p>
              <button class="w-full bg-rose-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-rose-800 transition-colors duration-300">
                Donate $50
              </button>
            </div>
          </div>

          <!-- $100 Donation -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group hover:border-rose-300 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-rose-700 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
              POPULAR
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-700 transition-colors duration-300">
                <Icon name="i-lucide-graduation-cap" class="w-8 h-8 text-rose-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div class="text-3xl font-bold text-rose-700 mb-2">$100</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Skills Training</h3>
              <p class="text-gray-600 text-sm mb-6">
                Sponsors comprehensive skills acquisition and training program for one child for 3 months.
              </p>
              <button class="w-full bg-rose-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-rose-800 transition-colors duration-300">
                Donate $100
              </button>
            </div>
          </div>

          <!-- $250 Donation -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group hover:border-rose-300">
            <div class="text-center">
              <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-700 transition-colors duration-300">
                <Icon name="i-lucide-star" class="w-8 h-8 text-rose-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div class="text-3xl font-bold text-rose-700 mb-2">$250</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Full Program</h3>
              <p class="text-gray-600 text-sm mb-6">
                Provides complete education, sports, and music program access for one child for 6 months.
              </p>
              <button class="w-full bg-rose-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-rose-800 transition-colors duration-300">
                Donate $250
              </button>
            </div>
          </div>
        </div>

        <!-- Custom Amount Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Choose Your <span class="text-rose-700">Impact</span>
            </h2>
            <p class="text-gray-600">
              Every amount makes a difference. Enter your custom donation amount below.
            </p>
          </div>
          
          <div class="max-w-md mx-auto">
            <div class="flex items-center mb-6">
              <span class="text-2xl font-bold text-gray-900 mr-2">$</span>
              <input 
                type="number" 
                placeholder="Enter amount" 
                class="flex-1 text-2xl font-bold text-center py-4 px-4 border-2 border-gray-200 rounded-lg focus:border-rose-700 focus:outline-none"
                v-model="customAmount"
              />
            </div>
            <button class="w-full bg-rose-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-rose-800 transition-colors duration-300 mb-4">
              Donate Now
            </button>
            <p class="text-center text-sm text-gray-500">
              Secure donation powered by Stripe & PayPal
            </p>
          </div>
        </div>

        <!-- Impact Stories Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <!-- Story 1 -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="flex items-start space-x-4 mb-6">
              <img src="/img/default.png" alt="Success story" class="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Amina's Musical Journey</h3>
                <p class="text-rose-700 font-medium">Age 12 • Lagos, Nigeria</p>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed mb-4">
              "I never thought I could play the piano. My family couldn't afford lessons, but AMU Foundation 
              believed in me. Today, I'm performing at concerts and teaching other children. Music opened 
              doors I never knew existed."
            </p>
            <div class="text-sm text-gray-500">
              💝 Supported by donors like you since 2023
            </div>
          </div>

          <!-- Story 2 -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="flex items-start space-x-4 mb-6">
              <img src="/img/default.png" alt="Success story" class="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 class="text-xl font-semibold text-gray-900">Kemi's Soccer Dreams</h3>
                <p class="text-rose-700 font-medium">Age 14 • Abuja, Nigeria</p>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed mb-4">
              "Football was just a dream until AMU provided equipment and coaching. Now I'm on the state 
              team and have a scholarship opportunity. Thank you for showing me that talent truly can 
              open doors!"
            </p>
            <div class="text-sm text-gray-500">
              ⚽ Transformed through your generosity in 2024
            </div>
          </div>
        </div>

        <!-- Urgent Need Banner -->
        <div class="bg-gradient-to-r from-rose-700 to-rose-800 rounded-2xl text-white p-8 mb-16">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">🚨 Urgent: 200 Children on Our Waiting List</h2>
            <p class="text-xl mb-6 opacity-90">
              These talented children are ready to learn, grow, and shine. They're just waiting for someone 
              to believe in them. Will you be that someone?
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button class="bg-white text-rose-700 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                Donate Now - Don't Wait
              </button>
              <div class="text-center sm:text-left">
                <div class="text-sm opacity-75">Only $25 gets one child started</div>
                <div class="font-semibold">Every hour counts 🕒</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact & Account Details -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Other Ways to <span class="text-rose-700">Contribute</span>
            </h2>
            <p class="text-gray-600">
              Prefer to donate directly? Use our secure account details below or contact us for assistance.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Icon name="i-lucide-phone" class="w-5 h-5 text-rose-700 mr-2" />
                Contact Information
              </h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <Icon name="i-lucide-phone" class="w-5 h-5 text-rose-700 mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900">Phone</p>
                    <p class="text-gray-600">+234-XXX-XXX-XXXX</p>
                    <p class="text-sm text-gray-500">Available Mon-Fri, 9AM-5PM WAT</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="i-lucide-mail" class="w-5 h-5 text-rose-700 mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900">Email</p>
                    <p class="text-gray-600">donations@amufoundation.org</p>
                    <p class="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <Icon name="i-lucide-map-pin" class="w-5 h-5 text-rose-700 mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900">Address</p>
                    <p class="text-gray-600">AMU Foundation Headquarters<br/>Abuja, FCT, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Account Details -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Icon name="i-lucide-credit-card" class="w-5 h-5 text-rose-700 mr-2" />
                Bank Account Details
              </h3>
              <div class="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <p class="font-semibold text-gray-900">Account Name</p>
                  <p class="text-gray-700 font-mono">A Million Of Us Foundation</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Bank Name</p>
                  <p class="text-gray-700">First Bank of Nigeria</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Account Number</p>
                  <p class="text-gray-700 font-mono text-lg">2034567890</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Sort Code</p>
                  <p class="text-gray-700 font-mono">011-***-***</p>
                </div>
                <div class="bg-rose-50 border border-rose-200 rounded-lg p-4 mt-4">
                  <p class="text-sm text-rose-800">
                    💡 <strong>Pro tip:</strong> Please include your name and email in the transaction description 
                    so we can send you a thank-you note and updates on your impact!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Security & Trust Badges -->
          <div class="border-t border-gray-200 mt-8 pt-8">
            <div class="text-center">
              <p class="text-gray-600 mb-4">Your donation is secure and tax-deductible</p>
              <div class="flex flex-wrap justify-center items-center gap-6">
                <div class="flex items-center space-x-2">
                  <Icon name="i-lucide-shield-check" class="w-5 h-5 text-green-600" />
                  <span class="text-sm font-medium text-gray-700">SSL Secured</span>
                </div>
                <div class="flex items-center space-x-2">
                  <Icon name="i-lucide-lock" class="w-5 h-5 text-green-600" />
                  <span class="text-sm font-medium text-gray-700">256-bit Encryption</span>
                </div>
                <div class="flex items-center space-x-2">
                  <Icon name="i-lucide-file-text" class="w-5 h-5 text-green-600" />
                  <span class="text-sm font-medium text-gray-700">Tax Receipt Provided</span>
                </div>
                <div class="flex items-center space-x-2">
                  <Icon name="i-lucide-heart" class="w-5 h-5 text-rose-600" />
                  <span class="text-sm font-medium text-gray-700">100% to Children</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA Section -->
        <div class="text-center mt-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Ready to Open Doors for a Child?
          </h2>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your donation today becomes someone's opportunity tomorrow. 
            Because every child deserves a chance to shine.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonPrimary
              path="#donate-form"
              title="Donate Now"
              icon="i-lucide-heart"
            />
            <ButtonSecondary 
              path="/about/impact"
              title="See Our Impact"
              icon="i-lucide-eye"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const customAmount = ref('')
</script>

<style scoped>
/* Additional animations and hover effects */
.group:hover .transition-all {
  transform: translateY(-4px);
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

/* Progress bar animation */
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
</style>