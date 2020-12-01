import React from 'react';
import autoBind from "react-autobind";
import FormM from "./FormM.module.css";
import Button from "../Button/Button";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onChangeColor(e) {
    var color = e.target.value;
    this.props.changeColor(color);
  }

  onChangeTextColor(e) {
    var color = e.target.value;
    this.props.changeTextColor(color);
  }

  render() {
    return (
      <div className={FormM.wrapper}>
        <form className={FormM.inputBlock} autoComplete="off">
          <input
            className={FormM.inputForm}
            placeholder="Insert the link that leads to the banner"
            onChange={this.props.onChange}
            value={this.props.url}
            name="url"
          ></input>
          <input
            className={FormM.inputForm}
            placeholder="Insert the link that leads to the picture or dataURI"
            onChange={this.props.saveImgBase}
            value={this.props.imgUrl}
            name="imgUrl"
          ></input>
          {this.props.imgError && (
            <div className={FormM.text}>
              This image'll be shown but won't be saved because of CORS.
            </div>
          )}
          <input
            className={FormM.inputForm}
            placeholder="Header"
            onChange={this.props.onChange}
            value={this.props.header}
            name="header"
          ></input>
          {!this.props.headerFits && (
            <div className={FormM.text}>Too long text</div>
          )}
          <textarea
            className={FormM.inputForm}
            placeholder="Text"
            onChange={this.props.onChange}
            value={this.props.description}
            name="description"
          ></textarea>
          {!this.props.textFits && (
            <div className={FormM.text}>Too long text</div>
          )}
          <div className={FormM.colors}>
            <div className={FormM.chooseColor}>
              Pick background <br></br>color
            </div>
            <input
              className={FormM.color}
              type="color"
              list="colorList"
              onChange={this.onChangeColor}
            />
            <div className={FormM.chooseColor}>
              Pick text <br></br>color
            </div>
            <input
              className={FormM.color}
              type="color"
              list="colorList"
              onChange={this.onChangeTextColor}
            />
          </div>
        </form>
        <div className={FormM.buttons}>
          <Button type="button" id="png" onClick={this.props.print}>
            Save as PNG
          </Button>
          <Button type="button" id="html" onClick={this.props.saveAsHtml}>
            Save as HTML
          </Button>
          <Button type="button" id="json" onClick={this.props.saveAsJson}>
            Save as JSON
          </Button>
        </div>
      </div>
    );
  }
}
