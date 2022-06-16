import React, { useContext} from 'react'
import { Biodata } from './ConA';

const ConC = () => {
    const myname= useContext(Biodata)
  return (
  <>
    <h1>my name is {myname}</h1>
  </>
  )
}

export default ConC;