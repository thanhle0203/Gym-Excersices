import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class ExerciseList extends React.Component {

    state = {
        id: '',
        exercisesName: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/exercises/${this.state.id}`)
            .then(res => {
                const exercisesName = res.data;
                this.setState({ exercisesName });
            })
    }

    render() {
        return (
            
            <div className='ListExercise card' >
                {this.state.exercisesName.map( (exercise) => 
                    
                        <div className='card'>
                            <h5 className='card-title'>{exercise.name}</h5>
                            <video width="400" height="300" controls>
                                <source src={exercise.video} type="video/mp4" />
                            </video>
                            <div className='card-body'>
                                
                                <p className='card-text'>{exercise.description}</p>
                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>{exercise.muscle_groups}</li>
                                <li className='list-group-item'>{exercise.equipment_required}</li>
                                <li className='list-group-item'>{exercise.movement_patterns}</li>
                            </ul>
                        </div>
                    
                    
                )}
            </div>
            
           
            
          )
    }
  
  
}

