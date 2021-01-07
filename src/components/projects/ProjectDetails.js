import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const { projects, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (projects) {
        return (
            <div className="container project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{projects.title}</span>
                        <p>{projects.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by The {projects.authorFirstName} {projects.authorLastName}</div>
                        <div>{moment(projects.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container cenrter">
                <p>Loading Project....</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : '';
    return {
        projects: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
