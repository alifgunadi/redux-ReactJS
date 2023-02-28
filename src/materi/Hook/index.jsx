// import Counter from './pembahasan/Counter';
// import Effect from './pembahasan/Effect';
import { useState } from "react"
// import Identity from "./pembahasan/Identity"
import { useToggle } from "./pembahasan/useToggle";




const Hook = () => {
    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = useToggle();

    const style = {
        background: lampu ? "yellow" : 'black',
        textAlign: 'center',
        height: '400px'
    }

    const saklar = () => {
        setLampu(!lampu);
        setLabel(e => {
            if(e === 'ON') {
                return 'OFF'
            }
        })
    }

    return(
        <div style={style}>
            {/* <Counter/> */}
            {/* <Effect/> */}
            {/* <Identity/> */}
            <button onClick={saklar}> tombol {label} </button>
        </div>
    )
}

export default Hook