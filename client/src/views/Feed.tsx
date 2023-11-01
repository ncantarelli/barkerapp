import IndividualPost from "../components/IndividualPost"
import "../style/feed-styles.css"

function Feed() {

  

  return (
    <div className="Feed">
      <div>
        <div className="HeaderContainer">
          <h1>FEED</h1>
        </div>
        <div className="PublishingArea">
          <textarea placeholder="What's happening around?"></textarea>
          <div>
            <img src=""></img>
            <button>Publish</button>
          </div>
        </div>
        <IndividualPost />       
      </div>
      {/* <div>FEED</div> */}
    </div>
  )
}

export default Feed