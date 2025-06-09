import useSwitch from "./snacks/snack1";
import useDate from "./snacks/Snack2";
import useCustomPointer from "./snacks/Snack3";

export default function App() {
  // snack 1
  const [isOn, toggle] = useSwitch();

  // snack 2
  const currentDate = useDate();

  // snack 3
  const customPointer = useCustomPointer("🔥");

  return (
    <>
      {/* snack 1 */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      {/* snack 2 */}
      <div>
        <h1>Data e ora attuali:</h1>
        <p>
          {currentDate.date} - {currentDate.time}
        </p>
      </div>

      {/* snack 3 */}
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>
  );
}
