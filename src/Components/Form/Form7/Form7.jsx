import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form7 = () => {
    const [course, setcourse] = useState('')
    const [CourseName, setCourseName] = useState('')
    const [DurationInMonths, setDurationInMonths] = useState('')
    const [Institution, setInstitution] = useState('')
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    function handleClick() {
        navigate("/form6")
    }

    function validateForm(e) {
        e.preventDefault();

        if (course.trim() === 'No') {
            navigate("/form8")
        } else if (course.trim() === 'Yes') {

            if (CourseName.trim() === "" || DurationInMonths.trim() === "" || Institution.trim() === "") {
                document.getElementById('CourseNameErr').innerHTML = "Course Name is required"

                document.getElementById('DurationInMonthsErr').innerHTML = "Course Period is required"

                document.getElementById('InstitutionErr').innerHTML = "Institution name and address is required"

            } else {
                document.getElementById('CourseNameErr').innerHTML = ""
                console.log("Course Name : " + CourseName)

                document.getElementById('DurationInMonthsErr').innerHTML = ""
                console.log("Duration (In Months) : " + DurationInMonths)

                document.getElementById('InstitutionErr').innerHTML = ""
                console.log("Institution name and address : " + Institution)
                navigate("/form8")
            }
        }
    }
    return (
        <div className="contner">
            <div style={{ color: '#630460' }} className="contner-top">
                <div className="form-name">
                    Course Details
                </div>
                <div className="form-number">
                    7/12
                </div>
            </div>
            <div className="main-form-div">
                <form onSubmit={validateForm} action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Have you done any course in React JS ?<b></b></label>
                        </span>
                        <span className='name-input'>
                            <div id='form-id'>
                                <input type="radio" name='test' value="Yes"
                                    onChange={(e) => setcourse(e.target.value)}
                                    onClick={() => setVisible(true)}
                                />&nbsp;
                                <label htmlFor="">Yes</label>&nbsp;&nbsp;
                                <input type="radio" name='test' value="No"
                                    onChange={(e) => setcourse(e.target.value)}
                                    onClick={() => setVisible(false)}
                                />&nbsp;
                                <label htmlFor="">No</label>
                            </div>
                            <div className='required'>
                            </div>
                        </span>
                    </div>

                    <br />

                    {visible &&
                        <div>
                            <div className='name'>
                                <span className='name-lable'>
                                    <label htmlFor="">Course Name<b>*</b></label>
                                </span>
                                <span className='name-input-full'>
                                    <div>
                                        <input className='input-feild' type="text" placeholder='Course Name'
                                            onChange={(e) => setCourseName(e.target.value)} />
                                    </div>
                                    <div id='CourseNameErr' className='required'>
                                    </div>
                                </span>
                            </div>

                            <br />

                            <div className='name'>
                                <span className='name-lable'>
                                    <label htmlFor="">Duration (In Months)<b>*</b></label>
                                </span>
                                <span className='name-input-full'>
                                    <div>
                                        <select className='input-feild' onChange={(e) => setDurationInMonths(e.target.value)}>
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
                                    <div id='DurationInMonthsErr' className='required'>
                                    </div>
                                </span>
                            </div>

                            <br />

                            <div className='name'>
                                <span className='name-lable'>
                                    <label htmlFor="">Institution name and address<b>*</b></label>
                                </span>
                                <span className='name-input-full'>
                                    <div>
                                        <textarea className='input-feild' style={{ paddingBottom: '15%' }} placeholder='Institution name and address'
                                            onChange={(e) => setInstitution(e.target.value)} />
                                    </div>
                                    <div id='InstitutionErr' className='required'>

                                    </div>
                                </span>
                            </div>
                        </div>
                    }

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

export default Form7