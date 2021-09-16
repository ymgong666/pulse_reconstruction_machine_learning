import React from 'react';
import './homepageStyles.css';
import upload_icon from '../icons/upload_icon.png'
import refresh_icon from '../icons/refresh_icon.png'
import github_icon from '../icons/github_icon.png';
import email_icon from '../icons/email_icon.png';

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
            <div className='stepDiv'>
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
                <div className='secondColumn' style={{marginTop:'8px'}}>
                    <div>
                        {/* TODO: Handle file upload to Heroku
                            TODO: Variable for button to show up after file upload
                            TODO: Hide other steps until data is uploaded. */}
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
                    <form>
                        {/* TODO: states for input fields
                        TODO: Passing states to the backend to be used for computation onFormSubmit
                        TODO: Getting image data from the backend to populate data display
                        TODO: Handle on submit behavior after button is clicked */}
                        <div style={{marginTop:'16px',display:'flex',flexDirection:'column'}}>
                            <label>Number of pulses: </label>
                            <input type='number' className='inputBox' required></input>
                        </div>
                        <div style={{marginTop:'8px',display:'flex',flexDirection:'column'}}>
                            <label>Temporal Resolution: </label>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <input type='number' className='inputBox' style={{width: '272px'}} required></input>
                                <p style={{margin:'0px 0px 0px 10px'}}>sec</p>
                            </div>
                        </div>
                        <div style={{marginTop:'8px',display:'flex',flexDirection:'column'}}>
                            <label>Frequency Resolution: </label>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <input type='number' className='inputBox' style={{width: '272px'}} required></input>
                                <p style={{margin:'0px 0px 0px 10px'}}>Hz</p>
                            </div>
                        </div>
                        <button type='submit' className='greenButton'>Proceed to Step 2</button>
                    </form> 
                </div>
                <div style={{marginLeft: '64px', marginTop:'8px', display:'flex',flexDirection:'column'}}>
                    <p style={{marginBottom:'4px'}}>Data display</p>
                    <div className='dataDisplay'>
                        <h3 style={{marginBottom: '0px'}}>Your FROG Traces</h3>
                        <div style={{marginTop: '32px'}}>
                            <div className='examplePlot'></div>
                        </div>
                        <div style={{marginTop: '32px'}}>
                            <div className='examplePlot'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='separator'></div>

            <div className='stepDiv'>
                <div className='instructions'>
                    <h3>Step 2</h3>
                    <p>
                        The network is trained to predict a select number of pulse width ranges (given in femtoseconds).
                    </p>
                    <p>
                        <span style={{fontWeight:'bolder'}}>Verify</span> the pulse width prediction is reasonable given your knowledge of the data source.
                    </p>
                </div>
                <div className='secondColumn center' style={{marginTop:'56px'}}>
                    <h3>Pulse Width Prediction:</h3>
                    <div className='pulsePrediction'>
                        {/* TODO: Change this to be a functional input from the backend */}
                        55-65 fs
                    </div>
                </div>
                {/* TODO: onClick behavior for button: conditionally render the next step */}
                <button type='button' className='greenButton2'>Looks good!</button>
            </div>
            <div className='separator'></div>

            <div className='stepDiv'>
                <div className='instructions'>
                    <h3>Step 3</h3>
                    <p>
                        <span style={{fontWeight:'bolder'}}>View</span> samples of reconstructed pulses for your FROG trace data by scrolling up and down.                    
                    </p>
                    <p>
                        <span style={{fontWeight:'bolder'}}>Refresh</span> the box to view a new set of randomly selected samples.
                    </p>
                </div>
                <div className='secondColumn frogDisplay'>
                    <div className='frogDisplayTitle'>
                        <h4 style={{marginLeft: '96px'}}>Your FROG Traces</h4>
                        <h4 style={{marginLeft: '160px'}}>Reconstructed Pulses</h4>
                        {/* TODO: change onClick behavior of refresh icon to fetch random samples from backend and populate the display wth images. */}
                        <img src={refresh_icon} alt='Refresh' className='refresh' />
                    </div>
                    {/* one frog and pulse pair */}
                    <div className='frogAndPulse'> 
                        {/* frog */}
                        <div className='examplePlot'></div> 
                        {/* pulse */}
                        <div className='examplePlot' style={{marginLeft: '64px'}}></div>
                    </div>
                    <div className='frogAndPulse'> 
                        {/* frog */}
                        <div className='examplePlot'></div> 
                        {/* pulse */}
                        <div className='examplePlot' style={{marginLeft: '64px'}}></div>
                    </div>
                </div>
            </div>
            <div className='separator'></div>
            
            <div className='stepDiv'>
                <div className='instructions'>
                    <h3>Step 4</h3>
                    <p>
                        <span style={{fontWeight:'bolder'}}>Download</span> the reconstructed pulse data.                     
                    </p>
                    <p>
                        The file contains indexed reconstructed pulses and their correponding FROG traces.
                    </p>
                </div>
                {/* TODO: trigger download of files onClick */}
                <button type='button' className='greenButton3'>Download reconstructed pulses</button>
            </div>
            
            <div className='footer'>
                <h3>Yiming Gong - Department of Physics, University of Michigan, Ann Arbor, MI 48109 USA</h3>
                <h3 style={{marginTop: '0px', marginBottom: '0px'}}>Nosa Edoimioya - Department of Mechanical Engineering, University of Michigan, Ann Arbor, MI 48109</h3>
                <div className='contact'>
                    <img src={github_icon} alt='Go to Github' style={{marginRight:'8px', cursor:'pointer'}}/>
                    <img src={email_icon} alt='ymgong@umich.edu' style={{cursor:'pointer'}}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage
