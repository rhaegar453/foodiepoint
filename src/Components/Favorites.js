import React from "react";
import { connect } from "react-redux";
import { removeFavorite } from "./../Store/Actions/apiActions";
import { List, Segment, Grid, Button } from "semantic-ui-react";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  removeFavorite=()=>{
      console.log("Removing favorite");
      this.props.removeFavorite({})
  }
  render() {
    return (
      <div style={{ marginTop: "60px", marginLeft: "80px" }}>
        <h1>
          <u>Favorites</u>
        </h1>
        <Grid>
            {this.props.favorites.length==0?null:
          <Grid.Row>
          <Grid.Column width={6} floated="left">
            <Segment inverted>
              <List divided inverted relaxed> 
                {this.props.favorites.map(item => (
                  <List.Item>
                    <List.Content>
                      <List.Header>
                          <div style={{display:'flex', justifyContent:'space-between'}}>
                          {item.title}
                            <Button color="twitter" onClick={this.removeFavorite}>Remove</Button>
                          </div></List.Header>
                    </List.Content>
                    <a href={item.link}>Link</a>
                  </List.Item>
                ))}
              </List>
            </Segment>
            
          </Grid.Column>
        </Grid.Row>}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.api.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFavorite: item => dispatch(removeFavorite(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
