import React, {Component} from 'react';
import '../style/restaurant.css';
import '../style/controlbars.css';
import steak from '../style/images/amazing_restaurant_steak.jpg';
import people from '../style/images/amazing_restaurant_1.jpg';
import lunch from '../style/images/amazing_restaurant_2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
import ControlBar from './ControlBar';


class Restaurant extends Component {
   constructor(props){
       super(props)
       this.state = {
           vidWidth: window.innerWidth - 80,
           vidHeight: (window.innerWidth - 80) * (0.5625),
           stateEvent: {},
           video: false,
           background: true,
           videoText: true,
           transYleftImg: props.yOffset < 2935 ? 0 : (props.yOffset > 2935 & props.yOffset < 3950) ? Math.ceil((2930 - props.yOffset)/11) : -93,
           transYrightImg: props.yOffset < 2935 ? 0 : (props.yOffset > 2935 & props.yOffset < 3950) ? Math.ceil(( props.yOffset - 2930)/85) : 12,
           transYshadow: (props.yOffset > 3040 & props.yOffset < 4040) ? props.yOffset/3 : 100,
           playerInterval: 0,
           vidTime: 0
       }
       this.updateWidth = this.updateWidth.bind(this)
   }

   componentDidMount(){
       this.setState({
           vidWidth: window.innerWidth - 80,
           vidHeight: (window.innerWidth - 80) * (0.5625)
       })
       AOS.init();
   }

    componentDidUpdate(prevProps, prevState){
        const { yOffset } = this.props
        if(prevProps.yOffset !== yOffset){
            let leftImg = yOffset < 2935 ? 0 : (yOffset > 2935 & yOffset < 3950) ? Math.ceil((2930 - yOffset)/20) : -51
            let rightImg = yOffset < 2935 ? 0 : (yOffset > 2935 & yOffset < 3950) ? Math.ceil((yOffset - 2930)/85) : 12
            let shadow = yOffset < 3040 ? 0 : (yOffset > 3040 & yOffset < 4040) ? Math.ceil((3040 - yOffset)/9) : -113
            this.setState({ 
                transYleftImg: leftImg,
                transYrightImg: rightImg,
                transYshadow: shadow
            })
        }
        if(prevState.video !== this.state.video){
            const { stateEvent } = this.state
            console.log('Get Options: ', stateEvent.getOptions(), 'Current Time: ', stateEvent.getCurrentTime(), 'Video Volume: ', stateEvent.getVolume(),'Video Duration: ',  stateEvent.getDuration(), 'Video Loaded Fraction: ', stateEvent.getVideoLoadedFraction(), 'Is Muted: ', stateEvent.isMuted(), stateEvent, this.state.playerInterval, this.state.vidTime)
            if(this.state.video){
                this.setState({
                    playerInterval: setInterval(() =>{
                                        this.setState({ vidTime: stateEvent.getCurrentTime()})
                                        }, 50)
                                    })
            }
        }
        AOS.refresh();
    }

   updateWidth(){
       // alert('WHAT ARE YOU DOINGGGG')
       this.setState({
           vidWidth: window.innerWidth - 80,
           vidHeight: (window.innerWidth - 80) * (0.5625)
       })
   }

   playVideo(){
       this.state.stateEvent.playVideo()
        this.setState({
            video: true,
            videoText: false,
            background: false
        })
   }

   componentWillUnmount(){
       clearInterval()
   }

   render(){
       const opts = {
           height: this.state.vidHeight,
           width: this.state.vidWidth,
           playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            rel: 0
           }
       }

