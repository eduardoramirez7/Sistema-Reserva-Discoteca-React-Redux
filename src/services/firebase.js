import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCZwmOircqZ38H7FV1Q0foOzBGDCiYyDoI",
    authDomain: "reserva-discoteca.firebaseapp.com",
    databaseURL: "https://reserva-discoteca-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();