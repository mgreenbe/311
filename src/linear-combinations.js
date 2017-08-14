import React from "react";
import {
	Text,
	Flex,
	Panel,
	PanelHeader,
	Box,
	Subhead,
	Blockquote
} from "rebass";
import { M, MM } from "./tex.js";
import __html from "./svgtest.js";
import Exercise from "./exercise.js";

const LinearCombinations = () => {
	return (
		<div>
			<Subhead>
				Linear combinations in <M>{"\\RR^n"}</M>
			</Subhead>
			<br />
			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					Definition
				</PanelHeader>
				<Box p={2} color="black">
					Let <M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M> be vectors in{" "}
					<M>{"\\mathbb{R}^n"}</M>. A{" "}
					<b>
						linear combination of{" "}
						<M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M>
					</b>{" "}
					is a vector of the form
					<MM>{"t_0\\mathbf{x}_0+\\cdots + t_{n-1}\\mathbf{x}_{n-1},"}</MM>{" "}
					where the <M>t_j</M> are scalars.
				</Box>
			</Panel>
			<br />
			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					<Flex align="center" justify="space-between">
						<span>Figure</span>
						<span>
							<M>w</M> is a linear combination of <M>v_1</M> and <M>v_2</M>
						</span>
					</Flex>
				</PanelHeader>
				<Box p={2}>
					<Flex justify="center" dangerouslySetInnerHTML={{ __html }} />
				</Box>
			</Panel>
			<br />

			<Exercise />
			<br />

			<Subhead>Weighted sums</Subhead>

			<br />

			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					<Flex align="center" justify="space-between">
						<span>Theorem</span>
						<Text color="greenyellow">
							<i>Linear combinations are just matrix-vector products.</i>
						</Text>
					</Flex>
				</PanelHeader>
				<Box p={2} color="black">
					A vector <M>{"\\bu\\in\\RR^{m\\times 1}"}</M> is a linear combination
					of vectors {" "}
					<MM>
						{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}\\in\\RR^{m\\times 1}"}
					</MM>
					if and only if there is a vector <M>{"\\bt\\in\\RR^{n\\times 1}"}</M>{" "}
					such that <MM>{"\\bu=\\bx\\bt,"}</MM> where <M>{"\\bx"}</M> is the{" "}
					<M>{"m\\times n"}</M> matrix whose <M>{"j"}</M>-th column is{" "}
					<M>{"\\bx_j"}</M>:
					<MM>
						{
							"\\bx=\\begin{pmatrix}\\bx_0&\\bx_1&\\cdots&\\bx_{n-1}\\end{pmatrix}."
						}
					</MM>
				</Box>
			</Panel>
			<br />
			<Panel color="blue">
				<Box p={2} color="black">
					<b>Proof:</b> First, observe that the matrix identity
					<MM>
						{`\\begin{pmatrix}\\bx_0&\\bx_1&\\cdots&\\bx_{n-1}\\end{pmatrix}
							\\begin{pmatrix}t_1\\\\t_2\\\\[1ex]\\vdots\\\\t_{n-1}\\end{pmatrix}
							=t_0\\bx_0+t_1\\bx_1+\\cdots+t_{n-1}\\bx_{n-1}.\\pod\\flat`}
					</MM>
					holds, by the definition of matrix multiplication. (You should verify
					the details of this simple but important fact; see the exercise,
					below.)
					<p>
						Now, suppose <M>{"\\bu"}</M> is a linear combination of{" "}
						<M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M>:
						<MM>
							{"\\bu=t_0\\bx_0+t_1\\bx_1+\\cdots+t_{n-1}\\bx_{n-1}."}
						</MM>{" "}
						Then, letting{" "}
						<MM>
							{
								"\\bt=\\begin{pmatrix}t_0\\\\[1ex]\\vdots\\\\t_{n-1}\\end{pmatrix}\\in\\RR^n,"
							}
						</MM>
						we have <M>{"\\bu=\\bx\\bt,"}</M> by <M>{"(\\flat)"}</M>.
					</p>
					<p>
						Conversely, if <M>{"\\bu=\\bt\\bx"}</M>, with <M>{"\\bt"}</M> as
						above, then{" "}
						<MM>{"\\bu=t_0\\bx_0+t_1\\bx_1+\\cdots+t_{n-1}\\bx_{n-1},"}</MM>
						by <M>{"(\\flat)"}</M>.
					</p>
				</Box>
			</Panel>
			<br />
			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					Exercise
				</PanelHeader>
				<Box p={2} color="black">
					Verify identity <M>{"(\\flat)"}</M>, by hand, for <M>{"m=n=2"}</M>.
					You might write{" "}
					<MM>
						{`\\bx_0=\\begin{pmatrix}a\\\\c\\end{pmatrix},
							\\qquad
							\\bx_1=\\begin{pmatrix}b\\\\d\\end{pmatrix},`}
					</MM>
					in which case
					<MM>{`\\bx=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}.`}</MM>
					Verify some other cases of <M>{"(\\flat)"}</M> with{" "}
					<M>{"1\\leq m, n\\leq 3."}</M> Can you do the argue the general case?
				</Box>
			</Panel>
			<br />

			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					Exercise
				</PanelHeader>
				<Box p={2} color="black">
					Suppose that <MM>
						{"A=\\begin{pmatrix}A_1&A_2&A_3\\end{pmatrix}"}
					</MM>{" "}
					is a <M>{"2\\times 3"}</M> matrix such that
					<MM>{`A\\begin{pmatrix}1&2\\\\3&4\\\\5&6\\end{pmatrix}
					=\\begin{pmatrix}7&8\\\\9&10\\end{pmatrix}.\\pod\\star`}</MM>
					Write <M>{"\\begin{pmatrix}11\\\\12\\end{pmatrix}"}</M> as a linear
					combination of the columns of <M>{"A"}</M>:
					<p>
						Is it possible to solve this exercise by first solving equation{" "}
						<M>{"(\\star)"}</M> for <M>{"A?"}</M>
					</p>
				</Box>
			</Panel>
			<br />

			{false &&
				<Panel color="blue">
					<Box p={2}>
						<Blockquote center color="black">
							<i>Linear combinations are matrix-vector products.</i>
						</Blockquote>
					</Box>
				</Panel>}

			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					<Flex align="center" justify="space-between">
						<Text>Theorem</Text>
						<Text color="greenyellow">
							<i>
								Linear combinations of linear combinations are linear
								combinations.
							</i>
						</Text>
					</Flex>
				</PanelHeader>
				<Box p={2} color="black">
					Let
					<MM>
						{
							"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1},\\,\\mathbf{y}_0, \\ldots, \\mathbf{y}_{p-1},\\,\\bz\\in\\RR^m."
						}
					</MM>
					Suppose that each <M>{"\\by_j"}</M> is a linear combination of{" "}
					<M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M> and that{" "}
					<M>{"\\bz"}</M> is a linear combination of{" "}
					<M>{"\\mathbf{y}_0, \\ldots, \\mathbf{y}_{p-1}."}</M> Then{" "}
					<M>{"\\bz"}</M> is a linear combination of{" "}
					<M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}."}</M>
				</Box>
			</Panel>

			<br />

			<Panel color="blue">
				<Box p={2} color="black">
					<b>Proof:</b> Let
					<MM>
						{
							"\\bx=\\begin{pmatrix}\\bx_0&\\bx_1&\\cdots&\\bx_{n-1}\\end{pmatrix}\\in\\RR^{m\\times n}"
						}
					</MM>{" "}
					and suppose <M>{"0\\leq j\\lt p"}</M>. Since <M>{"\\by_j"}</M> is
					assumed to be a linear combination of{" "}
					<M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M>, there is a
					vector <M>{"\\br_j\\in\\RR^{n\\times 1}"}</M> such that{" "}
					<M>{"\\by_j=\\bx\\br_j"}</M>, by the "linear combinations are
					matrix-vector products" theorem. Let{" "}
					<MM>
						{
							"\\br=\\begin{pmatrix}\\br_0&\\br_1&\\cdots&\\br_{p-1}\\end{pmatrix}\\in\\RR^{n\\times p}"
						}
					</MM>
					and let
					<MM>
						{
							"\\by=\\begin{pmatrix}\\by_0&\\by_1&\\cdots&\\by_{n-1}\\end{pmatrix}\\in\\RR^{m\\times p}."
						}
					</MM>
					Then, by defintion of matrix multiplication,
					<MM>{`\\begin{aligned}
					\\bx\\br &= \\begin{pmatrix}\\bx\\br_0&\\bx\\br_1&\\cdots&\\bx\\br_{p-1}\\end{pmatrix}\\\\[1ex]
					&= \\begin{pmatrix}\\by_0&\\by_1&\\cdots&\\by_{n-1}\\end{pmatrix}\\\\[1ex]
					&= \\by.
					\\end{aligned}`}</MM>
					<br />
					<b>Remark:</b> The matrix identity <M>{"\\by=\\bx\\br"}</M> that we
					just derived is a concise way of expressing the fact that each{" "}
					<M>{"\\by_j"}</M> is a linear combination of{" "}
					<M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M>. You might say:
					<br />
					<br />
					<Text center>
						<i>Vectors of linear combinations are matrix-matrix products.</i>
					</Text>
					<p>
						Since <M>{"\\bz"}</M> is assumed to be a linear combination of{" "}
						<M>{"\\mathbf{y}_0, \\ldots, \\mathbf{y}_{p-1}"}</M>, there is a
						vector <M>{"\\bs\\in\\RR^{p\\times 1}"}</M> such that{" "}
						<M>{"\\bz=\\by\\bs"}</M>. Therefore,
						<MM>{"\\bz=\\by\\bs=(\\bx\\br)\\bs=\\bx(\\br\\bs)."}</MM>
						Letting <MM>{"\\bt=\\bs\\bt\\in\\RR^{n\\times 1},"}</MM> we have
						identified a vector <M>{"\\bt"}</M> such that{" "}
						<M>{"\\bz=\\bx\\bt"}</M>. Therefore, <M>{"\\bz"}</M> is a linear
						combination of <M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M>,
						as was to be shown.
					</p>
				</Box>
			</Panel>
			<br />
		</div>
	);
};

export default LinearCombinations;
