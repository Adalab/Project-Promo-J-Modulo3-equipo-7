import React from "react";

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  updateInputValue(evt) {
    this.props.handleInputValue(
      evt.currentTarget.name,
      evt.currentTarget.value
    );
  }
  render() {
    return (
      <div className={`designform__palette${this.props.number}`}>
        <input
          className={`js_palette${this.props.number}`}
          id={this.props.number}
          type="radio"
          value={this.props.number}
          name="palette"
          onChange={this.updateInputValue}
          checked={this.props.checked}
          required
        />
      </div>
    );
  }
}
export default Palette;
