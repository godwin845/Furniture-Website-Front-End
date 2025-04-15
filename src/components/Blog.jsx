import React from 'react';
import post1 from '../assets/images/post-1.jpg'
import post2 from '../assets/images/post-2.jpg'
import post3 from '../assets/images/post-3.jpg'
import person1 from '../assets/images/person-1.jpg'

const Blog = () => {
  const posts = [
    {
      src: post1,
      title: 'First Time Home Owner Ideas',
      author: 'Kristin Watson',
      date: 'Dec 19, 2021',
    },
    {
      src: post2,
      title: 'How To Keep Your Furniture Clean',
      author: 'Robert Fox',
      date: 'Dec 15, 2021',
    },
    {
      src: post3,
      title: 'Small Space Furniture Apartment Ideas',
      author: 'Kristin Watson',
      date: 'Dec 12, 2021',
    },
  ];

  return (
    <div className="bg-white">
      {/* Blog Posts Grid */}
      <section className="px-4 md:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <div key={index} className="space-y-4">
              <a href="/">
                <img src={post.src} alt={post.title} className="rounded-2xl w-full" />
              </a>
              <div>
                <h6 className="font-bold text-lg">{post.title}</h6>
                <p className="text-gray-600 text-sm">by {post.author} on {post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-20 py-16 bg-gray-50">
        <h1 className="text-3xl text-center font-light mb-10">Testimonials</h1>
        <div className="space-y-10">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.”
              </p>
              <img src={person1} alt="Maria Jones" className="w-20 h-20 mx-auto rounded-full mb-2" />
              <h6 className="font-semibold">Maria Jones</h6>
              <p className="text-sm text-gray-500">CEO, Co-Founder, XYZ Inc.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;