export default function auth(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Andrew Espidol",
                avatar: "some linke",
                uid: 'andrewespidol'
            })
        }, 2000)
    })
}

export function checkIfAuthed(store){
    // ignore firebase
    return store.getState().isAuthed
}

function logout(){
    console.log("logout")
}