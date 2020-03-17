import React, {Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
        
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        
        return (
            <form onSubmit = {this.onSubmit}>
                <input type="text" name="title" placeholder="Ingrese tarea" onChange = {this.onChange}/>
                <br/>
                <textarea name="description" placeholder="Descripcion de la tarea" onChange = {this.onChange}></textarea>
                <button type="submit">
                    Enviar
                </button>
            </form>
        )
    }

}