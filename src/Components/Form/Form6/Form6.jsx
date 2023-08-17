import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form6 = () => {
    const [SelectYear, setSelectYear] = useState('')
    const [SelectMonth, setSelectMonth] = useState('')
    const [CompanyName, setCompanyName] = useState('')
    const [JobTitle, setJobTitle] = useState('')
    const [SelectMonth2, setSelectMonth2] = useState('')
    const [SelectYear2, setSelectYear2] = useState('')
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const changeHandler = (e) => {
        setSelectMonth(e.target.value);
        setSelectYear(e.target.value);

        if (e.target.value === '0') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    function handleClick() {
        navigate("/form5")
    };

    function validateForm(e) {
        e.preventDefault();

        if (SelectYear.trim() === "" || SelectMonth.trim() === "") {
            document.getElementById('SelectYearErr').innerHTML = "Experience Year is required"
            document.getElementById('SelectMonthErr').innerHTML = "Experience Month is required"

        }
        else if (SelectYear.trim() >= '0' || SelectMonth.trim() >= '0') {
            if (SelectYear.trim() === '0' && SelectMonth.trim() === '0') {
                navigate("/form7");

            }
            else {
                if (CompanyName.trim() === "" || JobTitle.trim() === "" || SelectMonth2.trim() === "" || SelectYear2.trim() === "") {
                    document.getElementById('CompanyNameErr').innerHTML = "Company Name is required"
                    document.getElementById('JobTitleErr').innerHTML = "Job Title is required"
                    document.getElementById('SelectMonth2Err').innerHTML = "Joined Month is required"
                    document.getElementById('SelectYear2Err').innerHTML = "Joined Year is required"
                } else {
                    document.getElementById('SelectYearErr').innerHTML = ""
                    console.log("Overall Experience in Year : " + SelectYear)

                    document.getElementById('SelectMonthErr').innerHTML = ""
                    console.log("Overall Experience in Month : " + SelectMonth)

                    document.getElementById('CompanyNameErr').innerHTML = ""
                    console.log("Company Name : " + CompanyName)

                    document.getElementById('JobTitleErr').innerHTML = ""
                    console.log("Job Title : " + JobTitle)

                    document.getElementById('SelectMonth2Err').innerHTML = ""
                    console.log("Started Month : " + SelectMonth2)

                    document.getElementById('SelectYear2Err').innerHTML = ""
                    console.log("Started year : " + SelectYear2)

                    navigate("/form7")
                }
            }
        }
    };

    return (
        <div className="contner">
            <div style={{ color: '#630460' }} className="contner-top">
                <div className="form-name">
                    Experience
                </div>
                <div className="form-number">
                    6/12
                </div>
            </div>
            <div className="main-form-div">
                <form onSubmit={validateForm} action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Overall Experience<b>*</b></label><br />
                            <label htmlFor="">(In Software only)</label>
                        </span>
                        <span className='name-input'>
                            <div>
                                <select className='input-feild'
                                    onChange={changeHandler}
                                >
                                    <option value="">Select Year</option>
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
                                    <option name="13" value="13">13</option>
                                    <option name="14" value="14">14</option>
                                    <option name="15" value="15">15</option>
                                    <option name="16" value="16">16</option>
                                    <option name="17" value="17">17</option>
                                    <option name="18" value="18">18</option>
                                    <option name="19" value="19">19</option>
                                    <option name="20" value="20">20</option>
                                    <option name="21" value="21">21</option>
                                    <option name="22" value="22">22</option>
                                    <option name="23" value="23">23</option>
                                    <option name="24" value="24">24</option>
                                    <option name="25" value="25">25</option>
                                    <option name="26" value="26">26</option>
                                    <option name="27" value="27">27</option>
                                    <option name="28" value="28">28</option>
                                    <option name="29" value="29">29</option>
                                    <option name="30" value="30">30</option>
                                    <option name="31" value="31">31</option>
                                    <option name="32" value="32">32</option>
                                    <option name="33" value="33">33</option>
                                    <option name="34" value="34">34</option>
                                    <option name="35" value="35">35</option>
                                    <option name="36" value="36">36</option>
                                    <option name="37" value="37">37</option>
                                    <option name="38" value="38">38</option>
                                    <option name="39" value="39">39</option>
                                    <option name="40" value="40">40</option>
                                    <option name="41" value="41">41</option>
                                    <option name="42" value="42">42</option>
                                    <option name="43" value="43">43</option>
                                    <option name="44" value="44">44</option>
                                    <option name="45" value="45">45</option>
                                    <option name="46" value="46">46</option>
                                    <option name="47" value="47">47</option>
                                    <option name="48" value="48">48</option>
                                    <option name="49" value="49">49</option>
                                    <option name="50" value="50">50</option>
                                </select>
                            </div>
                            <div id='SelectYearErr' className='required'>
                                {/* Qualification is required */}
                            </div>
                        </span>
                        <span className='name-input'>
                            <div>
                                <select className='input-feild'
                                    onChange={changeHandler}
                                >
                                    <option value="">Select Month</option>
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
                                </select>
                            </div>
                            <div id='SelectMonthErr' className='required'>
                                {/* Experience Month is required */}
                            </div>
                        </span>
                    </div>

                    <br />

                    {isVisible ? (
                        <div>
                            <div className='name'>
                                <span className='name-lable'>
                                    <label htmlFor="">Company Name<b></b></label>
                                </span>
                                <span className='name-input-full'>
                                    <div>
                                        <input className='input-feild' type="text" placeholder='Company Name' onChange={(e) => setCompanyName(e.target.value)} />
                                    </div>
                                    <div id='CompanyNameErr' className='required'>
                                    </div>
                                </span>
                            </div>

                            <br />

                            <div className='name'>
                                <span className='name-lable'>
                                    <label htmlFor="">Job Title<b></b></label>
                                </span>
                                <span className='name-input-full'>
                                    <div>
                                        <input className='input-feild' type="text" placeholder='Job Title' onChange={(e) => setJobTitle(e.target.value)} />
                                    </div>
                                    <div id='JobTitleErr' className='required'>
                                    </div>
                                </span>
                            </div>

                            <br />

                            <div className='name'>
                                <span className='name-lable'>
                                    <label htmlFor="">Started From<b></b></label>
                                </span>
                                <span className='name-input'>
                                    <div>
                                        <select className='input-feild' onChange={(e) => setSelectMonth2(e.target.value)} >
                                            <option value="">Select Month</option>
                                            <option name="January" value="Jan">January</option>
                                            <option name="February" value="Feb">February</option>
                                            <option name="March" value="Mar">March</option>
                                            <option name="April" value="Apr">April</option>
                                            <option name="May" value="May">May</option>
                                            <option name="June" value="Jun">June</option>
                                            <option name="July" value="Jul">July</option>
                                            <option name="August" value="Aug">August</option>
                                            <option name="September" value="Sep">September</option>
                                            <option name="October" value="Oct">October</option>
                                            <option name="November" value="Nov">November</option>
                                            <option name="December" value="Dec">December</option>
                                        </select>
                                    </div>
                                    <div id='SelectMonth2Err' className='required'>
                                    </div>
                                </span>
                                <span className='name-input'>
                                    <div>
                                        <select className='input-feild' onChange={(e) => setSelectYear2(e.target.value)} >
                                            <option value="">Select Year</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                        </select>
                                    </div>
                                    <div id='SelectYear2Err' className='required'>
                                    </div>
                                </span>
                            </div>
                        </div>
                    ) : null}

                    <br />
                    <hr />

                    <div className='button'>
                        <button className='previous-button' onClick={handleClick}>Previous</button>
                        <button type='submit' className='next-button' >Next</button>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Form6