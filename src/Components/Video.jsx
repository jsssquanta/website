const iframe = <iframe width="560" height="315" src="https://www.youtube.com/embed/fVW8-px4Ufw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }
const Video = () => {
    return(
    <Iframe iframe={iframe} />
    );
}

export default Video;