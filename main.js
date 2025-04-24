import LinkedList from "../Project-Odin/LinkedList.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();
const object = { key: "Carlos", value: "Fredy" };
list.append(object);
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.at(0);
list.remove("turtle");
list.contains("cat");
list.toString();
