import React from "react";
import { Panel, PanelHeader, Box, Subhead } from "rebass";
import { M, MM } from "./tex.js";

const Subspaces = () => {
	return (
		<div>
			{" "}<Subhead>
				Subspaces of <M>{"\\mathbb{R}^n"}</M>
			</Subhead>
			<br />
			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					Definition
				</PanelHeader>
				<Box p={2} color="black">
					A{" "}
					<b>
						subspace of <M>{"\\mathbb{R}^n"}</M>
					</b>is a subset <M>U</M> of <M>{"\\mathbb{R}^n"}</M> such
					that:
					<ol>
						<li>
							{" "}<M>U</M> is nonempty.
						</li>
						<br />
						<li>
							<M>U</M> is <b>closed under addition</b>: For every
							pair of vectors <M>{"\\mathbf{x}, \\mathbf{y}"}</M>{" "}
							belonging to <M>U</M>, their sum{" "}
							<M>{"\\mathbf{x} + \\mathbf{y}"}</M> also belongs to{" "}
							<M>U</M>.
						</li>
						<br />
						<li>
							<M>U</M> is{" "}
							<b>closed under scalar multiplication</b>: For every
							vector <M>{"\\mathbf{x}"}</M> belonging to <M>U</M>{" "}
							and every scalar <M>t</M>, the product{" "}
							<M>{"t\\mathbf{x}"}</M> also belongs to <M>U</M>.
						</li>
					</ol>
				</Box>
			</Panel>
			<br />
			<div>
				Observations:
				<ol>
					<li>
						Every subspace of <M>{"\\mathbb{R}^n"}</M> contains the
						zero vector of <M>{"\\mathbb{R}^n"}</M>.
						<p>
							<b>Proof:</b> Let <M>U</M> be a subspace of{" "}
							<M>{"\\mathbb{R}^n"}</M>. Then <M>U</M> is nonempty
							and, thus, contains some vector{" "}
							<M>{"\\mathbf{x}"}</M>. Since <M>U</M> is closed
							under scalar multiplication,{" "}
							<M>{"0\\mathbf{x},"}</M> the zero vector of{" "}
							<M>{"\\mathbb{R}^n,"}</M> belongs to <M>U</M>.
						</p>
					</li>
					<li>
						The singleton set <M>{"\\{\\bzero\\}"}</M> is a subspace
						of <M>{"\\RR^n"}</M>. We call it the{" "}
						<b>zero subspace</b> of <M>{"\\RR^n"}</M>.
						<p>
							<b>Proof:</b> Exercise.{" "}
						</p>
					</li>
				</ol>
			</div>
			<div>
				Example: Let <M>{"\\bx"}</M> be a vector in <M>{"\\RR^n"}</M>{" "}
				and let <M>U</M> be the set of all vectors{" "}
				<M>{"\\by\\in\\RR^n"}</M> that are orthogonal to <M>{"\\bx"}</M>:
				<MM>{"U=\\{\\by\\in\\RR^n : \\bx\\cdot\\by = 0\\}."}</MM>
				Then <M>{"U"}</M> is a subspace of <M>{"\\RR^n"}</M>. (<M>U</M>{" "}
				is called the{" "}
				<i>
					orthogonal complement of <M>{"\\bx"}</M>
				</i>.)
				<p>
					<b>Proof:</b> By definition of subspace, we must prove that
					that <M>U</M> is nonempty, that <M>U</M> is closed under
					addition, and that <M>U</M> is closed under scalar
					multiplication.
				</p>
				<p>
					Since
					<MM>{"\\bx\\cdot\\bzero=0,"}</MM>
					the zero vector <M>{"\\bzero"}</M> belongs to <M>U</M>, by
					definition of <M>U</M>. In particular, <M>U</M> is nonempty.
				</p>
				<p>
					To establish closure under addition, we let{" "}
					<M>{"\\by_0"}</M> and <M>{"\\by_1"}</M> be arbitrary
					elements of <M>{"U"}</M> and prove that{" "}
					<M>{"\\by_0 + \\by_1"}</M> is also an element of{" "}
					<M>{"U"}</M>. We apply the definition of the set{" "}
					<M>{"U"}</M>: Since <M>{"\\by_0"}</M> belongs to{" "}
					<M>{"U"}</M>, we have{" "}
					<MM>{"\\bx\\cdot\\by_0=0.\\pod\\dag"}</MM>
					Similarly,
					<MM>{"\\bx\\cdot\\by_1=0.\\pod{\\ddag}"}</MM>
					Therefore,
					<MM>
						{`\\begin{aligned}
            \\bx\\cdot(\\by_0 + \\by_1) &= \\bx\\cdot\\by_0 + \\bx\\cdot\\by_1\\\\[1ex]
            &= 0 + 0&&\\text{by }(\\dag)\\text{ and }(\\ddag)\\\\[1ex]
            &= 0.
            \\end{aligned}`}
					</MM>
					Therefore, by definition of the set <M>{"U"}</M>, the vector{" "}
					<M>{"\\by_0 + \\by_1"}</M> belongs to <M>{"U"}</M>, as was
					to be shown.
				</p>
				<p>
					To establish closure under scalar multiplication, we let{" "}
					<M>{"\\by"}</M> be an arbitrary elements of <M>{"U"}</M> and{" "}
					<M>{"k"}</M> be an arbitrary scalar and prove that{" "}
					<M>{"k\\by"}</M> is also an element of <M>{"U"}</M>. We
					apply the definition of the set <M>{"U"}</M>: Since{" "}
					<M>{"\\by"}</M> belongs to <M>{"U"}</M>, we have
					<MM>{"\\bx\\cdot\\by=0.\\pod\\sharp"}</MM>
					Therefore, by a rule governing the interaction of the dot
					product with scalar multiplication,
					<MM>
						{`\\begin{aligned}
            \\bx\\cdot(k\\by) &= k(\\bx\\cdot\\by)\\\\[1ex]
            &= k(0)&&\\text{by }(\\sharp)\\\\[1ex]
            &= 0.
            \\end{aligned}`}
					</MM>{" "}
					Therefore, by definition of the set <M>{"U"}</M>, the vector{" "}
					<M>{"k\\by"}</M> belongs to <M>{"U"}</M>, as was to be
					shown.
				</p>
			</div>
			<br />{" "}
			<div>
				Example: Let <M>{"\\bx"}</M> and <M>{"\\by"}</M> be vectors in{" "}
				<M>{"\\RR^n"}</M> and let <M>U</M> be the set of all linear
				combinations of <M>{"\\bx"}</M> and <M>{"\\by"}</M>:
				<MM>{"U=\\{s\\bx + t\\by : s, t\\in\\RR\\}."}</MM>
				Then <M>{"U"}</M> is a subspace of <M>{"\\RR^n"}</M>.
				<p>
					<b>Proof:</b> By definition of subspace, we must prove that
					that <M>{"U"}</M> is closed under addition and under scalar
					multiplication. (<M>U</M> is obviously nonempty.)
				</p>
				<p>
					To establish closure under addition, we let{" "}
					<M>{"\\bu_0"}</M> and <M>{"\\bu_1"}</M> be arbitrary
					elements of <M>{"U"}</M> and prove that{" "}
					<M>{"\\bu_0 + \\bu_1"}</M> is also an element of{" "}
					<M>{"U"}</M>. We apply the definition of the set{" "}
					<M>{"U"}</M>: Since <M>{"\\bu_0"}</M> belongs to{" "}
					<M>{"U"}</M>, there are scalars <M>{"s_0"}</M> and{" "}
					<M>{"t_0"}</M> such that{" "}
					<MM>{"\\bu_0=s_0\\bx + t_0\\by."}</MM>
					Similarly, there are scalars <M>{"s_1"}</M> and{" "}
					<M>{"t_1"}</M> such that{" "}
					<MM>{"\\bu_1=s_1\\bx + t_1\\by."}</MM> Therefore,
					<MM>
						{`\\begin{aligned}
            \\bu_0 + \\bu_1 &= (s_0\\bx + t_0\\by) + (s_1\\bx + t_1\\by)\\\\[1ex]
            &= (s_0 + s_1)\\bx + (t_0 + t_1)\\by
            \\end{aligned}`}
					</MM>
					Setting
					<MM>{"s=s_0+s_1,\\qquad t=t_0+t_1,"}</MM>
					we have identified scalars <M>{"s"}</M> and <M>{"t"}</M>{" "}
					such that <MM>{"\\bu_0 + \\bu_1=s\\bx + t\\by."}</MM>
					Therefore, by definition of the set <M>{"U"}</M>, the vector{" "}
					<M>{"\\bu_0 + \\bu_1"}</M> belongs to <M>{"U"}</M>, as was
					to be shown.
				</p>
				<p>
					To establish closure under scalar multiplication, we let{" "}
					<M>{"\\bu"}</M> be an arbitrary elements of <M>{"U"}</M> and{" "}
					<M>{"k"}</M> be an arbitrary scalar and prove that{" "}
					<M>{"k\\bu"}</M> is also an element of <M>{"U"}</M>. We
					apply the definition of the set <M>{"U"}</M>: Since{" "}
					<M>{"\\bu"}</M> belongs to <M>{"U"}</M>, there are scalars{" "}
					<M>{"s_0"}</M> and <M>{"t_0"}</M> such that{" "}
					<MM>{"\\bu=s_0\\bx + t_0\\by."}</MM>
					Therefore,
					<MM>
						{`\\begin{aligned}
            k\\bu &= k(s_0\\bx + t_0\\by)\\\\[1ex]
            &= (ks_0)\\bx + (kt_0)\\by.
            \\end{aligned}`}
					</MM>{" "}
					Setting
					<MM>{"s=ks_0,\\qquad t=kt_0,"}</MM>
					we have identified scalars <M>{"s"}</M> and <M>{"t"}</M>{" "}
					such that <MM>{"k\\bu=s\\bx + t\\by."}</MM>
					Therefore, by definition of the set <M>{"U"}</M>, the vector{" "}
					<M>{"k\\bu"}</M> belongs to <M>{"U"}</M>, as was to be
					shown.
				</p>
			</div>
			<br />
			<br />
			<Panel color="blue">
				<PanelHeader color="white" bg="blue">
					Theorem
				</PanelHeader>
				<Box p={2} color="black">
					A nonempty subset <M>{"U"}</M> of <M>{"\\RR^n"}</M> is a
					subspace of <M>{"\\RR^n"}</M> if and only if <M>{"U"}</M> is{" "}
					<b>closed under linear combination</b>: For any finite list{" "}
					<M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M> of
					vectors belonging to <M>{"U"}</M>, all linear combinations
					of <M>{"\\mathbf{x}_0, \\ldots, \\mathbf{x}_{n-1}"}</M> also
					belong to <M>{"U"}</M>.
				</Box>
			</Panel>
		</div>
	);
};

export default Subspaces;
