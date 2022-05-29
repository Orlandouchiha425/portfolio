

  import project1 from "../Images/Connect.png"

export default function Portfolio(){
    return(
        <div className="card-deck cardFont" id="portfolio">
        <div className="card">
          <img src={project1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Project Connect</h5>
            <p className="card-text">Project Connect is about finding people to collaborate with, such as artist,models,photograpers etc.
            You can sign up , login find collabortors and send messages</p>
            <p>Click on the button below or the image above to be redirected to the live project </p>
            <button className="project"> View Project</button>
            <a href="#home"><button className="project">Back to the top</button></a> 
          </div>
          <div className="card-footer">
            <small className="text-muted">Project Connect</small>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Project Connect</small>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    )
}