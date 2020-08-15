import React from 'react';
import { connect } from 'react-redux';
import {Form, FormGroup, Col, Button} from 'react-bootstrap';
import {addTodo} from "../actions/ToDoAction";

const AddTodo = ({dispatch}) => {
    let input;
    const onSubmit = (e) => {
        e.preventDefault();
        if(!input.value.trim()) return;
        console.log(input.value);
        dispatch(addTodo(input.value));
        input.value = '';

    }
    return (
        <Form onSubmit={onSubmit} style={styles.addForm}>
            <Form.Row>
                <Col xs={1}>
                    <Form.Label>To Do Item</Form.Label>
                </Col>
                <Col xs={4}>
                    <Form.Control type="text" placeholder="Enter todo" ref={(refNode) => input = refNode}/>
                </Col>
                <Col xs={1}>
                    <Button variant="primary" type="submit">Add</Button>
                </Col>
            </Form.Row>

        </Form>
    )
}
let styles= {
    addForm:{
        marginBottom:10,
    }
}
export default connect()(AddTodo);
