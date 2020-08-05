import React from "react";

const MovieListCard = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{width: "100%", height: 360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width: "100%", height: 360}}/>
                    }
                    <div className="card-content">
                        <p><a hrer="#">View Details...</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default MovieListCard;
