// import { db } from "./firebase-config";

function submit() {
    console.log('Hello world!')
    db.collection('urls').add({
        link: 'https://google.com'
    }).then(docRef => {
        console.log("Document add with ID: ", docRef.id);
    }).catch(error => {
        console.error("Add error document: ", error);
    });
}

function getLinks() {
    db.collection('links').get().then(querySnapshot => {
        querySnapshot.forEach(element => {
            console.log(`${element.id}: `, element.data());
        });
    })
}