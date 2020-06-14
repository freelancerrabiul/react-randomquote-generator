import React, { Component } from 'react'
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';

export default class App extends Component {


  state = {
    quote: quotes[0].quote,
    author: quotes[0].author
  }

  // state = {
  //   quote: this.shuffleQuotes(quotes)[0].quote,
  //   author: this.shuffleQuotes(quotes)[0].author
  // }


  // generateRandomQuote = (arr) => {
  //   const randomNum = Math.floor(Math.random() * quotes.length);
  //   console.log(arr[randomNum])
  //   let newQuote = arr[randomNum];
  //   console.log(newQuote)
  //   this.setState({
  //     quote: newQuote.quote,
  //     author: newQuote.author
  //   })
  //   return newQuote;
  //   //let newQuote = 

  // }


  // generateId = () => {
  //   const randomId = Math.random() * quotes.length;
  //   return randomId
  // }

  generateRandomNum = (arr) => {
    console.log(quotes)
    console.log(this.state)
    let num = Math.floor(Math.random() * quotes.length)


    let newQuote = quotes[num];
    console.log(newQuote)

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

    console.log(this.state)
    this.shuffleQuotes(quotes)

  }


  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  randomColor = (arr) => {
    let randNum = Math.floor(Math.random() * quotes.length);
    let colors = ['#92977e', '#3e6e18f', '#48ACF0', '#594236', '#93A3BC', '#CF1259', '#B7C3F3', '#2C514C', '#E3C0D3', '#A13D63'];
    let newColor = colors[randNum];
    return newColor;
  }

  // changeBackgroundColor = () => {
  //   document.body.style.background = this.randomColor()
  // }

  render() {
    return (
      <div>
        <h1>Random Quote</h1>
        <QuoteAndAuthor
          generateRandomNum={this.generateRandomNum}
          quote={this.state}
          color={this.randomColor}
        />
        {/* <QuoteAndAuthor /> */}
        {/* color={this.randomColor} */}
      </div>
    )
  }
}
