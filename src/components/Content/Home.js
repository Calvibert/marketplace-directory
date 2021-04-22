import React, { useState } from 'react';
import Card from '../Card';

export default function Home() {
    const [entries, setEntries] = useState([]);

    function handleSearchClick() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var result = JSON.parse(this.responseText);
                setEntries(result);
            }
        };
        var data = {
            what: document.getElementById('search-what').value,
            where: document.getElementById('search-where').value
        };
        var url = "http://localhost:3001/search?data="+JSON.stringify(data);
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    return (
        <>
        <div className="search-box">
            <div className="d-flex justify-content-center">
                <div><input type="text" className="form-control custom-input" id="search-what" placeholder="what"/></div>&nbsp;
                <div><input type="text" className="form-control custom-input" id="search-where" placeholder="where"/></div>&nbsp;
                <button onClick={handleSearchClick} className="btn btn-custom" type="button">Search</button>
            </div>
        </div>
        {entries.map(entry => {
            return (
                <div key={entry.id}>
                    <Card data={entry}/>
                </div>
            );
        })}
        <h2>What we do:</h2>
        <p>Want to get something to someone fast? Just contact us! We'll come pick up and deliver for you in no time. We operate as a marketplace if you want to use our services.</p>
        <h2>Our mission!</h2>
        <p>Provide a fast, discreet, at-your-convenience delivery experience.</p>
        <h2>Reviews</h2>
        <p>Excellent! Unbelievable! The best ever! 🐐😂</p>
        </>
    );
}