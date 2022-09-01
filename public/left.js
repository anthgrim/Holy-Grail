function Left(props) {
  return (
    <>
      <aside>
        <PlusMinus section="left" handle={props.handle} />
        <div className="section">Aside: {props.data.left}</div>
        <Data data={props.data} />
      </aside>
    </>
  );
}
