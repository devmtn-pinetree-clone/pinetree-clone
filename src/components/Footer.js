import React, {Component} from 'react';
import '../style/footer.css';
import LargeBtn from './LargeBtn';
import logo from '../style/images/menu-logo_2x.png';
import square from '../style/images/foot-travel-myth-badge_2x.png';
import TA from '../style/images/TA_Logo.svg';

class Footer extends Component{
    constructor(){
        super()
        this.state = {
            taLogo: TA
        }
    }



    render(){
        return(
            <section className='Footer_container'>
                <div className='footer_book'>
                    <div className='footer_title'>
                        <h4 className='title'> Ready to book your stay? </h4>
                        <LargeBtn styleClass='footer_button'> INQUIRY FORM </LargeBtn>
                    </div>
                </div>
                <div className='footer_pic'>
                    <div className='footer_logo'>
                        <img className='footer_pic_header' src={logo} alt='logo'/> 
                    </div>
                    <div className='footer_text'>
                        <p> BOUTIQUE PINE TREE RESORT**** </p>
                        <p> LUXURY APARMENTS & RESTAURANT </p>
                        <p> Saplunara 17, Island Mljet, Croatia </p>
                        <p> boutiquepinetree@gmail.com </p>
                    </div>
                    <div className='footer_info'>
                        <p> INFO & RESERVATIONS: </p>
                        <p> +385 99 591 00 24 </p>
                    </div>
                    <div className='footer_social'>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  space="preserve" className='footer_icon_one'>
                            <circle cx="256" cy="256" r="256" className='mail-path1'/>
                            <path d="M400.288,356.112h-288.24V150.544h288.24V356.112z M128.048,340.112h256.24V166.544h-256.24V340.112
                            z" className='mail-path2'/>
                            <polygon points="256.192,279.888 115.824,192.752 124.272,179.152 256.16,261.04 388.032,178.528 
                            396.528,192.096" className='mail-path2'/>
                            <rect x="342.526" y="225.473" transform="matrix(-0.7864 0.6177 -0.6177 -0.7864 807.8389 308.8256)" width="16" height="137.215" className='mail-path2'/>
                            <rect x="93.48" y="286.045" transform="matrix(-0.617 0.7869 -0.7869 -0.617 493.5035 347.9231)" width="137.225" height="15.999" className='mail-path2'/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 291.319 291.319" space="preserve" width="512px" height="512px" className="footer_icon_two">
                            <path className="fb-path1 active-path" d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659   S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z" data-original="#3B5998"  data-old_color="#c6ab8f"/>
                            <path d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055   v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366   C154.791,104.556,158.341,100.277,163.394,100.277z" data-original="#FFFFFF" className="fb-path2" data-old_color=" rgb(255, 255, 255)"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 291.319 291.319" space="preserve" width="512px" height="512px" class="footer_icon_three">
                            <path d="M145.659,0c80.44,0,145.66,65.219,145.66,145.66S226.1,291.319,145.66,291.319S0,226.1,0,145.66   S65.21,0,145.659,0z" data-original="#3F729B" className="ig-path1 active-path" data-old_color="#c6ab8f"/>
                            <path d="M195.93,63.708H95.38c-17.47,0-31.672,14.211-31.672,31.672v100.56   c0,17.47,14.211,31.672,31.672,31.672h100.56c17.47,0,31.672-14.211,31.672-31.672V95.38   C227.611,77.919,213.4,63.708,195.93,63.708z M205.908,82.034l3.587-0.009v27.202l-27.402,0.091l-0.091-27.202   C182.002,82.116,205.908,82.034,205.908,82.034z M145.66,118.239c22.732,0,27.42,21.339,27.42,27.429   c0,15.103-12.308,27.411-27.42,27.411c-15.121,0-27.42-12.308-27.42-27.411C118.23,139.578,122.928,118.239,145.66,118.239z    M209.65,193.955c0,8.658-7.037,15.704-15.713,15.704H97.073c-8.667,0-15.713-7.037-15.713-15.704v-66.539h22.759   c-2.112,5.198-3.305,12.299-3.305,18.253c0,24.708,20.101,44.818,44.818,44.818s44.808-20.11,44.808-44.818   c0-5.954-1.193-13.055-3.296-18.253h22.486v66.539L209.65,193.955z" data-original="#FFFFFF" className="ig-path2" data-old_color=" rgb(255, 255, 255)"/>
                        </svg>
                        <div className='icon_box'> 
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 97.75 97.75" space="preserve" className="footer_icon_four">
                            <path d="M67.211,46.07c-3.291,0-5.971,2.648-5.982,5.917c-0.012,3.252,2.681,5.959,5.939,5.967    c3.266,0.01,5.949-2.674,5.947-5.943C73.113,48.732,70.465,46.07,67.211,46.07z M67.211,55.02c-1.686,0-3.043-1.332-3.039-2.983    c0.002-1.716,1.318-3.039,3.02-3.041c1.666-0.002,3.031,1.362,3.017,3.021C70.189,53.672,68.848,55.02,67.211,55.02z" data-original="#000000" class="active-path" data-old_color="#C6AB8F" fill="#262422" className='ta-path1'/>

                            <path d="M30.512,37.514c-7.9-0.07-14.787,6.523-14.65,14.921c0.129,7.832,6.584,14.472,14.814,14.4    c8.047-0.068,14.516-6.641,14.531-14.6C45.219,44.063,38.672,37.514,30.512,37.514z M30.748,61.1    c-5.293,0.242-9.564-3.977-9.555-9.1c0.01-5.191,4.287-9.162,9.125-9.074c5.023-0.006,9.1,4.049,9.086,9.07    C39.391,57.078,35.385,60.889,30.748,61.1z" data-original="#000000" class="active-path" data-old_color="#C6AB8F" fill="#262422" className='ta-path2'/>

                            <path d="M48.875,0C21.883,0,0,21.883,0,48.875S21.883,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.867,0,48.875,0z     M76.971,67.852c-2.984,1.896-6.283,2.795-9.807,2.814c-1.48,0.01-2.955-0.189-4.4-0.564c-3.522-0.914-6.545-2.672-9.035-5.33    c-0.33-0.35-0.639-0.713-0.987-1.108c-1.316,1.961-2.611,3.892-3.939,5.871c-1.32-1.974-2.6-3.886-3.873-5.787    c-0.088,0.045-0.113,0.051-0.131,0.065c-0.029,0.025-0.055,0.056-0.076,0.082c-3.012,3.556-6.801,5.734-11.414,6.465    c-2.568,0.406-5.109,0.261-7.604-0.428c-3.533-0.971-6.537-2.834-8.963-5.586c-2.371-2.688-3.846-5.812-4.398-9.363    c-0.633-3.312,0.137-6.508,0.33-7.282c0.559-2.252,1.531-4.322,2.867-6.225c0.094-0.135,0.127-0.375,0.082-0.535    c-0.545-1.998-1.482-3.816-2.582-5.557c-0.279-0.441-0.613-0.85-0.922-1.275c0-0.049,0-0.098,0-0.148    c0.061,0.008,0.123,0.02,0.184,0.02c3.697,0.002,7.396,0.002,11.094-0.004c0.162,0,0.34-0.066,0.479-0.154    c2.598-1.668,5.367-2.988,8.275-4.016c2.098-0.74,4.238-1.318,6.424-1.742c2.115-0.408,4.24-0.697,6.389-0.838    c5.238-0.404,9.426,0.15,12.211,0.539c2.053,0.289,4.064,0.807,6.051,1.416c3.469,1.068,6.74,2.553,9.818,4.477    c0.213,0.133,0.5,0.217,0.752,0.217c3.613,0.016,7.227,0.01,10.84,0.014c0.291,0,0.582,0.031,0.871,0.047    c0,0.07,0.01,0.1-0.002,0.117c-0.168,0.258-0.34,0.516-0.508,0.775c-1.225,1.879-2.273,3.848-2.893,6.021    c-0.066,0.232-0.082,0.428,0.076,0.658c3.219,4.621,4.243,9.693,2.899,15.162C83.898,61.465,81.15,65.203,76.971,67.852z" data-original="#000000" class="active-path" data-old_color="#C6AB8F" fill="#262422" className='ta-path3'/>

                            <path d="M30.236,46.07c-3.209,0.006-5.898,2.715-5.891,5.936c0.008,3.26,2.695,5.941,5.963,5.949    c3.248,0.008,5.939-2.697,5.932-5.965C36.23,48.691,33.564,46.064,30.236,46.07z M30.311,55.051    c-1.723,0.002-3.051-1.328-3.051-3.061c0-1.701,1.326-3.021,3.043-3.023c1.689-0.002,3.049,1.348,3.057,3.035    C33.365,53.674,31.994,55.045,30.311,55.051z" data-original="#000000" class="active-path" data-old_color="#C6AB8F" fill="#262422" className='ta-path4'/>

                            <path d="M66.902,37.57c-8.019,0.164-14.295,6.627-14.367,14.622c0,8.121,6.59,14.756,14.682,14.725    c8.123-0.029,14.682-6.477,14.676-14.688C81.889,43.766,75.023,37.404,66.902,37.57z M67.562,61.102    c-5.271,0.203-9.489-4-9.487-9.094c0.002-5.154,4.252-9.17,9.112-9.082c5.027-0.01,9.099,4.039,9.099,9.061    C76.285,57.027,72.283,60.922,67.562,61.102z" data-original="#000000" class="active-path" data-old_color="#C6AB8F" fill="#262422" className='ta-path5'/>

                            <path d="M54.732,38.639c3.248-2.98,7.117-4.543,11.506-4.875c-5.209-2.314-10.701-3.299-16.355-3.408    c-6.424-0.125-12.674,0.822-18.643,3.326c4.463,0.271,8.383,1.828,11.695,4.838c3.305,3.008,5.242,6.756,5.945,11.166    C49.604,45.328,51.488,41.613,54.732,38.639z" data-original="#000000" class="active-path" data-old_color="#C6AB8F" fill="#262422" className='ta-path6'/>

                        </svg>
                            {/* <img className='footer_icon_four' src={TA} alt="ta-logo"/>  */}
                        </div> 
                    </div>
                </div>
                <div className='footer_credits'>
                    <div className='footer_bottom'>
                        <p> Copyright © 2016, BOUTIQUE PINE TREE RESORT**** </p>
                        <span className='bigger_square'> <img className='square' src={square} alt="square"/> </span>
                        <p> crafted by <span className='iconis'> ICONIS </span> </p>
                    </div>
                </div>
              
            </section>
        )
    }
}

export default Footer;
