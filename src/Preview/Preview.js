import React from "react";
import PreviewM from "./PreviewM.module.css";

export class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
    this.descriptionToCheck = React.createRef();
    this.png = React.createRef();
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
  }
  componentDidUpdate() {
    if (
      this.description.current.offsetHeight !==
      this.descriptionToCheck.current.offsetHeight
    ) {
      this.props.onTextLayoutChange(false);
    } else {
      this.props.onTextLayoutChange(true);
    }
  }

  getRef() {
    return this.png.current;
  }

  render() {
    return (
      <a href={this.props.url} target="_blank" className={PreviewM.linkWrapper} id="linkBanner">
        <div
          className={PreviewM.wrapper}
          id="img"
          style={{ 
            backgroundImage: `url(${this.props.imgUrl})`,
            backgroundColor: this.props.backgroundColor   
          }}
          ref={this.png}
        >
          <div className={PreviewM.text}>
            <div className={PreviewM.header} value={this.props.header}>
              {this.props.header}
            </div>
            <div
              className={PreviewM.description}
              value={this.props.description}
              ref={this.description}
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
