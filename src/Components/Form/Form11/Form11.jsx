import React from 'react'

const Form11 = () => {
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
                <form action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Have you got Vaccinated ?<b>*</b></label>
                        </span>
                        <span className='name-input'>
                            <div>
                                <input type="radio" name="Vaccinated" id="" />&nbsp;
                                <label htmlFor="">Yes</label>&nbsp;&nbsp;
                                <input type="radio" name="Vaccinated" id="" />&nbsp;
                                <label htmlFor="">No</label>
                            </div>
                            <br /><br />
                            <div className='required'>
                                Vaccination Detail is required
                            </div>
                        </span>
                        <span className='name-input'>
                            <div>
                            </div>
                            <div className='required'>
                            </div>
                        </span>
                        <span className='lastName'>
                        </span>
                    </div>

                    <hr />

                    <div className='button'>
                        <a className='previous-button' href="">Previous</a>
                        <a className='next-button' href="">Next</a>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Form11