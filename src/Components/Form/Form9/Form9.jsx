import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form9 = () => {
    const [SelectLakhs,setSelectLakhs]=useState('')
    const [SelectThousands,setSelectThousands]=useState('')
    const navigate = useNavigate();

    function handleClick() {
        navigate("/form8")
    }

    function validateForm(e) {
        e.preventDefault();

        if (SelectLakhs.trim() === "") {
            document.getElementById('SelectLakhsErr').innerHTML = "Expected salary is required"
        } else {
            document.getElementById('SelectLakhsErr').innerHTML = ""
            console.log("Expected Salery in Lakhs : "+SelectLakhs)
        }

        if (SelectThousands.trim() === "") {
            document.getElementById('SelectThousandsErr').innerHTML = "Expected salary is required"
        } else {
            document.getElementById('SelectThousandsErr').innerHTML = ""
            console.log("Expected Salery in Thousands : "+SelectThousands)
        }

        if(SelectLakhs.trim() === "" || SelectThousands.trim() === ""){

        }else{
            navigate("/form10")
        }
    }
    return (
        <div className="contner">
            <div style={{color:'#630460'}} className="contner-top">
                <div className="form-name">
                    Salary
                </div>
                <div className="form-number">
                    9/12
                </div>
            </div>
            <div className="main-form-div">
                <form onSubmit={validateForm} action=""><br /><br />

                    <div className='name'>
                        <span className='name-lable'>
                            <label htmlFor="">Expected Salary<b></b></label><br />
                            <label htmlFor="">(Per Annum)</label>
                        </span>
                        <span className='name-input'>
                            <div>
                                <select className='input-feild' onChange={(e) => setSelectLakhs(e.target.value)} >
                                    <option value="">Select Lakhs</option>
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
                            <div id='SelectLakhsErr' className='required'>
                           </div>
                        </span>
                        <span className='name-input'>
                            <div>
                                <select className='input-feild' onChange={(e) => setSelectThousands(e.target.value)}>
                                    <option value="">Select Thousands</option>
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
                                    <option name="51" value="51">51</option>
                                    <option name="52" value="52">52</option>
                                    <option name="53" value="53">53</option>
                                    <option name="54" value="54">54</option>
                                    <option name="55" value="55">55</option>
                                    <option name="56" value="56">56</option>
                                    <option name="57" value="57">57</option>
                                    <option name="58" value="58">58</option>
                                    <option name="59" value="59">59</option>
                                    <option name="60" value="60">60</option>
                                    <option name="61" value="61">61</option>
                                    <option name="62" value="62">62</option>
                                    <option name="63" value="63">63</option>
                                    <option name="64" value="64">64</option>
                                    <option name="65" value="65">65</option>
                                    <option name="66" value="66">66</option>
                                    <option name="67" value="67">67</option>
                                    <option name="68" value="68">68</option>
                                    <option name="69" value="69">69</option>
                                    <option name="70" value="70">70</option>
                                    <option name="71" value="71">71</option>
                                    <option name="72" value="72">72</option>
                                    <option name="73" value="73">73</option>
                                    <option name="74" value="74">74</option>
                                    <option name="75" value="75">75</option>
                                    <option name="76" value="76">76</option>
                                    <option name="77" value="77">77</option>
                                    <option name="78" value="78">78</option>
                                    <option name="79" value="79">79</option>
                                    <option name="80" value="80">80</option>
                                    <option name="81" value="81">81</option>
                                    <option name="82" value="82">82</option>
                                    <option name="83" value="83">83</option>
                                    <option name="84" value="84">84</option>
                                    <option name="85" value="85">85</option>
                                    <option name="86" value="86">86</option>
                                    <option name="87" value="87">87</option>
                                    <option name="88" value="88">88</option>
                                    <option name="89" value="89">89</option>
                                    <option name="90" value="90">90</option>
                                    <option name="91" value="91">91</option>
                                    <option name="92" value="92">92</option>
                                    <option name="93" value="93">93</option>
                                    <option name="94" value="94">94</option>
                                    <option name="95" value="95">95</option>
                                    <option name="96" value="96">96</option>
                                    <option name="97" value="97">97</option>
                                    <option name="98" value="98">98</option>
                                    <option name="99" value="99">99</option>
                                </select>
                            </div>
                            <div id='SelectThousandsErr' className='required'>
                            </div>
                        </span>
                    </div>

                    <br />
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

export default Form9