import React, { useState, useRef } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { deleteTodo, markDoing, markDone, markTodo } from "./action";
import storeTypes from "./types/storeTypes";
import AppPropType from "./AppPropType";
import moment from "moment";

const App: React.FC<AppPropType> = ({
  todo,
  doing,
  done,
  deleteTodo,
  markTodo,
  markDoing,
  markDone,
}) => {
  const input = useRef<HTMLInputElement>(null);
  const [deadline, setDeadline] = useState<string>(
    moment(new Date()).format("YYYY-MM-DD")
  );

  const renderList = (type: "Todo" | "Doing" | "Done") => {
    const looper = type === "Todo" ? todo : type === "Doing" ? doing : done;

    return (
      <ListGroup variant="flush" className="m-2">
        <h3>{type}</h3>
        {looper.map((todo, index) => {
          return (
            <ListGroupItem
              key={index}
              variant={type === "Done" ? "success" : "danger"}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{todo}</div>
              <div>
                <i
                  className={`fas fa-${
                    type === "Done"
                      ? "check"
                      : type === "Doing"
                      ? "plus"
                      : "minus"
                  } m-2`}
                  onClick={() => {
                    type === "Todo"
                      ? markDoing(todo)
                      : type === "Doing"
                      ? markDone(todo)
                      : markTodo(todo);
                  }}
                ></i>
                <i
                  className={`fas fa-trash m-2`}
                  onClick={() => deleteTodo(todo)}
                ></i>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  const addTodo = () => {
    if (input.current) {
      const val = input.current.value;
      input.current.value = "";
      markTodo(val);
    }
  };

  return (
    <Container>
      <InputGroup className="m-3">
        <FormControl placeholder="Todo" ref={input} />
        <span>
          <InputGroup>
            <FormControl
              type="date"
              placeholder="deadline(optional)"
              value={deadline}
              onChange={() => setDeadline("")}
            />
          </InputGroup>
        </span>
        <span>
          <InputGroup>
            <Button variant="secondary" onClick={() => addTodo()}>
              <i className="fas fa-plus mr-3"></i>
              Add
            </Button>
          </InputGroup>
        </span>
      </InputGroup>
      {renderList("Todo")}
      {renderList("Doing")}
      {renderList("Done")}
    </Container>
  );
};

const mapStateToProps = (state: storeTypes) => {
  return {
    todo: state.todo,
    doing: state.doing,
    done: state.done,
  };
};

export default connect(mapStateToProps, {
  deleteTodo,
  markTodo,
  markDoing,
  markDone,
})(App);
