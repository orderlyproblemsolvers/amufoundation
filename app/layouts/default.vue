<template>
    <div class="min-h-screen flex flex-col overflow-x-hidden">
        <!-- Transition overlay -->
        <Transition
            name="tile-transition"
            @enter="onEnter"
            @leave="onLeave"
        >
            <div
                v-if="showTransition"
                class="transition-overlay"
                key="transition"
            >
                <div class="tile tile-1"></div>
                <div class="tile tile-2"></div>
                <div class="tile tile-3"></div>
            </div>
        </Transition>

        <AppHeader />
        <main class="flex-grow">
            <slot/>
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showTransition = ref(false)

// Watch for route changes to home
watch(() => route.path, (newPath, oldPath) => {
    if (newPath === '/' && oldPath && oldPath !== '/') {
        triggerTransition()
    }
})

const triggerTransition = () => {
    showTransition.value = true
    // Hide after animation completes
    setTimeout(() => {
        showTransition.value = false
    }, 1200) // Total animation duration
}

const onEnter = (el) => {
    // Animate tiles sequentially
    const tiles = el.querySelectorAll('.tile')
    
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('animate-out')
        }, index * 150) // 150ms delay between tiles
    })
}

const onLeave = () => {
    // Reset tiles for next time
    const tiles = document.querySelectorAll('.tile')
    tiles.forEach(tile => {
        tile.classList.remove('animate-out')
    })
}
</script>

<style scoped>
.transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    pointer-events: none;
    display: flex;
    flex-direction: column;
}

.tile {
    width: 100%;
    height: 33.333vh;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    transform-origin: left center;
    transition: width 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

.tile-1 {
    background: white;
}

.tile-2 {
    background: linear-gradient(45deg, #d11355 0%, #68092a 100%);
}

.tile-3 {
    background: white;
}

.tile.animate-out {
    width: 0%;
}

/* Vue transition classes */
.tile-transition-enter-active {
    transition: opacity 0.1s ease-in;
}

.tile-transition-leave-active {
    transition: opacity 0.3s ease-out;
}

.tile-transition-enter-from {
    opacity: 0;
}

.tile-transition-leave-to {
    opacity: 0;
}
</style>