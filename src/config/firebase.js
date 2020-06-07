import App from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCHpPs5qIkQZ3aqtZ6a5_v5OvYLF2gIP1s",
    authDomain: "firsttask-dc904.firebaseapp.com",
    databaseURL: "https://firsttask-dc904.firebaseio.com",
    projectId: "firsttask-dc904",
    storageBucket: "firsttask-dc904.appspot.com",
    messagingSenderId: "108499568291",
    appId: "1:108499568291:web:fb33214b3f44f398a86116",
    measurementId: "G-1302DRM6D7" 

};

class firebase {
    constructor() {
        App.initializeApp(firebaseConfig);
        this.auth = App.auth();
        this.db = App.firestore();
    }
    login(email,password){
        return this.auth.signInWithEmailAndPassword(email,password);
    }

    async register(email, password, firstName, lastName){
        await this.auth.createUserWithEmailAndPassword(email,password);
        return this.auth.currentUser.updateProfile({
            displayName: firstName + '' + lastName
        });
    }
     
    logout() {
        return this.auth.signOut()
    }

    getUser() {
        return this.auth.currentUser()
    }

    authChange(user) {
        return this.auth.onAuthStateChanged(user)
    }


}

export default new firebase();