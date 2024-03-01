import './App.css';
import Card from './components/Card.jsx';


const App = () => {
  return (
    <div className="App">
      <h1>A Small Roadmap for  CompSci</h1>
      <h2>Helping students learn the different career paths they can pursue. </h2>
      
      <div className="card-container">
        <Card
          title="Front End"
          description="Gain knowledge of user interface and user experience design principles."
          link="https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer"
        />
        <Card
          title="Back End"
          description="Build RESTful APIs for communication between front-end and back-end systems."
          link="https://www.codecademy.com/resources/blog/what-is-back-end/"
        />
        <Card
          title="Cybersecurity"
          description="Based on concepts of firewalls, VPNs, and encryption algorithms."
          link="https://www.codecademy.com/resources/blog/how-to-get-into-cybersecurity/"
        />
        <Card
          title="Data Analytics"
          description="Learn foundational statistical concepts, probability theory, and managing databases."
          link="https://www.geeksforgeeks.org/data-analytics-tools/ "
        />
        <Card
          title="Game Development"
          description="Understand game design principles, mechanics, and gameplay balancing."
          link="https://www.codecademy.com/resources/blog/how-to-break-into-game-development-industry/"
        />
        <Card
          title="Mobile Applications"
          description="Master iOS development with Swift or Android development with Java/Kotlin."
          link="https://www.geeksforgeeks.org/top-mobile-app-development-frameworks/"
        />
        <Card
          title="Artificial Intelligence"
          description="Dive deeper into AI concepts like natural language processing, computer vision, and reinforcement learning."
          link="https://www.geeksforgeeks.org/top-artificial-intelligence-frameworks/"
        />
        <Card
          title="Cloud Computing"
          description="Explore cloud platforms like AWS, Azure, or Google Cloud Platform for scalable and reliable computing."
          link="https://www.ibm.com/topics/cloud-computing"
        />
        <Card
          title="Information Technology"
          description="Learn about managing operating systems, network services, and system security."
          link="https://www.lifewire.com/introduction-information-technology-817815"
        />
      </div>

      <h1>Resume and Interview Resources</h1>

      <div className="resources-container"> 
        <Card
          title="LeetCode"
          description="Enhance your skills in data structures and algorithms for technical interviews."
          link="https://leetcode.com/"
        />

        <Card
          title="Overleaf"
          description="Create professional resumes and documents."
          link="https://www.overleaf.com/"
        />
      </div>
    </div>
  )
}

export default App
