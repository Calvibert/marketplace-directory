import React from 'react'

export default function Card({ data }) {
    return (
        <div key={data.id} className="row custom-card">
            <div className="col"><img alt="Company logo" src={data.logo}/></div>
            <div className="col-10"><a target="_blank" rel="noreferrer" href={data.website}><h2>{data.business}</h2></a>
            <p>{data.description}</p></div>
        </div>
    );
}
