<!-- pages/admin/programs/index.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div class="flex justify-between items-center h-14 sm:h-16">
          <NuxtLink to="/admin" class="flex items-center group">
            <Icon name="i-lucide-arrow-left" class="w-5 h-5 text-gray-600 mr-2 group-hover:text-rose-700 transition-colors" />
            <h1 class="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
              AMU <span class="text-rose-700">Admin</span>
            </h1>
          </NuxtLink>
          <NuxtLink to="/admin" class="text-xs sm:text-sm text-gray-600 hover:text-rose-700 transition-colors font-medium">
            Back to Dashboard
          </NuxtLink>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-4 sm:py-6 px-3 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100">
        <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Manage <span class="text-rose-700">Programs</span>
        </h1>
        <p class="text-sm sm:text-base text-gray-600">
          View and manage registrations for AMU Foundation's programs
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div
          v-for="program in allPrograms"
          :key="program.slug"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6 border border-gray-100"
        >
          <div class="flex items-start gap-3 mb-4">
            <div :class="`w-12 h-12 ${program.theme.bgLighter} rounded-lg flex items-center justify-center flex-shrink-0`">
              <Icon :name="program.icon" :class="`w-6 h-6 ${program.theme.text}`" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ program.name }}</h3>
              <p class="text-xs text-gray-500">{{ program.tagline }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 mb-5 leading-relaxed">{{ program.description }}</p>
          <NuxtLink
            :to="`/admin/programs/${program.slug}`"
            :class="`${program.theme.bg} ${program.theme.bgHover} text-white px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 w-full`"
          >
            <Icon name="i-lucide-users" class="w-4 h-4" />
            View Registrations
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'admin', layout: false })
const { allPrograms } = usePrograms()
</script>