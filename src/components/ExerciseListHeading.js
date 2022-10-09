import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class ExerciseListHeading extends React.Component {

    state = {
        exercisesName: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/exercises`)
            .then(res => {
                const exercisesName = res.data;
                this.setState({ exercisesName });
            })
    }

    render() {
        return (
            <>
            
                {this.state.exercisesName.map( (exercise) => 
                    <di>
                        <Link to={"/exercises/:id"} ><p>{exercise.name}</p></Link>
                    </di>
                
                )}
            
            </>
            
          )
    }
  
  
}

