import React from "react";
import { Grid, Container, Button, Segment} from "semantic-ui-react";

import SearchForm from "./SearchForm";
import SearchParent from './SearchFormParent';
import ResultItem from './ResultItem';
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid centered verticalAlign="middle">
          <Grid.Row centered verticalAlign="middle">
            <Grid.Column verticalAlign="middle" width={8}>
              <SearchParent></SearchParent>
            </Grid.Column>
          </Grid.Row>
          {this.props.results.length==0?null:
          <div>
              <Grid columns={5} divided>
                <Grid.Row>
                    {this.props.results.map(item=>(
                        <ResultItem key={item.title} image={item.thumbnail} title={item.title} link={item.href} ingredients={item.ingredients}></ResultItem>
                    ))}
                </Grid.Row>
              </Grid>
          </div>}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        results:state.api.recipes
    };
}
export default connect(mapStateToProps)(Home);