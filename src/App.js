import React from 'react';

import{BrowserRouter, Routes, Route} from 'react-router-dom'


import LoginRegister from './LoginRegister.js'
function app() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegister/>}></Route>
        <Route path='/register' element={<LoginRegister/>}></Route>

      </Routes>
   </BrowserRouter>
  );
}

export default app;