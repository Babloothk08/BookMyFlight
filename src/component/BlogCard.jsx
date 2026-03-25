import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all">
            <img src={blog.thumbnail} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{blog.metaDescription.slice(0, 100)}...</p>
                <Link
                    to={`/blog/${blog.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                >
                    Read More →
                </Link>
            </div>
        </div>
    );
}
