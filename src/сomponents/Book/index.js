import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../../actions";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
  },
});

class Book extends Component {
  delete = (e) => {
    e.preventDefault();
    this.props.deleteBook(e.target.dataset.deleteId);
  };

  render() {
    const { title, author, descr, _id } = this.props.book;
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {title}
        </Typography>
        <Typography component="h5">{author}</Typography>
        <Typography component="p">{descr}</Typography>
        <div>
          <Button color="primary" className={classes.button}>
            <Link className={classes.link} to={`/edit/${_id}`}>
              Edit book
            </Link>
          </Button>
          <Button color="primary" className={classes.button}>
            <Link
              onClick={this.delete}
              className={classes.link}
              data-delete-id={_id}
              to={`/delete/${_id}`}
            >
              Delete book
            </Link>
          </Button>
        </div>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { deleteBook },
  )(Book),
);
