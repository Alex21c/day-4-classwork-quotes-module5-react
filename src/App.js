import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import Header from './Components/Header';
import QuotesSection from './Components/QuotesSection';
import Footer from './Components/Footer';
import quotes from './quotes.json';

function App() {
  console.log(quotes);
  return (
    <div>
      <Header/>
      
        {quotes.map((quote, idx)=><QuotesSection key={idx} quote={quote} />)}
      
        
      
      
      <Footer/>
    </div>

  );
}

export default App;
