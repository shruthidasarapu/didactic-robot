import React, { useRef } from "react";

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


const App: React.FC<AppPropType> = ({
	todo,
    doing,
    done,
	deleteTodo,
	markTodo,
	markDoing,
    markDone
}) => {
	const input = useRef<HTMLInputElement>(null);

	const renderList = (type: "Todo" | "Doing" |"Done") => {
		 const looper  = type === "Todo" ? todo: "Doing" ? doing : done ;

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
								{/* <input key = {index}  type = "checkbox" onChange = {() =>
									type === "Todo" ? markDoing(todo) : "Doing" ? markDone(todo) : markTodo(todo)
									
								}></input>	 */}
								{type === "Todo" && (
								<span onClick={() => {
									markDoing(todo)
								}}> check </span>	
								)}
	                            {type === "Doing" && (
								<span onClick={() => {
									markDone(todo)
								}}> check </span>	
								)}
							     
								{type === "Done" && (
								<span onClick={() => {
									markTodo(todo)
								}}> check </span>	
								)}
							
								<span onClick={() => deleteTodo(todo)}> X </span>
							
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
	// type ListItems = {
	// 	text?: string;
	// 	date: number;
	// 	time: number;
	// }
	// const addTodo = (e: any) => {
	// const data= e.target;
    //  const newTodo: ListItems [] = [{
    //  text: data.text.value,
    //  date: data.date.value,
	//  time: data.time.value,
    // }]
	// markTodo(newTodo.data.text.value);
	// }

	return (
		<Container>
			<InputGroup className="m-3">
				<FormControl placeholder="Todo" ref={input}/>
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