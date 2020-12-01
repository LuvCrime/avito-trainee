import * as html2canvas from "html2canvas";
import Swal from "sweetalert2";
import autoBind from 'react-autobind';
import React from "react";

import { Form } from "./Form/Form";
import { Preview } from "./Preview/Preview";

import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://www.avito.ru/moskva",
      header: "Sample header",
      description: "Sample text",
      buttonIndex: "",
      imgUrl: "https://bellard.org/bpg/2.png",
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
        console.error('failed to copy!');
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
      };
      var json = JSON.stringify(data);
      this.copyText(json, 'JSON');
  }

  saveAsHtml() {
    var preview = document.getElementById("preview");
    
    this.copyText(preview.innerHTML, 'HTML');
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-block">
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
