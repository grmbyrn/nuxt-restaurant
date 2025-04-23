<script setup lang="ts">
import { ref } from 'vue'

const selectedEvent = ref('Family Gathering')
</script>

<template>
    <div class="relative h-screen">
        <!-- Image above the text -->
        <ResponsiveImage mobile-src="/images/homepage/hero-bg-mobile.jpg"
            tablet-src="/images/homepage/hero-bg-tablet.jpg" desktop-src="/images/homepage/hero-bg-desktop.jpg"
            alt="Exquisite Dining" />

        <!-- Text overlay positioned on top of the image -->
        <div class="absolute top-1/3 left-0 w-full text-white text-center px-6 py-12 z-10">
            <NuxtLink>
                <NuxtImg src="/images/logo.svg" class="mx-auto mb-2 w-[82.4px] h-[32px]" />
            </NuxtLink>
            <h1 class="text-2xl mt-9 md:text-4xl font-semibold mb-4">Exquisite dining since 1989</h1>
            <p class="text-sm leading-relaxed mb-6 md:text-lg">
                Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce
                from the comfort of our farmhouse.
            </p>
            <NuxtLink to="/booking"
                class="bg-transparent border border-white py-3 px-6 text-sm font-medium hover:bg-white hover:text-black transition duration-200">
                BOOK A TABLE
            </NuxtLink>
        </div>

        <!-- Image below the text, with overlap -->
        <div class="relative mx-6 -mt-50">
            <div>
                <ResponsiveImage mobile-src="/images/homepage/enjoyable-place-mobile.jpg"
                    tablet-src="/images/homepage/enjoyable-place-tablet.jpg"
                    desktop-src="/images/homepage/enjoyable-place-desktop.jpg" alt="Exquisite Dining" />
            </div>
            <div>
                <h2>Enjoyable place for all the family</h2>
                <p>
                    Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a
                    tour of the farm before your meal.
                </p>
            </div>
        </div>

        <div class="relative mx-6 mt-[101px]">
            <div>
                <ResponsiveImage mobile-src="/images/homepage/locally-sourced-mobile.jpg"
                    tablet-src="/images/homepage/locally-sourced-tablet.jpg"
                    desktop-src="/images/homepage/locally-sourced-desktop.jpg" alt="Exquisite Dining" />
            </div>
            <div>
                <h2>The most locally sourced food</h2>
                <p>
                    All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
                    eating the freshest, most sustainable food.
                </p>
            </div>
        </div>
        <div class="mt-[72px] bg-black text-white">
            <div class="mx-6">
                <h2>A few highlights from our menu</h2>
                <p>
                    We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our
                    menu
                    is revamped every season.
                </p>
            </div>

            <div class="mx-6">
                <div>
                    <ResponsiveImage mobile-src="/images/homepage/salmon-mobile.jpg"
                        tablet-src="/images/homepage/salmon-desktop-tablet.jpg"
                        desktop-src="/images/homepage/salmon-desktop-tablet.jpg" alt="Exquisite Dining" />
                    <h3>Seared Salmon Fillet</h3>
                    <p>
                        Our locally sourced salmon served
                        with a refreshing buckwheat summer salad.
                    </p>
                </div>

                <div>
                    <ResponsiveImage mobile-src="/images/homepage/beef-mobile.jpg"
                        tablet-src="/images/homepage/beef-desktop-tablet.jpg"
                        desktop-src="/images/homepage/beef-desktop-tablet.jpg" alt="Exquisite Dining" />
                    <h3>Rosemary Filet Mignon</h3>
                    <p>
                        Our prime beef served to your taste
                        with a delicious choice of seasonal
                        sides.
                    </p>
                </div>

                <div>
                    <ResponsiveImage mobile-src="/images/homepage/chocolate-mobile.jpg"
                        tablet-src="/images/homepage/chocolate-desktop-tablet.jpg"
                        desktop-src="/images/homepage/chocolate-desktop-tablet.jpg" alt="Exquisite Dining" />
                    <h3>Summer Fruit Chocolate Mousse</h3>
                    <p>
                        Creamy mousse combined with
                        summer fruits and dark chocolate shavings.
                    </p>
                </div>
            </div>
        </div>
        <div class="mx-6 mt-20">
            <div>
                <ResponsiveImage mobile-src="/images/homepage/family-gathering-mobile.jpg"
                    tablet-src="/images/homepage/family-gathering-tablet.jpg"
                    desktop-src="/images/homepage/family-gathering-desktop.jpg" alt="Exquisite Dining" />
            </div>
            <div>
                <div>
                    <h3 @click="selectedEvent = 'Family Gathering'">
                        Family Gathering
                    </h3>
                    <h3 @click="selectedEvent = 'Special Events'">
                        Special Events
                    </h3>
                    <h3 @click="selectedEvent = 'Social Events'">
                        Social Events
                    </h3>
                </div>
                <div>
                    <p v-if="selectedEvent === 'Family Gathering'">
                        We love catering for entire families. So please bring everyone along for a special meal with
                        your loved ones.
                        We’ll provide a memorable experience for all.
                    </p>
                    <p v-else-if="selectedEvent === 'Special Events'">
                        Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after
                        you.
                        We’ll be sure to mark your special date with an unforgettable meal.
                    </p>
                    <p v-else-if="selectedEvent === 'Social Events'">
                        Are you looking to have a larger social event? No problem! We’re more than happy to cater for
                        big parties.
                        We’ll work with you to make your event a hit with everyone.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="bg-cover bg-center bg-[url('/images/homepage/ready-bg-mobile.jpg')] h-[328px] flex flex-col items-center justify-center text-center text-white">
            <h2>Ready to make a reservation?</h2>
            <NuxtLink to="/booking"
                class="bg-transparent border border-white py-3 px-6 text-sm font-medium hover:bg-white hover:text-black transition duration-200">
                BOOK A TABLE
            </NuxtLink>
        </div>
        <BaseFooter />
    </div>
</template>
