import React from "react";
import FormM from "./FormM.module.css";
import * as html2canvas from "html2canvas";
import { render } from "@testing-library/react";
import PlainCssButton from '../Button/PlainCssButton';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeColor=this.onChangeColor.bind(this);
  }
  onChangeColor(e) {
    var color = e.target.value;
    console.log(color);
    this.props.changeColor(color);
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
          <div className={FormM.chooseColor}>Выберите цвет заливки</div>
          <input className={FormM.color} type="color" list="colorList" onChange = { this.onChangeColor }/>
        </form>
        <div className={FormM.buttons}>
          <PlainCssButton 
            type="button"
            id="png"
            onClick={this.props.handleEdit}
            onClick={this.props.print}
          >
            Save as PNG
          </PlainCssButton>
          <PlainCssButton 
            type="button"
            id="html"
            onClick={this.props.handleEdit}
            onClick={this.props.saveAsHtml}
          >
            Save as HTML
          </PlainCssButton>
          <PlainCssButton 
            type="button"
            id="json"
            onClick={this.props.handleEdit}
            onClick={this.props.saveAsJson}
          >
            Save as JSON
          </PlainCssButton>
        </div>
      </div>
    );
  }
}
