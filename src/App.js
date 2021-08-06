import { useState } from "react";

function App() {
  const [morningHours, setMorningHours] = useState(0);
  const [lunchHours, setLunchHours] = useState(0);
  const [transportationHours, setTransportationHours] = useState(0);

  const totalHours =
    morningHours * 7 + lunchHours * 7 + transportationHours * 7;
  const percent = (totalHours / 15) * 600;

  let color = "bg-";

  if (totalHours < 5) {
    color += "red-400";
  } else if (totalHours < 10) {
    color += "blue-400";
  } else {
    color += "green-400";
  }
  return (
    <div className="bg-green-800 h-screen">
      <div className="grid items-start p-4 gap-4">
        <Slider
          title="Enter study hours for the morning"
          value={morningHours}
          setValue={setMorningHours}
        />
        <Slider
          title="Enter study hours for Lunch"
          value={lunchHours}
          setValue={setLunchHours}
        />
        <Slider
          title="Enter total study hours during transportations"
          value={transportationHours}
          setValue={setTransportationHours}
        />
      </div>

      <div className="flex flex-col items-center">
        <h2>Weekly hours quota</h2>
        <div className="w-screen flex flex-col items-center">
          <div className="bg-gray-400 h-14 rounded" style={{ width: "600px" }}>
            <div
              className={`${color} h-14 rounded`}
              style={{ width: `${percent}px`, maxWidth: `600px` }}
            ></div>
          </div>
        </div>

        <p>total hours: {totalHours.toFixed(1)}</p>
      </div>
    </div>
  );
}

function Slider({ title, value, setValue }) {
  return (
    <div className="flex flex-col items-center bg-green-700 p-5 rounded-lg">
      <h1>{title}</h1>
      <input
        step="0.1"
        type="range"
        min="0"
        value={value}
        max="5"
        onChange={(e) => setValue(e.target.value)}
        className="cursor-pointer w-52"
        id="myRange"
      />
      <p>{value}</p>
      <p className="w-52">total hours per week: {(value * 7).toFixed(1)}</p>
    </div>
  );
}

export default App;
