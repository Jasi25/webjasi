function displayVideos(category) {
    const gallery = document.getElementById('video-gallery');
    gallery.innerHTML = '';
    
    videos.forEach(video => {
        if (category === 'all' || video.category === category) {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                <video controls>
                    <source src="${video.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <h3>${video.title}</h3>
            `;
            gallery.appendChild(videoItem);
        }
    });
}

function filterVideos(category) {
    displayVideos(category);
}

// Initial load
displayVideos('all');