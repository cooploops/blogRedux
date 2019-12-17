import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const {user} = this.props;
        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>;
    }
}

// state and ownProps arguments are always provided when creating this function
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps)(UserHeader);