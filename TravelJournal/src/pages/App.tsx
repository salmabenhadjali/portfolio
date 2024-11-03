import TravelList from '../components/TravelList/TravelList';
import Navigation from '../components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <main>
        <section>
          <TravelList/>
        </section>
      </main>
    </>
  )
}

export default App
