<script setup lang="ts">
defineProps({
    link: {
        type: String,
        required: true,
    },
    isSecondary: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <NuxtLink :to="`/${link}`"
        class="block mx-auto w-[245px] border py-3 px-6 text-base font-semibold transition duration-200 **box-border**"
        :class="{
            'bg-transparent border-white text-white hover:bg-white hover:text-black': !isSecondary,
            'bg-black border-black text-white hover:bg-transparent hover:text-black': isSecondary,
        }">
        <slot></slot>
    </NuxtLink>
</template>