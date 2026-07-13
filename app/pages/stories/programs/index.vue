<!-- pages/stories/events.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div class="text-center">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transform Lives Through <span class="text-rose-700">Action</span>
          </h1>
          <p class="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our signature programs are designed to empower individuals and strengthen communities through education, sports, and creative expression.
          </p>
        </div>
      </div>
    </section>

    <!-- Programs Grid -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-6 sm:gap-8">

          <div
            v-for="program in allPrograms"
            :key="program.slug"
            class="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <!-- Card Header -->
            <div :class="`h-48 bg-gradient-to-br ${program.theme.gradient} relative overflow-hidden`">
              <div class="absolute inset-0 bg-black/10"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Icon :name="program.icon" class="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 class="text-xl sm:text-2xl font-bold">{{ program.name }}</h3>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 sm:p-8">
              <div class="space-y-6">
                <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {{ program.description }}
                </p>

                <div class="grid grid-cols-2 gap-3 sm:gap-4">
                  <div
                    v-for="feature in program.features"
                    :key="feature"
                    class="flex items-center text-xs sm:text-sm text-gray-600"
                  >
                    <Icon name="i-lucide-check-circle" :class="`w-4 h-4 ${program.theme.text} mr-2 flex-shrink-0`" />
                    {{ feature }}
                  </div>
                </div>

                <div :class="`${program.theme.bgLight} rounded-lg p-4 space-y-2 border ${program.theme.border}`">
                  <div class="flex items-center justify-between">
                    <span class="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Icon name="i-lucide-clock" :class="`w-4 h-4 ${program.theme.text}`" />
                      Duration
                    </span>
                    <span :class="`text-xs sm:text-sm font-bold ${program.theme.text}`">{{ program.duration }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Icon name="i-lucide-users" :class="`w-4 h-4 ${program.theme.text}`" />
                      Age Group
                    </span>
                    <span :class="`text-xs sm:text-sm font-bold ${program.theme.text}`">{{ program.ageGroup }}</span>
                  </div>
                </div>

                <NuxtLink
                  :to="`/register/${program.slug}`"
                  :class="`w-full ${program.theme.bg} ${program.theme.bgHover} text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base`"
                >
                  <Icon name="i-lucide-user-plus" class="w-4 h-4" />
                  Register Now
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { allPrograms } = usePrograms()

useHead({
  title: 'Events & Programs - AMU Foundation',
  meta: [
    { name: 'description', content: 'Join AMU Foundation events including B&S Music School and AMU Sports Camp. Empowering communities through music education and sports training programs.' },
    { name: 'keywords', content: 'AMU Foundation, events, music school, sports camp, community programs, education' }
  ],
  link: [
    { rel: 'canonical', href: 'https://amufoundation.org/stories/events' }
  ]
})
</script>