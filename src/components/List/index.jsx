import React, { Component } from "react";
import Item from "./item.jsx";
import Grid from "@material-ui/core/Grid";
import "./index.css";

class List extends Component {
  render() {
    return (
      <div>
        <Grid spacing={24} className="posts_container">
          {this.props.posts.map((post, index) => (
            <Item {...post} key={index} id={post.id} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default List;
