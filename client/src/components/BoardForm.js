import React from 'react';

class BoardForm extends React.Component {
    defaultValues = { name: ''}
    state = { name: ''};

    componentDidMount() {
        if (this.props.id) {
            this.setState({...this.props})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const board = { ...this.state }
        this.props.submit(board)
        this.setState({...this.defaultValues})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value, });
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input 
            name="name"
            placeholder="Board Name"
            value={this.state.name}
            onChange={this.handleChange}
            />
        </form>
        )
    }
}

export default BoardForm;