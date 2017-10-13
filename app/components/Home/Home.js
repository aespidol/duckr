import React, { PropType } from 'react'
import {container, title, slogan} from './styles.css'
export default function Home (props) {
  return (
    <div className={container}>
      <div className={title}>Duckr</div>
      <p className={slogan}>The real time, cloud based, modular, etc.</p>
    </div>
  )
}
