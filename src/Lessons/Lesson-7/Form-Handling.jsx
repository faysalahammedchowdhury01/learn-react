import React from 'react';

class Lesson7 extends React.Component {
  state = {
    name: 'Javascript',
    library: 'React',
    text: 'Write something...',
    awesome: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, library, text, awesome } = this.state;

    return (
      <div className="main">
        <h2>Form Handling in React</h2>
        <form onSubmit={this.submitForm}>
          {/* Text */}
          <input
            onChange={this.handleChange}
            name="name"
            value={name}
            type="name"
          />
          <br />
          <br />

          {/* Select */}
          <select onChange={this.handleChange} name="library" value={library}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
          <br />
          <br />

          {/* Checkbox */}
          <input
            onChange={this.handleCheckbox}
            name="awesome"
            checked={awesome}
            id="awesome"
            type="checkbox"
          />
          <label htmlFor="awesome">Is Javascript awesome?</label>
          <br />
          <br />

          {/* Textarea */}
          <textarea
            onChange={this.handleChange}
            name="text"
            value={text}
          ></textarea>
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Lesson7;
