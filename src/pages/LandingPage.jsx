import HabitTrackerImage from "../assets/habit_tracker_phone.svg";
import Navbar from "../components/Navbar";
export default function LandingPage() {
  return (
    <section className="hero--section">
      <Navbar />
      <div className="hero--landing">
        <h1 className="hero--heading">
          <span className="span-quest">QUEST</span> FOR THE BETTER YOU
        </h1>
        <img src={HabitTrackerImage} alt="habit tracker phone" />
      </div>
    </section>
  );
}
