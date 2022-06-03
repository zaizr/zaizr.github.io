import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

const chatSpace = document.getElementById('sign-in');
if (chatSpace)
{
    chatSpace.style.display = "none";
}

const firebaseConfig = {
    apiKey: "AIzaSyCmXvfCS7CMvrYqKxJ6dJPztGVq2tj6t5A",
    authDomain: "wens-chat-app.firebaseapp.com",
    databaseURL: "https://wens-chat-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wens-chat-app",
    storageBucket: "wens-chat-app.appspot.com",
    messagingSenderId: "30225044058",
    appId: "1:30225044058:web:50685de0d3aea3c8e27e63",
    measurementId: "G-K5VYF0NBLM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider(); 
const google = document.getElementById('google');
const database = getDatabase();

let username = "";

if (google)
{
    google.onclick = function()
    {
        signInWithPopup(auth, provider)
        .then((result) => {
            username = result.user.displayName;
            chatSpace.style.display = "block";
            google.style.display = "none";
        }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
}

const messageBox = document.getElementById('msg');
let shiftDown = false;

messageBox.onfocus = function()
{
    document.addEventListener('keypress', function (e)
    {
        if(e.keyCode == 13)
        {
            e.preventDefault();
            let message = document.getElementById("msg").value;
    
            if (message === "") return;
        
            let messageId = generateKey();
        
            const refrence = ref(database, 'messages/'+username+'/'+messageId);
        
            set(refrence, {
                Username: username,
                Message: message,
                MessageId: messageId
            });
        
            document.getElementById("msg").value = "";
        }   
    });     
}

document.addEventListener('keydown',  function (e) {
    if(e.keyCode == 16) shiftDown = true;
});

document.addEventListener('keyup' , function (e) {
    if(e.keyCode == 16) shiftDown = false;
});

function generateKey() {
    var length = 16,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

const parent = document.getElementById("msg-space");
        
let final = '';

window.setInterval(
    function()
    {
        const dbRef = ref(getDatabase(), 'messages/');

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => 
            {
                let dbRef2 = childSnapshot.key;
    
                onValue(ref(getDatabase(), 'messages/' + dbRef2), (snapshot2) => {
                    snapshot2.forEach((childSnapshot2) =>
                    {
                        const childKey = childSnapshot2.key;
                        const starCountRef = ref(getDatabase(), 'messages/' + dbRef2 + '/' + childKey);

                        onValue(starCountRef, (snapshott) => {
                            const data = snapshott.val();
                            let msg = '<li><b>' + data.Username + '</b>: ' + data.Message + '<span>' + data.MessageId + '</span></li>';
                            if (final.includes(msg))
                            {
                            }
                            else
                            {
                                final += msg;
                                console.log(msg);
                            }
                        });
                    });
                });
            });
        })
        
        parent.innerHTML = final;
    }, 500);