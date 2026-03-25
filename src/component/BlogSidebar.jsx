import blogs from "../data/blogs";
import { Link } from "react-router-dom";

export default function BlogSidebar() {
    return (
        <aside className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow p-5">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                    Recent Posts
                </h3>
                <ul className="space-y-3">
                    {blogs.slice(0, 3).map((b) => (
                        <li key={b.id}>
                            <Link
                                to={`/blog/${b.slug}`}
                                className="text-blue-600 hover:underline text-sm"
                            >
                                {b.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow p-5">
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h3>
                <ul className="space-y-2">
                    {[...new Set(blogs.map((b) => b.category))].map((cat, i) => (
                        <li key={i} className="text-gray-700 text-sm">
                            • {cat}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
