import { useEffect, useState } from "react";

export default function TodoList() {
  const [mikkel, setMikkel] = useState("");

  useEffect(() => {
    fetch("http://localhost:6767")
      .then((response) => response.text())
      .then((data) => setMikkel(data));
  }, []);

  console.log(mikkel);

  /**
   * 
   * @param {FormData} formData 
   */
  function submitHandler(formData) {

    
    

    fetch("http://localhost:6767/indhold/sigma", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sejText: formData.get("sejText")
      })
    });
  }

  return (
    <div className="wrapper">
      <form action={submitHandler}>
        <p>sæt text ind for at være cool</p>
        <input
          placeholder="sej text"
          required
          type="text"
          name="sejText"
          id="sejText"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
