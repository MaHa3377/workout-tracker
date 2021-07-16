import React, {useState, /*useRef*/} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddExcercise.module.css';

function AddExcercise(props){
    // const exerciseInputRef = useRef();
    // const repInputRef = useRef();
    // const weightInputRef = useRef();

    const[enteredExercise, setEnteredExercise] = useState('');
    const[enteredRep, setEnteredRep] = useState('');
    const[enteredWeight, setEnteredWeight] = useState('');

    const [error, setError] = useState();

    const addExerciseHandler = (event) => {
        event.preventDefault();

        //Store the real DOM Node
        // const enteredExercise = exerciseInputRef.current.value;
        // const enteredRep = repInputRef.current.value;
        // const enteredWeight = weightInputRef.current.value;

        // validation User input
        if(enteredExercise.trim().length === 0 || enteredRep.trim().length === 0 || enteredWeight.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter all fields, no empty values.',
            });
            return;
        }
        if(+enteredRep < 1 || +enteredWeight < 1){
            setError({
                title: 'Invalid Repetition or Weight',
                message:'Please enter Repetition and Weight bigger then 0',
            });
            return;
        }
        props.onAddExercise(enteredExercise, enteredRep, enteredWeight);
        // exerciseInputRef.current.value = '';
        // repInputRef.current.value = '';
        // weightInputRef.current.value = '';

        // No more state needed because of refs value
        setEnteredExercise('');
        setEnteredRep('');
        setEnteredWeight('');
    };

    const exerciseChangeHandler = (event) => {
        setEnteredExercise(event.target.value);
    };

    const repChangeHandler = (event) => {
        setEnteredRep(event.target.value);
    };

    const weightChangeHandler = (event) => {
        setEnteredWeight(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return(
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <h2>TOP FIT - Workout Tracker</h2>
                <form onSubmit={addExerciseHandler}>
                    <label htmlFor="exercise">Exercise</label>
                    <input
                        id="exercise"
                        type="text"
                        value={enteredExercise}
                        onChange={exerciseChangeHandler}
                        // ref={exerciseInputRef}
                    />
                    <label htmlFor="repetition">Repetition</label>
                    <input
                        id="repetition"
                        type="number"
                        value={enteredRep}
                        onChange={repChangeHandler}
                        // ref={repInputRef}
                    />
                    <label htmlFor="weight">Weight</label>
                    <input
                        id="weight"
                        type="number"
                        value={enteredWeight}
                        onChange={weightChangeHandler}
                        // ref={weightInputRef}
                    />
                    <Button type="submit">Add Exercise</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddExcercise;
