import React from "react";
import autoBind from 'react-autobind';
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
            placeholder="Вставьте ссылку на которую ведет баннер"
            onChange={this.props.onChange}
            value={this.props.url}
            name="url"
          ></input>
          <input
            className={FormM.inputForm}
            placeholder="Вставьте ссылку на картинку или dataURI"
            onChange={this.props.onChange}
            value={this.props.imgUrl}
            name="imgUrl"
          ></input>
          <input
            className={FormM.inputForm}
            placeholder="Заголовок"
            onChange={this.props.onChange}
            value={this.props.header}
            name="header"
          ></input>
          {!this.props.headerFits && (
            <div className={FormM.text}>Слишком длинный текст.</div>
          )}
          <textarea
            className={FormM.inputForm}
            placeholder="Текст"
            onChange={this.props.onChange}
            value={this.props.description}
            name="description"
          ></textarea>
          {!this.props.textFits && (
            <div className={FormM.text}>Слишком длинный текст.</div>
          )}
          <div className={FormM.colors}>
            <div className={FormM.chooseColor}>
              Выберите цвет <br></br>заливки
            </div>
            <input
              className={FormM.color}
              type="color"
              list="colorList"
              onChange={this.onChangeColor}
            />
            <div className={FormM.chooseColor}>
              Выберите цвет <br></br>текста
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
          <Button
            type="button"
            id="png"
            onClick={this.props.print}
          >
            Save as PNG
          </Button>
          <Button
            type="button"
            id="html"
            onClick={this.props.saveAsHtml}
          >
            Save as HTML
          </Button>
          <Button
            type="button"
            id="json"
            onClick={this.props.saveAsJson}
          >
            Save as JSON
          </Button>
        </div>
      </div>
    );
  }
}
