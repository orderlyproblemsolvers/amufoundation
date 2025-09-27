<template>
  <div class="gallery-container">
    <!-- Gallery Header -->
    <div class="gallery-header">
      <h2 class="gallery-title">AMU Foundation <span class="text-rose-700">Gallery</span></h2>
      <p class="gallery-subtitle max-w-4xl  leading-relaxed">Capturing moments that matter</p>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-grid" ref="galleryGrid">
      <div
        v-for="(item, index) in galleryItems"
        :key="item.id"
        class="gallery-item"
        :class="{ 'active': selectedItem === index }"
        @click="openLightbox(index)"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="image-wrapper">
          <NuxtImg
            :src="item.src"
            :alt="item.alt"
            class="gallery-image"
            loading="lazy"
            format="webp"
            quality="80"
            sizes="sm:350px md:400px lg:450px xl:500px"
            :width="500"
            :height="310"
            fit="cover"
            @load="handleImageLoad"
            placeholder
            preload
          />
          <div class="image-overlay">
            <div class="overlay-content">
              <svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18-5h-3m0 0v3m0-3L16 8M8 21h-3a2 2 0 0 1-2-2v-3m0 0L8 16m0 0l3 3"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="item-info">
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-date">{{ item.date }}</p>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="lightbox-overlay"
        @click="closeLightbox"
        @keydown.esc="closeLightbox"
      >
        <div class="lightbox-container" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div class="lightbox-content">
            <NuxtImg
              :src="galleryItems[selectedItem]?.src"
              :alt="galleryItems[selectedItem]?.alt"
              class="lightbox-image"
              format="webp"
              quality="90"
              sizes="sm:95vw md:80vw lg:70vw xl:60vw"
              :width="1200"
              :height="800"
              fit="contain"
              placeholder
              preload
            />
            <div class="lightbox-info">
              <h3>{{ galleryItems[selectedItem]?.title }}</h3>
              <p>{{ galleryItems[selectedItem]?.description }}</p>
              <span class="lightbox-date">{{ galleryItems[selectedItem]?.date }}</span>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button
            v-if="selectedItem > 0"
            class="lightbox-nav lightbox-prev"
            @click="navigateLightbox(-1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <button
            v-if="selectedItem < galleryItems.length - 1"
            class="lightbox-nav lightbox-next"
            @click="navigateLightbox(1)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface GalleryItem {
  id: number
  src: string
  alt: string
  title: string
  description: string
  date: string
  orientation: 'portrait' | 'landscape'
  category?: string
}

// Sample gallery data - replace with API call in the future
const galleryItems = ref<GalleryItem[]>([
  {
    id: 1,
    src: '/img/bs1.webp',
    alt: 'AMU Foundation Event 1',
    title: 'Community Outreach Program',
    description: 'Supporting local communities through various initiatives and programs.',
    date: 'March 2024',
    orientation: 'landscape'
  },
  {
    id: 2,
    src: '/img/bs4.jpg',
    alt: 'AMU Foundation Event 2',
    title: 'Education Initiative',
    description: 'Providing educational resources and support to underprivileged children.',
    date: 'February 2024',
    orientation: 'portrait'
  },
  {
    id: 3,
    src: '/img/bs3.webp',
    alt: 'AMU Foundation Event 3',
    title: 'Healthcare Campaign',
    description: 'Free medical checkups and health awareness programs.',
    date: 'January 2024',
    orientation: 'landscape'
  },
  {
    id: 4,
    src: '/img/bs2.webp',
    alt: 'AMU Foundation Event 4',
    title: 'Environmental Conservation',
    description: 'Tree planting and environmental awareness activities.',
    date: 'December 2023',
    orientation: 'portrait'
  },
  {
    id: 5,
    src: '/img/bs5.jpg',
    alt: 'AMU Foundation Event 5',
    title: 'Youth Development',
    description: 'Empowering young people through skill development programs.',
    date: 'November 2023',
    orientation: 'landscape'
  },
  {
    id: 6,
    src: '/img/bs6.jpg',
    alt: 'AMU Foundation Event 6',
    title: 'Women Empowerment',
    description: 'Supporting women entrepreneurs and leadership development.',
    date: 'October 2023',
    orientation: 'portrait'
  },
  {
    id: 7,
    src: '/img/bs9.jpeg',
    alt: 'AMU Foundation Event 7',
    title: 'Community Building',
    description: 'Strengthening community bonds through collaborative activities.',
    date: 'September 2023',
    orientation: 'portrait'
  },
  {
    id: 8,
    src: '/img/bs7.jpeg',
    alt: 'AMU Foundation Event 8',
    title: 'Social Impact',
    description: 'Making a difference in the lives of those who need it most.',
    date: 'August 2023',
    orientation: 'portrait'
  },
  {
    id: 9,
    src: '/img/bs8.jpeg',
    alt: 'AMU Foundation Event 9',
    title: 'Volunteer Program',
    description: 'Engaging volunteers in meaningful community service projects.',
    date: 'July 2023',
    orientation: 'portrait'
  },
])

