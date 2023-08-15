import React from 'react'

const Form5 = () => {
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
                <form action=""><br />

                    <table>
                        <tbody>
                            <tr>
                                <td className='name-td'>
                                    <span className='name'>React JS<b>*</b></span>
                                </td>
                                <td>
                                    <select name="" id='KnowledgeReact'>
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeReactErr" className="err">Knowledge Level is required</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="name-td">
                                    <span className="name">HTML <b>*</b></span>
                                </td>
                                <td>
                                    <select name="" id="KnowledgeHtml">
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeHtmlErr" className="err">Knowledge Level is required</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="name-td">
                                    <span className="name">CSS<b>*</b></span>
                                </td>
                                <td>
                                    <select name="" id="KnowledgeCss">
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeCssErr" className="err">Knowledge Level is required</div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="name">JavaScript<b>*</b></span>
                                </td>
                                <td>
                                    <select name="" id="KnowledgeJavaScript">
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeJavaScriptErr" className="err">Knowledge Level is required</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="name-td">
                                    <span className="name">JQuery<b>*</b></span>
                                </td>
                                <td>
                                    <select name="" id="KnowledgeJQuery">
                                        <option value="">Select Knowledge Level</option>
                                        <option value="Don'tKnow">Don't Know</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <div id="KnowledgeJQueryErr" className="err">Knowledge Level is required</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

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

export default Form5