import React from 'react';
import Card, {CardHeader, CardBody, CardTitle} from "../../../../components/bootstrap/Card";
import CommentsIcon from './CommentsIcon'
const Comments = () => {
    return (
        <Card stretch='full'>
            <CardHeader>
                <div className='d-flex align-items-center' >
                    <CommentsIcon/>
                    <CardTitle>
                        <h5 className="card-title">Comments</h5>
                        <h6 className="card-subtitle">Course Reviews</h6>
                    </CardTitle>
                </div>
            </CardHeader>
            <CardBody >
                <div className="row g-4 mb-4">
                    <div className="col-12 d-flex align-items-center">
                        <div className="flex-shrink-0">
                            <img className="avatar rounded-circle bg-l25-warning"
                                 src="https://facit-modern.omtanke.studio/static/media/wanna2.35c7aa82595ff8db5ef4.png"
                                 alt="Avatar" width="64" height="64"/>
                        </div>
                        <div className="flex-grow-1 ms-3 d-flex justify-content-between align-items-center">
                            <figure className="mb-0">
                                <blockquote className="blockquote"><p>We made a very logical decision to use it
                                    in
                                    our project. Design quality is very nice.</p></blockquote>
                                <figcaption className="blockquote-footer mb-0">Grace in <cite
                                    title="Company">Company</cite></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-12 d-flex align-items-center">
                        <div className="flex-shrink-0">
                            <img className="avatar rounded-circle bg-l25-warning"
                                 src="https://facit-modern.omtanke.studio/static/media/wanna2.35c7aa82595ff8db5ef4.png"
                                 alt="Avatar" width="64" height="64"/>
                        </div>
                        <div className="flex-grow-1 ms-3 d-flex justify-content-between align-items-center">
                            <figure className="mb-0">
                                <blockquote className="blockquote"><p>We made a very logical decision to use it
                                    in
                                    our project. Design quality is very nice.</p></blockquote>
                                <figcaption className="blockquote-footer mb-0">Grace in <cite
                                    title="Company">Company</cite></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-12 d-flex align-items-center">
                        <div className="flex-shrink-0">
                            <img className="avatar rounded-circle bg-l25-warning"
                                 src="https://facit-modern.omtanke.studio/static/media/wanna2.35c7aa82595ff8db5ef4.png"
                                 alt="Avatar" width="64" height="64"/>
                        </div>
                        <div className="flex-grow-1 ms-3 d-flex justify-content-between align-items-center">
                            <figure className="mb-0">
                                <blockquote className="blockquote"><p>We made a very logical decision to use it
                                    in
                                    our project. Design quality is very nice.</p></blockquote>
                                <figcaption className="blockquote-footer mb-0">Grace in <cite
                                    title="Company">Company</cite></figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default Comments;