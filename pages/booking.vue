<script setup lang="ts">

</script>

<template>
    <div>
        <!-- Background image and content section -->
        <div
            class="bg-cover bg-center bg-no-repeat bg-[url('/images/booking/hero-bg-mobile.jpg')] h-[600px] flex flex-col items-center justify-center text-center text-white">
            <NuxtImg src="/images/logo.svg" class="mx-auto mb-2 w-[82.4px] h-[32px]" />
            <h2>Reservations</h2>
            <p class="mx-6">
                We can’t wait to host you. If you have any special requirements please feel free to call on the phone
                number
                below. We’ll be happy to accommodate you.
            </p>
            <NuxtLink to="/booking"
                class="bg-transparent border border-white py-3 px-6 text-sm font-medium hover:bg-white hover:text-black transition duration-200">
                Reserve Place
            </NuxtLink>
        </div>

        <!-- Form section with slight overlap -->
        <form class="relative -mt-24 mb-20 mx-6 bg-white p-6 -lg shadow-lg">
            <label for="name" class="block mb-2 text-sm">Name</label>
            <input type="text" id="name" class="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter your name">

            <label for="email" class="block mb-2 text-sm">Email</label>
            <input type="email" id="email" class="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter your email">

            <label for="date" class="block mb-2 text-sm">Date</label>
            <div class="flex space-x-2 mb-4">
                <input type="number" id="mm" placeholder="MM" class="w-16 p-2 border border-gray-300 rounded">
                <input type="number" id="dd" placeholder="DD" class="w-16 p-2 border border-gray-300 rounded">
                <input type="number" id="yyyy" placeholder="YYYY" class="w-24 p-2 border border-gray-300 rounded">
            </div>

            <label for="time" class="block mb-2 text-sm">Time</label>
            <div class="flex space-x-2 mb-4">
                <input type="number" id="hr" placeholder="HH" class="w-16 p-2 border border-gray-300 rounded">
                <input type="number" id="min" placeholder="MM" class="w-16 p-2 border border-gray-300 rounded">
                <select id="ampm" class="w-24 p-2 border border-gray-300 rounded">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>

            <button type="submit"
                class="w-full py-3 px-6 bg-blue-500 text-white font-medium rounded hover:bg-blue-600">Book a
                Table</button>
        </form>
        <BaseFooter />
    </div>
</template>