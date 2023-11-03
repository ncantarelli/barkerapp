import { ChangeEvent } from "react"
import IndividualPost from "../components/IndividualPost"
import "../style/feed-styles.css"

function Feed() {



  const handleFileInput = (e:ChangeEvent<HTMLInputElement>) => {
    console.log('e :>> ', e);
  }
  

  return (
    <div className="Feed">
      <div>
        <div className="HeaderContainer">
          <h1 className="Active">Feed</h1>
          <h1 className="Inactive">Following</h1>
        </div>
        <div className="PublishingArea">
          <textarea placeholder="What's happening around?"></textarea>
          <div className="PublishingInteractions">
            <label>
              <img src=".\src\assets\upload-icon.svg" alt="Media" />
              <input type="file" className="Hidden" name="file" multiple={true} onChange={handleFileInput}/>
            </label>
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