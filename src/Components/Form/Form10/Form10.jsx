import React from 'react'

const Form10 = () => {
    return (
        <div className="contner">
            <div style={{color:'#9e0b0f'}} className="contner-top">
                <div className="form-name">
                    General
                </div>
                <div className="form-number">
                    10/12
                </div>
            </div>
            <div className="main-form-div">
                <form action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">How did you hear about the job?<b>*</b></label><br />
                        </span>
                        <span className='name-input'>
                            <div>
                                <select className='input-feild' name="" id="SelectReference">
                                    <option value="">Select Reference</option>
                                    <option value="Job Portal">Job Portal</option>
                                    <option value="Employee Referral">Employee Referral</option>
                                    <option value="Consultancy">Consultancy</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Others">Others</option>
                                    <option value="Training Institute">Training Institute</option>
                                </select>
                            </div>
                            <div className='required'>
                                Job Reference is required
                            </div>
                        </span>
                        <span className='name-input'>
                            <div>
                                <input className='input-feild' type="text" name="" id="" placeholder="Job Reference Name" />
                            </div>
                            <div className='required'>
                                Job Reference Name is required
                            </div>
                        </span>
                        <span className='lastName'>
                        </span>
                    </div>

                    <br />
                    <br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Known Languages<b>*</b></label><br />
                        </span>
                        <span className='name-input'>
                            <div style={{ color: '#333', fontWeight: '400', fontSize: '1rem' }}>
                                <input type="checkbox" name="" id="" />&nbsp;
                                <label htmlFor="">English</label>
                                <br />
                                <input type="checkbox" name="" id="" />&nbsp;
                                <label htmlFor="">Tamil</label>
                                <br />
                                <input type="checkbox" name="" id="" />&nbsp;
                                <label htmlFor="">Telugu</label>
                                <br />
                                <input type="checkbox" name="" id="" />&nbsp;
                                <label htmlFor="">Kannada</label>
                                <br />
                                <input type="checkbox" name="" id="" />&nbsp;
                                <label htmlFor="">Malayalam</label>
                                <br />
                                <input type="checkbox" name="" id="" />&nbsp;
                                <label htmlFor="">Hindi</label>
                            </div>
                            <br />
                            <div className='required'>
                                Known Language is required
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

                    <br />
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

export default Form10