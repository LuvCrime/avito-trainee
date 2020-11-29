import React from "react";
import PreviewM from "./PreviewM.module.css";

export class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
    this.descriptionToCheck = React.createRef();
    this.png = React.createRef();
    this.header = React.createRef();
    this.headerToCheck = React.createRef();
  }

  componentDidMount() {
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

  componentDidUpdate() {
    console.log(
      this.header.current.offsetHeight,
      this.headerToCheck.current.offsetHeight
    );
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
        className={PreviewM.linkWrapper}
        id="linkBanner"
      >
        <div
          className={PreviewM.wrapper}
          id="img"
          style={{
            backgroundImage: `url(${this.props.imgUrl})`,
            backgroundColor: this.props.backgroundColor,
          }}
          ref={this.png}
        >
          <div className={PreviewM.text}>
            <div
              className={PreviewM.header}
              ref={this.header}
              style={{
                color: this.props.color,
              }}
            >
              {this.props.header}
            </div>
            <div
              className={`${PreviewM.header} ${PreviewM.headerToCheck}`}
              ref={this.headerToCheck}
            >
              {this.props.header}
            </div>
            <div
              className={PreviewM.description}
              value={this.props.description}
              ref={this.description}
              style={{
                color: this.props.color,
              }}
            >
              {this.props.description}
            </div>
            <div
              className={`${PreviewM.description} ${PreviewM.descriptionToCheck}`}
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
