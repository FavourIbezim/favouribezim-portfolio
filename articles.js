const articles = {
  1: {id:1,
    title: "Building Responsive Web Apps",
    content: `
      <p>In today’s digital world, users expect web applications to look and perform seamlessly across all devices, from widescreen monitors to tablets and smartphones. As a <strong>Fullstack Developer and Software Developer</strong>, one of the most important skills I rely on is building responsive web applications that adapt to different screen sizes and user needs.</p>

      <br><strong><u><i><h2>Why Responsiveness Matters</h2></u></i></strong>
      <p>A non-responsive app can frustrate users, increase bounce rates, and even affect search engine rankings. With mobile traffic dominating the web, developers must prioritize:</p>
      <ul>
        <li><strong>Consistency</strong>: ensuring design and functionality are uniform across devices.</li>
        <li><strong>Accessibility</strong>:  making apps usable for everyone, including those with disabilities.</li>
        <li><strong>Performance</strong>: optimizing load times and interactions for mobile users.</li>
      </ul>

      <br><strong><u><i><h2>Core Technologies for Responsive Web Apps</h2></u></i></strong>
      <h3>1. <u><i>HTML5: Structure & Semantics</u></i></h3>
      <p>HTML is the backbone of any web app. In responsive design, semantic tags like &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, and &lt;footer&gt; improve readability, SEO, and accessibility.</p>

      <h3>2. <u><i>CSS3:  Styling & Layouts</u></i></h3>
      <p>Modern CSS has made responsiveness easier than ever. Key tools include Flexbox, Grid, Media Queries, and fluid typography. In 2025, frameworks like Tailwind CSS speed up implementation.</p>

      <h3>3. <u><i>JavaScript: Interactivity & Enhancements</u></i></h3>
      <p>JavaScript powers dynamic menus, smooth scrolling, animations, and responsive data visualizations. With ES2025 improvements, apps can be fast and lightweight.</p>

      <br><h2><strong><u><i>Best Practices for 2025</i></u></strong></h2>
      <ul>
        <li>1. Design mobile-first, then scale up.</li>
        <li>2. Use relative units like %, em, rem, and fr.</li>
        <li>3. Optimize images with WebP/AVIF formats.</li>
        <li>4. Test across devices with DevTools or BrowserStack.</li>
        <li>5. Prioritize accessibility (ARIA, contrast, keyboard navigation).</li>
      </ul>

      <br><p> To conclude, Building responsive web apps in 2025 is about more than resizing layouts, it’s about creating <strong>inclusive, performant, and user-centered experiences</strong>. By mastering HTML, CSS, and JavaScript, developers can deliver apps that feel natural on any device.</p>
    `
  },
  2: {id:2,
    title: "Designing an Interactive Local Food Menu App with Vanilla JavaScript",
    content: `
      <p>In a world where users expect fast, intuitive, and engaging digital experiences, even a simple food menu can become a powerful web application. My <strong>Local Food Menu App</strong> is a project that showcases how to build an interactive, responsive, and functional menu using only <strong>HTML, CSS, and Vanilla JavaScript</strong>, no frameworks required.</p>

      <br><u><h2>Why I Built This Project</h2></u>
      <p>The goal was simple: create a platform that makes it easy for users to discover local dishes while giving restaurant owners a space to showcase their menus. This project was also an opportunity to sharpen my JavaScript skills by focusing on <strong>DOM manipulation, event handling, and user interaction design</strong>.</p>

      <br><u><h2>Key Features</h2></u>
      <ul>
        <li><strong>Menu Browsing</strong>: A clean and simple UI allows users to scroll through a list of local dishes.</li>
        <li><strong>Search Functionality</strong>: Users can search by dish name or filter by category, making it easier to find what they want.</li>
        <li><strong>Responsive Layout</strong>:  Built with CSS Flexbox and Grid, ensuring the app works seamlessly across mobile, tablet, and desktop devices.</li>
        <li><strong>Interactive UI</strong>: Hover effects, transitions, and dynamic rendering bring the menu to life.</li>
      </ul>

      <br><u><h2>Tools and Technologies</h2></u>
      <p><strong>HTML5</strong> → for structuring the app.<br>
         <strong>CSS3</strong> → for styling, responsive design, and smooth hover effects.<br>
         <strong>Vanilla JavaScript (ES6+)</strong> → for searching, filtering, and handling user interactions.</p>

      <br><u><h2>Lessons Learned</h2></u>
      <p>Building this project gave me hands-on experience in:</p>
      <ul>
        <li>1. Working with <strong>arrays and objects</strong> to represent food items.</li>
        <li>2. Using <strong>JavaScript events</strong> (like <code>keyup</code> and <code>click</code>) to make the app interactive.</li>
        <li>3. Applying <strong>responsive design principles</strong> to ensure usability across devices.</li>
        <li>4. Enhancing user experience with <strong>simple animations and clean design patterns</strong>.</li>
      </ul>

      <br><u><h2>Conclusion</h2></u>
      <p>The Local Food Menu App shows that you don’t always need complex frameworks to build interactive applications. With just <strong>HTML, CSS, and Vanilla JavaScript</strong>, it’s possible to design <strong>functional, user-friendly, and responsive web apps</strong> that solve real-world problems.</p>
    `
  },
  3: {id:3,
    title: "From Idea to Product: How I Built My Real-Time Attendance System",
    content: `
      <p>When I set out to build my <strong>Real-Time Attendance System</strong>, my goal was to solve a practical problem: the inefficiency and inaccuracy of manual attendance in classrooms. Traditional paper-based methods waste time and can easily be manipulated, while digital spreadsheets still require manual effort. I wanted to design a solution that would be <strong>automated, secure, and scalable</strong>.</p>

      <br><u><h2>The Idea</h2></u>
      <p>The idea started as part of my thesis project. I envisioned a <strong>face-recognition-powered attendance system</strong> that could identify students in real-time and log their presence instantly. This meant combining <strong>computer vision, backend frameworks, and cloud storage</strong> to create a system that was both reliable and easy to use.</p>

      <br><u><h2>The Build Process</h2></u>
      <h3>1. Face Recognition with OpenCV</h3>
      <p>Using Python’s <strong>OpenCV</strong> library, I implemented facial detection and recognition. This allowed the system to capture faces through a webcam and match them against a database of registered students.</p>

      <h3>2. Web Application with Flask</h3>
      <p>To provide a user interface, I built a lightweight <strong>Flask web app</strong>. The app handled student registration, photo uploads, and real-time recognition.</p>

      <h3>3. Database Integration with Supabase</h3>
      <p>For cloud storage and scalability, I integrated <strong>Supabase</strong>. It stored student data, face encodings, and attendance logs securely, making it easy to access and update records from anywhere.</p>

      <h3>4. Automation</h3>
      <p>Whenever a face was verified, the system automatically logged the student’s name, registration number, and timestamp eliminating human error.</p>

      <br><u><h2>Tools and Technologies</h2></u>
      <ul>
        <li><strong>Python</strong>: Core programming language</li>
        <li><strong>OpenCV</strong>: Face detection and recognition</li>
        <li><strong>Flask</strong>: Backend web framework</li>
        <li><strong>Supabase</strong>: Cloud-based database and authentication</li>
        <li><strong>CSV/Database Logging</strong>: For attendance history</li>
      </ul>

      <br><u><h2>Challenges and Lessons Learned</h2></u>
      <ul>
        <li><strong>Accuracy</strong>: Training the face recognition to work in different lighting conditions required careful testing.</li>
        <li><strong>Scalability</strong>: Designing the system to work beyond a single classroom meant choosing the right cloud database.</li>
        <li><strong>User Experience</strong>: Building a simple UI in Flask ensured teachers could use the system without technical knowledge.</li>
      </ul>

      <br><u><h2>The Outcome</h2></u>
      <p>The result was a <strong>real-time, web-based attendance platform</strong> that was efficient, secure, and easy to deploy. It cut down attendance time drastically, improved accuracy, and provided a reliable digital record of student presence.</p>

      <br><p>In Conclusion, What started as an academic project turned into a <strong>practical solution with real-world impact</strong>. This attendance system demonstrates how combining <strong>AI (face recognition), web frameworks, and cloud databases</strong> can solve everyday problems at scale.</p>
    
    `
  },

4: {id:4,
    title: "Building a Developer Portfolio That Stands Out",
    content:`
    <p>In today’s competitive tech world, I’ve learned that having a strong developer portfolio is essential. For me, it’s not just a collection of projects, 
    it’s a reflection of my skills, creativity, and how I solve problems. Whether you’re just starting out or have years of experience, a well-crafted portfolio can be the difference between getting noticed and getting lost in the crowd. </p>
    
    <br> <h2><strong><i><u>Clean and Intuitive Design</u></i></strong></h2>
    <p>When someone visits my portfolio, I want their experience to be seamless. That’s why I focus on a clean and responsive design 
    that makes it easy to explore my work. Simple layouts, consistent colors, and clear typography help my projects shine without distraction. I believe that good design is about making information easy to find, not overwhelming visitors.</p>
    
    <h3><strong><i><u>Showcasing My Best Work</u></i></strong></h3>
    <p>Not every project makes the cut. I choose to highlight projects that demonstrate both my technical skills and my problem-solving abilities. Each project comes with live demos, GitHub links, and a breakdown of my contributions, 
    including the challenges I faced and the technologies I used. I want people to see , how I think, how I approach problems, and what I’m capable of building.</p>

    <h3><strong><i><u>Highlighting My Skills and Tools</u></i></strong></h3>
    <p>In addition to projects, I make sure to include a dedicated section for my skills. I make it clear which languages, frameworks, and tools I’m proficient in and provide examples of how I’ve applied them. 
    This helps anyone visiting my portfolio quickly understand where my strengths lie and the kind of work I’m equipped to handle.</p>

    <h3><strong><i><u>Telling My Story</u></i></strong></h3>
    <p>My portfolio isn’t just about code, it’s about me. In my About Me section, I share my journey, my passion for development, and what motivates me to keep learning. 
    I want visitors to connect with me as a person, not just as a set of skills.</p>

    <h3><strong><i><u>Keeping It Fresh</u></i></strong></h3>
    <p>Technology evolves fast, and so does my portfolio. I continuously update it with new projects, achievements, and contributions to reflect my growth. 
    A portfolio that stays current shows that I’m committed to learning and staying ahead in my field.</p>

    <h3><strong><i><u>Adding Credibility</u></i></strong></h3>
    <p>Whenever possible, I include testimonials or mini case studies to show the impact of my work. 
    These real-world examples give visitors tangible evidence of what I can achieve.</p>

    <h3><strong><i><u>Performance and Accessibility</u></i></strong></h3>
    <p>As a developer, I pay attention to the technical details too. My portfolio is optimized for fast loading, mobile responsiveness, and accessibility, ensuring a smooth experience for everyone who visits.</p>

    <br><p><i>In Conclusion,</i> For me, building a developer portfolio is about more than showcasing projects, it’s about telling my story, demonstrating my skills, and highlighting my problem-solving abilities. 
    By carefully curating my work, maintaining a clean design, and keeping everything up to date, my portfolio becomes more than a website, 'it becomes a reflection of me as a developer, ready to open doors to new opportunities.</p>
    `
    }
};

// Get article ID from the URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Display article
if (articles[id]) {
  document.getElementById("article-content").innerHTML = `
  <h1 class="text-4xl font-bold mb-6 text-gray-900">${articles[id].title}</h1>
  ${articles[id].content}
`;

} else {
  document.getElementById("article-content").innerHTML = `
    <h1>Article Not Found</h1>
    <p>Sorry, this article doesn’t exist.</p>
  `;
}
