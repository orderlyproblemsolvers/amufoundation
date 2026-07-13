<!-- pages/admin/programs/[program].vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div class="flex justify-between items-center h-14 sm:h-16">
          <NuxtLink to="/admin" class="flex items-center group mr-3 sm:mr-4">
            <Icon name="i-lucide-arrow-left" class="w-5 h-5 text-gray-600 mr-2 group-hover:text-rose-700 transition-colors" />
            <h1 class="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
              AMU <span class="text-rose-700">Admin</span>
            </h1>
          </NuxtLink>
          <NuxtLink to="/admin/programs" class="text-xs sm:text-sm text-gray-600 hover:text-rose-700 transition-colors font-medium flex items-center gap-1">
            <Icon name="i-lucide-arrow-left" class="w-4 h-4" />
            <span class="hidden sm:inline">Back to Programs</span>
            <span class="sm:hidden">Back</span>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <main v-if="program" class="max-w-7xl mx-auto py-4 sm:py-6 px-3 sm:px-6 lg:px-8">
      <!-- Program Header -->
      <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100">
        <div class="flex items-start gap-3 sm:gap-4">
          <div :class="`w-12 h-12 sm:w-16 sm:h-16 ${program.theme.bgLighter} rounded-lg flex items-center justify-center flex-shrink-0`">
            <Icon :name="program.icon" :class="`w-6 h-6 sm:w-8 sm:h-8 ${program.theme.text}`" />
          </div>
          <div>
            <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{{ program.name }}</h1>
            <p class="text-sm sm:text-base text-gray-600">{{ program.description }}</p>
          </div>
        </div>
      </div>

      <!-- Stats + Export -->
      <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-100 mb-6 sm:mb-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div class="flex items-center gap-3">
            <div :class="`w-10 h-10 ${program.theme.bgLighter} rounded-lg flex items-center justify-center`">
              <Icon name="i-lucide-users" :class="`w-5 h-5 ${program.theme.text}`" />
            </div>
            <div>
              <h2 class="text-lg sm:text-xl font-bold text-gray-900">
                Registrations <span :class="program.theme.text">({{ registrations.length }})</span>
              </h2>
              <p class="text-xs sm:text-sm text-gray-600">Total submissions for this program</p>
            </div>
          </div>
          <button
            v-if="registrations.length > 0"
            @click="exportToCSV"
            :class="`${program.theme.bg} ${program.theme.bgHover} text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center`"
          >
            <Icon name="i-lucide-download" class="w-5 h-5" />
            Export as CSV
          </button>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="bg-white rounded-lg shadow-lg p-12 border border-gray-100 text-center">
        <Icon name="i-lucide-loader-2" :class="`w-12 h-12 ${program.theme.text} mx-auto mb-4 animate-spin`" />
        <p class="text-gray-500 text-base sm:text-lg font-medium">Loading registrations...</p>
      </div>

      <!-- Table -->
      <div v-else-if="registrations.length > 0" class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
        <!-- Mobile -->
        <div class="block lg:hidden">
          <div v-for="(reg, index) in registrations" :key="reg.id" class="border-b border-gray-100 last:border-b-0 p-4">
            <div class="flex justify-between items-start mb-3">
              <span :class="`text-sm font-bold ${program.theme.text}`">#{{ registrations.length - index }}</span>
              <p class="text-xs text-gray-500">{{ formatDateTime(reg.submittedAt) }}</p>
            </div>
            <div class="space-y-1 text-sm">
              <p><span class="font-semibold text-gray-700">Name:</span> {{ reg.firstName }} {{ reg.lastName }}</p>
              <p><span class="font-semibold text-gray-700">DOB:</span> {{ formatDate(reg.dob) }}</p>
              <p><span class="font-semibold text-gray-700">Email:</span> {{ reg.email }}</p>
              <p><span class="font-semibold text-gray-700">Phone:</span> {{ reg.phone }}</p>
              <p><span class="font-semibold text-gray-700">Terms Accepted:</span> {{ reg.termsAccepted ? 'Yes' : 'No' }}</p>
            </div>
          </div>
        </div>

        <!-- Desktop -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">#</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">First Name</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Last Name</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Date of Birth</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Email</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Phone</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Terms</th>
                <th class="px-6 py-4 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Submitted At</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100">
              <tr v-for="(reg, index) in registrations" :key="reg.id" class="hover:bg-gray-50 transition-colors duration-150">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-bold" :class="program.theme.text">#{{ registrations.length - index }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ reg.firstName }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ reg.lastName }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ formatDate(reg.dob) }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ reg.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ reg.phone }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                    :class="reg.termsAccepted ? `${program.theme.bgLighter} ${program.theme.text}` : 'bg-gray-100 text-gray-500'"
                  >
                    {{ reg.termsAccepted ? 'Accepted' : 'No' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ formatDateTime(reg.submittedAt) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Empty -->
      <div v-else class="bg-white rounded-lg shadow-lg p-12 sm:p-16 border border-gray-100 text-center">
        <div :class="`w-16 h-16 sm:w-20 sm:h-20 ${program.theme.bgLighter} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`">
          <Icon name="i-lucide-inbox" :class="`w-8 h-8 sm:w-10 sm:h-10 ${program.theme.text}`" />
        </div>
        <p class="text-gray-900 text-lg sm:text-xl font-bold mb-2">No registrations yet</p>
        <p class="text-gray-500 text-sm sm:text-base">Registrations will appear here once people sign up for this program.</p>
      </div>
    </main>

    <div v-else class="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-3">Program not found</h1>
      <NuxtLink to="/admin/programs" class="text-rose-700 font-medium">Back to Programs</NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'admin', layout: false })

const route = useRoute()
const { getProgram } = usePrograms()
const { registrations, loading, getRegistrations } = useRegistrations()

const program = computed(() => getProgram(route.params.program))

onMounted(async () => {
  if (program.value) {
    await getRegistrations(program.value.collectionKey)
  }
})

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const formatDateTime = (timestamp) => {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

const exportToCSV = () => {
  if (registrations.value.length === 0) return

  const headers = ['First Name', 'Last Name', 'Date of Birth', 'Email', 'Phone', 'Terms Accepted', 'Submitted At']
  const rows = registrations.value.map(reg => [
    reg.firstName, reg.lastName, formatDate(reg.dob), reg.email, reg.phone,
    reg.termsAccepted ? 'Yes' : 'No', formatDateTime(reg.submittedAt)
  ])

  const csvContent = [
    headers.map(h => `"${h}"`).join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `${program.value.slug}_registrations_${new Date().toISOString().split('T')[0]}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>