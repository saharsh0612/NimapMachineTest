import React, { Component } from 'react';

export default class AddTask extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            task: '',
            completed: ''
        }
    }

    // Form Events
    onChangeId(e) {
        this.setState({ id: e.target.value })
    }

    onChangeTask(e) {
        this.setState({ task: e.target.value })
    }

    onChangeCompleted(e) {
        this.setState({ completed: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            id: '',
            task: '',
            completed: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('data'));

        if (localStorage.getItem('data')) {
            this.setState({
                id: this.userData.id,
                task: this.userData.task,
                completed: this.userData.completed
            })
        } else {
            this.setState({
                id: '',
                task: '',
                completed: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('data', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>id</label>
                        <input type="number" className="form-control" value={this.state.id} onChange={this.onChangeId} />
                    </div>
                    <div className="form-group">
                        <label>Task</label>
                        <input type="text" className="form-control" value={this.state.task} onChange={this.onChangeTask} />
                    </div>
                    <div className="form-group">
                        <label>Completed</label>
                        <input type="boolean" className="form-control" value={this.state.completed} onChange={this.onChangeCompleted} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}