import "./App.css";
import React from "react";
import { Form } from "./Form/Form";
import { Preview } from "./Preview/Preview";
import * as html2canvas from "html2canvas";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      header: "",
      description:
        "bsdhbvfubfiuds buifbsiu gbuirbguibe bwfbe fbjfbewu iugbruib",
      buttonIndex: "",
      imgUrl: "https://pngimg.com/uploads/free/free_PNG90756.png",
      textFits: true,
      backgroundColor: ''
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
  }


  changeColor(color) {
    this.setState({
      backgroundColor: color
    })
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
  printDocument(domElement) {
    html2canvas(domElement, { useCORS: true }).then((canvas) => {
      this.saveAsPng(canvas.toDataURL(), "file-name.png");
    });
  }

  saveAsPng(uri, filename) {
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
  }

  print() {
    this.printDocument(this.preview.current.getRef());
  }

  saveAsHtml(text) {
    var t = document.getElementById("preview");
    text = t.innerHTML;
    try {
      var htmlDiv = document.createElement("div");
      htmlDiv.classList.add('copyDiv');
      document.body.append(htmlDiv);
      htmlDiv.innerText = text;
      var range = document.createRange();
      range.selectNodeContents(htmlDiv);
      window.getSelection().addRange(range);
      var successful = document.execCommand("copy");
      var msg = successful ? "successfully" : "unsuccessfully";
      document.body.removeChild(htmlDiv);
      window.getSelection().removeAllRanges()

      console.log('html')

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `HTML coppied ${msg}`,
        showConfirmButton: false,
        timer: 1500
      })
      // alert("html coppied " + msg);
    } catch (err) {
      // alert("Unable to copy html");
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: `Unable to copy HTML`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
 

saveAsJson(text) {
  var element = document.getElementById('preview');
  var html = element.outerHTML;
  try {   
    var data = { 
      href: this.state.url,
      header: this.state.header,
      description: this.state.description,
      imgUrl: this.state.imgUrl,
      backgroundColor: this.state.backgroundColor
    } 
    var json = JSON.stringify(data);
    var htmlDiv = document.createElement('div');  
    htmlDiv.classList.add('copyDiv');
    document.body.append(htmlDiv);
    htmlDiv.innerHTML = json; 
    var range = document.createRange();
    range.selectNodeContents(htmlDiv);
    window.getSelection().addRange(range);
    var successful = document.execCommand("copy");
    var msg = successful ? "successfully" : "unsuccessfully";
    document.body.removeChild(htmlDiv);
    window.getSelection().removeAllRanges()
    console.log('json')


    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `JSON coppied ${msg}`,
      showConfirmButton: false,
      timer: 1500
    })

    // alert("JSON coppied " + msg);
  } catch (err) {

    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: `Unable to copy JSON`,
      showConfirmButton: false,
      timer: 1500
    })
    // alert("Unable to copy JSON");
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
            printDocument={this.printDocument}
            print={this.print}
            saveAsHtml={this.saveAsHtml}
            changeColor={this.changeColor}
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
              printDocument={this.printDocument}
              ref={this.preview}
              changeColor={this.changeColor}
              backgroundColor ={this.state.backgroundColor}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
