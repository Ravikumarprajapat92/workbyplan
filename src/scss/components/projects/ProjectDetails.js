import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Projec Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sit commodi tempore fugiat. Optio molestias dolorem, nisi ab alias similique eligendi reprehenderit, impedit sequi hic aperiam beatae numquam accusantium magni.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The Ravi Prajapat</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
