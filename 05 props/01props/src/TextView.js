import React from 'react'
class TextView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <h1>TextView {this.props.title}</h1>

        </div>;

    }
}

TextView.propTypes = {
    title: PropTypes.string
};
export default TextView;