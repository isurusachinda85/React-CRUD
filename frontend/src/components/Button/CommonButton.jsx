import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export default class CommonButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.any,
    label: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    type: PropTypes.string,
    endIcon: PropTypes.string,
    startIcon: PropTypes.string,
  };

  static defaultProps = {
    className: "",
    color: "primary",
    label: "",
    size: "medium",
    variant: "contained",
    disabled: false,
    type: "button",
  };

  handlerButtonClick = (event) => {
    const { onClick, disabled } = this.props;
    if (disabled) return;
    onClick && onClick({ event });
  };

  renderChildren = (label, children) => {
    if (label) return label;

    if (children) return children;
  };

  render() {
    const {
      children,
      label,
      className,
      color,
      size,
      type,
      variant,
      disabled,
      startIcon,
      endIcon,
      style,
    } = this.props;

    return (
      <Button
        className={className}
        size={size}
        endIcon={endIcon}
        startIcon={startIcon}
        variant={variant}
        disabled={disabled}
        color={color}
        type={type}
        onClick={this.handlerButtonClick}
        style={style}
      >
        {this.renderChildren(label, children)}
      </Button>
    );
  }
}
