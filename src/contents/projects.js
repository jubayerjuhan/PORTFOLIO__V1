import myinstructorImage from "../assets/myinstructor.png";

const projects = [
  {
    id: 3,
    title: "My Instructor - Driving Instructor Searching Platform",
    description: `"My Instructor" Is an Online Driving Instructor Searching Platform Based On Australia. You Can Get Driving Instructors In Your Suburb By Just Entering The Name Of The Suburb. Then You Can Book The Instructors.`,
    image: myinstructorImage,
    projectLink: "https://myinstructor.netlify.app",
    companyLink: "https://myinstructor.com.au",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "MongoDb",
      "Express.js",
      "Stripe",
      "Sass",
      "Node.js",
      "Google Cloud API",
    ],
    githubLink: [
      {
        name: "Client",
        link: "https://github.com/jubayerjuhan/MyInstructor_Client",
      },
      {
        name: "Server",
        link: "https://github.com/jubayerjuhan/MyInstructor_Server",
      },
    ],
    features: [
      "A User Can Register, Login To There Account as A Learner",
      "Instructors Can Login To There Account",
      "People Can Apply To Become an Instructor",
      "Users Can Search For Instructor With There Suburbs Name",
      "Users Can Book a Instructor For Specifc Hours",
      "Full Autonomous Booking System, Users Will Just Pick Date and Time",
      "Check Future Availability Of Instructors",
      "Sort Instructors With Language",
      "Reviews After Booking Complete",
      "Purchase Credit to Book Instructor With CREDIT CARD, GPAY (STRIPE)",
      "DASHBOARD For Users To Check Their Current Credit and Bookings",
      "DASHBOARD For Instructor To Manage There Bookings",
      "ADMIN PANEL DASHBOARD To Run CRUD Operations of Bookings, User, Instructors, Suburbs",
    ],
  },
  {
    id: 1,
    title: "Elliye Ecommerce Shop",
    description:
      "Elliye is an eCommerce store which has been built with the help of react.js in the front end, and express.js, node.js being used at the backend server. MongoDB being used as the database. Redux is being used as the state management library in this app",
    image:
      "https://res.cloudinary.com/juhan-cloud/image/upload/v1642655549/Portfolio%20V1/elliye_nt0gtg.png",
    projectLink: "https://elliye.netlify.app/",
    technologies: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Sass",
      "MongoDB",
      "Stripe API",
    ],
    githubLink: [
      {
        name: "Client",
        link: "https://github.com/jubayerjuhan/Elliye_Client",
      },
      {
        name: "Server",
        link: "https://github.com/jubayerjuhan/Elliye_Server",
      },
    ],
    features: [
      "Uses can create account, login and manage their account",
      "Fully mobile and tablet responsive",
      "Users Can Search The Product and Get Precised Result",
      "Users Can Add Product To Cart",
      "Users Can See Product Details, Description and Review",
      "Checkout With STRIPE Payment Gateway",
      "Users Will Be Able To Review Product After Purchase",
      "Show All User Orders",
      "ADMIN PANEL for Running CRUD Operations on Users, Orders, Products and Reviews",
    ],
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A Netflix Clone Project, Where you can watch the trailer of your favorite movies and series. The Trailer Is Directly Coming From reversed engineered Youtube API and the Movie and Series Data is Fetched From The TMDb API.",
    image:
      "https://res.cloudinary.com/juhan-cloud/image/upload/v1642655760/Portfolio%20V1/netflixclone_u3uta2.png",
    projectLink: "https://netflix-clone-juhan-26.netlify.app",
    technologies: [
      "React",
      "Context API",
      "TMDb API",
      "Sass",
      "Google Cloud API",
    ],
    githubLink: [
      { name: "Client", link: "https://github.com/jubayerjuhan/Netflix_Clone" },
    ],
    features: [
      "A User Can Login To Their Account With Email and Google AUTH",
      "Users Will See Movies and Series From Diffrent Category",
      "Users will be presented with show details and a youtube trailer of that exact show when they will click on the show's thumbnail",
      "Users Can See Trailer of That Spacific Movies and Series, Used Reverse Engineering to Get Videos From Youtube",
      "Users Will Be Able To Add Movies and Series To Their Fav. List",
    ],
  },
];

export default projects;
