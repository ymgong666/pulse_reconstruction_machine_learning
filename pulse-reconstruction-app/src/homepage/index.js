import React from 'react';
import './homepageStyles.css';
import upload_icon from '../icons/upload_icon.png'

function Homepage() {
    return (
        <div className='pageFont'>
            <div className='center'>
                <h1 className='title'>
                    Ultrashort Pulse Reconstruction from FROG Traces with Deep Convolutional Neural Networks
                </h1>
                <h3 className='pageDescription'>
                    This tool uses deep convolutional neural networks to reconstruct the input pulse given an output FROG trace. An abstract explaining the work and more documentation can be found <a href='https://github.com/ymgong666/pulse_reconstruction_machine_learning'>here</a>.
                </h3>
            </div>
            <div style={{marginLeft:'24px', padding: '0px'}}>
                <h2>How it works:</h2>
                <p><span style={{textDecoration:'underline'}}>Step 1:</span><span> </span>
                    Upload your experimental FROG trace(s) as CSV file(s) and details about the data.
                </p>
                <p><span style={{textDecoration:'underline'}}>Step 2:</span><span> </span>
                    We classify the pulse width of your experimental FROG trace(s). Confirm the classification is correct.
                </p>
                <p><span style={{textDecoration:'underline'}}>Step 3:</span><span> </span>
                    We generate the reconstructed pulses corresponding to your experimental data.
                </p>
                <p><span style={{textDecoration:'underline'}}>Step 4:</span><span> </span>
                    Download your reconstructed pulses.
                </p>
            </div>
            <div className='step1Div'>
                <div className='instructions'>
                    <h3>Step 1</h3>
                    <p>
                        Upload experimental data as a CSV file in the <span style={{fontWeight:'bolder'}}>left box</span>. Enter the number of pulses, temporal resolution and frequency resolution.
                    </p>
                    <p>
                        A sample of your data will be displayed on in the <span style={{fontWeight:'bolder'}}>right box</span>.
                    </p>
                    <p>
                        <span style={{fontWeight:'bolder'}}>Check</span> to make sure the files look as expected. Once your data is uploaded, you can to proceed to Step 2.
                    </p>
                </div>
                <div style={{marginLeft:'64px',marginTop:'8px',display:'flex',flexDirection:'column'}}>
                    <div>
                        <p style={{marginBottom:'4px'}}>Upload data</p>
                        <label className='uploader'>
                            <input 
                                type='file'
                                placeholder=''
                            ></input>
                            <img src={upload_icon} alt='Upload Icon'/>
                            <p style={{color:'blue'}}>Click to upload data</p>
                        </label>
                    </div>
                    <div style={{marginTop:'16px',display:'flex',flexDirection:'column'}}>
                        <label>Number of pulses: </label>
                        <input type='number' className='inputBox' required></input>
                    </div>
                    <div style={{marginTop:'8px',display:'flex',flexDirection:'column'}}>
                        <label>Temporal Resolution: </label>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <input type='number' className='inputBox' style={{width: '272px'}} required></input>
                            <p style={{marginLeft:'10px'}}>sec</p>
                        </div>
                    </div>
                    <div style={{marginTop:'8px',display:'flex',flexDirection:'column'}}>
                        <label>Frequency Resolution: </label>
                        <div style={{margin:'0px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <input type='number' className='inputBox' style={{width: '272px'}} required></input>
                            <p style={{marginLeft:'10px'}}>Hz</p>
                        </div>
                    </div>  
                </div>
                <div style={{marginLeft: '64px', marginTop:'8px'}}>
                    <p style={{marginBottom:'4px'}}>Data display</p>
                    <div className='dataDisplay'>
                        <h3 style={{marginLeft:'16px'}}>Your FROG Traces</h3>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default Homepage
