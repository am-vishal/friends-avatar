import React from 'react';
import Card from './Card';

//Example:1
const CardList = ({ friends }) => {
    const cardArray = friends.map((user, i) => {
        return (<Card key={i}
            id={friends[i].id}
            name={friends[i].name}
            email={friends[i].email}
        />)
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}

// or you could write like this
// const CardList = ({ friends }) => {
//     return (
//         <div>
//             {
//                 friends.map((user, i) => {
//                     return (

//                         <Card
//                             key={i}
//                             id={friends[i].id}
//                             name={friends[i].name}
//                             email={friends[i].email}
//                         />
//                     );
//                 })
//             }
//         </div>
//     );
// }
export default CardList;