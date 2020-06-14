import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomNum } = props;
    console.log(quote, generateRandomNum)
    return (
        <div style={{ background: 'white' }} className="card" >

            <div className="card-body" id="bg">

                <p className="card-text">{quote.quote}</p>
                <h5 className="card-title">- {quote.author}</h5>
                {/* <a href="#" type="button" onClick={() => { generateRandomQuote() }} className="btn btn-primary">Generate Quote</a> */}
                <button onClick={() => { generateRandomNum(quotes) }} type="submit">Generate Quote</button>
                <button className="ml-3" onClick={() => { generateRandomNum(quotes); window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author)) }} type="submit">Share Quote</button>
            </div>
        </div>
    )
}


// import React, { Component } from 'react'
// import quotes from '../QuoteDB'

// export default class QuoteAndAuthor extends Component {

//     render() {
//         //console.log(this.props)
//         const { quote, generateRandomNum, color } = this.props
//         //const aa = this.props.color()
//         //console.log(aa)
//         //console.log(quote, color)
//         //const html = document.documentElement;
//         //html.style.backgroundColor = aa;

//         //console.log(this.props)

//         // this.changeBackgroundColor = (color) => {
//         //     document.body.style.background = color
//         // }

//         // this.randomColor = () => {
//         //     let randNum = Math.random() * quotes.length;
//         //     let colors = ['#92977e', '#3e6e18f', '#48ACF0', '#594236', '#93A3BC', '#CF1259', '#B7C3F3', '#2C514C', '#E3C0D3', '#A13D63'];
//         //     let newColor = colors[randNum];
//         //     newColor = document.body.style.background
//         //     return newColor
//         //     //return newColor;
//         // }
//         return (
//             <div style={{ background: 'white' }} className="card" >

//                 <div className="card-body" id="bg">

//                     <p className="card-text">{quote.quote}</p>
//                     <h5 className="card-title">- {quote.author}</h5>
//                     {/* <a href="#" type="button" onClick={() => { generateRandomQuote() }} className="btn btn-primary">Generate Quote</a> */}
//                     <button onClick={() => { generateRandomNum(quotes) }} type="submit">Generate Quote</button>
//                     <button className="ml-3" onClick={() => { generateRandomNum(quotes); window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author)) }} type="submit">Share Quote</button>


//                 </div>
//             </div>
//         )
//     }
// }


