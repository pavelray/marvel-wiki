import React from "react";
import { Icon, Pagination } from "semantic-ui-react";

const PaginationContainer = (prop) => {
  const { totalPages, defaultActivePage, handlePageChange } = prop;

  return (
    <Pagination
      defaultActivePage={defaultActivePage}
      boundaryRange={0}
      siblingRange={1}
      ellipsisItem={null}
      firstItem={{ content: <Icon name="angle double left" />, icon: true }}
      lastItem={{ content: <Icon name="angle double right" />, icon: true }}
      prevItem={{ content: <Icon name="angle left" />, icon: true }}
      nextItem={{ content: <Icon name="angle right" />, icon: true }}
      totalPages={totalPages}
      onPageChange={(e, { activePage }) => handlePageChange(activePage)}
    />
  );
};

export default PaginationContainer;
