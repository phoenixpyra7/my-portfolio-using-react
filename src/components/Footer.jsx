import gitHubIcon2 from "../assets/images/githubicon2.png";
import linkedInIcon from "../assets/images/linkedinicon.png";
import seven3 from "../assets/images/seven3.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Created by Seven </p>
      <img className="seven3" src={seven3} alt="custom icon" />

      <a
        href="www.linkedin.com/in/sara-neubert"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gitHubIcon2} alt="github link" />
      </a>
      <a
        href="https://github.com/phoenixpyra7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedInIcon} alt="linkedin link" />
      </a>
    </footer>
  );
}
