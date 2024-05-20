import react from 'react'
import { Link } from 'react-router-dom'

export default function NewsNavbar(props) {
  return (
  
 <>
    <Link to= {props.path}>
    <button type="button" class="text-white text-mono bg-sky-400 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-4 my-4">{props.name}</button>
    </Link>
</>
  )
}