// Lightbox functionality
const lightboxOpen = ref(false)
const selectedItem = ref(0)
const galleryGrid = ref<HTMLElement | null>(null)

const openLightbox = (index: number) => {
  selectedItem.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const navigateLightbox = (direction: number) => {
  const newIndex = selectedItem.value + direction
  if (newIndex >= 0 && newIndex < galleryItems.value.length) {
    selectedItem.value = newIndex
  }
}

const handleImageLoad = () => {
  // Trigger any masonry layout recalculation if needed
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      if (selectedItem.value > 0) navigateLightbox(-1)
      break
    case 'ArrowRight':
      if (selectedItem.value < galleryItems.value.length - 1) navigateLightbox(1)
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.gallery-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 1rem;
  background-color: #f9fafb;
}

.gallery-header {
  text-align: center;
  margin-bottom: 4rem;
}

.gallery-title {
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.gallery-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  font-weight: 400;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  align-items: start;
}

.gallery-item {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  border: 1px solid #f3f4f6;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
  width: 100%;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(190, 18, 60, 0.8) 0%, rgba(225, 29, 72, 0.8) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
  text-align: center;
}

.expand-icon {
  width: 3rem;
  height: 3rem;
  stroke-width: 1.5;
}

.item-info {
  padding: 1.5rem;
}

.item-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.item-date {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.lightbox-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.lightbox-image {
  max-width: 80vw;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 0.75rem;
}

.lightbox-info {
  text-align: center;
  color: white;
  max-width: 500px;
}

.lightbox-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.lightbox-info p {
  color: #d1d5db;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.lightbox-date {
  color: #9ca3af;
  font-size: 0.875rem;
}

.lightbox-close {
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(190, 18, 60, 0.2);
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.lightbox-close:hover {
  background: rgba(190, 18, 60, 0.4);
  transform: scale(1.1);
}

.lightbox-close svg {
  width: 1.5rem;
  height: 1.5rem;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(190, 18, 60, 0.2);
  border: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.lightbox-nav:hover {
  background: rgba(190, 18, 60, 0.4);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: -4rem;
}

.lightbox-next {
  right: -4rem;
}

.lightbox-nav svg {
  width: 1.75rem;
  height: 1.75rem;
  stroke-width: 2;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .gallery-container {
    padding: 2rem 1rem;
  }
  
  .gallery-title {
    font-size: 2rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .lightbox-nav {
    display: none;
  }
  
  .lightbox-close {
    top: 1rem;
    right: 1rem;
  }
  
  .lightbox-content {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .gallery-container {
    padding: 1rem;
  }
  
  .gallery-title {
    font-size: 1.75rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  .item-info {
    padding: 1rem;
  }
  
  .item-title {
    font-size: 1.1rem;
  }
  
  .lightbox-image {
    max-width: 95vw;
    max-height: 60vh;
  }
}
</style>