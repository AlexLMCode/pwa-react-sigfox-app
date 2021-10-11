import React, { useState } from 'react'
import Pagination from "react-js-pagination";

import MainTable from './MainTable'

const Historial = () => {
  const [pages, setPages] = useState('');
  const [actualPage, setActualPage] = useState(1);
  return (
    <div>
      <MainTable option="allMensajes" page={actualPage} setPages={setPages} />
      <Pagination
        activePage={actualPage}
        itemsCountPerPage={10}
        totalItemsCount={pages}
        pageRangeDisplayed={5}
        onChange={async(e)=>{
          await setActualPage(e);
          console.log(actualPage)
        }}
      />
    </div>
  )
}

export default Historial
