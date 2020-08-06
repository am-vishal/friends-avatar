import React from 'react';
import Card from './Card';

//Example:1
const CardList = ({ monster }) => {
    const cardArray = monster.map((user, i) => {
        return (<Card key={i}
            id={monster[i].id}
            name={monster[i].name}
            email={monster[i].email}
        />)
    })
    return (
        <div>
            {cardArray}
        </div>
    );
}

// or you could write like this
// const CardList = ({ monster }) => {
//     return (
//         <div>
//             {
//                 monster.map((user, i) => {
//                     return (

//                         <Card
//                             key={i}
//                             id={monster[i].id}
//                             name={monster[i].name}
//                             email={monster[i].email}
//                         />
//                     );
//                 })
//             }
//         </div>
//     );
// }
export default CardList;