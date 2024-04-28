const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Tommy",
      animal: "Dog",
      breed: "Beagle",
    }),
    React.createElement(Pet, {
      name: "Whiskey",
      animal: "Cat",
      breed: "Orange",
    }),
    React.createElement(Pet, {
      name: "Hades",
      animal: "Dog",
      breed: "Mixed",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
