import {render} from '@testing-library/react';
import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar component', ()=>{
   test('renders correctly', ()=>{
    const {container} = render(
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
    )
     expect(container).toMatchSnapshot()
   })
})