import React, { useState, useEffect } from "react";
import { HomepageProps } from "./homepage.props";

const HomepageTemplate = ({ posts }: HomepageProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const filteredPosts = showMore ? posts : posts.slice(0, 10);
  console.log(filteredPosts);

  return (
    <div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id}>
            {post.mediaType === "video" && (
              <video controls>
                <source src={post.mediaUrl} type="video/mp4" />
              </video>
            )}
            {post.mediaType === "image" && <img src={post.mediaUrl} alt="" />}
            <p>{post.likes} Likes</p>
            <p>{post.description}</p>
            <button>Like</button>
            <button>Comment</button>
          </div>
        ))
      ) : (
        <p>Cant find any posts.</p>
      )}
      {!showMore && (
        <button onClick={handleShowMore} className="bg-blue-200">
          Show more
        </button>
      )}
    </div>
  );
};

export default HomepageTemplate;
