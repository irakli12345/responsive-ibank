function Greeting({ firstName }) {
  return (
    <div className="greeting">
      <p className="largerText">Hello, {firstName}</p>
      <div className="toggle">
        <label for="day">Day</label>
        <input type="radio" id="day"></input>
        <label for="night">Night</label>
        <input type="radio" id="night"></input>
      </div>
    </div>
  );
}

export default Greeting;
