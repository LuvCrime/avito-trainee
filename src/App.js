import "./App.css";
import React from "react";
import { Form } from "./Form/Form";
import { Preview } from "./Preview/Preview";
import * as html2canvas from "html2canvas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      header: "Вакансия мечты",
      description: "frontend-dev",
      buttonIndex: "",
      imgUrl: "https://pngimg.com/uploads/free/free_PNG90756.png",
      textFits: true,
      headerFits: true,
      backgroundColor: "",
      color: "",
    };

    this.onChange = this.onChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.onTextLayoutChange = this.onTextLayoutChange.bind(this);
    this.printDocument = this.printDocument.bind(this);
    this.print = this.print.bind(this);
    this.preview = React.createRef();
    this.saveAsPng = this.saveAsPng.bind(this);
    this.saveAsHtml = this.saveAsHtml.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.saveAsJson = this.saveAsJson.bind(this);
    this.onHeaderLayoutChange = this.onHeaderLayoutChange.bind(this);
    this.changeTextColor = this.changeTextColor.bind(this);
  }

  changeTextColor(color) {
    this.setState({
      color: color,
    });
  }

  changeColor(color) {
    this.setState({
      backgroundColor: color,
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
    if (this.state.textFits === textFits) {
      return;
    } else {
      this.setState({
        textFits: textFits,
      });
    }
  }

  onHeaderLayoutChange(headerFits) {
    if (this.state.headerFits === headerFits) {
      return;
    } else {
      this.setState({
        headerFits: headerFits,
      });
    }
  }

  printDocument(domElement) {
    html2canvas(domElement, { useCORS: true }).then((canvas) => {
      this.saveAsPng(canvas.toDataURL(), "file-name.png");
    });
  }

  saveAsPng(uri, filename) {
    if (this.state.textFits === true && this.state.headerFits === true) {
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
        title: `Unable to save PNG (probably too long text)`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  print() {
    this.printDocument(this.preview.current.getRef());
  }

  saveAsHtml(text) {
    var t = document.getElementById("preview");
    text = t.innerHTML;
    try {
      if (this.state.textFits === true && this.state.headerFits === true) {
        var htmlDiv = document.createElement("div");
        htmlDiv.classList.add("copyDiv");
        document.body.append(htmlDiv);
        htmlDiv.innerText = text;
        var range = document.createRange();
        range.selectNodeContents(htmlDiv);
        window.getSelection().addRange(range);
        var successful = document.execCommand("copy");
        var msg = successful ? "successfully" : "unsuccessfully";
        document.body.removeChild(htmlDiv);
        window.getSelection().removeAllRanges();

        console.log("html");

        Swal.fire({
          position: "top",
          icon: "success",
          title: `HTML coppied ${msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new TypeError("not equel");
      }
    } catch (err) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: `Unable to copy HTML (probably too long text)`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  saveAsJson(text) {
    var element = document.getElementById("preview");
    var html = element.outerHTML;
    try {
      var data = {
        href: this.state.url,
        header: this.state.header,
        description: this.state.description,
        imgUrl: this.state.imgUrl,
        backgroundColor: this.state.backgroundColor,
      };
      if (this.state.textFits === true && this.state.headerFits === true) {
        var json = JSON.stringify(data);
        var htmlDiv = document.createElement("div");
        htmlDiv.classList.add("copyDiv");
        document.body.append(htmlDiv);
        htmlDiv.innerHTML = json;
        var range = document.createRange();
        range.selectNodeContents(htmlDiv);
        window.getSelection().addRange(range);
        var successful = document.execCommand("copy");
        var msg = successful ? "successfully" : "unsuccessfully";
        document.body.removeChild(htmlDiv);
        window.getSelection().removeAllRanges();
        console.log("json");

        Swal.fire({
          position: "top",
          icon: "success",
          title: `JSON coppied ${msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new TypeError("not equel");
      }
    } catch (err) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: `Unable to copy JSON (probably too long text)`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  render() {
    const MySwal = withReactContent(Swal);
    return (
      <div class="wrapper">
        <div class="main-block">
          <Form
            value={this.state.header}
            onChange={this.onChange}
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
          />
          <div id="preview">
            <Preview
              onChange={this.onChange}
              header={this.state.header}
              description={this.state.description}
              url={this.state.url}
              imgUrl={this.state.imgUrl}
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
      </div>
    );
  }
}

export default App;
