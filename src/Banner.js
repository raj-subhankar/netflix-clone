import React from 'react'
import './Banner.css'

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return(
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://occ-0-2041-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRMEAAPGLY0bsd6G7Ec2q8AB0GktCFRyaiRPPs8z1WgYQZKHgkd-KkHvKqxJWagKwQuzyAH669ipR2-EjLhotm54ViDo.jpg?r=ac4")`,
            backgroundPosition: "center center"
        }}>

            <div className='banner__contents'>
                <h2 className='banner__title'>Movie Name</h2>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(`This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`, 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />

        </header>
    )
}

export default Banner