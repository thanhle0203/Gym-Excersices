import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ExerciseDetail = () => {
    const [exercises, setExercise] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/exercises/${id}`)
            .then((res) => {
                const singleExercises = res.data;
                setExercise(singleExercises);
        });
    }, [id]);

  return (
    <div>
        <h1>{exercises && exercises.name}</h1>
    </div>
  );
};

export default ExerciseDetail