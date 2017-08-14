import React from "react";
import { M } from "./tex.js";
import {
	Text,
	Input,
	Box,
	Button,
	ButtonOutline,
	Panel,
	PanelHeader,
	Flex,
	Group
} from "rebass";
import { range, sample } from "lodash";

const rnd = (x, y) => sample(range(x, y));

class Exercise extends React.Component {
	constructor() {
		super();

		this.getInitialValues = this.getInitialValues.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
		this.reset = this.reset.bind(this);
		this.state = this.getInitialValues();
	}

	getInitialValues() {
		const [a, b, c, d, x, y] = range(6).map(x => rnd(-9, 9)),
			u = a * x + b * y,
			v = c * x + d * y;
		console.log(x, y);
		return { a, b, c, d, u, v, x, y, xx: "", yy: "" };
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value, correct: undefined });
	}

	submit() {
		const { x, y, xx, yy } = this.state;
		const correct = x === Number(xx) && y === Number(yy);
		if (correct) {
			console.log("Right!");
		} else {
			console.log("Wrong!");
		}
		this.setState({ correct });
	}

	reset() {
		this.setState(this.getInitialValues());
	}

	getMessage(correct) {
		if (correct === true) {
			return (
				<Text color="green">
					<b>Right!</b>
				</Text>
			);
		} else if (correct === false) {
			return (
				<Text color="red">
					<b>Wrong!</b>
				</Text>
			);
		} else {
			return <Text />;
		}
	}

	render() {
		const { a, b, c, d, u, v, xx, yy, correct } = this.state;
		return (
			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					Exercise
				</PanelHeader>
				<Box p={2} color="black">
					<p>
						Express{" "}
						<M>{`\\begin{pmatrix}${u}\\\\${v}\\end{pmatrix}`}</M> as
						a linear combination of{" "}
						<M
						>{`\\begin{pmatrix}${a}\\\\${c}\\end{pmatrix}`}</M>{" "}
						and{" "}
						<M>{`\\begin{pmatrix}${b}\\\\${d}\\end{pmatrix}`}</M>:
					</p>
					<Text center>
						<M>
							{`\\begin{pmatrix}${u}\\\\${v}\\end{pmatrix} =\\,\\,`}
						</M>
						<Input
							display="inline-block"
							name="xx"
							value={xx}
							onChange={this.handleChange}
							width="40px"
							style={{ textAlign: "right" }}
						/>
						<M>
							{`\\begin{pmatrix}${a}\\\\${c}\\end{pmatrix} +\\,\\,`}
						</M>
						<Input
							display="inline-block"
							name="yy"
							value={yy}
							onChange={this.handleChange}
							width="40px"
							style={{ textAlign: "right" }}
						/>
						<M>
							{`\\begin{pmatrix}${b}\\\\${d}\\end{pmatrix}`}
						</M>
					</Text>
					<br />
					<Flex
						direction="row"
						justify="space-between"
						align="center"
					>
						{this.getMessage(correct)}
						<Group>
							<ButtonOutline onClick={this.submit}>
								Submit
							</ButtonOutline>
							<Button onClick={this.reset}>Reset</Button>
						</Group>
					</Flex>
				</Box>
			</Panel>
		);
	}
}

export default Exercise;
