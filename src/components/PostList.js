import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        return <div>PostList</div>
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts};
}
// can default null for mapStateToProps function in meantime
export default connect(mapStateToProps, { fetchPosts })(PostList);