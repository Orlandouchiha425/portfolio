

  import project1 from "../Images/Connect.png"
  import project2 from "../Images/Chatter.png"
  import project3 from "../Images/gossip.png"

export default function Portfolio(){
    return(

        <div className="card-deck cardFont cardmedia" id="portfolio">
        <div className="card">
          <img src={project1} className="card-img-top" alt="Project Connect" height="45%" width="50%" />
          <div className="card-body">
            <h5 className="card-title">Project Connect</h5>
            <p className="card-text ">Project Connect is about finding people to collaborate with, such as artist,models,photographers etc.
            You can sign up , login, find collaborators and send messages</p>
            <p>test the website by using the following credentials or Sign Up</p>
            <p>Email: Test@gmail.com </p>
            <p>Password: 123456</p>
            <p>Click on the button below or the image above to be redirected to the live project </p>
            <p className="hidden">please be aware the project may take  longer to load, the server needs to wake up first</p>
           <a href="https://project-connect-teamux.herokuapp.com/" target="_blank">  <button className="project"> View Project</button></a>
            <a href="#home"><button className="project">Back to the top</button></a> 
          </div>
          <div className="card-footer">
            <small className="text-muted">Project Connect</small>
          </div>
        </div>
        <div className="card">
          <img src={project2} className="card-img-top" alt="Chatter Your Messaging Center" height="45%" width="50%" />
          <div className="card-body">
            <h5 className="card-title">Chatter</h5>
            <p className="card-text">This Website allows you to chat with other users. They will need to be in the same room. Thanks to socket IO, the communication is live and instant.
            you can sign up , login and send messages </p>
            <p>test the website by using the following credentials or Sign Up</p>
            <p>Email: Test@gmail.com </p>
            <p>Password: 123456</p>
            <p>Click on the button below or the image above to be redirected to the live project </p>
            <p className="hidden">please be aware the project may take  longer to load, the server needs to wake up first</p>

            
            <a href="https://chatter-messaging-center.herokuapp.com/" target="_blank">  <button className="project"> View Project</button></a>
            <a href="#home"><button className="project">Back to the top</button></a> 
          </div>
          <div className="card-footer">
            <small className="text-muted">Project Connect</small>
          </div>
        </div>
        <div className="card">
          <img src={project3} className="card-img-top" alt="Gossip News" height="45%" width="50%"  />
          <div className="card-body">
            <h5 className="card-title">Gossip News</h5>
            <p className="card-text">This is website is intended to post <em>Neighborhood Gossips</em>.</p>
            <p>you can view everyones post without the need to login, however you can only post if you login.</p>
            <p>you can like posts, add Images and stay anonymous</p>
            <p>Email: Test@gmail.com </p>
            <p>Password: 123456</p>
            <p>Click on the button below or the image above to be redirected to the live project </p>
            <p className="hidden">please be aware the project may take  longer to load, the server needs to wake up first</p>

            
            <a href="https://gossipnews.herokuapp.com/" target="_blank">  <button className="project"> View Project</button></a>
            <a href="#home"><button className="project">Back to the top</button></a> 
          </div>
          <div className="card-footer">
            <small className="text-muted">Gossip News</small>
          </div>
        </div>
      </div>
    )
}