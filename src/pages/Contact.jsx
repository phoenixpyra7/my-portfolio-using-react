import Basic from '../components/Basic';
import Card from '../components/Card';


// const handleBlur = (e) => {
//   console.log(e);
// };
export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <Card />
      {/* <div> */}
      {/* Think I should remove the value so its consumed after submit */}
    {/* <input onBlur={handleBlur}  id="email" name= "email" /> 
    </div> */}
    {/* <div> */}
      {/* Think I should remove the value so its consumed after submit */}
    {/* <input onBlur={handleBlur} id="password" name= "password" />
    </div> */}
      <Basic />
      <p>
        Please enter your name, email, and a message.
      </p>
    </div>
  );
}
