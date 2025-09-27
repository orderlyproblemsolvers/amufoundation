<template>
  <section class="relative bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-4">
          Our <span class="text-rose-700">Purpose</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Driving change through equity, opportunity, and the unwavering belief that every child deserves a chance to shine.
        </p>
      </div>

      <!-- Vision & Mission Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        <!-- Vision Card -->
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
          <div class="flex items-center mb-6">
            <div class="bg-rose-100 rounded-full p-3 mr-4">
              <Icon name="i-lucide-eye" class="w-8 h-8 text-rose-700" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Our Vision</h3>
          </div>
          <div class="vision-content">
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              <span class="font-semibold text-rose-700">"A Million of Us"</span> envisions a world where children and youth have opportunities to excel not because they are from an influential background, but because they deserve it. <br/><br/>We have the vision to provide 1000 (ONE THOUSAND) Permanent Shelters within the 
six (6) Area Councils (Abaji, Abuja Municipal, Bwari, Gwagwalada, Kuje and Kwali) in 
Abuja for the Internally Displaced Persons (IDPS). 
            </p>
            <div class="bg-rose-50 border-l-4 border-rose-700 p-4 rounded-r-lg">
              <p class="text-gray-700 font-medium italic">
                "Where merit opens doors, not privilege."
              </p>
            </div>
          </div>
        </div>

        <!-- Mission Card -->
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
          <div class="flex items-center mb-6">
            <div class="bg-rose-100 rounded-full p-3 mr-4">
              <Icon name="i-lucide-target" class="w-8 h-8 text-rose-700" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <div class="mission-content">
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              <span class="font-semibold text-rose-700">"A Million of Us"</span> is committed to creating an enabling environment for children and using it to develop and showcase their talents and skills. <br/><br/>Shelter is a basic Human Need. Our Mission is to provide a Permanent Shelter with 
amenities, empowerment for 1000 (ONE THOUSAND) Internally Displaced Persons 
(IDPS) within Abuja and affected states of Nigeria. 
            </p>
            <div class="bg-rose-50 border-l-4 border-rose-700 p-4 rounded-r-lg">
              <p class="text-gray-700 font-medium italic">
                "Building platforms where potential becomes achievement."
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values Section -->
      <div class="bg-white rounded-lg shadow-lg p-8 lg:p-12 border border-gray-100">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
            Our <span class="text-rose-700">Core Values</span>
          </h3>
          <p class="text-gray-600 text-lg">
            The principles that guide every decision and action we take
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Equity -->
          <div class="text-center group">
            <div class="bg-rose-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
              <Icon name="i-lucide-scale" class="w-12 h-12 text-rose-700" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Equity</h4>
            <p class="text-gray-600">
              Ensuring fair access to opportunities regardless of background or circumstances.
            </p>
          </div>

          <!-- Excellence -->
          <div class="text-center group">
            <div class="bg-rose-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
              <Icon name="i-lucide-star" class="w-12 h-12 text-rose-700" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Excellence</h4>
            <p class="text-gray-600">
              Striving for the highest standards in everything we do for children.
            </p>
          </div>

          <!-- Empowerment -->
          <div class="text-center group">
            <div class="bg-rose-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
              <Icon name="i-lucide-zap" class="w-12 h-12 text-rose-700" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Empowerment</h4>
            <p class="text-gray-600">
              Building confidence and capabilities in every child we serve.
            </p>
          </div>

          <!-- Integrity -->
          <div class="text-center group">
            <div class="bg-rose-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
              <Icon name="i-lucide-shield-check" class="w-12 h-12 text-rose-700" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Integrity</h4>
            <p class="text-gray-600">
              Maintaining transparency and ethical practices in all our operations.
            </p>
          </div>

          <!-- Innovation -->
          <div class="text-center group">
            <div class="bg-rose-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
              <Icon name="i-lucide-lightbulb" class="w-12 h-12 text-rose-700" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
            <p class="text-gray-600">
              Embracing creative approaches to unlock every child's potential.
            </p>
          </div>

          <!-- Community -->
          <div class="text-center group">
            <div class="bg-rose-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
              <Icon name="i-lucide-users" class="w-12 h-12 text-rose-700" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Community</h4>
            <p class="text-gray-600">
              Building strong partnerships to amplify our collective impact.
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="text-white bg-gradient-to-r from-rose-700 to-rose-800 rounded-lg p-8 lg:p-12 ">
          <h3 class="text-2xl font-bold sm:text-3xl mb-4">
            Join the Movement
          </h3>
          <p class="text-white text-lg mb-8 max-w-2xl mx-auto ">
            Be part of creating a world where every child's talent is recognized, nurtured, and celebrated. Together, we can make merit matter more than privilege.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonSecondary
              path="/get-involved"
              title="Get Involved"
              icon="i-lucide-heart"
            />
            <ButtonSecondary
              path="/programs"
              title="View Programs"
              icon="i-lucide-arrow-right"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component props if needed
const props = defineProps({
  showCallToAction: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.vision-content,
.mission-content {
  position: relative;
}

.vision-content::before,
.mission-content::before {
  content: '';
  position: absolute;
  left: -1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #be185d, #f9fafb);
  opacity: 0.3;
}

.group:hover .vision-content::before,
.group:hover .mission-content::before {
  opacity: 1;
  transition: opacity 0.3s ease;
}

/* Enhanced hover effects */
.group:hover {
  transform: translateY(-2px);
}

/* Responsive text sizing */
@media (max-width: 640px) {
  .vision-content p,
  .mission-content p {
    font-size: 1rem;
  }
}
</style>