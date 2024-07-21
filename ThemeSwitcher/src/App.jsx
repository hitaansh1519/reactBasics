import React, { useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

const [themeMode, setThemeMode] = useState("light")

const lightTheme = () => {
  setThemeMode("light")
}

const darkTheme = () => {
  setThemeMode("dark")
}

//actual change in theme

useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark"),
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

function App() {

  return (
    // <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    //   <div className="flex flex-wrap min-h-screen items-center">
    //     <div className="w-full">
    //         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
    //           <ThemeBtn/>
    //         </div>

    //         <div className="w-full max-w-sm mx-auto">
    //           <Card/>
    //         </div>
    //     </div>
    //   </div>
    // </ThemeProvider>
    <h1>Hello</h1>
  )
}

export default App;
