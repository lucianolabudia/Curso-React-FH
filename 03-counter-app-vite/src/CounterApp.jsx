import { useState } from 'react'
import Proptypes from 'prop-types';



export const CounterApp = ({ value }) => {

    console.log('render');
    // API... FETCH.... ....

    const [ counter, setCounter ] = useState( value );

    const handleAdd = (event) => {
        // console.log(event);
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: Proptypes.number.isRequired,
}

