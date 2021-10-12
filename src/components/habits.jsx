import React, { Component } from 'react'
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: "reading", count: 0, },
            {id: 2, name: "running", count: 0, },
            {id: 3, name: "coding", count: 0, },
        ],
    }
    handleIncrement = (habit) => {
        console.log(`Increment ${habit.name}`);
    }
    handleDecrement = (habit) => {
        console.log(`Decrement ${habit.name}`);
    }
    handleDelete = (habit) => {
        console.log(`Delete ${habit.name}`);
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit key={habit.id} habit={habit} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        )
    }
}
export default Habits;