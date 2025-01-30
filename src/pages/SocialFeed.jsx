// src/pages/SocialFeed.jsx
import React, { useState } from 'react';
import '../styles/SocialFeed.css';

const SocialFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'John Doe',
      mood: '😊 Happy',
      message: 'Had a great day today!',
      date: '2025-01-30',
    },
    {
      id: 2,
      username: 'Jane Smith',
      mood: '😔 Sad',
      message: 'Feeling a bit down today...',
      date: '2025-01-29',
    },
    {
      id: 3,
      username: 'Alice Johnson',
      mood: '😃 Excited',
      message: 'Just booked a trip to the mountains!',
      date: '2025-01-28',
    },
  ]);

  const handleNewPost = () => {
    // Example function to simulate adding a new post
    const newPost = {
      id: posts.length + 1,
      username: 'You',
      mood: '😌 Neutral',
      message: 'What’s on your mind today?',
      date: new Date().toISOString().slice(0, 10), // Current date
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="social-feed-container">
      <h1 className="social-feed-title">Social Mood Feed</h1>
      <p className="social-feed-description">
        Share your mood and see how others are feeling today.
      </p>

      {/* New Post Button */}
      <button className="new-post-btn" onClick={handleNewPost}>
        Share Your Mood
      </button>

      {/* Social Feed List */}
      <div className="social-feed-list">
        {posts.map((post) => (
          <div className="social-feed-post" key={post.id}>
            <div className="post-header">
              <h3 className="post-username">{post.username}</h3>
              <span className="post-date">{post.date}</span>
            </div>
            <div className="post-body">
              <p className="post-mood">{post.mood}</p>
              <p className="post-message">{post.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;
