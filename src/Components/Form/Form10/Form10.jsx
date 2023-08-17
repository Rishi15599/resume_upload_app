import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form10 = () => {
    const [SelectReference, setSelectReference] = useState('')
    const [JobReferenceName, setJobReferenceName] = useState('')
    const [English, setEnglish] = useState('')
    const [Tamil, setTamil] = useState('')
    const [Telugu, setTelugu] = useState('')
    const [Kannada, setKannada] = useState('')
    const [Malayalam, setMalayalam] = useState('')
    const [Hindi, setHindi] = useState('')
    const navigate = useNavigate();

    function handleClick() {
        navigate("/form9")
    }

    function validateForm(e) {
        e.preventDefault();

        if (SelectReference.trim() === "") {
            document.getElementById('SelectReferenceErr').innerHTML = "Job Reference is required"
        } else {
            document.getElementById('SelectReferenceErr').innerHTML = ""
            console.log("Reference : " + SelectReference)
        }

        if (JobReferenceName.trim() === "") {
            document.getElementById('JobReferenceNameErr').innerHTML = "Job Reference Name is required"
        } else {
            document.getElementById('JobReferenceNameErr').innerHTML = ""
            console.log("Job Reference : " + JobReferenceName)
        }

        if (English.trim() === "" && Tamil.trim() === "" && Telugu.trim() === "" && Kannada.trim() === "" && Malayalam.trim() === "" && Hindi.trim() === "") {
            document.getElementById('EnglishErr').innerHTML = "Known Language is required"
        } else {
            document.getElementById('EnglishErr').innerHTML = ""
            console.log("Known Languages : " + English + " " + Tamil + " " + Telugu + " " + Kannada + " " + Malayalam + " " + Hindi)
        }

        if (SelectReference.trim() === "" || JobReferenceName.trim() === "" || (English.trim() === "" && Tamil.trim() === "" && Telugu.trim() === "" && Kannada.trim() === "" && Malayalam.trim() === "" && Hindi.trim() === "")) {

        } else {
            navigate("/form11")
        }
    }
    return (
        <div className="contner">
            <div style={{ color: '#9e0b0f' }} className="contner-top">
                <div className="form-name">
                    General
                </div>
                <div className="form-number">
                    10/12
                </div>
            </div>
            <div className="main-form-div">
                <form onSubmit={validateForm} action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">How did you hear about the job?<b>*</b></label><br />
                        </span>
                        <span className='name-input'>
                            <div>
                                <select className='input-feild' onChange={(e) => setSelectReference(e.target.value)}>
                                    <option value="">Select Reference</option>
                                    <option value="Job Portal">Job Portal</option>
                                    <option value="Employee Referral">Employee Referral</option>
                                    <option value="Consultancy">Consultancy</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Others">Others</option>
                                    <option value="Training Institute">Training Institute</option>
                                </select>
                            </div>
                            <div id='SelectReferenceErr' className='required'>
                            </div>
                        </span>
                        <span className='name-input'>
                            <div>
                                <input className='input-feild' type="text" placeholder="Job Reference Name"
                                    onChange={(e) => setJobReferenceName(e.target.value)} />
                            </div>
                            <div id='JobReferenceNameErr' className='required'>
                            </div>
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
                                <input type="checkbox" value="English" onChange={(e) => setEnglish(e.target.value)} />&nbsp;
                                <label htmlFor="">English</label>
                                <br />
                                <input type="checkbox" value="Tamil" onChange={(e) => setTamil(e.target.value)} />&nbsp;
                                <label htmlFor="">Tamil</label>
                                <br />
                                <input type="checkbox" value="Telugu" onChange={(e) => setTelugu(e.target.value)} />&nbsp;
                                <label htmlFor="">Telugu</label>
                                <br />
                                <input type="checkbox" value="Kannada" onChange={(e) => setKannada(e.target.value)} />&nbsp;
                                <label htmlFor="">Kannada</label>
                                <br />
                                <input type="checkbox" value="Malayalm" onChange={(e) => setMalayalam(e.target.value)} />&nbsp;
                                <label htmlFor="">Malayalam</label>
                                <br />
                                <input type="checkbox" value="Hindi" onChange={(e) => setHindi(e.target.value)} />&nbsp;
                                <label htmlFor="">Hindi</label>
                            </div>
                            <br />
                            <div id='EnglishErr' className='required'>
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

export default Form10