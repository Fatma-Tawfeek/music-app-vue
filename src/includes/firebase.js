import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDTISWiQofupeFsCDH4XqpCuamKY3C9kpU',
  authDomain: 'music-ae2e7.firebaseapp.com',
  projectId: 'music-ae2e7',
  storageBucket: 'music-ae2e7.firebasestorage.app',
  appId: '1:838025947137:web:0500e5b98e249c1f8b3800',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
