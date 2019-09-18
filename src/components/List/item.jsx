import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./item.css";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      title: this.props.title,
      content: this.props.content
    };
  }

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  handleChangeContent = event => {
    this.setState({ content: event.target.value });
  };

  removePost = () => {
    this.props.removePost(this.props.id);
  };

  updatePost = () => {
    this.setState({ isEdit: true });
  };

  donePost = () => {
    this.props.updatePost(this.props.id, this.state.title, this.state.content);
    this.setState({ isEdit: false });
  };

  renderTitleInput = () => {
    return (
      <TextField
        onChange={this.handleChangeTitle}
        defaultValue={this.props.title}
        type="text"
        required
      />
    );
  };

  renderContentInput = () => {
    return (
      <TextField
        onChange={this.handleChangeContent}
        defaultValue={this.props.content}
        type="text"
        required
      />
    );
  };

  renderUpdateButton = () => {
    return (
      <Button variant="contained" color="primary" onClick={this.updatePost}>
        EDIT
      </Button>
    );
  };

  renderDoneButton = () => {
    return (
      <Button variant="contained" onClick={this.donePost}>
        DONE
      </Button>
    );
  };

  render() {
    return (
      <Grid item xs={12} className="item">
        {this.state.isEdit ? this.renderTitleInput() : this.props.title + `: `}
        {this.state.isEdit ? this.renderContentInput() : this.props.content}
        <br />
        {this.state.isEdit
          ? this.renderDoneButton()
          : this.renderUpdateButton()}
        <Button
          variant="contained"
          color="secondary"
          onClick={this.removePost}
          className="btn_remove"
        >
          REMOVE
        </Button>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removePost: id => {
      dispatch(actions.removePost(id));
    },
    updatePost: (id, title, content) => {
      dispatch(actions.updatePost(id, title, content));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
