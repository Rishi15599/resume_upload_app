import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const Form12 = () => {
    const [Summary, setSummary] = useState('')
    const [Resume, setResume] = useState('')
    const [checkbox, setcheckbox] = useState('')
    const navigate = useNavigate();

    function handleClick() {
        navigate("/form11")
    }

    function validateForm(e) {
        e.preventDefault();


        if (Summary.trim() === "") {
            document.getElementById('SummaryErr').innerHTML = "Summary is required"
        } else {
            document.getElementById('SummaryErr').innerHTML = ""
            console.log("Summary : " + Summary)
        }

        if (Resume.trim() === "") {
            document.getElementById('ResumeErr').innerHTML = "Resume is required"
        } else {
            document.getElementById('ResumeErr').innerHTML = ""
            console.log("Resume : " + Resume)
        }

        if (checkbox.trim() === "") {
        } else {
            console.log("checkbox : " + checkbox)
        }

        if (Summary.trim() === "" || Resume.trim() === "" || checkbox.trim() === "") {

        } else {
            swal({
                title: "Thank You!",
                text: "Your Application has been successfully submitted",
                timer: 2000,
            });

            setTimeout(() => navigate("/"), 2000);

        }
    }
    return (
        <div className="contner">
            <div style={{ color: '#197b30' }} className="contner-top">
                <div className="form-name">
                    Summary
                </div>
                <div className="form-number">
                    12/12
                </div>
            </div>
            <div className="main-form-div">
                <form onSubmit={validateForm} action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Summary<b>*</b></label>
                        </span>
                        <span className='name-input-full'>
                            <div>
                                <textarea className='input-feild' style={{ paddingBottom: '13%' }} placeholder='Summary'
                                    onChange={(e) => setSummary(e.target.value)} />
                            </div>
                            <div id='SummaryErr' className='required'>
                            </div>
                        </span>
                    </div>

                    <br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Upload Your Resume<b>*</b></label>
                        </span>
                        <span className='name-input-full'>
                            <div>
                                <input style={{ border: 'none', backgroundColor: 'transparent', display: 'block', height: '36px', color: '#333' }} className='input-feild' type="file"
                                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    onChange={(e) => setResume(e.target.value)} />
                            </div>
                            <div id='ResumeErr' className='required'>
                            </div>
                            <br />
                            <div>
                                <input type="checkbox" value="Yes" onChange={(e) => setcheckbox(e.target.value)} />&nbsp;
                                <label style={{ color: '#333' }} htmlFor="">I confirm that the information given in this form is true, complete and accurate.</label>
                            </div>
                        </span>
                    </div>

                    <br />
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

export default Form12