import List from './List' 

function App() {
    const fruits = [
        { id: 1, name: 'Apple', calories: 95, price: 1.2 },
        { id: 2, name: 'Orange', calories: 62, price: 0.8 },
        { id: 3, name: 'Banana', calories: 105, price: 0.5 },
        { id: 4, name: 'Coconut', calories: 354, price: 3.0 },
        { id: 5, name: 'Pineapple', calories: 50, price: 1.5 }      
    ];


    const vagitavale = [
        { id: 1, name: 'Tomato', calories: 95, price: 1.2 },
        { id: 2, name: 'Avogador', calories: 62, price: 0.8 },
        { id: 3, name: 'Onion', calories: 105, price: 0.5 },
        { id: 4, name: 'Lemon', calories: 354, price: 3.0 },
        { id: 5, name: 'Green Chile', calories: 50, price: 1.5 }      
    ];


  return (
    <>
        <List items={fruits} category="Fruits" />
        <List items={vagitavale} category="Vagitavale" />
    </>
  )
}

export default App