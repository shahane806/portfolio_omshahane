import { useEffect, useState } from "react";
import { PlusCircle, Save, Image as ImageIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setProjectData, setProjectMetaData, setBlogsData, setBlogMetaData } from "../Firebase/RealtimeDatabase/functions";
const UploadForm = ({ application, submitFirst }) => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state?.adminReducer);
  const getAdminDetails = async () => {
    return await admin;
  }
  useEffect(() => {
    getAdminDetails().then((res) => {
      if (res?.length == 0) {
        navigate('/');
      }
    }).catch((e) => {
      alert("Something Went Wrong")
    });
  }, [])


  const [blogData, setLocalBlogData] = useState({
    title: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: [],
    featuredImage: null,
    githubLink : "",
    demoLink :"",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name!='metaKeywords' && setLocalBlogData((prev) => ({ ...prev, [name]: value }));
    name=='metaKeywords' && setLocalBlogData((prev)=>({...prev,[name]:value?.split(',')}));
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocalBlogData((prev) => ({ ...prev, featuredImage: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...blogData,
      featuredImage: application == 'Project' ? blogData.featuredImage
        ? "http://localhost:5000/UploadImg/Projects/"+`${blogData.featuredImage.name}`
        : null : blogData.featuredImage
        ? blogData.featuredImage.name
        : null,
      date: new Date().toISOString().split("T")[0],
    };
    // console.log("Uploaded Data:", submissionData);

    //use firebase function to insert the application data to the firebase.
    if (submitFirst) {
      setBlogsData({
        title: submissionData.title,
        content: submissionData.content,
        freaturedImage: submissionData.featuredImage,
        date: submissionData.date,
      });
      setBlogMetaData({
        metaTitle: submissionData.metaTitle,
        metaDescription: submissionData.metaDescription,
        metaFeaturedImage: submissionData.featuredImage,
        metaKeywords: submissionData.metaKeywords,
        metaDate: submissionData.date
      });
    } else {
      setProjectData({
        title: submissionData.title,
        content: submissionData.content,
        freaturedImage: submissionData.featuredImage,
        date: submissionData.date,
      });
      setProjectMetaData({
        metaTitle: submissionData.metaTitle,
        metaDescription: submissionData.metaDescription,
        metaFeaturedImage: submissionData.featuredImage,
        metaKeywords: submissionData.metaKeywords,
        metaDate: submissionData.date,
        metaDemoLink : submissionData.demoLink,
        metaGitHubLink : submissionData.githubLink,
      });
    }
    setLocalBlogData({
      title: "",
      content: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: [],
      featuredImage: null,
      githubLink : "",
      demoLink :  ""
    });
    setImagePreview(null);
  };

  return (

    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6 font-sans">
      <div className="max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100 flex items-center gap-2">
          <PlusCircle size={20} className="sm:w-6 sm:h-6" /> Create New {application}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

          <div>
            <label
              htmlFor="title"
              className="block text-sm sm:text-base font-medium text-gray-300"
            >
              {application} Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={blogData.title}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
              placeholder={'Enter ' + application + ' title'}
              required
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="content"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                {application} Content (Markdown)
              </label>
              <textarea
                id="content"
                name="content"
                value={blogData.content}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors h-[150px] sm:h-[250px] resize-none"
                placeholder={"Write your " + application + " content in Markdown..."}
                required
              />
              <p className="mt-2 text-xs sm:text-sm text-gray-400">
                Use Markdown for formatting (e.g., **bold**, *italic*,
                ![image](url), etc.).
              </p>
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-300">
                Content Preview
              </label>
              <div className="mt-1 p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg h-[150px] sm:h-[250px] overflow-y-auto prose prose-invert max-w-none text-sm sm:text-base">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {blogData.content || "Type Markdown to see the preview..."}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <div className="mt-3 mb-3">
            <label
              htmlFor="featuredImage"
              className="mt-20 mb-3 block text-sm sm:text-base font-medium text-gray-300"
            >
              Featured Image
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-gray-700 p-2 sm:p-3 rounded-lg flex items-center gap-2 text-gray-300 hover:bg-gray-600 transition-colors">
                <ImageIcon size={16} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Upload Image</span>
                <input
                  type="file"
                  id="featuredImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="metaTitle"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Meta Title
              </label>
              <input
                type="text"
                id="metaTitle"
                name="metaTitle"
                value={blogData.metaTitle}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                placeholder="Enter meta title"
              />
            </div>
            <div>
              <label
                htmlFor="metaKeywords"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Meta Keywords
              </label>
              <input
                type="text"
                id="metaKeywords"
                name="metaKeywords"
                value={blogData.metaKeywords}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                placeholder="Enter meta keywords (comma-separated)"
              />
            </div>
          </div>
          {
            !submitFirst && <div>
              <label
                htmlFor="githubLink"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Meta GitHubLink
              </label>
              <input
                type="text"
                id="githubLink"
                name="githubLink"
                value={blogData.githubLink}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                placeholder="Enter GitHubLink"
              />
            </div>
          }
          {
            !submitFirst && <div>
              <label
                htmlFor="demoLink"
                className="block text-sm sm:text-base font-medium text-gray-300"
              >
                Meta Demo
              </label>
              <input
                type="text"
                id="demoLink"
                name="demoLink"
                value={blogData.demoLink}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                placeholder="Enter Demo Link"
              />
            </div>
          }
          <div>
            <label
              htmlFor="metaDescription"
              className="block text-sm sm:text-base font-medium text-gray-300"
            >
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              name="metaDescription"
              value={blogData.metaDescription}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
              placeholder="Enter meta description"
              rows={3}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <Save size={16} className="sm:w-5 sm:h-5" />
              Save {application}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
