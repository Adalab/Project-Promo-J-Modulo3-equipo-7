import React from "react";

class Palette extends React.Component {
  render() {
    return (
      <div className={`designform__palette${this.props.number}`}>
        <input
          className={`js_palette${this.props.number}`}
          id={this.props.number}
          type="radio"
          value={`palette${this.props.number}`}
          name="paletteoptions"
        />
      </div>
    );
  }
}
export default Palette;
