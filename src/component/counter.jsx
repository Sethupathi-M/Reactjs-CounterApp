import React, { Component } from "react"; //imrc tab

class Counter extends Component {
  styles = {
    fontSize: 15,
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span style={this.styles} className={this.getBadgeClasses()}>
              {" "}
              {this.formatCount()}{" "}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.OnIncremenet(this.props.counter)}
              style={{ fontSize: 15 }}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.OnDecrement(this.props.counter)}
              style={{ fontSize: 15 }}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.OnDelete(this.props.counter.id)}
              style={{ fontSize: 15 }}
              className="btn btn-danger btn-sm m-2"
            >
              X
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
