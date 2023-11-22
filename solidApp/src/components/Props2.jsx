/**
 * @function
 * @returns componente Label messagem dinamica com props
*/
const Parent = () => (
    <section>
      <Label greeting="Props2 () => Sonic">
        <div>Game</div>
      </Label>
    </section>
  );


/**
 * @function
 * @param {string} props
 *
 * @returns feature props no solidjs
*/
  const Label = (props) => (
    <>
      <div>{props.greeting}</div>
      {props.children}
    </>
  );

export default Parent;
