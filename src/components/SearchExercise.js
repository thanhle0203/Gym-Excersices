import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';


export default class SearchExercise extends React.Component  {
    state = {
        exercisesName: []
    }

    searchChanged = event => {
        this.setState({ search: event.target.value })
    }

    handleSubmit= event => {
        event.preventDefault();

        const exercise = {
            exercisesName: this.state.exercisesName
        };

        axios.get(`http://localhost:5000/exercises`, {exercise})
            .then(res => {
                const exercisesName = res.data;
                this.setState({ exercisesName });
            })


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
    <div className='wrapper'>
        <div className='search-wrapper'>
            <div className='search col col-lg-6'>
                <form className='d-flex'>
                    <input
                        className='form-control me-2'
                        type="text"
                        value = {this.state.search}
                        onChange={this.searchChanged}
                        placeholder="Search an Exercise"
                        aria-label='Search'
                    />
                    <button className="btn btn-danger" type="button" onClick={this.handleSubmit}>Search</button>
                    
                </form>
        
            </div>
            <div className='searchCard card-grid'>
                {this.state.exercisesName
                    .filter(exercise => exercise.name.toLowerCase().includes(this.state.search))
                    .map(exercise => (
                        <div key={exercise.id} className="list-group card card-1">
                            <li className='list-group-item'>{exercise.name}</li>
                            <div className='card'>
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
                       
                    </div>
                    ))
                }
                    
            </div>
        </div>
    </div>
  )
}
}

