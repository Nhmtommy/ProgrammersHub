// SEO Configuration for each page
export const pageMetadata = {
  home: {
    title:
      "Programmers Hub Bukasa - Web Development Training & Services in Uganda",
    description:
      "Learn web development, software engineering, and coding in Kampala, Uganda. Professional training, career guidance, and custom web development services for businesses.",
    keywords:
      "web development training Uganda, coding courses Kampala, software engineering education, web development services Uganda",
  },
  about: {
    title: "About Us - Programmers Hub Bukasa | Tech Education & Web Services",
    description:
      "Discover Programmers Hub Bukasa's mission to transform tech talent in Uganda. Learn about our training programs, expert instructors, and success stories.",
    keywords:
      "about programmers hub, tech training Uganda, coding education Kampala, software engineers Uganda",
  },
  courses: {
    title:
      "Web Development & Coding Courses in Uganda | Programmers Hub Bukasa",
    description:
      "Enroll in professional web development courses, coding bootcamps, and software engineering programs in Kampala. Affordable, job-focused training for career advancement.",
    keywords:
      "web development courses Uganda, coding bootcamp Kampala, learn programming, affordable coding training, web development certification",
  },
  contact: {
    title:
      "Contact Programmers Hub Bukasa - Web Development Training & Services",
    description:
      "Get in touch with Programmers Hub Bukasa for training inquiries or web development projects. Based in Kampala, Uganda. Let's build your tech future.",
    keywords:
      "contact programmers hub, web development agency Kampala, hire web developers Uganda, coding training contact",
  },
  blog: {
    title:
      "Tech Blog - Web Development Tips & Career Advice | Programmers Hub Bukasa",
    description:
      "Read articles on web development, coding best practices, career growth, and tech trends relevant to the African tech ecosystem.",
    keywords:
      "tech blog, web development tips, programming tutorials, career advice tech, African tech trends",
  },
};

// Update document head with meta tags
export const updatePageMeta = (pageKey) => {
  const meta = pageMetadata[pageKey] || pageMetadata.home;

  document.title = meta.title;
  updateMetaTag("description", meta.description);
  updateMetaTag("keywords", meta.keywords);
  updateMetaTag("og:title", meta.title);
  updateMetaTag("og:description", meta.description);
  updateMetaTag("twitter:title", meta.title);
  updateMetaTag("twitter:description", meta.description);
};

const updateMetaTag = (name, content) => {
  let element =
    document.querySelector(`meta[name="${name}"]`) ||
    document.querySelector(`meta[property="${name}"]`);

  if (element) {
    element.setAttribute("content", content);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.setAttribute(
      name.includes("og:") || name.includes("twitter:") ? "property" : "name",
      name
    );
    newMeta.setAttribute("content", content);
    document.head.appendChild(newMeta);
  }
};
