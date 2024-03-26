
import snPortfolio from "../assets/images/snPortfolio.png";
import svgLogo from "../assets/images/svgLogo.png";
import employeeTracker from "../assets/images/employeetracker.png";
import eCommerce from "../assets/images/ecommerce1.png";
import socialMedia from "../assets/images/socialmedia1.png";
import proWebApp from "../assets/images/prowebapp.png";

const projects = [
  {
    title: "Sara Neubert's Portfolio",
    description:
      "This is a basic portfolio website that I have created for myself, including work that I have already completed and space for projects in the works. Content code has been organized, consolidated, and updated to meet accessibility standards.",
    image: snPortfolio,
    github: "https://github.com/phoenixpyra7/Sara-Neubert-s-Portfolio",
    deployed: "https://phoenixpyra7.github.io/Sara-Neubert-s-Portfolio/",
  },
  {
    title: "SVG Logo Maker",
    description:
      "This SVG logo generator allows you to select from 1-3 characters, select a shape (square, circle or triangle), and select the shape color and font color. The generated logo will then be saved with the title comprised of the characters which were used to create it.",
    image: svgLogo,
    github: "https://github.com/phoenixpyra7/svg-logo-maker",
    deployed: "https://www.awesomescreenshot.com/video/24002555?key=570364ce38a77c88019ee5cabac4b364",
  },
  {
    title: "Employee Tracker",
    description:
      "This is a simple command-line interface CMS (content management system) for a company's employee database. It allows it's user to view all employees, roles and departments, as well as add new employee's, create roles and departments or simply update a current employee's role.",
    image: employeeTracker,
    github: "https://github.com/phoenixpyra7/employee-tracker",
    deployed: "https://www.awesomescreenshot.com/video/25681075?key=cd0510c3e42eeef5b647b1b9c3c8b830",
  },
  {
    title: "ORM: E-Commerce Backend",
    description:
      "This is a functional Express.js API with Sequelize for database management. Once you set up and run the API locally, you can interact with it using Insomnia or HTTPie , and perform CRUD operations.",
    image: eCommerce,
    github: "https://github.com/phoenixpyra7/orm-e-commerce-back-end",
    deployed: "https://www.awesomescreenshot.com/video/24586854?key=b578152c7df7705b97e58c7cb1f25c44",
  },
  {
    title: "Social Network API Using No-SQL",
    description:
      "This is an API for social networking. Users can add and delete friends, share their thoughts and react to their friends thoughts. This application uses Express.js, MongoDB and Mongoose.",
    image: socialMedia,
    github: "https://github.com/phoenixpyra7/social-network-api-using-nosql",
    deployed: "https://www.awesomescreenshot.com/video/25864816?key=0af7602b2f0c740bcbdb75212ab9ea2b",
  },

  {
    title: "PWA Progressive Web App Text Editor",
    description:
      "This is a text editor application that runs in the browser and can also function while offline. It can be saved as an icon on the desktop. It has a number of data persistence techniques that serve as redundancy in case one of the options are not supported by the browser.",
    image: proWebApp,
    github: "https://github.com/phoenixpyra7/pwa-progressive-web-app-text-editor",
    deployed: "https://fast-chamber-67222-d483a0469c0d.herokuapp.com/",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h2>Check Out My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="projectTile" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <div className="projectLinks">
              <a href={project.github}>GitHub</a>
              <a href={project.deployed}>Deployed Link or Video</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
