import { ref } from 'vue'
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
} from 'firebase/firestore'

const COLLECTIONS = {
  music: 'musicRegistrations',
  sports: 'sportsRegistrations'
}

export const useRegistrations = () => {
  const { $firestore } = useNuxtApp()

  const registrations = ref([])
  const loading = ref(false)
  const error = ref(null)

  const submitRegistration = async (programKey, formData) => {
    loading.value = true
    error.value = null
    try {
      const collectionName = COLLECTIONS[programKey]
      if (!collectionName) throw new Error(`Unknown program: ${programKey}`)

      const registrationData = {
        ...formData,
        submittedAt: new Date(),
        status: 'submitted'
      }
      const docRef = await addDoc(collection($firestore, collectionName), registrationData)
      return docRef.id
    } catch (err) {
      error.value = err.message
      console.error('Error submitting registration:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const getRegistrations = async (programKey) => {
    loading.value = true
    error.value = null
    try {
      const collectionName = COLLECTIONS[programKey]
      if (!collectionName) throw new Error(`Unknown program: ${programKey}`)

      const q = query(collection($firestore, collectionName), orderBy('submittedAt', 'desc'))
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
    getRegistrations
  }
}