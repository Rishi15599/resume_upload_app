import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form1 from './Form1/Form1'
import Form2 from './Form2/Form2'
import Form3 from './Form3/Form3'
import Form4 from './Form4/Form4'
import Form5 from './Form5/Form5'
import Form6 from './Form6/Form6'
import Form7 from './Form7/Form7'
import Form8 from './Form8/Form8'
import Form9 from './Form9/Form9'
import Form10 from './Form10/Form10'
import Form11 from './Form11/Form11'
import Form12 from './Form12/Form12'

const Form = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form1 />} />
                    <Route path='/form2' element={<Form2 />} />
                    <Route path='/form3' element={<Form3 />} />
                    <Route path='/form4' element={<Form4 />} />
                    <Route path='/form5' element={<Form5 />} />
                    <Route path='/form6' element={<Form6 />} />
                    <Route path='/form7' element={<Form7 />} />
                    <Route path='/form8' element={<Form8 />} />
                    <Route path='/form9' element={<Form9 />} />
                    <Route path='/form10' element={<Form10 />} />
                    <Route path='/form11' element={<Form11 />} />
                    <Route path='/form12' element={<Form12 />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>

    )
}

export default Form
