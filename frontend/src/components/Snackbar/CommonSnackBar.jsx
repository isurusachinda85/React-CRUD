import React, { Component } from "react";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default class CommonSnackBar extends Component {
  static propTypes = {
    open: PropTypes.bool,
    className: PropTypes.string,
    message: PropTypes.string,
    anchorOrigin: PropTypes.object,
    children: PropTypes.node,
    severity: PropTypes.string,
    autoHideDuration: PropTypes.number,
  };

  static defaultProps = {
    open: false,
    className: "",
    message: "",
    name: "CommonSnackBar",
    severity: "success",
    autoHideDuration: 3000,
    anchorOrigin: { vertical: "bottom", horizontal: "center" },
    variant: "filled",
  };

  handlerButtonClose = (event) => {
    const { onClose } = this.props;
    onClose && onClose({ event });
  };

  renderChildren = (message, children) => {
    if (message) return message;

    if (children) return children;
  };

  render() {
    const {
      open,
      className,
      severity,
      autoHideDuration,
      anchorOrigin,
      children,
      message,
      variant,
    } = this.props;
    return (
      <Snackbar
        name="CommonSnackBar"
        open={open}
        className={className}
        anchorOrigin={anchorOrigin}
        autoHideDuration={autoHideDuration}
        onClose={this.handlerButtonClose}
      >
        <Alert
          onClose={this.handlerButtonClose}
          severity={severity}
          variant={variant}
        >
          {this.renderChildren(message, children)}
        </Alert>
      </Snackbar>
    );
  }
}
