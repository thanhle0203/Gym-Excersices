import React, {useState} from 'react'
import ExerciseList from './components/ExerciseList'
import ExerciseListHeading from './components/ExerciseListHeading'
import SearchExercise from './components/SearchExercise'


const Home = () => {
    
  return (
    <div className="Home">
        <div className='searchExercise'>
           <SearchExercise />
        </div>
        <div className='row'>
            <div className='col'>
                <div className='exercise__list'>  
                    <h1>Exercise List</h1>
                    <ExerciseListHeading />
                </div>
            </div>
            
            <div className='col'>
                <div className='exercise__detail'>
                   <ExerciseList /> 
                </div>
                        
            </div>
        </div>
    </div>
  )
}

export default Home