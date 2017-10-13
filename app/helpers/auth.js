import { ref, firebaseAuth } from 'config/constants'

export default function auth(){
    return firebaseAuth().signInWithPopup(new firebaseAuth.FacebookAuthProvider())
}

export function checkIfAuthed(store){
    // ignore firebase
    return store.getState().isAuthed
}

export function logout(){
    return firebaseAuth().signout
}

export function saveUser(user){
    return ref.child(`users/${user.uid}`)
        .set(user)
        .then(() => user)
}