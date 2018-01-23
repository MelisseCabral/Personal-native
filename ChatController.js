import firebase from 'firebase';

class ChatController {
    uid = '';
    messagesRef = null;

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
            } else {
                firebase.auth().signInAnonymously().catch((error) =>{
                    alert(error.message);
                });
            }
        });
    }
    setUid(value) {
        this.uid = value;
    }
    getUid(){
        return this.uid;
    }

    loadMessages(callback){
        this.messagesRef = firebase.database().ref('messages');
        this. messagesRef.off();

        const onReceive = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    _id: message.user._id,
                    name: message.user.name,
                },
            });
        };
        this.messagesRef.limitToLast(20).on('child_added', onReceive);
    }
    sendMessage(message) {
        for(let i =0; i < message.lenght; i++){
            this.messageRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
            });
        }
    }

    closeChat() {
        if(this.messageRef){
            this.messageRef.off();
        }
    }
}

export default new ChatController();