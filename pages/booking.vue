<script setup lang="ts">
const people = ref(2)
</script>

<template>
    <div>
        <div
            class="bg-cover bg-center bg-no-repeat bg-[url('/images/booking/hero-bg-mobile.jpg')] h-[600px] flex flex-col items-center justify-center gap-8 text-center text-white">
            <NuxtImg src="/images/logo.svg" class="mx-auto mb-2 w-[82.4px] h-[32px]" />
            <h2 class="text-3xl">Reservations</h2>
            <p class="mx-6 leading-7">
                We can’t wait to host you. If you have any special requirements please feel free to call on the phone
                number
                below. We’ll be happy to accommodate you.
            </p>
            <BookingButton :link="''">
                RESERVE PLACE
            </BookingButton>
        </div>

        <BookingForm />
        <BaseFooter />
    </div>
</template>