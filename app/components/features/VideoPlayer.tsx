import Plyr, {PlyrProps} from "plyr-react"

const plyrProps: PlyrProps = {
  source: {
    type: "video",
    sources: [
      {
        src: "./video/intro_video.webm",
        type: "video/webm"
      },
      {
        src: "./video/intro_video.mp4",
        type: "video/mp4"
      }
    ]
  }, // https://github.com/sampotts/plyr#the-source-setter
  options: {
    autoplay: true,
    muted: true,
    loop: {
      active: true
    },
    volume: 0,
    hideControls: true,
  }, // https://github.com/sampotts/plyr#options
  // Direct props for inner video tag (mdn.io/video)
}



export function VideoPlayer() {
  return   <Plyr {...plyrProps} className="plyr-react plyr"/>

}
