import React, { Component } from 'react';
import {withRouter} from 'react-router';
class AddPost extends Component {
    onAddSubmit(event){
        event.preventDefault();

        let title = event.target['title'].value;
        let author = event.target['author'].value;
        let description = event.target['description'].value;

        let post = {
            title:title,
            author:author,
            description: description,
        }

        let postInJson = JSON.stringify(post);
        console.log(postInJson);
        fetch("http://127.0.0.1:8000/api/post", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: postInJson
        })
        .then((response) => {
            console.log(response);
            this.props.history.push("/posts"); // chuyển trang
        });
        
    }
    render() {
        return (
            <div>
                
                <form onSubmit={this.onAddSubmit} method="POST" role="form">
                    <legend>Form title</legend>
                
                    <div className="form-group">
                        <label for="">Title</label>
                        <input type="text" className="form-control" id="" name ="title" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label for="">Author</label>
                        <input type="text" className="form-control" id="" name ="author" placeholder="Input Author" />
                    </div>
                    <div className="form-group">
                        <label for="">Description</label>
                        <input type="text" className="form-control" id="" name ="description" placeholder="Input Description" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
        );
    }
}

export default withRouter(AddPost);