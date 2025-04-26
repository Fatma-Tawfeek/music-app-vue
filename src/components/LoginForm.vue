<template>
  <vee-form v-show="tab === 'login'" :validation-schema="loginSchema" @submit="login">
    <div
      class="text-white text-center font-bold p-5 rounded mb-4"
      v-if="log_show_alert"
      :class="log_alert_variant"
    >
      {{ log_alert_msg }}
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="log_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from 'pinia'
import useUserStore from '../stores/user'
export default {
  props: ['tab'],
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:9|max:100',
      },
      log_in_submission: false,
      log_show_alert: false,
      log_alert_variant: 'bg-blue-500',
      log_alert_msg: 'Please wait!we are logging you in.',
    }
  },
  methods: {
    ...mapActions(useUserStore, ['authenticate']),
    async login(values) {
      this.log_show_alert = true
      this.log_in_submission = true
      this.log_alert_variant = 'bg-blue-500'
      this.log_alert_msg = 'Please wait!we are logging you in.'

      try {
        await this.authenticate(values)
      } catch (error) {
        this.log_in_submission = false
        this.log_alert_variant = 'bg-red-500'
        this.log_alert_msg = 'Invalid login details.'
        return
      }

      this.log_alert_variant = 'bg-green-500'
      this.log_alert_msg = 'Success! You are now logged in.'
      window.location.reload()
    },
  },
}
</script>

<style lang="scss" scoped></style>
