<!-- pages/admin/events/index.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div class="flex justify-between items-center h-14 sm:h-16">
          <div class="flex items-center min-w-0">
            <NuxtLink to="/admin" class="flex items-center group">
              <Icon name="i-lucide-arrow-left" class="w-5 h-5 text-gray-600 mr-2 group-hover:text-rose-700 transition-colors" />
              <h1 class="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                <span class="hidden xs:inline">AMU Foundation</span>
                <span class="xs:hidden">AMU</span>
                <span class="text-rose-700 ml-1">Admin</span>
              </h1>
            </NuxtLink>
          </div>
          
          <NuxtLink 
            to="/admin"
            class="text-xs sm:text-sm text-gray-600 hover:text-rose-700 transition-colors font-medium"
          >
            Back to Dashboard
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-4 sm:py-6 px-3 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Manage <span class="text-rose-700">Events</span>
            </h1>
            <p class="text-sm sm:text-base text-gray-600">
              Create and manage foundation events and activities
            </p>
          </div>
          <button 
            @click="showCreateForm = true"
            class="bg-rose-700 hover:bg-rose-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
          >
            <Icon name="i-lucide-plus" class="w-5 h-5" />
            <span>Create New Event</span>
          </button>
        </div>
      </div>

      <!-- Events List -->
      <div v-if="events.length > 0" class="grid gap-4 sm:gap-6">
        <div 
          v-for="event in events" 
          :key="event.id"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group"
        >
          <div class="flex flex-col lg:flex-row justify-between gap-4">
            <div class="flex-1 min-w-0">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-lucide-calendar" class="w-5 h-5 sm:w-6 sm:h-6 text-rose-700" />
                </div>
                <div class="min-w-0 flex-1">
                  <h3 class="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-rose-700 transition-colors duration-200 break-words">
                    {{ event.name }}
                  </h3>
                  <p class="text-xs sm:text-sm text-rose-700 font-medium mt-1 flex items-center gap-1">
                    <Icon name="i-lucide-clock" class="w-4 h-4" />
                    {{ formatDate(event.date) }}
                  </p>
                </div>
              </div>
              
              <p class="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                {{ event.description }}
              </p>
              
              <div v-if="event.customFields && event.customFields.length > 0" class="mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <p class="text-xs sm:text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Icon name="i-lucide-list" class="w-4 h-4 text-rose-700" />
                  Custom Registration Fields
                </p>
                <div class="flex flex-wrap gap-2">
                  <div v-for="field in event.customFields" :key="field.id" class="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-gray-200 text-xs sm:text-sm">
                    <span class="text-gray-700 font-medium">{{ field.label }}</span>
                    <span class="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded font-medium">{{ field.type }}</span>
                    <span v-if="field.required" class="text-xs bg-rose-700 text-white px-2 py-0.5 rounded font-medium">Required</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex lg:flex-col gap-2 lg:ml-4 flex-wrap lg:flex-nowrap">
              <NuxtLink 
                :to="`/admin/events/${event.id}/registrations`"
                class="flex-1 lg:flex-none bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 text-center whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Icon name="i-lucide-users" class="w-4 h-4" />
                <span class="hidden sm:inline">View Registrations</span>
                <span class="sm:hidden">Registrations</span>
              </NuxtLink>
              <button 
                @click="editEvent(event)"
                class="flex-1 lg:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 border border-gray-200 flex items-center justify-center gap-2"
              >
                <Icon name="i-lucide-edit" class="w-4 h-4" />
                Edit
              </button>
              <button 
                @click="deleteEventQ(event.id)"
                class="flex-1 lg:flex-none bg-rose-50 hover:bg-rose-100 text-rose-700 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 border border-rose-200 flex items-center justify-center gap-2"
              >
                <Icon name="i-lucide-trash-2" class="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="!loading" class="bg-white rounded-lg shadow-lg p-12 border border-gray-100 text-center">
        <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="i-lucide-calendar-x" class="w-8 h-8 text-rose-700" />
        </div>
        <p class="text-gray-500 text-base sm:text-lg font-medium mb-2">No events created yet</p>
        <p class="text-gray-400 text-sm mb-6">Get started by creating your first event</p>
        <button 
          @click="showCreateForm = true"
          class="bg-rose-700 hover:bg-rose-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
        >
          <Icon name="i-lucide-plus" class="w-5 h-5" />
          <span>Create First Event</span>
        </button>
      </div>

      <div class="h-4 sm:h-0"></div>
    </main>

    <!-- Create/Edit Event Modal -->
    <div v-if="showCreateForm || editingEvent" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8">
        <div class="sticky top-0 bg-white border-b border-gray-100 px-4 sm:px-6 py-4 rounded-t-lg z-10">
          <div class="flex items-center justify-between">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900">
              {{ editingEvent ? 'Edit' : 'Create New' }} <span class="text-rose-700">Event</span>
            </h2>
            <button @click="cancelEdit" class="text-gray-400 hover:text-gray-600 transition-colors">
              <Icon name="i-lucide-x" class="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div class="p-4 sm:p-6 max-h-[calc(90vh-8rem)] overflow-y-auto">
          <form @submit.prevent="saveEvent">
            <!-- Basic Event Info -->
            <div class="space-y-4 mb-6">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Event Name <span class="text-rose-700">*</span>
                </label>
                <input
                  v-model="eventForm.name"
                  type="text"
                  required
                  placeholder="Enter event name"
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
                >
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Event Date <span class="text-rose-700">*</span>
                </label>
                <input
                  v-model="eventForm.date"
                  type="date"
                  required
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
                >
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Description <span class="text-rose-700">*</span>
                </label>
                <textarea
                  v-model="eventForm.description"
                  required
                  rows="3"
                  placeholder="Describe the event"
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <!-- Custom Fields Section -->
            <div class="border-t border-gray-100 pt-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Icon name="i-lucide-list" class="w-5 h-5 text-rose-700" />
                  Custom Registration Fields
                </h3>
                <button
                  type="button"
                  @click="addCustomField"
                  class="bg-rose-700 hover:bg-rose-800 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                >
                  <Icon name="i-lucide-plus" class="w-4 h-4" />
                  Add Field
                </button>
              </div>

              <div v-if="eventForm.customFields.length === 0" class="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <Icon name="i-lucide-file-text" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p class="text-gray-500 text-sm">No custom fields added yet</p>
              </div>

              <div v-for="(field, index) in eventForm.customFields" :key="field.id" class="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50 hover:bg-white transition-colors">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label class="block text-sm font-semibold text-gray-900 mb-2">
                      Field Label <span class="text-rose-700">*</span>
                    </label>
                    <input
                      v-model="field.label"
                      type="text"
                      required
                      placeholder="e.g., Phone Number"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-semibold text-gray-900 mb-2">
                      Field Type <span class="text-rose-700">*</span>
                    </label>
                    <select
                      v-model="field.type"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all"
                    >
                      <option value="">Select type</option>
                      <option v-for="type in fieldTypes" :key="type.value" :value="type.value">
                        {{ type.label }}
                      </option>
                    </select>
                  </div>
                </div>

                <!-- Options for select fields -->
                <div v-if="field.type === 'select'" class="mb-4">
                  <label class="block text-sm font-semibold text-gray-900 mb-2">
                    Options (one per line)
                  </label>
                  <textarea
                    v-model="field.options"
                    rows="3"
                    placeholder="Option 1&#10;Option 2&#10;Option 3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <div class="flex justify-between items-center">
                  <label class="flex items-center cursor-pointer group">
                    <input
                      v-model="field.required"
                      type="checkbox"
                      class="rounded border-gray-300 text-rose-700 focus:ring-rose-700 cursor-pointer"
                    >
                    <span class="ml-2 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">Required field</span>
                  </label>

                  <button
                    type="button"
                    @click="removeCustomField(index)"
                    class="text-rose-700 hover:text-rose-800 text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    <Icon name="i-lucide-trash-2" class="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <!-- Form Actions -->
            <div class="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
              <button
                type="button"
                @click="cancelEdit"
                class="px-4 sm:px-6 py-2.5 sm:py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="loading"
                class="px-4 sm:px-6 py-2.5 sm:py-3 bg-rose-700 text-white rounded-lg hover:bg-rose-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 disabled:transform-none flex items-center justify-center gap-2"
              >
                <Icon v-if="loading" name="i-lucide-loader-2" class="w-5 h-5 animate-spin" />
                <Icon v-else name="i-lucide-save" class="w-5 h-5" />
                <span>{{ loading ? 'Saving...' : (editingEvent ? 'Update Event' : 'Create Event') }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'admin',
  layout: false
})

