import React from "react";
import { Grid, Container, Button , Segment} from "semantic-ui-react";

import SearchForm from "./SearchForm";

export default class SearchParent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: "100px" }}>
          <Container>
              <h1 style={{fontSize:'50px'}}>Foodie Point</h1>
            <SearchForm />
          </Container>
        </div>
      </div>
    );
  }
}
