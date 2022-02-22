export default function Form(props) {
  return (
    <form onSubmit={e => props.onSubmit(e)}>
      <label htmlFor="tx_text">Message for JSON:</label>
      <input name="tx_text" type="text" required/>
      <button type="submit">Submit</button>
    </form>
  );
}
