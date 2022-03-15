import {useContext} from 'react'
import {ContextCounter} from '../context/GeneralContext'

function PlusOne(){
    const {setCounter, name} = useContext(ContextCounter)
    return(<button onClick={() => setCounter(prev => prev +1)}>{name}</button>)
}

export default PlusOne