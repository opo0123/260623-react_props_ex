function Button({ text, onClick }) {
  return (
    <>
      <button className="btn" onClick={onclick}>
        {text}
      </button>
    </>
  );
}
export default Button;
