
function PublicationModal() {

    
    return (
        <div className="PublishingArea">
            <textarea placeholder="What's happening around?"></textarea>
            <div className="PublishingInteractions">
                <label>
                    <img src=".\src\assets\upload-icon.svg" alt="Media" />
                    <input type="file" className="Hidden" name="file" multiple={true} />
                </label>
                <button>Publish</button>
            </div>
        </div>
    );
};

export default PublicationModal