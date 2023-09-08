import { useState } from "react"
import { Thermostat } from "../components/thermostat";
import './heater-temperature.css'

const HeaterTemperature = () => {
  const [minimumTemperature, setMinimumTemperature] = useState<number>(0);
  const [maximumTemperature, setMaximumTemperature] = useState<number>(50);
  const [currentTemperature, setCurrentTemperature] = useState<number>(25);

  return (
    <>
      <h2> Heater params </h2>

      <div className="heater-params">
        <label>Minimum temperature, in degrees centigrade</label>
        <input type="number" value={minimumTemperature} onChange={(event) => setMinimumTemperature(Number(event.target.value))} />

        <label>Maximum temperature, in degrees centigrade</label>
        <input type="number" value={maximumTemperature} onChange={(event) => setMaximumTemperature(Number(event.target.value))} />

        <label>Current target-temperature, in degrees centigrade</label>
        <input type="number" value={currentTemperature} min={minimumTemperature} max={maximumTemperature} onChange={(event) => setCurrentTemperature(Number(event.target.value))} />
      </div>

      <Thermostat currentTemperature={currentTemperature} minimumTemperature={minimumTemperature} maximumTemperature={maximumTemperature} />
    </>
  )
}

export { HeaterTemperature }