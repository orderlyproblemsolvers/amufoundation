<template>
  <header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 w-full">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img 
            src="/img/amulogo.png" 
            alt="AMU Logo" 
            class="h-28 w-auto lg:h-32"
          />
        </NuxtLink>

        <!-- Desktop Navigation (centered) -->
        <nav class="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <NuxtLink 
            to="/" 
            :class="[
              'transition-colors duration-200 font-medium relative',
              isActiveRoute('/') 
                ? 'text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700' 
                : 'text-gray-700 hover:text-rose-700'
            ]"
          >
            Home
          </NuxtLink>
          
          <!-- About AMU Dropdown -->
          <div class="relative group">
            <button 
              :class="[
                'transition-colors duration-200 font-medium flex items-center relative',
                isActiveAboutRoute() 
                  ? 'text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700' 
                  : 'text-gray-700 hover:text-rose-700'
              ]"
            >
              About AMU
              <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="py-2">
                <NuxtLink 
                  to="/about/history" 
                  :class="[
                    'block px-4 py-2 text-sm hover:bg-gray-50',
                    isActiveRoute('/about/history') 
                      ? 'text-rose-700 bg-rose-50' 
                      : 'text-gray-700 hover:text-rose-700'
                  ]"
                >
                  Brief History
                </NuxtLink>
                <div class="flex justify-center">
                  <div class="w-[80%] h-px bg-rose-400"></div>
                </div>
                <NuxtLink 
                  to="/about/vision-mission" 
                  :class="[
                    'block px-4 py-2 text-sm hover:bg-gray-50',
                    isActiveRoute('/about/vision-mission') 
                      ? 'text-rose-700 bg-rose-50' 
                      : 'text-gray-700 hover:text-rose-700'
                  ]"
                >
                  Vision & Mission
                </NuxtLink>
                <div class="flex justify-center">
                  <div class="w-[80%] h-px bg-rose-400"></div>
                </div>
                <NuxtLink 
                  to="/about/team" 
                  :class="[
                    'block px-4 py-2 text-sm hover:bg-gray-50',
                    isActiveRoute('/about/team') 
                      ? 'text-rose-700 bg-rose-50' 
                      : 'text-gray-700 hover:text-rose-700'
                  ]"
                >
                  Our Team
                </NuxtLink>
                <div class="flex justify-center">
                  <div class="w-[80%] h-px bg-rose-400"></div>
                </div>
                <NuxtLink 
                  to="/about/kacis" 
                  :class="[
                    'block px-4 py-2 text-sm hover:bg-gray-50',
                    isActiveRoute('/about/kacis') 
                      ? 'text-rose-700 bg-rose-50' 
                      : 'text-gray-700 hover:text-rose-700'
                  ]"
                >
                  KACIS
                </NuxtLink>
                 <div class="flex justify-center">
                  <div class="w-[80%] h-px bg-rose-400"></div>
                </div>
                <NuxtLink 
                  to="/about/safehaven" 
                  :class="[
                    'block px-4 py-2 text-sm hover:bg-gray-50',
                    isActiveRoute('/about/safehaven') 
                      ? 'text-rose-700 bg-rose-50' 
                      : 'text-gray-700 hover:text-rose-700'
                  ]"
                >
                  Safe Haven Project
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- AMU Stories Dropdown -->
          <div class="relative group">
            <button 
              :class="[
                'transition-colors duration-200 font-medium flex items-center relative',
                isActiveStoriesRoute() 
                  ? 'text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700' 
                  : 'text-gray-700 hover:text-rose-700'
              ]"
            >
              AMU Stories
              <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-36 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="py-2">
                <NuxtLink 
                  to="/stories/gallery" 
                  :class="[
                    'block px-4 py-2 text-sm hover:bg-gray-50',
                    isActiveRoute('/stories/gallery') 
                      ? 'text-rose-700 bg-rose-50' 
                      : 'text-gray-700 hover:text-rose-700'
                  ]"
                >
                  Gallery
                </NuxtLink>
                <div class="flex justify-center">
                  <div class="w-[80%] h-px bg-rose-400"></div>
                </div>
                <NuxtLink 
                  to="/stories/events" 
                  :class="[
                    'block px-4 py-2 text-sm hover:bg-gray-50',
                    isActiveRoute('/stories/events') 
                      ? 'text-rose-700 bg-rose-50' 
                      : 'text-gray-700 hover:text-rose-700'
                  ]"
                >
                  Events
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink 
            to="/contact" 
            :class="[
              'transition-colors duration-200 font-medium relative',
              isActiveRoute('/contact') 
                ? 'text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700' 
                : 'text-gray-700 hover:text-rose-700'
            ]"
          >
            Contact
          </NuxtLink>
        </nav>

        <!-- Desktop Donate Button (right-aligned) -->
        <div class="hidden lg:flex">
          <NuxtLink 
            to="/donate" 
            :class="[
              'px-4 py-2 rounded-md transition-colors duration-200 font-medium',
              isActiveRoute('/donate')
                ? 'bg-rose-800 text-white'
                : 'bg-rose-700 text-white hover:bg-rose-800'
            ]"
          >
            Donate
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-md text-gray-700 hover:text-rose-700 hover:bg-gray-50 transition-colors duration-200"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="lg:hidden border-t border-gray-200 py-4 space-y-4"
      >
        <NuxtLink 
          to="/" 
          @click="mobileMenuOpen = false"
          :class="[
            'block transition-colors duration-200 font-medium py-2 border-l-4',
            isActiveRoute('/') 
              ? 'text-rose-700 border-rose-700 bg-rose-50 pl-4' 
              : 'text-gray-700 hover:text-rose-700 border-transparent pl-4'
          ]"
        >
          Home
        </NuxtLink>

        <!-- Mobile About AMU -->
        <div>
          <button 
            @click="aboutDropdownOpen = !aboutDropdownOpen"
            :class="[
              'flex items-center justify-between w-full transition-colors duration-200 font-medium py-2 border-l-4',
              isActiveAboutRoute() 
                ? 'text-rose-700 border-rose-700 bg-rose-50 pl-4' 
                : 'text-gray-700 hover:text-rose-700 border-transparent pl-4'
            ]"
          >
            About AMU
            <svg 
              :class="{ 'rotate-180': aboutDropdownOpen }"
              class="w-4 h-4 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="aboutDropdownOpen" class="pl-8 space-y-2 mt-2">
            <NuxtLink 
              to="/about/history" 
              @click="mobileMenuOpen = false" 
              :class="[
                'block py-1 text-sm',
                isActiveRoute('/about/history') 
                  ? 'text-rose-700 font-medium' 
                  : 'text-gray-600 hover:text-rose-700'
              ]"
            >
              Brief History
            </NuxtLink>
            <NuxtLink 
              to="/about/vision-mission" 
              @click="mobileMenuOpen = false" 
              :class="[
                'block py-1 text-sm',
                isActiveRoute('/about/vision-mission') 
                  ? 'text-rose-700 font-medium' 
                  : 'text-gray-600 hover:text-rose-700'
              ]"
            >
              Vision & Mission
            </NuxtLink>
            <NuxtLink 
              to="/about/team" 
              @click="mobileMenuOpen = false" 
              :class="[
                'block py-1 text-sm',
                isActiveRoute('/about/team') 
                  ? 'text-rose-700 font-medium' 
                  : 'text-gray-600 hover:text-rose-700'
              ]"
            >
              Our Team
            </NuxtLink>
            <NuxtLink 
              to="/about/kacis" 
              @click="mobileMenuOpen = false" 
              :class="[
                'block py-1 text-sm',
                isActiveRoute('/about/kacis') 
                  ? 'text-rose-700 font-medium' 
                  : 'text-gray-600 hover:text-rose-700'
              ]"
            >
              KACIS
            </NuxtLink>
            <NuxtLink 
              to="/about/safehaven" 
              @click="mobileMenuOpen = false" 
              :class="[
                'block py-1 text-sm',
                isActiveRoute('/about/safehaven') 
                  ? 'text-rose-700 font-medium' 
                  : 'text-gray-600 hover:text-rose-700'
              ]"
            >
              Safe Haven Project
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile AMU Stories -->
        <div>
          <button 
            @click="storiesDropdownOpen = !storiesDropdownOpen"
            :class="[
              'flex items-center justify-between w-full transition-colors duration-200 font-medium py-2 border-l-4',
              isActiveStoriesRoute() 
                ? 'text-rose-700 border-rose-700 bg-rose-50 pl-4' 
                : 'text-gray-700 hover:text-rose-700 border-transparent pl-4'
            ]"
          >
            AMU Stories
            <svg 
              :class="{ 'rotate-180': storiesDropdownOpen }"
              class="w-4 h-4 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="storiesDropdownOpen" class="pl-8 space-y-2 mt-2">
            <NuxtLink 
              to="/stories/gallery" 
              @click="mobileMenuOpen = false" 
              :class="[
                'block py-1 text-sm',
                isActiveRoute('/stories/gallery') 
                  ? 'text-rose-700 font-medium' 
                  : 'text-gray-600 hover:text-rose-700'
              ]"
            >
              Gallery
            </NuxtLink>
            <NuxtLink 
              to="/stories/events" 
              @click="mobileMenuOpen = false" 
              :class="[
                'block py-1 text-sm',
                isActiveRoute('/stories/events') 
                  ? 'text-rose-700 font-medium' 
                  : 'text-gray-600 hover:text-rose-700'
              ]"
            >
              Events
            </NuxtLink>
          </div>
        </div>

        <NuxtLink 
          to="/contact" 
          @click="mobileMenuOpen = false"
          :class="[
            'block transition-colors duration-200 font-medium py-2 border-l-4',
            isActiveRoute('/contact') 
              ? 'text-rose-700 border-rose-700 bg-rose-50 pl-4' 
              : 'text-gray-700 hover:text-rose-700 border-transparent pl-4'
          ]"
        >
          Contact
        </NuxtLink>

        <NuxtLink 
          to="/donate" 
          @click="mobileMenuOpen = false"
          :class="[
            'inline-block px-4 py-2 rounded-md transition-colors duration-200 font-medium mt-2',
            isActiveRoute('/donate')
              ? 'bg-rose-800 text-white'
              : 'bg-rose-700 text-white hover:bg-rose-800'
          ]"
        >
          Donate
        </NuxtLink>
      </div>
    </div>
  </header>
  <!-- Spacer div to prevent content from going under the fixed header -->
  <div class="h-16 lg:h-20"></div>
</template>

<script setup>
import { ref } from 'vue'

// Get current route
const route = useRoute()

// Mobile menu state
const mobileMenuOpen = ref(false)
const aboutDropdownOpen = ref(false)
const storiesDropdownOpen = ref(false)

// Helper function to check if route is active
const isActiveRoute = (path) => {
  return route.path === path
}

// Helper function to check if any About route is active
const isActiveAboutRoute = () => {
  return route.path.startsWith('/about/')
}

// Helper function to check if any Stories route is active
const isActiveStoriesRoute = () => {
  return route.path.startsWith('/stories/')
}

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  aboutDropdownOpen.value = false
  storiesDropdownOpen.value = false
}

// Close menu on route change
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
/* Ensure Inter font is used */
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Custom dropdown hover effects */
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\:visible {
  visibility: visible;
}

/* Smooth transitions for mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Active route indicator for desktop */
.after\:absolute::after {
  content: '';
  position: absolute;
}

.after\:bottom-\[-8px\]::after {
  bottom: -8px;
}

.after\:left-0::after {
  left: 0;
}

.after\:w-full::after {
  width: 100%;
}

.after\:h-0\.5::after {
  height: 2px;
}

.after\:bg-rose-700::after {
  background-color: rgb(190 18 60);
}
</style>