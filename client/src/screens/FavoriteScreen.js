import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Touchable, StyleSheet, Image} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';

const FavoriteScreen = () => {
  const [clicked, setClicked] = useState(false);
  const [puased, setPaused] = useState(false);
  const [progress, setProgress] = useState(null);
  const [fullScreen,setFullScreen]=useState(false)
  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };
  return (
    <View 
    // style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    >
      <Text 
      >Favorite</Text>
      <View 
      style={{backgroundColor: "black"}}
      
      >
       <TouchableOpacity
        style={{width: '100%', height:fullScreen?'100%': 200}}
        onPress={() => {
          setClicked(true);
        }}>
          {/* <Video source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                // uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              
              }}   // Can be a URL or a local file.
           ref={(ref) => {
             this.player = ref
           }}                                      // Store reference
           onBuffer={this.onBuffer}                // Callback when remote video is buffering
           onError={this.videoError}               // Callback when video cannot be loaded
           style={{width: '100%', height: fullScreen?'100%': 200}}
              
           //  style={styles.backgroundVideo} 
           /> */}

        <Video
          // poster='https://wallpapercave.com/wp/wp4752801.jpg'
          paused={puased}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          // ref={ref}
          onProgress={x => {
            // console.log(x);
            setProgress(x);
          }}
          // Can be a URL or a local file.
           ref={(ref) => {
             this.player = ref
           }}                                      // Store reference
           onBuffer={this.onBuffer}                // Callback when remote video is buffering
           onError={this.videoError}

          // Callback when video cannot be loaded
          // muted
          style={{width: '100%', height: fullScreen?'100%': 200}}
          resizeMode="contain"
        />
         {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) - 10);
                }}>
                <Image
                  source={require('../../assets/icons/backward.png')}
                  style={{width: 30, height: 30, tintColor: 'white'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!puased);
                }}>
                <Image
                  source={
                    puased
                      ? require('../../assets/icons/play-button.png')
                      : require('../../assets/icons/pause.png')
                  }
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) + 10);
                }}>
                <Image
                  source={require('../../assets/icons/forward.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems:'center'
              }}>
              <Text style={{color: 'white'}}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                style={{width: '80%', height: 40}}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#fff"
                onValueChange={(x)=>{
                  ref.current.seek(x);
                }}
              />
              <Text style={{color: 'white'}}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                top: 10,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems:'center'
              }}>
            <TouchableOpacity onPress={()=>{
              if(fullScreen){
                Orientation.lockToPortrait();
            } else{
                Orientation.lockToLandscape();
            }
            setFullScreen(!fullScreen)
            }}>
              <Image 
              source={fullScreen?require('../../assets/icons/minimize.png'):require('../../assets/icons/full-size.png')}
               style={{width:24,height: 24,tintColor:'white'}}/>
            </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity> 
    </View> 
    </View>
  );
};
var styles = StyleSheet.create({
  backgroundVideo: {
// position: 'relative'
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default FavoriteScreen;
