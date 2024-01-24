"use client"

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useRouter } from 'next/navigation';

const CustomPagination = ({ total, skip, limit }) => {
  const pageCount = Math.ceil(total / limit);

  let router = useRouter();

  const handleChange = (event, page) => {

    router.push(`/?p=${page}`)
  };

  return (
    <Pagination
      count={pageCount}
      page={skip / limit + 1}
      onChange={handleChange}
      color="primary"
      showFirstButton
      showLastButton
    //   renderItem={(item) => (
    //     <PaginationItem
    //       component="div"
    //       {...item}
    //       onClick={() => onPageChange(item.page)}
    //     />
    //   )}
    />
  );
};

export default CustomPagination;
