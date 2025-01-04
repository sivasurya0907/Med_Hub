import React from 'react';
import './VideoList.css';
import Nav from '../Nav/Nav';
const Program = () => {
const Alt=()=>{
  alert("Congratulations! You've successfully completed this exercise. Keep up the good work!");
}


  return (
    <>
    <Nav></Nav>
    <div className="exercise-container">
      <center>
<br></br>
         <h1>Yoga</h1>
         <br></br>
        </center>
      <div className="exercise">
      <center>
         </center>  
        <h1>Bow Pose</h1>
        <br></br>
        <div className="videos">
          
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-bow-pose-side.mp4#t=0.1" className='video'/>
            Your browser does not support the video tag.
          </video>
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-bow-pose-front.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
        </div> 
        <div className="steps">
        <h1>Steps</h1>

          <ol>
            <li>Begin in a tabletop position with your hands and knees on the ground.</li>
            <li>Sit back onto your heels and extend your arms out in front of you to one side.</li>
            <li>Rest your forehead on the ground.</li>
            <li>Hold for a few breaths and then repeat on the other side.</li>
          </ol>
        </div>
      </div>
      <center><button className='b1' onClick={Alt}>COMPLETED</button></center> 
      <br></br>
      <div className="exercise">
        <h1>Child Pose Arm Side</h1>
        <br></br>
        <div className="videos">
          <video class="v"width="500" height="300"  controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-balasana-child-pose-arms-on-side-side.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-balasana-child-pose-arms-on-side-front.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="steps">
        <h1>Steps</h1>
          <ol>
            <li>Begin in a tabletop position with your hands and knees on the ground.</li>
            <li>Sit back onto your heels and place your arms at your sides with your palms facing up.</li>
            <li>Rest your forehead on the ground.</li>
            <li>Hold for a few breaths and then release.</li>
          </ol>
        </div>
      </div>
      <center><button className='b1' onClick={Alt}>COMPLETED</button></center>  
      <div className="exercise">
      <br></br>
        <h1>Core Pose</h1>
        <br></br>
        <div className="videos">
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-core-pose-side.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-core-pose-front.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="steps">
        <h1>Steps</h1>
          <ol>
            <li>Lie down on your back with your legs straight and arms at your sides.</li>
            <li>Close your eyes and take deep breaths in through your nose and out through your mouth.</li>
            <li>Allow your body to completely relax and let go of any tension.</li>
            <li>Hold for several minutes and then slowly come back up to a seated position.</li>
          </ol>
        </div>
      </div>
      <center><button className='b1' onClick={Alt}>COMPLETED</button></center> 

      <div className="exercise">
      <br></br>
        <h1>Crow Pose</h1>
        <br></br>
        <div className="videos">
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-downward-dog-with-fingers-facing-feet-front.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-downward-dog-with-fingers-facing-feet-front.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="steps">
        <h1>Steps</h1>
          <ol>
            <li>Lie down on your back with your legs straight and arms at your sides.</li>
            <li>Close your eyes and take deep breaths in through your nose and out through your mouth.</li>
            <li>Allow your body to completely relax and let go of any tension.</li>
            <li>Hold for several minutes and then slowly come back up to a seated position.</li>
          </ol>
        </div>
      </div>
      <center><button className='b1' onClick={Alt}>COMPLETED</button></center>  
      <div className="exercise">
      <br></br>
        <h1>Criss Cross Bow Tie Pose</h1>
        <br></br>
        <div className="videos">
          <video  class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-bow-tie-pose-front.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
          <video class="v" width="500" height="300" controls>
            <source src="https://media.musclewiki.com/media/uploads/videos/branded/male-yoga-bow-tie-pose-side.mp4#t=0.1" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="steps">
        <h1>Steps</h1>
          <ol>
            <li>Lie down on your back with your legs straight and arms at your sides.</li>
            <li>Close your eyes and take deep breaths in through your nose and out through your mouth.</li>
            <li>Allow your body to completely relax and let go of any tension.</li>
            <li>Hold for several minutes and then slowly come back up to a seated position.</li>
          </ol>
        </div>
      </div>
      <center><button className='b1' onClick={Alt}>COMPLETED</button></center>  
     
     
    </div></>
  );
};

export default Program;