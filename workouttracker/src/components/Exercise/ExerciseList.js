import React from 'react'

import Card from '../UI/Card'
import classes from './ExerciseList.module.css'

function UserList(props){
    return(
        <Card className={classes.exercise}>
            <ul>
                {props.exercise.map((exerc) => (
                    <li key={exerc.id}>
                        {exerc.exercise} | {exerc.rep} Rep | {exerc.weight} kg | {exerc.rep*exerc.weight} Total kg
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;