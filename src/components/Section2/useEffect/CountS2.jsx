import { useEffect } from "react";


function CountS2({ count, data }) {
    function countHandler() {
        console.log("Count Clicked")
    }


    function dataHandler() {
        console.log("Data Clicked")
    }

    useEffect(() => {
        countHandler();
    }, [count]);
    
    useEffect(() => {
        dataHandler();
    }, [data]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Data: {data}</h2>
        </div>
    )
}

export default CountS2
