import React from 'react';
// import CardList from './CardList';


const Card = ({ id, name, email }) => {
    // const Card = (props) => { you can write this as well
    // const { name, email, id } = props; or this
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img alt="monsters" src={`https://robohash.org/${id}?set=set2`} /> */}
            <img alt="monsters" src={`https://picsum.photos/id/${id}/200`} />

            <header>
                <h2>{name} </h2>
                <p className=''>{email}</p>
            </header>


        </div >
    );
}
export default Card;