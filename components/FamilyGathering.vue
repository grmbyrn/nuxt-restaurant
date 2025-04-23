<script setup lang="ts">
import { ref } from 'vue'

const selectedEvent = ref('Family Gathering')
</script>

<template>
    <div class="mx-6 mt-20 pb-[124px]">
        <div>
            <ResponsiveImage mobile-src="/images/homepage/family-gathering-mobile.jpg"
                tablet-src="/images/homepage/family-gathering-tablet.jpg"
                desktop-src="/images/homepage/family-gathering-desktop.jpg" alt="Exquisite Dining" />
        </div>
        <div class="flex justify-center flex-col gap-8 text-center mt-12">
            <div class="flex justify-center flex-col gap-2">
                <h3 @click="selectedEvent = 'Family Gathering'" class="cursor-pointer"
                    :class="selectedEvent === 'Family Gathering' ? 'text-[#4C4C4C]' : 'text-[#4C4C4C] opacity-50'">
                    Family Gathering
                </h3>
                <h3 @click="selectedEvent = 'Special Events'" class="cursor-pointer"
                    :class="selectedEvent === 'Special Events' ? 'text-[#4C4C4C]' : 'text-[#4C4C4C] opacity-50'">
                    Special Events
                </h3>
                <h3 @click="selectedEvent = 'Social Events'" class="cursor-pointer"
                    :class="selectedEvent === 'Social Events' ? 'text-[#4C4C4C]' : 'text-[#4C4C4C] opacity-50'">
                    Social Events
                </h3>
            </div>
            <div class="flex justify-center flex-col gap-4">
                <h2 class="text-3xl">{{ selectedEvent }}</h2>
                <p v-if="selectedEvent === 'Family Gathering'" class="leading-7">
                    We love catering for entire families. So please bring everyone along for a special meal with
                    your loved ones.
                    We’ll provide a memorable experience for all.
                </p>
                <p v-else-if="selectedEvent === 'Special Events'" class="leading-7">
                    Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after
                    you.
                    We’ll be sure to mark your special date with an unforgettable meal.
                </p>
                <p v-else-if="selectedEvent === 'Social Events'" class="leading-7">
                    Are you looking to have a larger social event? No problem! We’re more than happy to cater for
                    big parties.
                    We’ll work with you to make your event a hit with everyone.
                </p>
            </div>
            <div class="mt-8">
                <BookingButton link="booking" :isSecondary="true">BOOK A TABLE</BookingButton>
            </div>
        </div>
    </div>
</template>