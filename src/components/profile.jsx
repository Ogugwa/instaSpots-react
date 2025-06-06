import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Profile = ({ onNewPost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Bessie Coleman',
    bio: 'Civil Aviator',
    picture: '/Profileimg.png'
  });
  const [showPostModal, setShowPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    image: null,
    preview: ''
  });
  const fileInputRef = useRef(null);
  const postFileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageClick = () => fileInputRef.current.click();
  const handlePostImageClick = () => postFileInputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileData(prev => ({ ...prev, picture: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewPost(prev => ({ ...prev, image: file, preview: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.image) {
      onNewPost({ src: newPost.preview, title: newPost.title || `Post ${Date.now()}` });
      setNewPost({ title: '', image: null, preview: '' });
      setShowPostModal(false);
    }
  };

  return (
    <div className='font-poppins font-medium flex flex-col justify-center items-center m-8 px-4 pb-4 gap-6 md:flex-row border-b border-[#212121B2] md:gap-8 lg:gap-12 lg:px-16 lg:py-8 lg:m-16'>
      {isEditing ? (
        // Edit Mode
        <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="relative group">
                <img src={profileData.picture} alt='Profile' className='w-32 h-32 md:w-40 md:h-40  object-cover mb-4' />
                <button
                  type="button"
                  onClick={handleImageClick}
                  className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full shadow cursor-pointer hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageChange} className="hidden" />
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" value={profileData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="bio" className="block text-gray-700 mb-2">Bio</label>
                <textarea id="bio" name="bio" value={profileData.bio} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">Save Changes</button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        // View Mode
        <>
          <div className="flex flex-col justify-center items-center gap-4 w-full md:flex-row md:items-start md:justify-between">
            <div className="flex justify-center items-center">
              <img src={profileData.picture} alt='Profile' className='w-20 h-20 md:w-32 md:h-32 lg:w-[11.875rem] lg:h-[11.875rem] object-cover' />
            </div>
            <div className='flex flex-col justify-center items-center w-full md:w-[70%] md:items-start'>
              <h2 className='text-xl md:text-2xl lg:text-3xl'>{profileData.name}</h2>
              <p className='text-base text-[#212121B2]'>{profileData.bio}</p>
              <button onClick={() => setIsEditing(true)} className='flex items-center justify-center gap-2 mt-3 text-[#212121B2] hover:text-[#212121] transition-colors'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="13.0676" y="4.5451" width="11.6506" height="3.21396" transform="rotate(135 13.0676 4.5451)" fill="currentColor" />
                  <path d="M14.2036 1.13628C14.8312 1.76384 14.8312 2.78132 14.2036 3.40889L13.6354 3.97704L11.3628 1.70443L11.931 1.13628C12.5586 0.508714 13.576 0.508714 14.2036 1.13628Z" fill="currentColor" />
                  <path d="M1.54021 13.1538L2.55674 10.5108L4.82935 12.7834L2.18637 13.8C1.782 13.9555 1.38468 13.5582 1.54021 13.1538Z" fill="currentColor" />
                </svg>
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2 w-full mt-3 md:items-end md:mt-20 lg:mt-[7.5rem]'>
            <button onClick={() => setShowPostModal(true)} className='flex items-center justify-center gap-2 rounded-xl bg-[#212121] text-[#FCF5E5] w-full h-12 md:w-36 hover:bg-[#333333] transition-colors'>
              <img src='/plusicon.svg' alt='Add Icon' />
              <span>New Post</span>
            </button>
          </div>
        </>
      )}
      {/* Modal for creating new post */}
      {showPostModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Create New Post</h3>
            <form onSubmit={handlePostSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Post Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter post title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Post Image</label>
                <div className="flex items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden" onClick={handlePostImageClick}>
                  {newPost.preview ? (
                    <img src={newPost.preview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400">Click to upload</span>
                  )}
                </div>
                <input type="file" ref={postFileInputRef} accept="image/*" onChange={handlePostImageChange} className="hidden" />
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowPostModal(false)} className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

Profile.propTypes = {
  onNewPost: PropTypes.func.isRequired
};

export default Profile;
