import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap/Button';
import Actor from '../card/Actor';
import '../styles/Actors.css';

import {
    selectCount,
    selectAll,
    reset
} from '../actor/actorsSlice';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const Actors = (props) => {
    const count = useSelector(selectCount);
    const allActors = useSelector(selectAll);
    const dispatch = useDispatch();
    const [value, setValue] = useState([1, 3]);

    const createListOfPersons = () => {
        let table = []

        let index = 0;
        allActors.map((actor) => {
            table.push(
                <Actor key={"actor" + index} actor={actor} />
            );
            index++;
        });

        return table;
    }

    useEffect(() => {
        dispatch(reset());
    }, ["hot"]);

    const handleChange = (val) => {
        setValue(1);
        // console.log("new val" + val);
    }

    return (
        <div className="ActorsBackground">
            <div className="ActorCards">
                {createListOfPersons()}
            </div>
        </div>
    );
}

export default Actors;