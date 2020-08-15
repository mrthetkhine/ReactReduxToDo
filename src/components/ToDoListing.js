import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {addTodo,removeToDo} from "../actions/ToDoAction";
const mapStateToProps = state => {
    return ({
        todos: state.todos
    })
}
const mapDispatchToProps = dispatch => {
    return {
        removeToDo: item => dispatch(removeToDo(item))
    }
}

const TodoListing = ({todos,removeToDo}) => {
    console.log(todos);
    const removeClick = (item) => {
       console.log('Remove Click',item);
       removeToDo(item);
    }

    return (
        <Container fluid>

            {
                todos.map((todo) => (
                    <Row key={todo.id} style={styles.itemRow}>
                        <Col xs={1}></Col>
                        <Col xs={4} style={styles.item}>
                            {todo.text}


                        </Col>
                        <Col xs={1}>
                            <Button variant="primary" type="button" onClick={()=>removeClick(todo)}>Remove</Button>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    )
}
let styles={
    itemRow:{
        marginBottom:10,
    },
    item:{

        borderBottom: '1px solid lightgray',
        textAlign:'left',
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListing);
