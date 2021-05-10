import React, {useReducer} from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
//importo firebase de la carpeta firebase externa
import firebase from '../../firebase'; //importo el objeto firebase con las configuraicones
const FirebaseState = props => {
  console.log(firebase);
  const initialState = {
    menu: [],
  };
  //use reducer con dispatch para ejecutar funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase 
      }}
      >
      {props.children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseState;

//el state sirve para consultar toda la base de datos
