import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentInfo from "./StduentInfo"


function App() {
  const [count, setCount] = useState(0)
  const students=[
    {name:"dhiraj",age:20,course:"AIML"},
    {name:"partik",age:20,course:"AMIL"}
  ]
  let name="Pratik";

  return (
    <>
    {
      students.map((student)=>
          <StudentInfo student={student}></StudentInfo>
      )
    }
      
    </>
  )
}

export default App
