import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.text);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" classname="btn btn-dark" />
                </form>
            </div>
        )
    }
}

export default Search
