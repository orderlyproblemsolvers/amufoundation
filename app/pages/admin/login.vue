<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Admin Login
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Access AMU Foundation Dashboard
        </p>
      </div>
      
      <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-rose-700 focus:border-rose-700 focus:z-10 sm:text-sm transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-rose-700 focus:border-rose-700 focus:z-10 sm:text-sm transition-colors duration-200"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div v-if="errorMessage" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p class="text-red-600 text-sm text-center">
              {{ errorMessage }}
            </p>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              :disabled="loading"
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-700 disabled:opacity-50 transition-colors duration-200"
            >
              {{ loading ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

// Redirect if already logged in
watch(user, (newUser) => {
  if (newUser) {
    navigateTo('/admin')
  }
}, { immediate: true })

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    
    if (error) {
      errorMessage.value = error.message
    } else {
      await navigateTo('/admin')
    }
  } catch (err) {
    errorMessage.value = 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}
</script>