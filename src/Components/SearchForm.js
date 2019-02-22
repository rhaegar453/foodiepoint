import React from "react";
import { Form, Button } from "semantic-ui-react";
import {connect} from 'react-redux';
import {requestAPI} from './../Store/Actions/apiActions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        recipes:'',
        dishes:''
    }
  }
  searchClicked=()=>{
          this.props.searchData(this.state.recipes, this.state.dishes);
          console.log(this.state);
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group widths="equal" inline>
            <Form.Input
              onChange={(e)=>{this.setState({dishes:e.target.value})}}
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="Recipes"
              placeholder="Recipe"
            />
            <Form.Input
              onChange={(e)=>{this.setState({recipes:e.target.value})}}
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Dish"
              placeholder="Dish"
            />
            <div style={{ marginTop: "18px" }}>
              <Button color="twitter" onClick={this.searchClicked}>
                Search
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps=dispatch=>{
    return{
        searchData:(ingredients, dish)=>dispatch(requestAPI(ingredients, dish))
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);
