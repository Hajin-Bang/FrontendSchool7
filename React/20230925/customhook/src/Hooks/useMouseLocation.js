import { useState, useEffect } from "react";

function useMouseLocation(initVal) {
    const [mouseLocation, setMouseLocation] = useState(initVal || {x: null, y: null });
    // initVal 초기화 
    // 만약 initval값이 undefined라고 하면 파이프 연산자에서는 첫번째 trusthy, 마지막 falsy값을 반환

    //DOM을 이용해서 화면상의 마우스 좌표를 얻어내고 mouseLocation에 업데이트 해보세요.
    //mouseMove
    useEffect(()=> {
        window.addEventListener('mousemove', (event)=>{
            setMouseLocation({x: event.x, y: event.y})
        })
    }, [])
    return mouseLocation;
}

export default useMouseLocation;