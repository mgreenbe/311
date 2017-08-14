import React, { Component } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

const macros = {
  "\\bzero": "\\mathbf{0}",
  "\\RR": "\\mathbb{R}",
  "\\br": "\\mathbf{r}",
  "\\bs": "\\mathbf{s}",
  "\\bt": "\\mathbf{t}",
  "\\bu": "\\mathbf{u}",
  "\\bv": "\\mathbf{v}",
  "\\bw": "\\mathbf{w}",
  "\\bx": "\\mathbf{x}",
  "\\by": "\\mathbf{y}",
  "\\bz": "\\mathbf{z}"
};

const renderWithKatex = (children, innerRef, elt, displayMode = false) => {
  if (typeof children !== "string") {
    throw new TypeError(
      "TeX component can only have a single child; it must be a string."
    );
  }
  katex.render(children, elt, { displayMode, macros });
  if (innerRef) {
    innerRef(elt);
  }
};

class M extends Component {
  componentDidMount() {
    const { children, innerRef } = this.props;
    renderWithKatex(children, innerRef, this.elt);
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  render() {
    const { component, children, innerRef, ref, ...otherProps } = this.props;
    //    const component = this.props.component || "span";
    return React.createElement(component || "span", {
      ref: elt => (this.elt = elt),
      ...otherProps
    });
  }
}

class MM extends Component {
  componentDidMount() {
    const { children, innerRef } = this.props;
    renderWithKatex(children, innerRef, this.elt, true);
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  render() {
    const { component, children, innerRef, ref, ...otherProps } = this.props;
    return React.createElement(component || "span", {
      ref: elt => (this.elt = elt),
      ...otherProps
    });
  }
}

export { M, MM };
