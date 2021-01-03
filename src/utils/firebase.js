import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: 'AIzaSyDNSQAsnv1OEmLxu4h88LjTy_l6KH5wQ38',
    authDomain: 'routes-418d1.firebaseapp.com',
    projectId: 'routes-418d1',
    storageBucket: 'routes-418d1.appspot.com',
    messagingSenderId: '552648850506',
    appId: '1:552648850506:web:79dc36e33e8e4a3c65fab3',
    measurementId: 'G-KY3PEK8TYJ',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//firebase.analytics()
const db = firebase.firestore()

export { db }
