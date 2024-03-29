import { useReducer, useState } from 'react'
import fakeAPI from '../assets/fakeAPI'

const select1 = {
    width:"8em",
    height:"2em",
    backgroundColor: "#EDEFEE",
    color: "#495E57",
    fontWeight: "bold",
    borderRadius: "0.5em",
    border: "0em",
    boxShadow: "0em 0.1em 0em darkgrey",
    textAlign: "center",
}

const select2 = {
    width:"6em",
    height:"2em",
    backgroundColor: "#EDEFEE",
    color: "#495E57",
    fontWeight: "bold",
    borderRadius: "0.5em",
    border: "0em",
    boxShadow: "0em 0.1em 0em darkgrey",
    textAlign: "center",
}

const select3 = {
    fontSize: "0.5em",
    width:"2em",
    height:"1.2em",
    backgroundColor: "#EDEFEE",
    color: "#495E57",
    fontWeight: "bold",
    borderRadius: "0.5em",
    border: "0em",
    boxShadow: "0em 0.1em 0em darkgrey",
    textAlign: "center",
}

const select4 = {
    width:"12em",
    height:"3em",
    backgroundColor: "#EDEFEE",
    color: "#495E57",
    fontWeight: "bold",
    borderRadius: "0.5em",
    border: "0em",
    boxShadow: "0em 0.1em 0em darkgrey",
    textAlign: "center",
}

const BookingForm = () => {
    const [date, setDate] = useState(new Date("2024-03-30"))

    const handleDate = (e) => {
        const tempDate = new Date(e.target.value.toString())
        setDate(tempDate)
    }

    const updateTimes = (state, action) => {
        if (action.type === '1') return {times: fakeAPI.fetchAPI(date)}
    }

    const initializeTimes = () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
        return {times: availableTimes}
    }

    const [state, dispatch] = useReducer(updateTimes, initializeTimes())

    const options = state.times.map(time => {
        return <option>{time}</option>
    })

    return (
        <form>

            <label htmlFor='res-date' id='res-date'>Choose date</label>
            <input type='date' id='res-date' style={select1}
                onChange={() => dispatch({type: '1'})}
                onInput={handleDate}
            />

            <label htmlFor='res-time' id='res-time'>Choose time</label>
            <select id='res-time' style={select2}>
                {options}
            </select>

            <label htmlFor='guests' id='guests'>Number of guests</label>
            <input
                id='guests'
                type="number"
                placeholder='1'
                min='1'
                max='10'
                style={select3}
            />
            <label htmlFor='occasion' id='occasion'>Occasion</label>
            <select id='occasion' style={select4}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input id='sub' type='submit' value='Make your reservation'/>
        </form>
    )
}
export default BookingForm