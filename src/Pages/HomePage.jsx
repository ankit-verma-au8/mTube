import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTrendingVideos } from '../redux/actions/videoActions'
import Videos from '../components/Videos'
// const HomePage = ({ user }) => {

//     return !user ? <Redirect to="/login" /> : <div>Home Page</div>

// }



export class HomePage extends Component {

    componentDidMount() {
        this.props.fetchTrendingVideos()
    }

    render() {
        return (
            !this.props.user ? <Redirect to="/login" /> : <Videos/>
        )
    }
}



const mapStateToProps = (storedata) => {
    return {
        user: storedata.userState.user
    }
}

export default connect(mapStateToProps, { fetchTrendingVideos: fetchTrendingVideos })(HomePage)
