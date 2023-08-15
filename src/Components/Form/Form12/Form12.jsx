import React from 'react'

const Form12 = () => {
    return (
        <div className="contner">
            <div style={{color:'#197b30'}} className="contner-top">
                <div className="form-name">
                Summary
                </div>
                <div className="form-number">
                    12/12
                </div>
            </div>
            <div className="main-form-div">
                <form action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Summary<b>*</b></label>
                        </span>
                        <span className='name-input-full'>
                            <div>
                                <textarea className='input-feild' style={{ paddingBottom: '13%' }} placeholder='Summary' />
                            </div>
                            <div className='required'>
                                Summary is required
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
                            <label htmlFor="">Upload Your Resume<b>*</b></label>
                        </span>
                        <span className='name-input-full'>
                            <div>
                                <input style={{border:'none',backgroundColor:'transparent',display:'block',height:'36px',color:'#333'}} className='input-feild' type="file" name="" id="" />
                            </div>
                            <div className='required'>
                                Resume is required
                            </div>
                            <br />
                            <div>
                                <input type="checkbox" name="" id="" />&nbsp;
                                <label style={{color:'#333'}} htmlFor="">I confirm that the information given in this form is true, complete and accurate.</label>
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
                        <a className='next-button' href="">Submit</a>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Form12