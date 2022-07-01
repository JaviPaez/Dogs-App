import React, { useState } from 'react'

const initialBreeds = [{
    id: 1,
    name: 'Boxer'
},
{
    id: 2,
    name: 'Husky'
}];

const Select = () => {
    const [breeds, setBreeds] = useState(initialBreeds);

    return (
        <select>
            {breeds.map(breed => (
                <option value={breed.id} key={breed.id}>
                    {breed.name}
                </option>
            ))}
        </select>
    )
}

export default Select