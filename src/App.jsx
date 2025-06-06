import useSwitch from "./snacks/snack1";
import useDate from "./snacks/Snack2";

export default function App() {
  const [isOn, toggle] = useSwitch();

  const currentDate = useDate();

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>
          {currentDate.date} - {currentDate.time}
        </p>
      </div>
    </>
  );
}
