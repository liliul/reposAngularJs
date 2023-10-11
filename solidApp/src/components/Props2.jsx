const Parent = () => (
    <section>
      <Label greeting="Props2 () => Sonic">
        <div>Game</div>
      </Label>
    </section>
  );
  
  const Label = (props) => (
    <>
      <div>{props.greeting}</div>
      {props.children}
    </>
  );

export default Parent;