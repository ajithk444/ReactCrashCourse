import React, { Component } from 'react';


class AddProject extends Component {


    constructor() {
        super();
        this.state = {
            newCourse: []
        }
    }

    static defaultProps = {
        categories: ["EEE", "CSE", "ECE", "MECH", "CIVIL"]
    }

    handleSubmit(e) {
        if (this.refs.courssename.value === '') {
            alert('Title is required');
        }
        else {
            console.log(this.refs.courssename.value);
            this.setState({newCourse:{
                courssename:this.refs.courssename.value,
                category:this.refs.category.value
            }},function(){
                console.log(this.state);
            });
        }
        e.preventDefault();
    }


    render() {
        let categoryOption = this.props.categories.map(category => {
            return (<option key={category} value={category}>{category}</option>);
        });

        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Course</label><br />
                        <input type="text" ref='courssename' />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref='category' >
                            {categoryOption}
                        </select>
                    </div>
                    <input type="submit" value='Submit' />
                </form>
            </div>
        );
    }
}

export default AddProject;
