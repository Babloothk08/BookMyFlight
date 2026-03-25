import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import blogs from "../data/blogs";
import BlogSidebar from "../component/BlogSidebar";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Helmet } from "react-helmet";

export default function BlogDetail() {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!blog)
        return (
            <div className="p-20 text-center text-gray-500 text-lg">
                Blog not found.
            </div>
        );

    const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

    return (
        <> {/* Banner Section */}
            
            <Helmet>
                <title>{blog.metaTitle}</title>
                <meta name="description" content={blog.metaDescription} />
                <meta name="keywords" content={blog.metaKeywords} />
                <link rel="canonical" href={blog.canonical} />
            </Helmet>
            <div className="relative">
                <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
                <img
                    className="w-full h-[400px]"
                    src="http://blogcrm.flightschannel.com/images/blog/1blog-image (24).jpg"
                    alt="Blog Banner"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-12">
                {/* Main Blog Section */}
                <div className="lg:col-span-2">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        {blog.title}
                    </h1>

                    <p className="text-gray-500 text-sm mb-7">
                        By{" "}
                        <span className="text-gray-700 font-medium">{blog.author}</span> •{" "}
                        {blog.date} • {blog.category}
                    </p>

                    <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="rounded-2xl shadow-md mb-10 w-full max-h-[480px] object-cover"
                    />

                    {/* Share Section */}
                    <div className="flex items-center gap-4 mb-10 border-y py-4">
                        <span className="font-medium text-gray-700">Share:</span>
                        <a
                            href={`https://facebook.com/sharer/sharer.php?u=${blog.canonical}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                        >
                            <FaFacebook size={18} />
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${blog.canonical}&text=${blog.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 transition"
                        >
                            <FaXTwitter size={18} />
                        </a>
                        <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${blog.canonical}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href={`https://api.whatsapp.com/send?text=${blog.title} ${blog.canonical}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition"
                        >
                            <FaWhatsapp size={18} />
                        </a>
                    </div>

                    {/* Blog Content */}
                    <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                        {blog.content}
                    </article>


                    {/* Related Posts */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                            Related Posts
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {related.map((r) => (
                                <Link
                                    to={`/blog/${r.slug}`}
                                    key={r.id}
                                    className="flex gap-4 items-center bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-4"
                                >
                                    <img
                                        src={r.thumbnail}
                                        alt={r.title}
                                        className="w-24 h-20 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                                            {r.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs mt-1">{r.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <BlogSidebar />
                </div>
            </div>
        </>
    );
}
