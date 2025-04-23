<script setup lang="ts">

</script>

<template>
    <div class="relative h-screen">
        <!-- Image above the text -->
        <BackgroundImage mobile-src="/images/homepage/hero-bg-mobile.jpg"
            tablet-src="/images/homepage/hero-bg-tablet.jpg" desktop-src="/images/homepage/hero-bg-desktop.jpg"
            alt="Exquisite Dining" />

        <!-- Text overlay positioned on top of the image -->
        <div class="absolute top-1/3 left-0 w-full text-white text-center px-6 py-12 z-10">
            <NuxtLink>
                <NuxtImg src="/images/logo.svg" class="mx-auto mb-2 w-[82.4px] h-[32px]" />
            </NuxtLink>
            <h1 class="text-[2rem] mt-9 md:text-4xl font-light mb-4">Exquisite dining since 1989</h1>
            <p class="text-base font-normal leading-relaxed mt-5 md:text-lg">
                Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce
                from the comfort of our farmhouse.
            </p>
            <BookingButton :link="'booking'" class="mt-12">
                BOOK A TABLE
            </BookingButton>
        </div>

        <!-- Image below the text, with overlap -->
        <div class="relative mx-6 -mt-20 text-center">
            <div>
                <ResponsiveImage mobile-src="/images/homepage/enjoyable-place-mobile.jpg"
                    tablet-src="/images/homepage/enjoyable-place-tablet.jpg"
                    desktop-src="/images/homepage/enjoyable-place-desktop.jpg" alt="Exquisite Dining" />
            </div>
            <div>
                <NuxtImg src="/images/patterns/pattern-divide.svg" class="mx-auto w-[71px] h-[7px] mt-12" />
                <h2 class="mt-8 text-3xl font-bold max-w-[327px] mx-auto">Enjoyable place for all the family</h2>
                <p class="mt-4 leading-7">
                    Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a
                    tour of the farm before your meal.
                </p>
            </div>
        </div>

        <div class="relative mx-6 mt-[101px] text-center">
            <div>
                <ResponsiveImage mobile-src="/images/homepage/locally-sourced-mobile.jpg"
                    tablet-src="/images/homepage/locally-sourced-tablet.jpg"
                    desktop-src="/images/homepage/locally-sourced-desktop.jpg" alt="Exquisite Dining" />
            </div>
            <div>
                <NuxtImg src="/images/patterns/pattern-divide.svg" class="mx-auto w-[71px] h-[7px] mt-12" />
                <h2 class="mt-8 text-3xl font-bold max-w-[327px] mx-auto">The most locally sourced food</h2>
                <p class="mt-4 leading-7">
                    All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
                    eating the freshest, most sustainable food.
                </p>
            </div>
        </div>

        <div class="mt-18 bg-black text-white text-center">
            <div class="mx-6 pt-16">
                <NuxtImg src="/images/patterns/pattern-divide.svg" class="mx-auto w-[71px] h-[7px]" />
                <h2 class="text-3xl mt-10 max-w-[327px] mx-auto">A few highlights from our menu</h2>
                <p class="mt-2 text-base font-normal leading-7">
                    We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our
                    menu
                    is revamped every season.
                </p>
            </div>

            <div class="mx-6 mt-18">
                <div>
                    <MenuHighlight title="Seared Salmon Fillet" description="Our locally sourced salmon served
                        with a refreshing buckwheat summer salad." mobileSrc="/images/homepage/salmon-mobile.jpg"
                        tablet-src="/images/homepage/salmon-desktop-tablet.jpg"
                        desktop-src="/images/homepage/salmon-desktop-tablet.jpg" alt="Seared Salmon Fillet" />
                </div>

                <hr class="mt-8 mb-7 border-t border-[#979797]" />

                <div>
                    <MenuHighlight title="Rosemary Filet Mignon" description="Our prime beef served to your taste
                        with a delicious choice of seasonal sides." mobileSrc="/images/homepage/beef-mobile.jpg"
                        tablet-src="/images/homepage/beef-desktop-tablet.jpg"
                        desktop-src="/images/homepage/beef-desktop-tablet.jpg" alt="Rosemary Filet Mignon" />
                </div>

                <hr class="mt-8 mb-7 border-t border-[#979797]" />

                <div class="pb-[102px]">
                    <MenuHighlight title="Summer Fruit Chocolate Mousse" description="Creamy mousse combined with
                        summer fruits and dark chocolate shavings." mobileSrc="/images/homepage/chocolate-mobile.jpg"
                        tablet-src="/images/homepage/chocolate-desktop-tablet.jpg"
                        desktop-src="/images/homepage/chocolate-desktop-tablet.jpg"
                        alt="Summer Fruit Chocolate Mousse" />
                </div>
            </div>
        </div>
        <FamilyGathering />
        <div
            class="bg-cover bg-center bg-[url('/images/homepage/ready-bg-mobile.jpg')] h-[328px] flex flex-col items-center justify-center text-center text-white">
            <h2 class="text-3xl font-bold mb-4 max-w-[327px] mx-auto">Ready to make a reservation?</h2>
            <BookingButton :link="'booking'">
                BOOK A TABLE
            </BookingButton>
        </div>
        <BaseFooter />
    </div>
</template>
