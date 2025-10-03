<!-- pages/admin/events/[id]/registrations.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div class="flex justify-between items-center h-14 sm:h-16">
          <div class="flex items-center min-w-0">
            <NuxtLink to="/admin" class="flex items-center group mr-3 sm:mr-4">
              <Icon name="i-lucide-arrow-left" class="w-5 h-5 text-gray-600 mr-2 group-hover:text-rose-700 transition-colors" />
              <h1 class="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                <span class="hidden xs:inline">AMU Foundation</span>
                <span class="xs:hidden">AMU</span>
                <span class="text-rose-700 ml-1">Admin</span>
              </h1>
            </NuxtLink>
          </div>
          
          <NuxtLink 
            to="/admin/events"
            class="text-xs sm:text-sm text-gray-600 hover:text-rose-700 transition-colors font-medium flex items-center gap-1"
          >
            <Icon name="i-lucide-arrow-left" class="w-4 h-4" />
            <span class="hidden sm:inline">Back to Events</span>
            <span class="sm:hidden">Back</span>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-4 sm:py-6 px-3 sm:px-6 lg:px-8">
      <!-- Event Header -->
      <div v-if="event" class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100">
        <div class="flex items-start gap-3 sm:gap-4 mb-4">
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="i-lucide-calendar" class="w-6 h-6 sm:w-8 sm:h-8 text-rose-700" />
          </div>
          <div class="flex-1 min-w-0">
            <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 break-words">
              {{ event.name }}
            </h1>
            <p class="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">
              {{ event.description }}
            </p>
            <p class="text-xs sm:text-sm text-rose-700 font-medium flex items-center gap-1">
              <Icon name="i-lucide-clock" class="w-4 h-4" />
              {{ formatDate(event.date) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Stats & Export Section -->
      <div v-if="event" class="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100 mb-6 sm:mb-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                <Icon name="i-lucide-users" class="w-5 h-5 text-rose-700" />
              </div>
              <div>
                <h2 class="text-lg sm:text-xl font-bold text-gray-900">
                  Registrations <span class="text-rose-700">({{ registrations.length }})</span>
                </h2>
                <p class="text-xs sm:text-sm text-gray-600">
                  Total submissions for this event
                </p>
              </div>
            </div>
          </div>
          <button
            v-if="registrations.length > 0"
            @click="exportToCSV"
            class="bg-rose-700 hover:bg-rose-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
          >
            <Icon name="i-lucide-download" class="w-5 h-5" />
            <span class="hidden sm:inline">Export as CSV</span>
            <span class="sm:hidden">Export CSV</span>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="bg-white rounded-lg shadow-lg p-12 border border-gray-100 text-center">
        <Icon name="i-lucide-loader-2" class="w-12 h-12 text-rose-700 mx-auto mb-4 animate-spin" />
        <p class="text-gray-500 text-base sm:text-lg font-medium">Loading registrations...</p>
      </div>

      <!-- Registrations Table -->
      <div v-else-if="registrations.length > 0" class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
        <!-- Mobile View: Cards -->
        <div class="block lg:hidden">
          <div 
            v-for="(registration, index) in registrations" 
            :key="registration.id"
            class="border-b border-gray-100 last:border-b-0"
          >
            <div class="p-4">
              <div class="flex justify-between items-start mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                    <span class="text-sm font-bold text-rose-700">#{{ registrations.length - index }}</span>
                  </div>
                  <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">
                    {{ registration.status }}
                  </span>
                </div>
                <p class="text-xs text-gray-500">
                  {{ formatDateTime(registration.submittedAt) }}
                </p>
              </div>
              <div class="space-y-2">
                <div v-for="(value, key) in registration.formData" :key="key" class="flex justify-between items-start gap-2 py-2 border-t border-gray-100">
                  <span class="text-xs font-semibold text-gray-700">{{ formatFieldName(key) }}</span>
                  <span class="text-xs text-gray-900 text-right break-words">{{ formatFieldValue(value) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop View: Table -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider whitespace-nowrap">
                  #
                </th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider whitespace-nowrap">
                  Submitted At
                </th>
                <th 
                  v-for="field in tableHeaders" 
                  :key="field.id"
                  class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider whitespace-nowrap"
                >
                  {{ field.label }}
                </th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100">
              <tr 
                v-for="(registration, index) in registrations" 
                :key="registration.id"
                class="hover:bg-rose-50 transition-colors duration-150"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                      <span class="text-sm font-bold text-rose-700">#{{ registrations.length - index }}</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center gap-2">
                    <Icon name="i-lucide-calendar-clock" class="w-4 h-4 text-gray-400" />
                    <span class="text-sm text-gray-900">{{ formatDateTime(registration.submittedAt) }}</span>
                  </div>
                </td>
                <td 
                  v-for="field in tableHeaders" 
                  :key="field.id"
                  class="px-6 py-4"
                >
                  <span class="text-sm text-gray-900 break-words">
                    {{ formatFieldValue(registration.formData[field.id]) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700 border border-rose-200">
                    <Icon name="i-lucide-check-circle" class="w-3.5 h-3.5 mr-1" />
                    {{ registration.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white rounded-lg shadow-lg p-12 sm:p-16 border border-gray-100 text-center">
        <div class="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Icon name="i-lucide-inbox" class="w-8 h-8 sm:w-10 sm:h-10 text-rose-700" />
        </div>
        <p class="text-gray-900 text-lg sm:text-xl font-bold mb-2">No registrations yet</p>
        <p class="text-gray-500 text-sm sm:text-base mb-6 max-w-md mx-auto">
          Registrations will appear here once people sign up for this event.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <NuxtLink 
            to="/admin/events"
            class="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 border border-gray-200"
          >
            <Icon name="i-lucide-arrow-left" class="w-5 h-5" />
            Back to Events
          </NuxtLink>
          <button
            @click="$router.push(`/events/${eventId}`)"
            class="inline-flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            <Icon name="i-lucide-external-link" class="w-5 h-5" />
            View Public Event Page
          </button>
        </div>
      </div>

      <div class="h-4 sm:h-0"></div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'admin',
  layout: false
})

const route = useRoute()
const { getEvent } = useEvents()
const { registrations, loading, getEventRegistrations } = useRegistrations()

const event = ref(null)
const eventId = route.params.id

// Computed property for table headers (all unique fields from registrations)
const tableHeaders = computed(() => {
  if (registrations.value.length === 0 || !event.value) return []
  
  // Use custom fields from event if available
  if (event.value.customFields && event.value.customFields.length > 0) {
    return event.value.customFields.map(field => ({
      id: field.id,
      label: field.label
    }))
  }
  
  // Fallback: get all unique fields from registrations
  const allFields = new Set()
  registrations.value.forEach(reg => {
    Object.keys(reg.formData).forEach(key => allFields.add(key))
  })
  
  return Array.from(allFields).map(fieldKey => ({
    id: fieldKey,
    label: formatFieldName(fieldKey)
  }))
})

// Fetch event and registrations
onMounted(async () => {
  event.value = await getEvent(eventId)
  await getEventRegistrations(eventId)
})

// Format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Format date and time
const formatDateTime = (timestamp) => {
  if (!timestamp) return 'N/A'
  
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Format field name (convert camelCase to Title Case)
const formatFieldName = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim()
}

// Format field value
const formatFieldValue = (value) => {
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  }
  if (Array.isArray(value)) {
    return value.join(', ')
  }
  return value || 'N/A'
}

// Export to CSV
const exportToCSV = () => {
  if (registrations.value.length === 0) return

  // Get all unique field names from all registrations
  const allFields = new Set()
  registrations.value.forEach(reg => {
    Object.keys(reg.formData).forEach(key => allFields.add(key))
  })

  // Create headers
  const headers = ['Registration ID', 'Submitted At', 'Status', ...Array.from(allFields)]
  
  // Create rows
  const rows = registrations.value.map(reg => {
    const row = [
      reg.id,
      formatDateTime(reg.submittedAt),
      reg.status
    ]
    
    // Add field values in order
    Array.from(allFields).forEach(field => {
      const value = reg.formData[field]
      row.push(formatFieldValue(value))
    })
    
    return row
  })

  // Convert to CSV format
  const csvContent = [
    headers.map(h => `"${h}"`).join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n')

  // Create download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  
  const eventName = event.value?.name || 'event'
  const filename = `${eventName.replace(/\s+/g, '_')}_registrations_${new Date().toISOString().split('T')[0]}.csv`
  
  link.setAttribute('href', url)
  link.setAttribute('download', filename)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>