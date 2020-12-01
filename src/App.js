import * as html2canvas from "html2canvas";
import Swal from "sweetalert2";
import autoBind from "react-autobind";
import React from "react";

import { Form } from "./Form/Form";
import { Preview } from "./Preview/Preview";
import { Copyright } from "./Copyright/Copyright";

import "./App.css";
import { ThemeProvider } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://www.avito.ru/moskva",
      header: "Sample header",
      description: "Sample text Sample text Sample text Sample text",
      buttonIndex: "",
      imgUrl:
        "https://lh3.googleusercontent.com/proxy/SNOeb7FFcJ1BEHRutnCWZC9Vwzmm0h5em1zBlRu8EOWbRFzfz85o4Fxra-vmKOmaDNo2EZe5clTG8Z4_N2JpmC4tc-0uWjb9ZQEJECpi68_cGu7TJgQhV76ZTeM0I-Sxq0_Gc1A",
      base64Url: "",
      imgError: false,
      textFits: true,
      headerFits: true,
      backgroundColor: "",
      color: "",
    };

    this.preview = React.createRef();

    autoBind(this);
  }

  changeTextColor(color) {
    this.setState({
      color,
    });
  }

  changeColor(backgroundColor) {
    this.setState({
      backgroundColor,
    });
  }

  onChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({
      buttonIndex: e.target.id,
    });
  }

  onTextLayoutChange(textFits) {
    if (this.state.textFits !== textFits) {
      this.setState({
        textFits: textFits,
      });
    }
  }

  onHeaderLayoutChange(headerFits) {
    if (this.state.headerFits !== headerFits) {
      this.setState({
        headerFits: headerFits,
      });
    }
  }

  printDocument(domElement) {
    html2canvas(domElement, { useCORS: true }).then((canvas) => {
      this.saveAsPng(canvas.toDataURL(), "banner.png");
    });
  }

  saveAsPng(uri, filename) {
    if (this.state.textFits && this.state.headerFits) {
      var link = document.createElement("a");
      if (typeof link.download === "string") {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(uri);
      }
    } else {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: `Unable to save PNG (too long text)`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  print() {
    this.printDocument(this.preview.current.getRef());
  }

  saveImgBase(e) {
    this.setState({
      imgError: false,
    });
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
      this.setState({
        base64Url: pngUrl,
      });
    };

    base_image.onerror = () => {
      this.setState({
        imgError: true,
        base64Url: e.target.value,
      });
    };

    this.setState({
      imgUrl: e.target.value,
    });
  }

  copyText(text, type) {
    var title;
    var successful;

    if (this.state.textFits && this.state.headerFits) {
      var htmlDiv = document.createElement("div");
      htmlDiv.classList.add("copyDiv");
      document.body.append(htmlDiv);
      htmlDiv.innerText = text;

      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNodeContents(htmlDiv);
      window.getSelection().addRange(range);
      console.log(text, htmlDiv);

      try {
        successful = document.execCommand("copy");
      } catch (err) {
        console.error(err);
        successful = false;
      }

      if (!successful) {
        console.error("failed to copy!");
      }

      document.body.removeChild(htmlDiv);
      window.getSelection().removeAllRanges();

      title = successful
        ? `${type} coppied successfully`
        : `${type} coppied unsuccessfully`;
    } else {
      successful = false;
      title = "Too long text";
    }

    Swal.fire({
      position: "top",
      icon: successful ? "success" : "warning",
      title,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  saveAsJson() {
    var data = {
      href: this.state.url,
      header: this.state.header,
      description: this.state.description,
      imgUrl: this.state.imgUrl,
      backgroundColor: this.state.backgroundColor,
      color: this.state.color,
    };
    var json = JSON.stringify(data);
    this.copyText(json, "JSON");
  }

  saveAsHtml() {
    var preview = document.getElementById("preview");

    this.copyText(preview.innerHTML, "HTML");
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-block">
          <Form
            value={this.state.header}
            onChange={this.onChange}
            saveImgBase={this.saveImgBase}
            handleEdit={this.handleEdit}
            buttonIndex={this.state.buttonIndex}
            header={this.state.header}
            description={this.state.description}
            url={this.state.url}
            imgUrl={this.state.imgUrl}
            textFits={this.state.textFits}
            headerFits={this.state.headerFits}
            printDocument={this.printDocument}
            print={this.print}
            saveAsHtml={this.saveAsHtml}
            changeColor={this.changeColor}
            changeTextColor={this.changeTextColor}
            saveAsJson={this.saveAsJson}
            imgError={this.state.imgError}
          />
          <div id="preview">
            <Preview
              onChange={this.onChange}
              header={this.state.header}
              description={this.state.description}
              url={this.state.url}
              imgUrl={this.state.base64Url || this.state.imgUrl}
              onTextLayoutChange={this.onTextLayoutChange}
              onHeaderLayoutChange={this.onHeaderLayoutChange}
              printDocument={this.printDocument}
              ref={this.preview}
              changeColor={this.changeColor}
              backgroundColor={this.state.backgroundColor}
              color={this.state.color}
            />
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
}

export default App;
