import "./styles.css";

export default function App() {
  const click = () => {
    var text = document.getElementById("cop");

    let para = document.getElementById("copyText");

    console.log(text);

    /* Select the text field */
    text?.select();

    if (document?.execCommand("copy")) {
      console.log("clicked");
      para.style.opacity = 1;
      para.style.visibility = "visible";
      para.style.transform = "translateY(5px)";
    }
    /* Copy the text inside the text field */
    document?.execCommand("copy");

    para.innerHTML = `${text.value} is copied`;

    let timeout = setTimeout(() => {
      para.style.transform = "translateY(-5px)";
      para.style.opacity = 0;
      para.style.visibility = "hidden";
    }, 5000);

    console.log(timeout);
  };

  return (
    <div className="App">
      <input
        id="cop"
        style={{
          cursor: "pointer",
          border: "none"
        }}
        onClick={click}
        value="Hello CodeSandbox"
      />
      <p id="copyText"></p>
    </div>
  );
}
