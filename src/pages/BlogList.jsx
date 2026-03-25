import { useState, useEffect } from "react";
import blogs from "../data/blogs";
import BlogCard from "../component/BlogCard";
import { Helmet } from "react-helmet";

export default function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // ✅ Sort blogs by ID (newest = highest ID)
    const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

    const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

    // Use sorted list for pagination
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Malani Marbles Blog | Marble Guides, Comparisons & Tips</title>
                <meta
                    name="description"
                    content="Explore expert tips, buying guides, trends & comparisons on marble, granite, and tiles from Malani Marbles – India’s trusted natural stone supplier."
                />
                <link rel="canonical" href="https://www.malanimarbles.com/blog" />
            </Helmet>

            {/* Banner */}
            <div className="relative">
                <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
                <img
                    className="w-full"
                    src="https://blogcrm.flightschannel.com/images/blog/65Europe.webp"
                    alt="Blog Banner"
                />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
                    Our Latest Blogs
                </h1>

                {currentBlogs.length > 0 ? (
                    <>
                        {/* Blog Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentBlogs.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12 gap-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-md text-white ${currentPage === 1
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                Previous
                            </button>

                            <span className="px-4 py-2 bg-gray-100 rounded-md font-semibold">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500 text-lg py-20">
                        No blogs found yet.
                    </div>
                )}
            </div>
        </>
    );
}
