<script setup lang="ts">
const form = ref({
    name: '',
    email: '',
    date: { mm: '', dd: '', yyyy: '' },
    time: { hr: '', min: '', ampm: 'AM' },
    people: 2
})

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const isSuccess = ref(false)

const validate = () => {
    errors.value = {}

    if (!form.value.name.trim()) {
        errors.value.name = 'Name is required'
    }

    if (!form.value.email.trim()) {
        errors.value.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email'
    }

    if (!form.value.date.mm || !form.value.date.dd || !form.value.date.yyyy) {
        errors.value.date = 'Full date is required'
    } else {
        const day = parseInt(form.value.date.dd)
        const month = parseInt(form.value.date.mm)
        const year = parseInt(form.value.date.yyyy)

        if (month < 1 || month > 12) {
            errors.value.date = 'Invalid month'
        }

        if (day < 1 || day > 31) {
            errors.value.date = 'Invalid day'
        }

        if (year < new Date().getFullYear()) {
            errors.value.date = 'Year must be current or future'
        }
    }

    if (!form.value.time.hr || !form.value.time.min) {
        errors.value.time = 'Time is required'
    } else {
        const hour = parseInt(form.value.time.hr)
        const minute = parseInt(form.value.time.min)

        if (hour < 1 || hour > 12) {
            errors.value.time = 'Invalid hour'
        }

        if (minute < 0 || minute > 59) {
            errors.value.time = 'Invalid minutes'
        }
    }

    return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
    if (!validate()) return

    isSubmitting.value = true

    try {
        const { data, error } = await useFetch('/api/bookings', {
            method: 'POST',
            body: {
                name: form.value.name,
                email: form.value.email,
                date: `${form.value.date.mm}/${form.value.date.dd}/${form.value.date.yyyy}`,
                time: `${form.value.time.hr}:${form.value.time.min} ${form.value.time.ampm}`,
                people: form.value.people
            }
        })

        if (error.value) throw error.value

        isSuccess.value = true
        form.value = {
            name: '',
            email: '',
            date: { mm: '', dd: '', yyyy: '' },
            time: { hr: '', min: '', ampm: 'AM' },
            people: 2
        }
        setTimeout(() => isSuccess.value = false, 3000)
    } catch (error) {
        console.error('Booking failed:', error)
        errors.value.submission = 'Failed to submit booking. Please try again.'
    } finally {
        isSubmitting.value = false
    }
}

function incrementPeople() {
    if (form.value.people < 10) form.value.people++
}

function decrementPeople() {
    if (form.value.people > 0) form.value.people--
}

</script>

<template>
    <form @submit.prevent="handleSubmit" class="relative -mt-24 mb-20 mx-6 bg-white p-6 -lg shadow-lg">
        <div v-if="isSuccess" class="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Booking submitted successfully!
        </div>

        <!-- Name -->
        <label for="name" class="block mb-2 text-sm"></label>
        <input type="text" id="name" v-model="form.name" class="w-full p-2 border-b border-gray-300 mb-4"
            :class="{ 'border-red-500': errors.name }" placeholder="Name" />
        <span v-if="errors.name" class="text-red-500 text-xs">{{ errors.name }}</span>

        <!-- Email -->
        <label for="email" class="block mb-2 text-sm"></label>
        <input type="email" id="email" v-model="form.email" class="w-full p-2 border-b border-gray-300 mb-4"
            :class="{ 'border-red-500': errors.email }" placeholder="Email">
        <span v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</span>

        <!-- Date -->
        <label for="date" class="block mb-2 text-sm">Pick a date</label>
        <div class="w-full flex space-x-2 mb-4 justify-between">
            <input v-model="form.date.mm" type="number" id="mm" placeholder="MM" min="1" max="12"
                class="w-16 p-2 border-b border-gray-300" :class="{ 'border-red-500': errors.date }" />
            <input v-model="form.date.dd" type="number" id="dd" placeholder="DD" min="1" max="31"
                class="w-16 p-2 border-b border-gray-300" :class="{ 'border-red-500': errors.date }" />
            <input v-model="form.date.yyyy" type="number" id="yyyy" placeholder="YYYY" min="2025"
                class="w-24 p-2 border-b border-gray-300" :class="{ 'border-red-500': errors.date }" />
        </div>
        <span v-if="errors.date" class="text-red-500 text-xs">{{ errors.date }}</span>

        <!-- Time -->
        <label for="time" class="block mb-2 text-sm">Pick a time</label>
        <div class="flex space-x-2 mb-4 justify-between">
            <input v-model="form.time.hr" type="number" id="hr" placeholder="HH" min="1" max="12"
                class="w-16 p-2 border-b border-gray-300">
            <input v-model="form.time.min" type="number" id="min" placeholder="MM" min="0" max="59"
                class="w-16 p-2 border-b border-gray-300">
            <select v-model="form.time.ampm" id="ampm" class="w-24 p-2 border-b border-gray-300">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
        <span v-if="errors.time" class="text-red-500 text-xs">{{ errors.time }}</span>

        <label for="people" class="block mb-2"></label>
        <div class="flex items-center mb-4 justify-between">
            <button type="button" @click="decrementPeople"
                class="w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-100"
                :disabled="form.people <= 0" :class="{ 'opacity-50 cursor-not-allowed': form.people <= 0 }">
                -
            </button>

            <div class="w-20 h-10 flex items-center justify-center">
                {{ form.people }} {{ form.people === 1 ? 'person' : 'people' }}
            </div>

            <!-- Increase Button (Right) -->
            <button type="button" @click="incrementPeople"
                class="w-10 h-10 cursor-pointer flex items-center justify-center hover:bg-gray-100"
                :disabled="form.people >= 10" :class="{ 'opacity-50 cursor-not-allowed': form.people >= 10 }">
                +
            </button>
        </div>

        <BookingButton type="submit" isSecondary="'true'">
            Make Reservation
        </BookingButton>
    </form>
</template>