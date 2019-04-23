import React, {Component} from 'react'

//components
import PostView from '../components/postView'

//functions
import { getClassPosts } from '../functions/index'



class CoursePosts extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            error: false,
            errorMessage: '',
        }
    }

    async componentDidMount(){
        try{
            let classCode = this.props.classCode 
            let postRes = await getClassPosts(classCode)

            if(postRes.status === 200){
                console.log(postRes.data)
                this.setState({
                    posts: postRes.data
                })
            }

            this.setState({
                error: true,
                errorMessage: 'Error fetching posts'
            })
        }
        catch(err){
            console.log(err)
            this.setState({
                error: true,
                errorMessage: 'Error fetching posts'
            })
        }
    }

    render(){
        let { posts } = this.state
        let RenderPosts = posts.map( (val, i) => {
            return (<PostView post={val} key={i}/>)
        })

        return(
            <div className="all-post-container">
                {this.props.classCode}
                {RenderPosts}
            </div>
        )
    }
}

export default CoursePosts