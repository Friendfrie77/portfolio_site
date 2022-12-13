import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function App() {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

	return (
        <div>
                <button onClick={() => setToggler(!toggler)}>
                    Toggle Lightbox
                </button>
                <FsLightbox
                    toggler={toggler}
                    sources={[
                        'https://i.imgur.com/fsyrScY.jpg',
                        'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    ]}
                />
        </div>
	);
}

export default App;