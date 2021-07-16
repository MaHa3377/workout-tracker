import React, { useState, Fragment } from 'react';

import AddExercise from './components/Exercise/AddExercise';
import ExerciseList from './components/Exercise/ExerciseList';

function App() {
  const[exerciseList, setExerciseList] = useState([]);

  const addExerciseHandler =(eName, eRep, eWei, eWorkload) => {
    setExerciseList((prevExerciseList) => {
      
      return [
        ...prevExerciseList,
        {exercise: eName, rep: eRep, weight: eWei, total: eWorkload, id: Math.random().toString()},
      ] 

    })
  }

  return(
    <Fragment>
      <AddExercise onAddExercise={addExerciseHandler} />
      <ExerciseList exercise={exerciseList} />
    </Fragment>
  )
}

export default App;
