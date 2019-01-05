import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header, Segment, Button, Icon, Grid } from 'semantic-ui-react';
import BoardForm from './BoardForm';

class Boards extends React.Component {
    state = { boards: [] }

    componentDidMount() {
        axios.get('/api/boards')
        .then( res => {
            this.setState({ boards: res.data  })
        })
    }

    form = () => {
        return <BoardForm submit={this.submit} />
    }

    submit = (board) => {
        axios.post('/api/boards', { board })
        .then( res => {
            this.setState({boards: [res.data, ...this.state.boards]})
        } )
    }

    deleteBoard = (id) => {
        axios.delete(`/api/blogs/${id}`)
        .then ( res => {
            const { boards } = this.state
            this.setState({ boards: boards.filter( t => t.id !== id ) })
        } )
    }

    renderBoards = () => {
        return this.state.boards.map( p => {
            return (
                <Grid.Column>
                    <div key={p.id}>
                                <Header as="h3">
                                <Link 
                                to={`/blogs/${p.id}`}>
                                {p.title}
                                </Link>
                                </Header>
                                <Button
                                    icon
                                    color="red"
                                    size="small"
                                    onClick={() => this.deleteBoard(p.id)}
                                    style={{marginLeft: "16px"}}
                                >
                                    <Icon name="trash" />
                                </Button>
                    </div>
                </Grid.Column>
            )
        })
    }

    render () {
        return (
            <div style ={{Margin: '15px'}}>
                <Segment style={{textAlign:'center'}}>
                <Header as="h1">Boards</Header>
                <Header as="h3">Add Board</Header>
                { this.form() }
                </Segment>
                <div>
                <Grid columns="five">
                { this.renderBoards}
                </Grid>
                </div>
            </div>
        )
    }

}

export default Boards;