<template>
  <div v-if="user" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div class="flex justify-between items-center h-14 sm:h-16">
          <!-- Logo/Title -->
          <div class="flex items-center min-w-0">
            <h1 class="text-base sm:text-lg lg:text-xl font-bold text-gray-900 truncate">
              <span class="hidden xs:inline">AMU Foundation</span>
              <span class="xs:hidden">AMU</span>
              <span class="text-rose-700 ml-1">Admin</span>
            </h1>
          </div>
          
          <!-- User Info & Logout -->
          <div class="flex items-center space-x-2 sm:space-x-4 min-w-0">
            <span class="text-xs sm:text-sm text-gray-600 truncate max-w-24 sm:max-w-none">
              {{ user?.email }}
            </span>
            <button
              @click="handleLogout"
              :disabled="loggingOut"
              class="bg-rose-700 hover:bg-rose-800 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap disabled:opacity-50"
            >
              <span class="hidden sm:inline">{{ loggingOut ? 'Logging out...' : 'Logout' }}</span>
              <span class="sm:hidden">{{ loggingOut ? '...' : 'Exit' }}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-4 sm:py-6 px-3 sm:px-6 lg:px-8">
      <!-- Welcome Section -->
      <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100">
        <div class="text-center">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            Welcome to Admin <span class="text-rose-700">Dashboard</span>
          </h2>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
            Manage AMU Foundation content and monitor activities
          </p>
        </div>
      </div>

      <!-- Admin Panels Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <!-- Events Management Panel -->
        <NuxtLink 
          to="/admin/events"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group cursor-pointer transform hover:scale-105 active:scale-95"
        >
          <div class="flex items-start sm:items-center mb-3 sm:mb-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="i-lucide-calendar" class="w-5 h-5 sm:w-6 sm:h-6 text-rose-700" />
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                Manage Events
              </h3>
            </div>
          </div>
          <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Create, edit, and manage foundation events, workshops, and activities.
          </p>
          <div class="flex items-center text-rose-700 font-medium text-sm sm:text-base">
            <span>Access Events Panel</span>
            <Icon name="i-lucide-arrow-right" class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </NuxtLink>

        <!-- Gallery Management Panel -->
        <NuxtLink 
          to="/admin/gallery"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group cursor-pointer transform hover:scale-105 active:scale-95"
        >
          <div class="flex items-start sm:items-center mb-3 sm:mb-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="i-lucide-image" class="w-5 h-5 sm:w-6 sm:h-6 text-rose-700" />
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                Manage Gallery
              </h3>
            </div>
          </div>
          <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Upload, organize, and manage foundation photos and visual content.
          </p>
          <div class="flex items-center text-rose-700 font-medium text-sm sm:text-base">
            <span>Access Gallery Panel</span>
            <Icon name="i-lucide-arrow-right" class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </NuxtLink>

        <!-- Inquiries Management Panel -->
        <NuxtLink 
          to="/admin/contacts"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group cursor-pointer transform hover:scale-105 active:scale-95 sm:col-span-2 xl:col-span-1"
        >
          <div class="flex items-start sm:items-center mb-3 sm:mb-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="i-lucide-mail" class="w-5 h-5 sm:w-6 sm:h-6 text-rose-700" />
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-rose-700 transition-colors duration-200">
                Manage Inquiries
              </h3>
            </div>
          </div>
          <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Review and respond to contact forms and user inquiries.
          </p>
          <div class="flex items-center text-rose-700 font-medium text-sm sm:text-base">
            <span>Access Contacts Panel</span>
            <Icon name="i-lucide-arrow-right" class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </NuxtLink>
      </div>

      <!-- Quick Stats Section -->
      <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100">
        <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Quick Overview</h3>
        <div class="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4">
          <div class="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
            <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-rose-700">12</div>
            <div class="text-xs sm:text-sm text-gray-600 mt-1">Active Events</div>
          </div>
          <div class="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
            <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-rose-700">48</div>
            <div class="text-xs sm:text-sm text-gray-600 mt-1">Gallery Items</div>
          </div>
          <div class="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
            <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-rose-700">5</div>
            <div class="text-xs sm:text-sm text-gray-600 mt-1">New Inquiries</div>
          </div>
        </div>
      </div>

      <!-- Mobile-specific bottom spacing -->
      <div class="h-4 sm:h-0"></div>
    </main>
  </div>
</template>

<script setup>
import { signOut, onAuthStateChanged } from 'firebase/auth'

// Protect this page with admin middleware
definePageMeta({
  head: {
    title: 'Admin Dashboard - AMU Foundation',
    meta: [
      { name: 'description', content: 'Admin dashboard for managing AMU Foundation content and activities.' }
    ]
  },
  middleware: 'admin',
  layout: false
})

const { $auth } = useNuxtApp()
const user = ref(null)
const loggingOut = ref(false)

// Get current user on mount (client-side only)
onMounted(() => {
  onAuthStateChanged($auth, (currentUser) => {
    user.value = currentUser
  })
})

// Handle logout with Firebase
const handleLogout = async () => {
  loggingOut.value = true
  try {
    await signOut($auth)
    await navigateTo('/admin/login')
  } catch (error) {
    console.error('Error logging out:', error)
    alert('Failed to logout. Please try again.')
  } finally {
    loggingOut.value = false
  }
}
</script>