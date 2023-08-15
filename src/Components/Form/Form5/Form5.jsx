import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form5 = () => {
    const [KnowledgeReact, setKnowledgeReact] = useState('')
    const [KnowledgeHtml, setKnowledgeHtml] = useState('')
    const [KnowledgeCss, setKnowledgeCss] = useState('')
    const [KnowledgeJavaScript, setKnowledgeJavaScript] = useState('')
    const [KnowledgeJQuery, setKnowledgeJQuery] = useState('')
    const navigate = useNavigate();

    function handleClick() {
        navigate("/form4")
    }

    function validateForm(e) {
        e.preventDefault();
        if (KnowledgeReact.trim() === "") {
            document.getElementById('KnowledgeReactErr').innerHTML = "Knowledge Level is required"
        } else {
            console.log(KnowledgeReact)
        }

        if (KnowledgeHtml.trim() === "") {
            document.getElementById('KnowledgeHtmlErr').innerHTML = "Knowledge Level is required"
        } else {
            console.log(KnowledgeHtml)
        }

        if (KnowledgeCss.trim() === "") {
            document.getElementById('KnowledgeCssErr').innerHTML = "Knowledge Level is required"
        } else {
            console.log(KnowledgeCss)
        }

        if (KnowledgeJavaScript.trim() === "") {
            document.getElementById('KnowledgeJavaScriptErr').innerHTML = "Knowledge Level is required"
        } else {
            console.log(KnowledgeJavaScript)
        }

        if (KnowledgeJQuery.trim() === "") {
            document.getElementById('KnowledgeJQueryErr').innerHTML = "Knowledge Level is required"
        } else {
            console.log(KnowledgeJQuery)
            navigate("/form6")
        }
    }
    return (
        <div className='contner'>
            <div style={{ color: '#197b30' }} className='contner-top'>
                <div className='form-name'>
                    Skills
                </div>
                <div className='form-number'>
                    5/12
                </div>
            </div>
            <div className='main-form-div'>
                <form onSubmit={validateForm} action=""><br />

                    <table>
                        <tbody>
                            <tr>
                                <td className='name-td'>
                                    <span className='name'>React JS<b>*</b></span>
                                </td>
                                <td>
                                    <select onChange={(e) => setKnowledgeReact(e.target.value)} >
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeReactErr" className="err"></div>
                                </td>
                            </tr>

                            <tr>
                                <td className="name-td">
                                    <span className="name">HTML <b>*</b></span>
                                </td>
                                <td>
                                    <select onChange={(e) => setKnowledgeHtml(e.target.value)} >
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeHtmlErr" className="err"></div>
                                </td>
                            </tr>

                            <tr>
                                <td className="name-td">
                                    <span className="name">CSS<b>*</b></span>
                                </td>
                                <td>
                                    <select onChange={(e) => setKnowledgeCss(e.target.value)} >
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeCssErr" className="err"></div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="name">JavaScript<b>*</b></span>
                                </td>
                                <td>
                                    <select onChange={(e) => setKnowledgeJavaScript(e.target.value)} >
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeJavaScriptErr" className="err"></div>
                                </td>
                            </tr>

                            <tr>
                                <td className="name-td">
                                    <span className="name">JQuery<b>*</b></span>
                                </td>
                                <td>
                                    <select onChange={(e) => setKnowledgeJQuery(e.target.value)} >
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeJQueryErr" className="err"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br />
                    <hr />

                    <div className='button'>
                        <button className='previous-button' onClick={handleClick}>Previous</button>
                        <button type='submit' className='next-button'>Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form5