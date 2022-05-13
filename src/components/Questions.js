import React, { Component } from 'react'
import { questionGeek } from "../data/Preguntas";
import "../components/styles/Questions.css"

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      numberQuestion: 1,
      question: {
        question: "",
        imagen:"",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
      },
      score: 4,
      answerSelect: "",
    };
  }
  componentDidMount() {
    const currentQuizData = questionGeek[this.state.numberQuestion];
    this.setState({
      question: {
        question: currentQuizData.question,
        a: currentQuizData.a,
        b: currentQuizData.b,
        c: currentQuizData.c,
        d: currentQuizData.d,
        correct: currentQuizData.correct,
      },
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (this.state.answerSelect === this.state.question.correct) {
      this.setState({
        score: this.state.score + 4,
      });
    }
    if (this.state.numberQuestion < questionGeek.length) {
      this.componentDidMount();
    }
    if (this.state.numberQuestion === questionGeek.length){
      this.state = {
        numberQuestion: 0}
    }
  }

  onChanged = (e) => {
    
    this.setState({
      answerSelect: e.currentTarget.value,
    });
  }



  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h1>vidas</h1>
        <div>
          <div className="flex">
            <h2 className="pregunta">{this.state.question.question}</h2>
          </div>
          <div className="respuestas">
            <input
              className="selectPregunta"
              type="radio"
              name={'respuesta'}
              id={`respuesta1`}
              value={this.state.question.a}
              onChange={this.onChanged}
            />
            <label className="labelPregunta" for="respuesta1">
              {this.state.question.a}
            </label>
            <input
              className="selectPregunta"
              type="radio"
              name={'respuesta'}
              id={`respuesta2`}
              value={this.state.question.b}
              onChange={this.onChanged}
            />
            <label className="labelPregunta" for="respuesta2">
              {this.state.question.b}
            </label>
            <input
              className="selectPregunta"
              type="radio"
              name={'respuesta'}
              id={`respuesta3`}
              value={this.state.question.c}
              onChange={this.onChanged}
            />
            <label className="labelPregunta" for="respuesta3">
              {this.state.question.c}
            </label>
          </div>
        </div>
        <button
          className="envResp"
          type="submit"
          onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion +1})}          
          }>
          COMPROBAR
        </button>
        <h2>Progreso: {this.state.numberQuestion}/{questionGeek.length} </h2>
        <h2>Puntaje: {this.state.score}/{questionGeek.length*4} </h2>
      </form>
    );
  }
}