       window.onresize = this.updateWidth
       let currSecs = `${Math.floor(this.state.vidTime % 60)}`
       if(currSecs.length === 1 ){
           currSecs = '0' + currSecs
       }
       let currMins = Math.floor(this.state.vidTime / 60)
       let currTimeDisplay = `0${currMins}:${currSecs}`
   return(
       <section className="Restaurant_container">
           <section className='Restaurant'>
               <div className='amazing_container' data-aos='fade-up' data-aos-once='true'>
                   {/* <div className='amazing_line'>
                   </div> */}
                       <h3 className='title_amazing'> Amazing Restaurant </h3>
                       <div className='text_amazing'>
                           <p>
                               Seeking out new flavours and creative cuisine is one of the best things about any holiday. Created from the great passion of the owner’s love of fresh and home grown food, the cuisine of Boutique Pine Tree combines traditional and contemporary dishes. We strive to provide a unique dining experience with exceptional service.
                           </p>
                           <p className='amazing_read_more'> Read more </p>
                       </div>
               </div>
               <div className='amazing_img_one'>
                   <div className='shadow_one' data-aos='slideIn' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true'/>
                   <div className='amazing_steak' data-aos='slideIn' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-delay='500' alt="steak" style={{backgroundImage: `url(${steak})`}} data-aos-once='true' />
               </div>
               <div className='amazing_img_two' style={{transform: `translateY(${this.state.transYleftImg}px)`}}>
                   <div className='shadow_two' data-aos='slideInTwo' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true'  />
                   <div className='amazing_people' alt='people' style={{backgroundImage: `url(${people})`}} data-aos='slideInTwo' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true'  data-aos-delay='500'/>
               </div>
               <div className='amazing_img_three' style={{transform: `translateY(${this.state.transYrightImg}px)`}}>
                   <div className='shadow_three' data-aos='slideInThree' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true' />
                   <div className='amazing_lunch' style={{backgroundImage: `url(${lunch})`}} alt='lunch' data-aos='slideInThree' data-aos-anchor='.amazing_container' data-aos-anchor-placement='top-center' data-aos-once='true' />
               </div>
               <div className='amazing_box_1'> </div>
               <div className='amazing_box_2' style={{transform: `translateY(${this.state.transYshadow}px)`}}> </div>
               <section className='video_section' data-aos='fade-up' data-aos-once='true'>
                   { this.state.background && <div className='video_image' onClick={() => this.playVideo()}> 
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" space="preserve" className='play_button'>
	                        <path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M5,12V4l7,4L5,12z"/>
                        </svg>
                        { this.state.videoText && <div className='video_text'>
                            <h3> Ana Cooks - Ante's place </h3>
                            <p> This is how we cook on Mljet. Fresh and homemade.</p>
                        </div> }
                    </div> }
                   <YouTube
                        className='amazing_video'
                        videoId='KkrCYd_P4wA'
                        opts={opts}
                        onReady={ e => this.setState({
                            stateEvent: e.target,
                            duration: e.target.getDuration(),
                            volume: e.target.getVolume()
                        })}
                        onPause={ e => this.setState({
                            stateEvent: e.target,
                            video: false
                        })}
                        onPlay={ e => this.setState({
                            stateEvent: e.target,
                            video: true
                        })}
                        onApiChange={(e) => console.log('StateEvent options array:', e.target.getOptions())}
                        
                    />
                    <section className="video-controls">
                        <ControlBar handleClick={() => this.state.stateEvent.seekTo(this.state.vidTime * 2)} primaryWidth={`calc(${this.state.vidTime/this.state.duration} * 70vw)`} btnLeftAttr={`calc(${this.state.vidTime/this.state.duration} * 70vw - 0.5rem)`} secondaryWidth={`${this.state.loadedFraction * 100}%`} mainClass="video-time" primaryClass="current-time" secondaryClass="buffer-time" />
                        <span className="current-time-display">{currTimeDisplay}</span>
                        <ControlBar handleClick={() => {console.log('volume hit', this.state.volume);this.state.stateEvent.setVolume({'volume': 50})}} primaryWidth={`${this.state.volume}px`} btnLeftAttr={`calc(${this.state.volume}px - 0.5rem)`} mainClass="video-volume" primaryClass="current-volume" disableSecondary />
                    </section>
               </section>
           </section>
       </section>
   )
   }
}

function mapStateToProps(state){
    return{
        yOffset: state.yOffset
    }
}

export default connect(mapStateToProps) (Restaurant);
