import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../app/Features/Counter/action.js";


const Counter = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
      <div>
        <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
        {' '}<span>{count.count}</span>{' '}
        <button onClick={() => dispatch(increment(1))}>+</button>
      </div>
    )
}


export default Counter;

// Button another way:
/* <button onClick={() => dispatch({type: 'DEC', value: 1})}>-</button> */
/* <button onClick={() => dispatch({type: 'INC', value: 1})}>+</button> */
