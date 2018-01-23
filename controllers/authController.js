import firebase from 'firebase';

class authController{
    uid = '';
    username = '';
    password = '';
    token = '';

    //Inicializate Firebase 
    constructor()   {
        firebase.initializeApp({
            apiKey: "AIzaSyBD4QarCQukFWylMnlrSAeeGavBAYRAnrU",
            authDomain: "personal-9b554.firebaseapp.com",
            databaseURL: "https://personal-9b554.firebaseio.com",
            projectId: "personal-9b554",
            storageBucket: "personal-9b554.appspot.com",
            messagingSenderId: "234589868101"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setUid(user.uid);
            }
        });
    }
}