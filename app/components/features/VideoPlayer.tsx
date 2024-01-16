import ReactPlayer from "react-player";

export function VideoPlayer() {

  return (

    // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        style={{height: "100%", width:"auto"}}
        autoPlay
        loop
        muted
      >
        <source src="./video/intro_video.webm" type="video/webm"/>
        <source src="./video/intro_video.mp4" type="video/mp4"/>
      </video>)
        {/*<ReactPlayer*/}
        {/*  url={[*/}
        {/*    { src: "./video/intro_video.webm", type: "video/webm" },*/}
        {/*    { src: "./video/intro_video.mp4", type: "video/mp4" },*/}
        {/*  ]}*/}
        {/*  playing={true}*/}
        {/*  playsinline={true}*/}
        {/*  loop={true}*/}
        {/*  muted={true}*/}
        {/*  volume={0}*/}
        {/*  width="100%"*/}
        {/*  height="100%"*/}
        {/*  controls={false}*/}
        {/*/>*/}


}
