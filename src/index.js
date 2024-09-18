import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((v) => (
          <li key={v.name} className={`pizza ${v.soldOut ? "sold-out" : ""}`}>
            <img key={v.name} alt="hey" src={v.photoName}></img>
            <div>
              <h3>{v.name}</h3>
              <p>{v.ingredients}</p>
              <p>{v.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>
        </div>
      </footer>
      <div className="order">
        <button className="btn">ORDER</button>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
