import {useContext} from 'react'
import {ContextCounter} from '../context/GeneralContext'
import PlusOne from './PlusOne'

function Counter(){
    const context = useContext(ContextCounter)
    console.log(context)
    return(<><h1>{context.counter}<PlusOne/></h1></>)
}
export default Counter