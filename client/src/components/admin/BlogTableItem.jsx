import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../QuickBlog-Assets/assets";


const BlogTableItem = ({ blog, fetchBlogs, index }) => {

    const { title, createdAt } = blog;
    const BlogDate = new Date(createdAt)

    const context = useAppContext();
    const axios = context ? context.axios : null;

    const deleteBlog = async () => {
        try {
            if (!axios) return;
            const confirm = window.confirm('Are you sure you want to delete this blog?')
            if (!confirm) return;
            const { data } = await axios.post('/api/blog/delete', { id: blog._id })
            if (data.success) {
                toast.success(data.message)
                await fetchBlogs()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const togglePublish = async () => {
        try {
            if (!axios) return;
            const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id })
            if (data.success) {
                toast.success(data.message)
                await fetchBlogs()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    return (
        <tr className="border-y border-gray-300">
            <th className="px-4 py-5">{index}</th>
            <td className="px-4 py-5">{title}</td>
            <td className="px-4 py-5 max-sm:hidden">{BlogDate.toDateString()}</td>
            <td className="px-4 py-5 max-sm:hidden">
                <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>{blog.isPublished ? 'Published' : 'Unpublished'}</p>
            </td>
            <td className="px-2 py-4 flex text-xs gap-6">
                <button onClick={togglePublish} className="border px-2 py-0.5 mt-1 rounded cursor-pointer">{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
                <img src={assets.cross_icon} alt="" onClick={deleteBlog} className="w-8 hover:scale-110 transition-all cursor-pointer" />
            </td>
        </tr>
    )
}

export default BlogTableItem
