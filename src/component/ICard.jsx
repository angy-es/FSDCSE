function ICard(props) {
  let branch="cse12";
  let college="ABESEC";
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      display: "inline-block",
      
    }}>
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300"
        alt="Profile"
        width="100"
        height="100"
        style={{ borderRadius: "50%" }}
      />
      <div style={{ marginTop: "10px" }}>
        <h2 style={{ color: "red" }}>
        Welcome to React using Vite
      </h2>
      <h2>Name: {props.name}</h2>
      <h2>Branch: {branch}</h2>
      <h2>College: {college}</h2>

      </div>
      

      
    </div>
  );
}

export default ICard;