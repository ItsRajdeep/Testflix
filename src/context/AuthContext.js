 import { createContext , useContext,useEffect,useState} from "react";
 import {auth, db } from "../firebase";
 import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
 import {setDoc,doc } from "firebase/firestore"
 
 const AuthContext =createContext();

 export function AuthContextProvider({children}){
   
    const [user, setUser] = useState({})
    
    async function  signUp(email,password){
        const x= await createUserWithEmailAndPassword(auth,email,password);
        console.log(x)
        await setDoc(doc( db,'users',email),{
            saveShows:[]
        })
        // console.log(data)
        // return await createUserWithEmailAndPassword(auth, email, password);
    }
    // async function add(email,password){
    //     const x= await createUserWithEmailAndPassword(auth,email,password);
    //     console.log(x)
    //     await setDoc(doc( db,'users',email),{
    //         savedShows:[]
    //     })
    // }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth)
    }
    
    useEffect(() => {
        
        const unsub = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);  
        });
    
      return () => {
       unsub();
      };
    })
    

    return(
<AuthContext.Provider value={{signUp ,logIn , logOut, user}}>
    {children}
</AuthContext.Provider>
    )
 }

 export function UserAuth(){
    return useContext(AuthContext);
 }