import React, { Component } from "react";
import { Item, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeFavorite } from "../Store/Actions/apiActions";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        favorites:[
            {
                title:'Shivaraj Bakale',
                link:'hello world',
                image:'image'
            }
            ,
            {
                title:'Sachin Bakale',
                link:'hello world from sachin',
                image:'image'
            }
        ]
    }
  }

  render() {
    return (
      <div style={{marginTop:'60px', marginLeft:'100px'}}> 
      <h1><u>Favorites</u></h1>
        <Item.Group>
            {this.props.favorites.map(item=>(
                <Item>
                    <Item.Image size="small" src={item.image}/>
                    <Item.Content>
                        <Item.Header as="a">{item.title}</Item.Header>
                        <Item.Description>
                            <a href={item.link}>{item.link}</a>
                        </Item.Description>
                        <Button size="small"  color="red" icon="minus" onClick={()=>this.props.removeFavorite(item)} style={{borderRadius:"10px", marginTop:"10px"}}>Remove</Button>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
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
