// composables/useRegistrations.js
import { ref } from 'vue'
import { 
  collection, 
  addDoc, 
  getDocs, 
  query,
  where,
  orderBy
} from 'firebase/firestore'

export const useRegistrations = () => {
  const { $firestore } = useNuxtApp()
  
  const registrations = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Submit registration
  const submitRegistration = async (eventId, formData) => {
    loading.value = true
    error.value = null
    try {
      const registrationData = {
        eventId,
        formData,
        submittedAt: new Date(),
        status: 'submitted'
      }
      const docRef = await addDoc(collection($firestore, 'registrations'), registrationData)
      return docRef.id
    } catch (err) {
      error.value = err.message
      console.error('Error submitting registration:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  // Get registrations for an event
  const getEventRegistrations = async (eventId) => {
    loading.value = true
    error.value = null
    try {
      const q = query(
        collection($firestore, 'registrations'),
        where('eventId', '==', eventId),
        orderBy('submittedAt', 'desc')
      )
      const querySnapshot = await getDocs(q)
      registrations.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      error.value = err.message
      console.error('Error fetching registrations:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    registrations,
    loading,
    error,
    submitRegistration,
    getEventRegistrations
  }
}