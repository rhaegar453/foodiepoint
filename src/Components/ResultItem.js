import React from "react";
import { Card, Icon, Image , Label, Popup, Button} from "semantic-ui-react";
import {makeFavorite} from '../Store/Actions/apiActions';
import {connect} from 'react-redux';

class CustomCard extends React.Component {
  constructor(props) {
    super(props);
  }

  checkPresence=()=>{
      this.props.favorites.forEach(item=>{
          if(item.title==this.props.title){
              return true
          }
      })
      return false
  }
  MarkUp=()=>{
      return (
          <div>
              {this.props.ingredients.split(',').map(item=>(
                <Label tag color="blue" style={{margin:"5px"}}>{item}</Label>
              ))}
              {this.checkPresence?<Button color="red" size="tiny" icon="save" style={{borderRadius:"10px"}} onClick={this.saveAsFavorite}>Save as Favorite</Button>:
                <Button color="green" size="tiny" icon="save" style={{borderRadius:"10px"}} >Remove from Favorite</Button>
            }
              
              <Button size="tiny" color="olive" onClick={()=>this.cardClicked(this.props.link)}>Visit</Button>
          </div>
      )
  }
  saveAsFavorite=()=>{
      let item={
          title:this.props.title,
          link:this.props.link
      }
      this.props.makeFavorite(item)
  }
  cardClicked=(link)=>{
    window.open(link)
  }
  getMoreInfo=()=>{

  }
  render() {
    return (
      <div style={{marginTop:"20px", marginLeft:"10px", width:"200px", height:"200px"}}>
        <Card>
           <Card.Content onClick={this.getMoreInfo}>
          <Popup  trigger={<Card.Header>{this.props.title}</Card.Header>} on="click" content={this.MarkUp} header="Recipes" position="top left"></Popup>
            
          </Card.Content >
          <Card.Content extra >
            <img src={this.props.image} width="200px" height="200px"  onClick={()=>this.cardClicked(this.props.link)}></img>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return {
        favorites:state.api.favorites
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        makeFavorite:(item)=>dispatch(makeFavorite(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);
