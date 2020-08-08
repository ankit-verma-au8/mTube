import React, { Component } from 'react'
import VideoPlayer from '../components/VideoPlayer'
import {connect} from 'react-redux'
import {fetchComments , fetchcurrentVideo} from '../redux/actions/currentVideoAction'
import Comments from '../components/Comments'

export class VideoDetail extends Component {

    componentDidMount(){
        this.props.fetchcurrentVideo(this.props.match.params.videoId)
        this.props.fetchComments(this.props.match.params.videoId)
    }

    render() {

        return (
            <>
            <div>
                {this.props.currentVideodetail ? <VideoPlayer video={this.props.currentVideodetail.items[0]}/> : <h1>Loading Video...</h1>}
            </div>

            <div>
                {this.props.comments ? <Comments comments={this.props.comments.items}/> : <h1>Loading Comments...</h1>}
            </div>
            </>
            
        )
    }
}

const mapStateToProps =(storeData)=>{
        return ({
            currentVideodetail: storeData.currentvideoState.video,
            comments: storeData.currentvideoState.comments
        })
}

export default connect(mapStateToProps , {fetchComments:fetchComments ,fetchcurrentVideo:fetchcurrentVideo})(VideoDetail)
