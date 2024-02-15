import ffmpeg from 'fluent-ffmpeg';
import { path } from "@ffmpeg-installer/ffmpeg"
ffmpeg.setFfmpegPath(path)
// import thumb from 'video-thumbnail';


const extractImage =  (video, frameRate) => {
    // thumb.video(
    //     '../public/temp/newfi1.avi',
    //     '../public/temp/thumbnails/thumbnail.png',
    //     {
    //       width: 200,
    //       duration: 5 // number of seconds
    //     }
    //   )
    //   .then(() => console.log('Success'), err => console.error(err));
    // var proc =  ffmpeg("C:/Users/USER/Desktop/Suspicious-Activity-Detection-Application/server/public/temp/newfi1.avi")
    // .takeScreenshots({
    //   count: 1,
    //   timemarks: ['00:00:03'], // number of seconds
    //   size: '1280x720',
    //   filename: 'thumbnail.png',
    //   folder: "C:/Users/USER/Desktop/Suspicious-Activity-Detection-Application/server/public/temp/thumbnails/"
    // }, function(err) {
    //   console.log('Done processing');
    // });
  
      
    // var proc = new ffmpeg("C:/Users/USER/Desktop/Suspicious-Activity-Detection-Application/server/public/temp/newfi1.avi")
    // .seekInput(3) // seek to the third second of the video
    // .frames(1) // set the frame rate
    // .size(`1280x720`)
    // .output("C:/Users/USER/Desktop/Suspicious-Activity-Detection-Application/server/public/temp/thumbnails/thumbnail.png")
    // .on("end", ()=>{console.log(`Done processing`)})
    // .run()
    // .on('filenames', function(filenames) {
    //     console.log('Will generate ' + filenames.join(', '))
    //   })
    //   .on('end', function() {
    //     console.log('Screenshots taken');
    //   })
    //   .screenshots({
    //     // Will take screens at 20%, 40%, 60% and 80% of the video
    //     count: 1,
    //     folder: "./public/temp/thumbnails/",
    //   })
    // .screenshots({
    //     count: 1,
    //     folder: "./public/temp/thumbnails/",
    //     filename: video,
    //     timemarks: [frameRate] // number of seconds
    // }, './public/temp/thumbnails/', function(err) {
    //     console.log('screenshots were saved');
    // })
    // return proc
}

// extractImage("","");

export default extractImage;