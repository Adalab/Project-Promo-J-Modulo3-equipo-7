import React from 'react';

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    let info = ev.target.value;
    this.props.inputValue();
  }

  render() {
    return (
      <div className={`form__${this.props.name}`}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          className={`input__${this.props.name} js-input-${this.props.name} `}
          type="text"
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          required
        />
      </div>
    );
  }
}

export default FormItem;
