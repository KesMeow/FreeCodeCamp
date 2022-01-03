class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(event) {
      this.setState({
        input: event.target.value,
        messages: this.state.messages
      });
    }
  
    submitMessage() {
      let updatedMessageList=[...(this.state.messages),this.state.input];
      this.setState({messages: updatedMessageList,input:''});
    }
  
    render() {
      const msg_array = this.state.messages.map((element) => {
        return (<li>{element}</li>);
      })
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input type="text" value={this.state.input}  onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>Submit</button>
          <ul>
            {msg_array}
          </ul>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };