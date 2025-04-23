<!-- components/ResponsiveImage.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

defineProps({
    mobileSrc: { type: String, required: true },
    tabletSrc: { type: String, required: true },
    desktopSrc: { type: String, required: true },
    alt: { type: String, default: '' },
});

const pageWidth = ref(0);

// Function to update the width
const updateWidth = () => {
    pageWidth.value = window.innerWidth;
};

// Lifecycle hook to get the initial width when the component mounts
onMounted(() => {
    updateWidth(); // Get initial width
    window.addEventListener('resize', updateWidth); // Listen for resize events
});

// Cleanup the event listener when the component is destroyed
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWidth);
});
</script>

<template>
    <NuxtImg v-if="pageWidth <= 594" :src="mobileSrc" :alt="alt" class="w-full h-full object-cover object-top" />
    <NuxtImg v-if="pageWidth > 594 && pageWidth <= 1439" :src="tabletSrc" :alt="alt"
        class="w-full h-full object-cover object-top" />
    <NuxtImg v-if="pageWidth > 1439" :src="desktopSrc" :alt="alt" class="w-full h-full object-cover object-top" />
</template>
