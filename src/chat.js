import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

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
const parent = document.getElementById("msg-space");

let username = prompt("Enter a name:");

if (username === "")
{
    username = 'wa7d ma ya9dr ya3rf wsmo';
}

document.getElementById("sender").onclick = function()
{
    const database = getDatabase();

    let message = document.getElementById("msg").value;

    if (message === "") return;

    let messageId = generateKey();

    const refrence = ref(database, 'messages/'+username+'/'+messageId);

    set(refrence, {
        Username: username,
        Message: message,
        MessageId: messageId
    });

    let librr = document.createElement("li");
    librr.innerHTML += '<b>' + username + '</b>: ' + message;
    parent.appendChild(librr);

    document.getElementById("msg").value = "";
};
        
let num = 0;

window.onload = function()
{
    const dbRef = ref(getDatabase(), 'messages/');

    onValue(dbRef, (snapshot) => {
        if (num > 0)
        {
            return;
        }

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

                        let libb = document.createElement("li");
                        libb.innerHTML += '<b>'+ data.Username +'</b>: ' + data.Message;
                        parent.appendChild(libb);
                    });
                });
            });
        });
        num++;
    })   
}

function generateKey() {
    var length = 16,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}