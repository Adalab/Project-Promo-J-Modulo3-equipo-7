import React from 'react';

class FormItem extends React.Component{
    render(){
        return(
            <div className={`form__${this.props.name}`}>
              <label for={this.props.name}>{this.props.title}</label>
              <input
                className={`input__${this.props.name} js-input-${this.props.name} `}
                type="text"
                id={this.props.name}
                name={this.props.name}
                placeholder={this.props.placeholder}
                required
              />
            </div>

        )
    }
}

export default FormItem;