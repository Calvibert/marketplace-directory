import React, { useState, useEffect } from 'react';

export default function Directory() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            // if (this.readyState === 4 && this.status === 200) {
            //     var result = JSON.parse(this.responseText);
            //     setEntries(result);
            // }
        };
        xhttp.open("GET", "http://localhost:3001/directory", true);
        xhttp.send();
    }, []);
    
    return (
        <>
        </>
    );
}