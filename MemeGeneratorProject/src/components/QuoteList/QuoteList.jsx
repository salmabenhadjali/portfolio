import React from "react"
import './QuoteList.css'
import quotesData from '../../data/quotes'

function QuoteList() {
    const [quotes, setQuotes] = React.useState(quotesData.data.quotes)
    const [messages, setMessages] = React.useState(['a'])
    
    const quoteElements = quotes.map(quote => (
        <div key={quote.id}>
            <h3>{quote.setup}</h3>
            {quote.isShown && <p>{quote.punchline}</p>}
            <button onClick={() => toogle(quote.id)}>{quote.isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </div>
    ))

    function toogle(id) {
        setQuotes(prev => {
            return quotes.map(quote => {
                return quote.id === id ? {...quote, isShown: !quote.isShown} : quote;
            })
        })
    }

    function getMessagesSummary() {
        return messages.length === 0 ? "You're all cut up!" 
            : `You have ${messages.length} unread ` +
             (messages.length === 1 ? "message" : "messages")
    }

    return(
        <div className="quotes">
            {getMessagesSummary()}
            {quoteElements}
        </div>
    );
}

export default QuoteList;