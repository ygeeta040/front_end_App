import React, { createContext } from 'react'
import ConC from './ConC';

const Biodata =createContext();
const ConA = () => {


  return (
  <>
  <Biodata.Provider value={"geeta yadav"} >
<ConC/>
  </Biodata.Provider>
  </>
  )
}

export default ConA;
export {Biodata};