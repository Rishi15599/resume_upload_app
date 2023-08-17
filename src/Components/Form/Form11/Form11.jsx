import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form11 = () => {
    const [Vaccinated, setVaccinated] = useState('')
    const navigate = useNavigate();

    function handleClick() {
        navigate("/form10")
    }

    function validateForm(e) {
        e.preventDefault();

        if (Vaccinated.trim() === "") {
            document.getElementById('VaccinatedErr').innerHTML = "Vaccination Detail is required"
        } else {
            document.getElementById('VaccinatedErr').innerHTML = ""
            console.log("Vaccinated : " + Vaccinated)
            navigate('/form12')
        }
    }
    return (
        <div className="contner">
            <div style={{ color: '#197b30' }} className="contner-top">
                <div className="form-name">
                    Covid Vaccination
                </div>
                <div className="form-number">
                    11/12
                </div>
            </div>
            <div className="main-form-div">
                <form onSubmit={validateForm} action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Have you got Vaccinated ?<b>*</b></label>
                        </span>
                        <span className='name-input'>
                            <div>
                                <input type="radio" name="Vaccinated" value="Yes" onChange={(e) => setVaccinated(e.target.value)}/>&nbsp;
                                <label htmlFor="">Yes</label>&nbsp;&nbsp;
                                <input type="radio" name="Vaccinated" value="No" onChange={(e) => setVaccinated(e.target.value)}/>&nbsp;
                                <label htmlFor="">No</label>
                            </div>
                            <br /><br />
                            <div id='VaccinatedErr' className='required'>
                            </div>
                        </span>
                    </div>

                    <hr />

                    <div className='button'>
                        <button className='previous-button' onClick={handleClick}>Previous</button>
                        <button className='next-button' >Next</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form11