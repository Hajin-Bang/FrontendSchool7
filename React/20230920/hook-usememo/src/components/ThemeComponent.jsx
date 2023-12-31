import React, {useContext} from 'react'
import { ThemeContext } from '../DarkMode'

export default function ThemeComponent() {
    const { theme } = useContext(ThemeContext);
  return (
    //전역 context 객체에 접근해서 theme 값을 사용한다. 
    <div style={{color: theme === 'black' ? "gray" : "black"}}>현재 테마: {theme} </div>
  )
}
