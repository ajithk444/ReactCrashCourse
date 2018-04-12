import React, { Component } from 'react';


class ProjectItem extends Component {
    render() {
        return (
            <div className="Project">
               <strong> {this.props.project.coursename} </strong>: {this.props.project.category}
            </div>
        );
    }
}

export default ProjectItem;
