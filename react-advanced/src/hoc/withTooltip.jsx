import React from "react";

// takes an existing component as an argument
function withTooltip(Component) {
  // make sure to capitalize this argument because we are rendering a component
  // return a new component that wraps our original component (it will enhance it)
  return class WithTooltip extends React.Component {
    state = {
      showTooltip: false,
    };

    mouseOver = () => {
      this.setState({ showTooltip: true });
    };
    mouseOut = () => {
      this.setState({ showTooltip: false });
    };

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component
            {...this.props} // how we pass any existing props from the outside
            showTooltip={this.state.showTooltip}
          />
        </div>
      );
    }
  };
}

export default withTooltip;
