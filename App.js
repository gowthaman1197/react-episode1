/**
 * <div id="parent">
 *  <div id="child">
 *   <h1>Hello World!</h1>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement("h2", {}, "Hello React!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
