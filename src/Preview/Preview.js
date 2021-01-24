import React from "react";
import { connect } from "react-redux";
import autoBind from "auto-bind";
import { classes, inlineCss } from "./Styles";

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
    this.descriptionToCheck = React.createRef();
    this.png = React.createRef();
    this.header = React.createRef();
    this.headerToCheck = React.createRef();

    autoBind(this);
  }

  componentDidMount() {
    this.checkOffsetHeight();
  }

  componentDidUpdate() {
    this.checkOffsetHeight();
  }

  checkOffsetHeight() {
    if (
      this.description.current.offsetHeight !==
      this.descriptionToCheck.current.offsetHeight
    ) {
      this.props.onTextLayoutChange(false);
    } else {
      this.props.onTextLayoutChange(true);
    }
    if (
      this.header.current.offsetHeight !==
      this.headerToCheck.current.offsetHeight
    ) {
      this.props.onHeaderLayoutChange(false);
    } else {
      this.props.onHeaderLayoutChange(true);
    }
  }

  getRef() {
    return this.png.current;
  }

  render() {
    return (
      <a
        href={this.props.url}
        target="_blank"
        className={classes.linkWrapper}
        id="linkBanner"
      >
        <div
          className={classes.wrapper}
          id="img"
          style={{
            backgroundImage: `url(${this.props.imgUrl})`,
            backgroundColor: this.props.bgColor,
          }}
          ref={this.png}
        >
          <div className={classes.text}>
            <div
              className={classes.header}
              ref={this.header}
              style={{
                color: this.props.textColor,
              }}
            >
              {this.props.header}
            </div>
            <div
              className={`${classes.header} ${classes.headerToCheck}`}
              ref={this.headerToCheck}
            >
              {this.props.header}
            </div>
            <div
              className={classes.description}
              value={this.props.description}
              ref={this.description}
              style={{
                color: this.props.textColor,
              }}
            >
              {this.props.description}
            </div>
            <div
              className={`${classes.description} ${classes.descriptionToCheck}`}
              ref={this.descriptionToCheck}
            >
              {this.props.description}
            </div>
          </div>
        </div>
      </a>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    textColor: state.textColor,
    bgColor: state.bgColor,
    description: state.description,
    header: state.header,
    url: state.url,
    imgUrl: state.base64Url || state.imgUrl,
    imgError: false,
  };
};

const Connected = connect(mapStateToProps, null, null, { forwardRef: true })(
  Preview
);

export default React.forwardRef((props, ref) => {
  return <Connected {...props} ref={ref} />;
});
