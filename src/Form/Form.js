import React from "react";
import autoBind from "auto-bind";
import FormM from "./FormM.module.css";
import Button from "../Button/Button";
import Swal from "sweetalert2";

import {
  changeTextColor,
  changeBgColor,
  changeInputVal,
  setImgUrl,
  base64Url,
  clearForm,
} from "../Redux/actions";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onChangeBgColor(e) {
    var color = e.target.value;
    this.props.changeBgColor(color);
  }

  onChangeTextColor(e) {
    var color = e.target.value;
    this.props.changeTextColor(color);
  }

  onChangeInput(e) {
    console.log(e.target.name, e.target.value);
    this.props.changeInputVal(e.target.name, e.target.value);
  }

  saveImgBase(e) {
    let imgUrl = e.target.value;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    var base_image = new Image();
    base_image.crossOrigin = "anonymous";
    base_image.src = e.target.value;
    base_image.onload = () => {
      canvas.width = base_image.width;
      canvas.height = base_image.height;
      ctx.drawImage(base_image, 0, 0);
      document.body.append(canvas);
      var pngUrl = canvas.toDataURL();
      this.props.base64Url(pngUrl, false);
    };
    base_image.onerror = () => {
      this.props.base64Url(imgUrl, true);
    };
    this.props.setImgUrl(imgUrl);
  }

  clearForm() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear form!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cleared!", "Your form has been cleared.", "success");
        this.props.clearForm();
      }
    });
  }

  render() {
    return (
      <div className={FormM.wrapper}>
        <form className={FormM.inputBlock} autoComplete="off">
          <label>Insert the link that leads to the banner</label>
          <input
            className={FormM.inputForm}
            onChange={this.onChangeInput}
            name="url"
            value={this.props.url}
          ></input>
          <label>Insert the link that leads to the picture or dataURI</label>
          <input
            className={FormM.inputForm}
            onChange={this.saveImgBase}
            value={this.props.imgUrl}
            name="imgUrl"
          ></input>
          {this.props.imgError && this.props.imgUrl.trim() && (
            <div className={FormM.text}>
              This image'll be shown but won't be saved because of CORS.
            </div>
          )}
          <label>Header</label>
          <input
            className={FormM.inputForm}
            onChange={this.onChangeInput}
            value={this.props.header}
            name="header"
          ></input>
          {!this.props.headerFits && (
            <div className={FormM.text}>Too long text</div>
          )}
          <label>Text</label>
          <textarea
            className={FormM.inputForm}
            onChange={this.onChangeInput}
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
              onChange={this.onChangeBgColor}
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
            Save as <br></br>PNG
          </Button>
          <Button type="button" id="html" onClick={this.props.saveAsHtml}>
            Copy as <br></br>HTML
          </Button>
          <Button type="button" id="json" onClick={this.props.saveAsJson}>
            Copy as <br></br>JSON
          </Button>
          <Button type="button" id="clear" onClick={this.clearForm}>
            Clear <br></br>form
          </Button>
        </div>
      </div>
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
    imgUrl: state.imgUrl,
    imgError: state.imgError,
  };
};

const mapDispatchToProps = {
  changeTextColor: changeTextColor,
  changeBgColor: changeBgColor,
  changeInputVal: changeInputVal,
  setImgUrl: setImgUrl,
  base64Url: base64Url,
  clearForm: clearForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
