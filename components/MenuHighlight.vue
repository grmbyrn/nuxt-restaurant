<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    mobileSrc: { type: String, required: true },
    tabletSrc: { type: String, required: true },
    desktopSrc: { type: String, required: true },
    alt: { type: String, default: '' },
});
</script>

<template>
    <div>
        <ResponsiveImage :mobileSrc="mobileSrc" :tabletSrc="tabletSrc" :desktopSrc="desktopSrc" :alt="alt" />
        <h3 class="text-xl mt-9 font-bold">{{ title }}</h3>
        <p class="mt-2 leading-7">
            {{ description }}
        </p>
    </div>
</template>