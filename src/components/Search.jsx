// "use client"
// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import { useRouter } from 'next/router';

// const SearchInput = () => {
//   const [searchTerm, setSearchTerm] = useState('');
 
//   const handleSearchChange = (event) => {
//       setSearchTerm(event.target.value);
//     };
    
//     const handleSearch = () => {
//       const router = useRouter()
//     // Perform the actual search action or pass the search term to a parent component
    
//     router.push(`/?search=${searchTerm}`)
//   };

//   return (
//     <TextField
//       label="Search Products"
//       variant="outlined"
//       fullWidth
//       value={searchTerm}
//       onChange={handleSearchChange}
//       onKeyPress={(event) => {
//         if (event.key === 'Enter') {
//           handleSearch();
//         }
//       }}
//     />
//   );
// };

// export default SearchInput;

"use client"
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';

const AddToCartButton = () => {

    const [searchTerm, setSearchTerm] = useState('');
 
    const router = useRouter()
      const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
        };
        
        const handleSearch = () => {
        // Perform the actual search action or pass the search term to a parent component
        
        router.push(`/?search=${searchTerm}`)
      };
    return (
            <TextField
            className='mb-10'
              label="Search Products"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          );
};

export default AddToCartButton;