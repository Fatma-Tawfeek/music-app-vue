import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    // use regular function to use this keyword but not arrow function
    // we don't use try catch in action to make it flixible to error in each component
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      })
      this.userLoggedIn = true
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)
      this.userLoggedIn = true
    },
    async signOut() {
      await auth.signOut()
      this.userLoggedIn = false
    },
  },
})
