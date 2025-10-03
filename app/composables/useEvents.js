// composables/useEvents.js
import { ref } from 'vue'
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from 'firebase/firestore'

export const useEvents = () => {
  const { $firestore } = useNuxtApp()
  
  const events = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Field types for custom fields
  const fieldTypes = [
    { value: 'text', label: 'Text' },
    { value: 'email', label: 'Email' },
    { value: 'number', label: 'Number' },
    { value: 'tel', label: 'Phone' },
    { value: 'textarea', label: 'Text Area' },
    { value: 'select', label: 'Dropdown' },
    { value: 'checkbox', label: 'Checkbox' }
  ]

  // Get all events
  const fetchEvents = async () => {
    loading.value = true
    error.value = null
    try {
      const q = query(collection($firestore, 'events'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      events.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Error fetching events:', err)
    } finally {
      loading.value = false
    }
  }

  // Get single event
  const getEvent = async (id) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc($firestore, 'events', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        error.value = 'Event not found'
        return null
      }
    } catch (err) {
      error.value = err.message
      console.error('Error fetching event:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  // Create new event
  const createEvent = async (eventData) => {
    loading.value = true
    error.value = null
    try {
      const eventWithTimestamp = {
        ...eventData,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const docRef = await addDoc(collection($firestore, 'events'), eventWithTimestamp)
      return docRef.id
    } catch (err) {
      error.value = err.message
      console.error('Error creating event:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  // Update event
  const updateEvent = async (id, eventData) => {
    loading.value = true
    error.value = null
    try {
      const eventWithTimestamp = {
        ...eventData,
        updatedAt: new Date()
      }
      const docRef = doc($firestore, 'events', id)
      await updateDoc(docRef, eventWithTimestamp)
      return true
    } catch (err) {
      error.value = err.message
      console.error('Error updating event:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  // Delete event
  const deleteEvent = async (id) => {
    loading.value = true
    error.value = null
    try {
      const docRef = doc($firestore, 'events', id)
      await deleteDoc(docRef)
      return true
    } catch (err) {
      error.value = err.message
      console.error('Error deleting event:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    events,
    loading,
    error,
    fieldTypes,
    fetchEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
  }
}