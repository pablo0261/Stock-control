import React, { useEffect, useRef, useState } from 'react'

type  TimerArgs = {
    milisegundos: number
}


const Timer = ({milisegundos}:TimerArgs) => {

    const [segundos, setSegundos] = useState(0)
    const Ref = useRef<NodeJS.Timeout>()
    
    useEffect(() => {
      Ref.current = setInterval(() => {setSegundos((s) => s + 1)}, milisegundos)
      return () => {
        clearInterval(Ref.current!);
    };
    }, [milisegundos])
    
  return (
    <h4>Timer: <small>{segundos}</small></h4>
  )
}

export default Timer