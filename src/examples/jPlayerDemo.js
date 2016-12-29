import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";

import "../less/default/jPlayer.less";
import "../less/jPlayerIconControls.less";

import renderjPlayer from "../index";
import JPlayer from "../containers/jPlayer";
import Media from "../components/media";
import Gui from "../components/gui";
import KeyControl from "../components/keyControl";
import Progress from "../components/progress";
import SeekBar from "../components/seekBar";
import PlayBar from "../components/playBar";
import Buffer from "../components/buffer";
import BrowserUnsupported from "../components/browserUnsupported";
import Poster from "../components/poster";
import Audio from "../components/audio";
import Video from "../components/video";
import Title from "../components/title";
import FullScreen from "../components/controls/fullScreen";
import Mute from "../components/controls/mute";
import Play from "../components/controls/play";
import Repeat from "../components/controls/repeat";
import PlaybackRateBar from "../components/controls/playbackRateBar";
import PlaybackRateBarValue from "../components/controls/playbackRateBarValue";
import VolumeBar from "../components/controls/volumeBar";
import VolumeBarValue from "../components/controls/volumeBarValue";
import Duration from "../components/duration";
import CurrentTime from "../components/currentTime";

class Player extends React.Component {
    constructor(props){
        super();
        
        this.state = {
            muteClassName: "fa fa-volume-up"
        };
    }
    static get defaultProps() {
        return {
            jPlayer: {
                media: {}
            }
        }
    }
    onVolumeChange = () => {
        if (this.props.jPlayer.muted) {
            this.setState({muteClassName: "fa fa-volume-off"});
        }
        else if (this.props.jPlayer.volume < 0.5) {
            this.setState({muteClassName: "fa fa-volume-down"});
        }
        else {
            this.setState({muteClassName: "fa fa-volume-up"});
        }
    }
    render() {
        return (
            <JPlayer>
                <Gui>
                    <Media onVolumeChange={this.onVolumeChange}>
                        <Audio>
                            <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
                        </Audio>
                    </Media>
                    <div className="jp-poster-container">
                        <Poster />
                        <Title />
                    </div>
                    <div className="jp-controls">
                        <KeyControl />
                        <Play><i className="fa fa-play"></i></Play>
                        <FullScreen><i className="fa fa-expand"></i></FullScreen>
                        <Repeat><i className="fa fa-repeat"></i></Repeat>
                        <PlaybackRateBar><PlaybackRateBarValue /></PlaybackRateBar>
                        <div className="jp-volume-controls">
                            <Mute><i className={this.state.muteClassName}></i></Mute>
                            <VolumeBar><VolumeBarValue /></VolumeBar>
                        </div>
                        <Progress>
                            <SeekBar>
                                <PlayBar />
                                <Buffer />
                                <CurrentTime />
                                <Duration />  
                            </SeekBar>  
                        </Progress>
                    </div>
                </Gui>             
                <BrowserUnsupported /> 
            </JPlayer>
        );
    }
}

const jPlayerOptions = {
    jPlayerSelector: "jplayer-footer-player",
    cssSelectorAncestor: "jp-container-footer-player",
    smoothPlayBar: false,
    muted: true,
    globalVolume: false,
    autoplay: false,
    logErrors: true,
    media: {
        title: "Cro Magnon Man",
        artist: "The Stark Palace",
        mp3: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
        poster: "http://wallpapercave.com/wp/Mb4UPsY.png",
        free: true
    }
};

renderjPlayer(Player, jPlayerOptions);

// onShuffleClick = (event) => {
//     event.preventDefault();

//     this.context.shuffle(!this.props.shuffled);
//     this.context.blur(event.target);
// }
// onPreviousClick = (event) => {
//     event.preventDefault();

//     this.context.previous();
//     this.context.blur(event.target);
// }
// onNextClick = (event) => {
//     event.preventDefault();

//     this.context.next();
//     this.context.blur(event.target);
// }
// onVideoPlayClick = () => this.props.dispatch(play())
// shuffle: (<a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
// previous: (<a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
// next: (<a className={classNames.NEXT} onClick={props.onNextClick}>{props.children}</a>)