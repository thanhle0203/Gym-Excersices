import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const SingleExersice = () => {
    const [exercises, setExercise] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleExercise(id);
        }
    }, [id]);

    const getSingleExercise = async (id) => {
        const response = await axios.get(`http://localhost:5000/exercises/${id}`);
        if (response.status === 200) {
            setExercise({ ...response.data[0]});
        }
    };

  return (
    <>
    {this.state.exercises.map( (exercise) => 
        
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

</>
  );
};

export default SingleExersice