import React from 'react'

const Form7 = () => {
    return (
        <div className="contner">
            <div style={{color:'#630460'}} className="contner-top">
                <div className="form-name">
                    Course Details
                </div>
                <div className="form-number">
                    7/12
                </div>
            </div>
            <div className="main-form-div">
                <form action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Have you done any course in React JS ?<b></b></label>
                        </span>
                        <span className='name-input'>
                            <div>
                                <input type="radio" name="course" id="" />&nbsp;
                                <label htmlFor="">Yes</label>&nbsp;&nbsp;
                                <input type="radio" name="course" id="" />&nbsp;
                                <label htmlFor="">No</label>
                            </div>
                            <div className='required'>
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

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Course Name<b>*</b></label>
                        </span>
                        <span className='name-input-full'>
                            <div>
                                <input className='input-feild' type="text" name="" id="" placeholder='Course Name' />
                            </div>
                            <div className='required'>
                                Course Name is required
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

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Duration (In Months)<b>*</b></label>
                        </span>
                        <span className='name-input-full'>
                            <div>
                                <select className='input-feild' id="DurationInMonths">
                                    <option value="">Select Duration</option>
                                    <option name="0" value="0">0</option>
                                    <option name="1" value="1">1</option>
                                    <option name="2" value="2">2</option>
                                    <option name="3" value="3">3</option>
                                    <option name="4" value="4">4</option>
                                    <option name="5" value="5">5</option>
                                    <option name="6" value="6">6</option>
                                    <option name="7" value="7">7</option>
                                    <option name="8" value="8">8</option>
                                    <option name="9" value="9">9</option>
                                    <option name="10" value="10">10</option>
                                    <option name="11" value="11">11</option>
                                    <option name="12" value="12">12</option>
                                </select>
                            </div>
                            <div className='required'>
                                Course Period is required
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

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Institution name and address<b>*</b></label>
                        </span>
                        <span className='name-input-full'>
                            <div>
                                <textarea className='input-feild' style={{paddingBottom:'15%'}} placeholder='Institution name and address'/>
                            </div>
                            <div className='required'>
                                Institution name and address is required
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

export default Form7