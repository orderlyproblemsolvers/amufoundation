<template>
    <NuxtLink
            :to="props.path"
            class="inline-block bg-gray-200 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors duration-200 font-medium w-max"
          >
            <div class="flex justify-center items-center">
              <p>{{ props.title }}</p>
              <UIcon
                :name="props.icon"
                class="inline-block w-5 h-5 ml-2"
              />
            </div>
          </NuxtLink>
</template>
<script setup>
const props = defineProps({
  path: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    default: 'Button',
    required: true
  },
    icon: {
        type: String,
        default: 'i-lucide-arrow-right',
        required: false
    }
})
</script>