
import { useEffect, useState } from 'react';
import './thermostat.css'

interface Props {
  /** The minimum temperature, in degrees centigrade */
  minimumTemperature: number;
  /** The maximum temperature, in degrees centigrade */
  maximumTemperature: number;
  /** The current target-temperature, in degrees centigrade */
  currentTemperature: number;
}

const Thermostat = ({ minimumTemperature, maximumTemperature, currentTemperature }: Props) => {
  const [indicatorThermo, setIndicatorThermo] = useState<number>();
  const rad = 292;

  useEffect(() => {
    console.log("calc")
    const rotationPerDegree = rad / (maximumTemperature - minimumTemperature);
    const rotation = (-146 + currentTemperature * rotationPerDegree);
    console.log(maximumTemperature, minimumTemperature)
    console.log("calc: ", rotation)
    setIndicatorThermo(rotation)
  }, [minimumTemperature, maximumTemperature, currentTemperature])

  return (
    <div className="container">
      <div className="control">
        <div className="indicator range-indicator indicator-start"></div>
        <div className="indicator range-indicator indicator-end"></div>
        <div className="indicator indicator-thermo" style={{ transform: `rotate(${indicatorThermo}deg)` }}></div>
      </div>
    </div>
  )
}

export { Thermostat }