import React, { Component } from 'react'
import DaysOfWeek from '../DaysOfWeek'
import MovieLogoList from '../MovieLogoList'

export default class ScheduleMovie extends Component {
    render() {
        return (
            <div>
                <MovieLogoList/>
                <DaysOfWeek/>
            </div>
        )
    }
}
