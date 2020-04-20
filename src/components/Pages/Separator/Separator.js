import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Separator extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
          <div className="separator" style={{height:this.props.height}}></div>
        );
    }
}

Separator.propTypes = {
  height: PropTypes.number,
};