const { $firestore } = useNuxtApp()
const { events, loading, error, fieldTypes, fetchEvents, createEvent, updateEvent, deleteEvent } = useEvents()

// Reactive data
const showCreateForm = ref(false)
const editingEvent = ref(null)

const eventForm = ref({
  name: '',
  date: '',
  description: '',
  customFields: []
})

// Methods
const addCustomField = () => {
  eventForm.value.customFields.push({
    id: Date.now().toString(),
    label: '',
    type: 'text',
    required: false,
    options: ''
  })
}

const removeCustomField = (index) => {
  eventForm.value.customFields.splice(index, 1)
}

const editEvent = (event) => {
  editingEvent.value = event.id
  eventForm.value = {
    name: event.name,
    date: event.date,
    description: event.description,
    customFields: event.customFields ? [...event.customFields] : []
  }
}

const cancelEdit = () => {
  showCreateForm.value = false
  editingEvent.value = null
  resetForm()
}

const resetForm = () => {
  eventForm.value = {
    name: '',
    date: '',
    description: '',
    customFields: []
  }
}

const saveEvent = async () => {
  try {
    // Process select options
    const processedForm = {
      ...eventForm.value,
      customFields: eventForm.value.customFields.map(field => ({
        ...field,
        options: field.type === 'select' ? field.options.split('\n').filter(opt => opt.trim()) : []
      }))
    }

    if (editingEvent.value) {
      await updateEvent(editingEvent.value, processedForm)
    } else {
      await createEvent(processedForm)
    }

    cancelEdit()
    await fetchEvents()
  } catch (err) {
    console.error('Error saving event:', err)
  }
}

const deleteEventQ = async (id) => {
  if (confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
    await deleteEvent(id)
    await fetchEvents()
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Fetch events on component mount
onMounted(() => {
  fetchEvents()
})
</script>