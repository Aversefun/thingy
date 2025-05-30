/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    let code = prompt("Eval:");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    eval(code);
  }
});

/// onerror_thing.js
window.addEventListener("error", event => {
  let name = event.name;
  name = name === undefined ? "Error" : `${name}`;
  let msg = event.message;
  msg = msg === undefined ? "" : `${msg}`;
  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }
  return `${name}: ${msg}`;
});
