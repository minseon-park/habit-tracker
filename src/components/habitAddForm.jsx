import React, { Component } from 'react'

class HabitAddForm extends Component {
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="please input your habit"/>
                <button className="add-button">Add</button>
            </form>
        )
    }
}

export default HabitAddForm;