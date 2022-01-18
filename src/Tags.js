import React from "react";
// import App from "./App";

export default class Tags extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tags">
        {this.props.tags.map((i) => {
          return <div className="tag">#{i}</div>;
        })}
      </div>
    );
  }
}
