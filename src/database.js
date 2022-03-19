// import { useState, useEffect } from "react";
// import firebase from "./firebase";

// export const useDatabasePush = (endpoint) => {
//   const [status, setStatus] = useState("");

//   const save = (data) => {
//     const ref = firebase.database().ref(endpoint);
//     ref.push(data, (err) => {
//       if (err) {
//         setStatus("ERROR");
//       } else {
//         setStatus("SUCCESS");
//       }
//     });
//   };
//   return [status, save];
// };

// export const useDatabase = (endpoint) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const ref = firebase.database().ref(endpoint);
//     ref.on("value", (snapshot) => {
//       setData(snapshot.val());
//     });
//     return () => {
//       ref.off(); //limpar a conexao com o firebase (performance)
//     };
//   }, [endpoint]);
//   return data;
// };



import { useState, useEffect } from 'react'
import firebase from './firebase'

// Salva dados no banco
export const useDatabasePush = endpoint => {
    const [status, setStatus] = useState('')
    const save = data => {
      const ref = firebase.database().ref(endpoint)
      ref.push(data, err => {
        if(err){
          setStatus('ERROR')
        }else{
          setStatus('SUCESS')
        }
      })
    }
    return [status, save]
  }
  

export const useDatabase = endpoint => {
    const [data, setData] = useState({})
    useEffect(() => {
      const ref =  firebase.database().ref(endpoint)
      ref.on('value', snapshot => {
        setData(snapshot.val())
      })
      return () => {
        ref.off() // desconecta do Firebase
      }
    }, [endpoint])
    return data
  }