import * as html2canvas from "html2canvas";
import Swal from "sweetalert2";
import autoBind from "auto-bind";
import React from "react";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import { inlineCss } from "./Preview/Styles";
import { connect } from "react-redux";
import { Copyright } from "./Copyright/Copyright";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFits: true,
      headerFits: true,
    };

    this.preview = React.createRef();
    autoBind(this);
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
    if (this.state.textFits) {
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

  copyText(text, type) {
    var title;
    var successful;

    if (this.state.textFits) {
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
      href: this.props.url,
      header: this.props.header,
      description: this.props.description,
      imgUrl: this.props.imgUrl,
      backgroundColor: this.props.backgroundColor,
      color: this.props.color,
    };
    var json = JSON.stringify(data);
    this.copyText(json, "JSON");
  }

  saveAsHtml() {
    var preview = document.getElementById("preview");
    this.copyText(
      `
        <style>${inlineCss}</style>
        ${preview.innerHTML}
    `,
      "HTML"
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-block">
          <Form
            saveImgBase={this.saveImgBase}
            handleEdit={this.handleEdit}
            textFits={this.state.textFits}
            headerFits={this.state.headerFits}
            printDocument={this.printDocument}
            print={this.print}
            saveAsHtml={this.saveAsHtml}
            saveAsJson={this.saveAsJson}
          />
          <div id="preview">
            <Preview
              onTextLayoutChange={this.onTextLayoutChange}
              onHeaderLayoutChange={this.onHeaderLayoutChange}
              printDocument={this.printDocument}
              ref={this.preview}
            />
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
