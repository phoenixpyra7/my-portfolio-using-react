import avatar1 from "../assets/images/avatar1.png";

// created an about me section with an image called avatar for ease of naming a class and separating it from the project images.
export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img className="avatar" src={avatar1} alt="photo of author" />
      <p className="about-me">
        My name is Sara but everyone knows me as Seven. I am a student at The
        University of North Carolina at Charlotte, studying Full Stack Web
        Developement. How did I get here? Well, I was at a point where it felt
        like something was missing from my life... After some serious soul
        searching, I decided it was time to persue my dreams. Without further
        adieu, I left my career of 15 years and put all my time and energy into
        school. Now, I'm a proud Full Stack Web Developer with an extensive
        background in design, the financial industry and corporate acumen, who's
        effective at combining creativity and problem solving to develop
        user-friendly applications. I also have a passion for art and philosophy
        and look forward to spreading my wings across the industry.
      </p>
    </div>
  );
}
