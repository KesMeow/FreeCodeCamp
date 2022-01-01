const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // This line below checks for the quantity to be a number and ensures it is a required parameter
  Items.propTypes = { quantity: PropTypes.number.isRequired}
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };
  
  