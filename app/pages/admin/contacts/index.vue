<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Contact Submissions</h1>
            <p class="text-gray-600">Manage and respond to contact form submissions</p>
          </div>
          <button
            @click="loadSubmissions"
            :disabled="isLoading"
            class="inline-flex items-center px-4 py-2 bg-rose-700 text-white font-medium rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon 
              :name="isLoading ? 'i-lucide-loader-2' : 'i-lucide-refresh-cw'" 
              :class="['w-4 h-4 mr-2', isLoading ? 'animate-spin' : '']" 
            />
            {{ isLoading ? 'Loading...' : 'Refresh' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-blue-100 rounded-lg">
              <Icon name="i-lucide-inbox" class="w-6 h-6 text-blue-600" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Total Submissions</p>
              <p class="text-2xl font-bold text-gray-900">{{ statsComputed.total }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-yellow-100 rounded-lg">
              <Icon name="i-lucide-bell" class="w-6 h-6 text-yellow-600" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">New</p>
              <p class="text-2xl font-bold text-gray-900">{{ statsComputed.new }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-orange-100 rounded-lg">
              <Icon name="i-lucide-clock" class="w-6 h-6 text-orange-600" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">In Progress</p>
              <p class="text-2xl font-bold text-gray-900">{{ statsComputed.in_progress }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-green-100 rounded-lg">
              <Icon name="i-lucide-check-circle" class="w-6 h-6 text-green-600" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Resolved</p>
              <p class="text-2xl font-bold text-gray-900">{{ statsComputed.resolved }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-lg shadow mb-6 p-6">
        <div class="flex flex-wrap gap-4 items-center">
          <div>
            <label for="status-filter" class="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status-filter"
              v-model="statusFilter"
              @change="loadSubmissions"
              class="px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-700 focus:border-rose-700"
            >
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div>
            <label for="subject-filter" class="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject-filter"
              v-model="subjectFilter"
              @change="loadSubmissions"
              class="px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-700 focus:border-rose-700"
            >
              <option value="">All Subjects</option>
              <option value="general-inquiry">General Inquiry</option>
              <option value="program-information">Program Information</option>
              <option value="volunteer-opportunity">Volunteer Opportunity</option>
              <option value="partnership">Partnership</option>
              <option value="donation">Donation</option>
              <option value="media-inquiry">Media Inquiry</option>
              <option value="technical-support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label for="search" class="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div class="relative">
              <input
                id="search"
                v-model="searchQuery"
                @input="debounceSearch"
                type="text"
                placeholder="Search by name or email..."
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-700 focus:border-rose-700"
              />
              <Icon name="i-lucide-search" class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>
        </div>
      </div>

      <!-- Submissions Table -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-900">
            Submissions 
            <span v-if="filteredSubmissions.length > 0" class="text-sm font-normal text-gray-600">
              ({{ filteredSubmissions.length }} total)
            </span>
          </h2>
        </div>

        <div v-if="isLoading" class="p-8 text-center">
          <Icon name="i-lucide-loader-2" class="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
          <p class="text-gray-500">Loading submissions...</p>
        </div>

        <div v-else-if="filteredSubmissions.length === 0" class="p-8 text-center">
          <Icon name="i-lucide-inbox" class="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p class="text-lg text-gray-500">No submissions found</p>
          <p class="text-sm text-gray-400">Try adjusting your filters or search query</p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="submission in filteredSubmissions" :key="submission.id" class="hover:bg-gray-50">
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <div class="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                        <span class="text-sm font-medium text-rose-700">
                          {{ submission.name.charAt(0).toUpperCase() }}
                        </span>
                      </div>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ submission.name }}</div>
                      <div class="text-sm text-gray-500">{{ submission.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {{ formatSubject(submission.subject) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <select
                    :value="submission.status"
                    @change="updateStatus(submission.id, $event.target.value)"
                    :class="getStatusColor(submission.status)"
                    class="text-xs font-medium px-2 py-1 rounded-full border-0 focus:ring-2 focus:ring-rose-700"
                  >
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="archived">Archived</option>
                  </select>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDate(submission.createdAt) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    @click="viewSubmission(submission)"
                    class="text-rose-700 hover:text-rose-900 mr-3"
                    title="View details"
                  >
                    <Icon name="i-lucide-eye" class="w-4 h-4" />
                  </button>
                  <button
                    @click="deleteSubmission(submission.id)"
                    class="text-red-600 hover:text-red-900"
                    title="Delete submission"
                  >
                    <Icon name="i-lucide-trash-2" class="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- View Submission Modal -->
    <div v-if="selectedSubmission" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" @click="closeModal">
      <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white" @click.stop>
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-medium text-gray-900">Submission Details</h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <Icon name="i-lucide-x" class="w-6 h-6" />
          </button>
        </div>
        
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <p class="mt-1 text-sm text-gray-900">{{ selectedSubmission.name }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <p class="mt-1 text-sm text-gray-900">{{ selectedSubmission.email }}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Subject</label>
              <p class="mt-1 text-sm text-gray-900">{{ formatSubject(selectedSubmission.subject) }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Status</label>
              <select
                :value="selectedSubmission.status"
                @change="updateStatus(selectedSubmission.id, $event.target.value)"
                class="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-700 focus:border-rose-700 text-sm w-full"
              >
                <option value="new">New</option>
                <option value="in_progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <div class="mt-1 p-3 border border-gray-300 rounded-md bg-gray-50 max-h-64 overflow-y-auto">
              <p class="text-sm text-gray-900 whitespace-pre-wrap">{{ selectedSubmission.message }}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500">
            <div>
              <span class="font-medium">Created:</span> {{ formatDate(selectedSubmission.createdAt) }}
            </div>
            <div>
              <span class="font-medium">Updated:</span> {{ formatDate(selectedSubmission.updatedAt) }}
            </div>
          </div>
        </div>
        
        <div class="flex justify-end space-x-3 mt-6">
          <button
            @click="closeModal"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Close
          </button>
          <a
            :href="`mailto:${selectedSubmission.email}?subject=Re: ${formatSubject(selectedSubmission.subject)}&body=Hello ${selectedSubmission.name},%0D%0A%0D%0AThank you for contacting AMU Foundation regarding ${formatSubject(selectedSubmission.subject).toLowerCase()}.%0D%0A%0D%0A`"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-rose-700 rounded-md hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700"
          >
            <Icon name="i-lucide-reply" class="w-4 h-4 mr-2" />
            Reply via Email
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, where } from 'firebase/firestore'

// Ensure user is authenticated
definePageMeta({
  middleware: 'admin',
  layout: false
})

const { $firestore } = useNuxtApp()

// Reactive data
const submissions = ref([])
const isLoading = ref(true)
const selectedSubmission = ref(null)

// Filters
const statusFilter = ref('')
const subjectFilter = ref('')
const searchQuery = ref('')

// Computed statistics
const statsComputed = computed(() => {
  const total = submissions.value.length
  const newCount = submissions.value.filter(s => s.status === 'new').length
  const inProgress = submissions.value.filter(s => s.status === 'in_progress').length
  const resolved = submissions.value.filter(s => s.status === 'resolved').length
  
  return {
    total,
    new: newCount,
    in_progress: inProgress,
    resolved
  }
})

// Filtered submissions
const filteredSubmissions = computed(() => {
  let filtered = submissions.value

  // Filter by status
  if (statusFilter.value) {
    filtered = filtered.filter(s => s.status === statusFilter.value)
  }

  // Filter by subject
  if (subjectFilter.value) {
    filtered = filtered.filter(s => s.subject === subjectFilter.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(query) || 
      s.email.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Real-time listener
let unsubscribe = null

// Load submissions with real-time updates
const loadSubmissions = () => {
  isLoading.value = true
  
  try {
    const q = query(
      collection($firestore, 'contact_submissions'),
      orderBy('createdAt', 'desc')
    )

    // Set up real-time listener
    unsubscribe = onSnapshot(q, (snapshot) => {
      submissions.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      isLoading.value = false
    })
  } catch (error) {
    console.error('Error loading submissions:', error)
    alert('Failed to load submissions. Please try again.')
    isLoading.value = false
  }
}

// Update submission status
const updateStatus = async (id, newStatus) => {
  try {
    await updateDoc(doc($firestore, 'contact_submissions', id), {
      status: newStatus,
      updatedAt: new Date()
    })

    // Update selected submission if viewing
    if (selectedSubmission.value && selectedSubmission.value.id === id) {
      selectedSubmission.value.status = newStatus
      selectedSubmission.value.updatedAt = new Date()
    }
  } catch (error) {
    console.error('Error updating status:', error)
    alert('Failed to update status. Please try again.')
  }
}

// Delete submission
const deleteSubmission = async (id) => {
  if (!confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
    return
  }
  
  try {
    await deleteDoc(doc($firestore, 'contact_submissions', id))
    
    // Close modal if viewing deleted submission
    if (selectedSubmission.value && selectedSubmission.value.id === id) {
      closeModal()
    }
  } catch (error) {
    console.error('Error deleting submission:', error)
    alert('Failed to delete submission. Please try again.')
  }
}

// View submission
const viewSubmission = (submission) => {
  selectedSubmission.value = { ...submission }
}

// Close modal
const closeModal = () => {
  selectedSubmission.value = null
}

// Utility functions
const formatSubject = (subject) => {
  return subject.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

const formatDate = (date) => {
  if (!date) return 'N/A'
  
  // Handle Firebase Timestamp
  const jsDate = date.toDate ? date.toDate() : new Date(date)
  
  return jsDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getStatusColor = (status) => {
  const colors = {
    'new': 'bg-yellow-100 text-yellow-800',
    'in_progress': 'bg-blue-100 text-blue-800',
    'resolved': 'bg-green-100 text-green-800',
    'archived': 'bg-gray-100 text-gray-800'
  }
  return colors[status] || colors.new
}

// Debounced search
let searchTimeout
const debounceSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    // Search is handled by computed property
  }, 300)
}

// Load data on mount
onMounted(() => {
  loadSubmissions()
})

// Cleanup on unmount
onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe()
  }
})

// SEO Meta
useHead({
  title: "Contact Submissions - Admin Dashboard",
  meta: [
    {
      name: "description",
      content: "Admin dashboard for managing contact form submissions from the AMU Foundation website.",
    },
  ],
})
</script>