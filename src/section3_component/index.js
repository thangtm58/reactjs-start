import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Thang"
                    timeAgo="Today at 2:45AM"
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Yesterday at 1:45PM"
                    content="That is awesome!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};


// ReactDOM.render(
//     <App />, document.querySelector('#root')
// );


//https://semantic-ui.com 
