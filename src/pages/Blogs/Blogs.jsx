import React, { useState } from "react";

const Blogs = () => {
  const [description, setDescription] = useState(false);
  const blogPosts = [
    {
      id: 1,
      title: "Product Spotlights",
      description:
        "Product spotlights are a great way to showcase specific items from your inventory, providing in-depth information about their features, benefits, and unique selling points. By highlighting individual products in blog posts, you can give your audience a closer look at what sets each item apart and why they should consider making a purchase. Include high-quality images to visually engage your readers and provide a comprehensive overview of the product's design and functionality. Customer reviews and testimonials can further enhance the spotlight by offering real-life insights and experiences. Whether it's a new arrival, a bestseller, or a hidden gem, product spotlights help customers make informed decisions and add value to their shopping experience.",
      related_categories: ["fashion", "beauty", "home_decor"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 2,
      title: "Seasonal Fashion Trends",
      description:
        "Stay ahead of the curve by writing blog posts about seasonal fashion trends. These posts provide valuable insights into the latest styles, colors, and patterns that are dominating the fashion scene. Whether it's spring florals, summer pastels, fall plaids, or winter knits, seasonal fashion trends influence wardrobe choices and shopping decisions. Share tips on how to incorporate these trends into everyday outfits and special occasions, catering to various tastes and preferences. Showcase new arrivals from your collection that align with current trends, offering inspiration and guidance to your audience. By staying informed and adaptable to seasonal changes, you can position your e-commerce store as a trusted source for fashionable finds year-round.",
      related_categories: ["fashion"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 3,
      title: "DIY Fashion Projects",
      description:
        "Get creative with do-it-yourself (DIY) fashion projects that empower your audience to express their personal style and creativity. These blog posts feature step-by-step tutorials for transforming basic clothing items and accessories into unique fashion statements. From upcycling old denim jeans to embellishing plain t-shirts, DIY fashion projects offer endless possibilities for customization and experimentation. Share tips, tricks, and techniques that make the process accessible to beginners while also challenging more experienced crafters. Encourage your audience to unleash their imagination and put their own spin on each project, fostering a sense of empowerment and ownership. By providing inspiration and guidance, you can foster a community of DIY enthusiasts who love to showcase their handmade creations.",
      related_categories: ["fashion", "crafts"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 4,
      title: "Behind-the-Scenes Look",
      description:
        "Offer your audience an exclusive behind-the-scenes look at your e-commerce business, revealing the inner workings and processes that drive your success. These blog posts provide insights into how your products are sourced, designed, manufactured, and brought to market. Introduce key team members who play a role in each stage of the business, sharing their expertise, passion, and dedication. Showcase your company's values, mission, and commitment to quality and customer satisfaction. From product development and packaging to shipping and customer service, highlight the attention to detail and care that goes into every aspect of your operations. By lifting the veil and inviting customers behind the scenes, you can build trust, loyalty, and a deeper connection with your brand.",
      related_categories: ["business", "company_culture"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 5,
      title: "Customer Success Stories",
      description:
        "Share inspiring customer success stories that demonstrate the real-life impact of your products on people's lives. These blog posts feature testimonials, reviews, and personal anecdotes from satisfied customers who have experienced positive outcomes from using your products. Highlight the challenges or problems they faced before discovering your products and how your products helped them overcome obstacles and achieve their goals. Include before-and-after photos or videos to visually illustrate the transformation and results. By showcasing authentic stories of success and satisfaction, you can build credibility, trust, and social proof for your brand. Encourage customers to share their own stories and experiences, fostering a sense of community and connection among your audience.",
      related_categories: ["customer_experience", "testimonials"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 6,
      title: "Fashion Tips and Advice",
      description:
        "Provide valuable fashion tips and advice for your audience. Write about topics such as dressing for different body types, building a capsule wardrobe, or selecting the perfect accessories. Fashion is not just about following trends; it's about expressing yourself and feeling confident in what you wear. With the right guidance, anyone can elevate their style and feel great about their appearance. Include images showcasing different outfit posts, accessory pairings, and style inspiration to visually engage your readers and illustrate your fashion tips in action.",
      related_categories: ["fashion", "style_tips"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 7,
      title: "Gift Guides",
      description:
        "Create gift guides for different occasions, such as birthdays, holidays, or anniversaries. Curate a selection of products from your inventory that would make thoughtful gifts for loved ones. Gift-giving can be a joyful experience, but it can also be overwhelming when you're unsure of what to buy. Your gift guides can provide inspiration and make shopping easier for your audience. Include images of the featured products, along with descriptions highlighting their unique features and why they would make great gifts. Personalize your gift guides for different recipients and occasions to cater to a variety of tastes and preferences.",
      related_categories: ["gifts", "holidays"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 8,
      title: "How to Care for Your Products",
      description:
        "Educate your audience on how to properly care for and maintain the products they purchase from your store. Offer tips on cleaning, storage, and product longevity to help extend the life of their purchases. Proper care not only preserves the quality and appearance of products but also ensures that customers get the most value out of their investment. Include images demonstrating the recommended care techniques, such as washing instructions for clothing or storage solutions for accessories. By providing helpful advice on product maintenance, you can build trust with your audience and encourage repeat business.",
      related_categories: ["product_care", "maintenance"],
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 9,
      title: "Community Spotlight",
      description:
        "Shine a spotlight on your loyal customers and followers. Feature user-generated content, such as outfit photos or styling posts shared by your audience on social media. Encourage engagement and interaction within your community. Your customers are your biggest advocates, and showcasing their creativity and style can foster a sense of belonging and camaraderie among your audience. Include images submitted by your community members, along with captions that highlight their unique personalities and fashion choices. By celebrating your customers' contributions, you not only strengthen your brand community but also inspire others to join in and participate.",
      related_categories: ["community", "user-generated_content"],
      image: "https://via.placeholder.com/800x600",
    },
  ];

  const toggleDescription = (e) => {
    e.preventDefault();
    setDescription(!description);
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
          >
            <div className="hover:shadow-xl hover:shadow-gray-700 p-6 rounded-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4 dark:text-gray-300">
                  {description
                    ? post.description
                    : `${post.description.slice(0, 300)}...`}
                </p>
                {post.description.length > 300 && (
                  <a
                    href="#"
                    onClick={toggleDescription}
                    className="text-blue-500 cursor-pointer hover:underline"
                  >
                    {description ? "Read less" : " Read more"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <ul className="timeline timeline-vertical">
        {blogPosts.map((post, index) => (
          <li key={post.id}>
            <div
              className={`timeline-box
                ${
                  index % 2 === 0
                    ? "timeline-start timeline-box md:text-end "
                    : "timeline-end "
                } p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-500
              `}
            >
              <div className="hover:shadow-xl hover:shadow-gray-700 p-6 rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 text-sm mb-4 dark:text-gray-300">
                    {description
                      ? post.description
                      : `${post.description.slice(0, 300)}...`}
                  </p>
                  {post.description.length > 300 && (
                    <a
                      href="#"
                      onClick={toggleDescription}
                      className="text-blue-500 cursor-pointer hover:underline"
                    >
                      {description ? "Read less" : " Read more"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Blogs;
