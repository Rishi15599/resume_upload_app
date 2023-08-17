import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form8 = () => {
    const [Project, setProject] = useState('')
    const [ProjectTitle, setProjectTitle] = useState('')
    const [DurationInMonths, setDurationInMonths] = useState('')
    const [ProjectDescriptions, setProjectDescriptions] = useState('')
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);


    function handleClick() {
        navigate("/form7")
    }

    function validateForm(e) {
        e.preventDefault();

        if (Project.trim() === 'No') {
            navigate("/form9")
        } else if (Project.trim() === 'Yes') {

            if (ProjectTitle.trim() === "" || DurationInMonths.trim() === "" || ProjectDescriptions.trim() === "") {
                document.getElementById('ProjectTitleErr').innerHTML = "Project Title is required"

                document.getElementById('DurationInMonthsErr').innerHTML = "Project Period is required"

                document.getElementById('ProjectDescriptionsErr').innerHTML = "Project Descriptions is required"

            } else {
                document.getElementById('ProjectTitleErr').innerHTML = ""
                console.log("Course Name : " + ProjectTitle)

                document.getElementById('DurationInMonthsErr').innerHTML = ""
                console.log("Duration (In Months) : " + DurationInMonths)

                document.getElementById('ProjectDescriptionsErr').innerHTML = ""
                console.log("Institution name and address : " + ProjectDescriptions)
                navigate("/form9")
            }
        }
    }
    return (
        <div className="contner">
            <div style={{ color: '#630460' }} className="contner-top">
                <div className="form-name">
                    Project Details
                </div>
                <div className="form-number">
                    8/12
                </div>
            </div>
            <div className="main-form-div">
                <form onSubmit={validateForm} action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Have you done any Project in React JS ?<b></b></label>
                        </span>
                        <span className='name-input'>
                            <div>
                                <input type="radio" name="Project" value="Yes" onChange={(e) => setProject(e.target.value)}
                                    onClick={() => setVisible(true)} />&nbsp;
                                <label htmlFor="">Yes</label>&nbsp;&nbsp;
                                <input type="radio" name="Project" value="No" onChange={(e) => setProject(e.target.value)}
                                    onClick={() => setVisible(false)} />&nbsp;
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
                                    <label htmlFor="">Project Title<b>*</b></label>
                                </span>
                                <span className='name-input-full'>
                                    <div>
                                        <input className='input-feild' type="text" placeholder='Project Title'
                                            onChange={(e) => setProjectTitle(e.target.value)} />
                                    </div>
                                    <div id='ProjectTitleErr' className='required'>

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
                                    <label htmlFor="">Project Descriptions<b>*</b></label>
                                </span>
                                <span className='name-input-full'>
                                    <div>
                                        <textarea className='input-feild' style={{ paddingBottom: '15%' }} placeholder='Project Descriptions'
                                            onChange={(e) => setProjectDescriptions(e.target.value)} />
                                    </div>
                                    <div id='ProjectDescriptionsErr' className='required'>
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

export default Form8