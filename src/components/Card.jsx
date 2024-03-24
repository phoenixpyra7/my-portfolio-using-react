// declared an object called styles for card and heading styles

const styles = {
    card: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#3f51b5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };
  
  // In `Card`, we can assign a style from an object by using curly braces
  // We are assigning the card, heading, and content all from our `style` object
  function Card() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}> This is a Heading</div>
        <div style={styles.content}>
          `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.?`
        </div>
      </div>
    );
  }
  
  export default Card;
  