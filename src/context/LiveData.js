import axios from 'axios';
import {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const LiveDataContext = createContext();

export const LiveDataProvider = ({ children }) => {

    const [data, setData] = useState();

    const fetchDataPoint = async () => {
        let d
        axios
            .get("http://localhost:8080/getData")
            .then()
            .catch();

    }

    const pollDatabase = async () => {

        data

    }


}