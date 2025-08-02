
import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(' ');
      const data = await response.json();
      const user = data.results[0];
      this.setState({ user });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Random User Info</h2>
        {user ? (
          <div>
            <h3>{`${user.name.title} ${user.name.first}`}</h3>
            <img src={user.picture.large} alt="User" />
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    );
  }
}

export default Getuser;

