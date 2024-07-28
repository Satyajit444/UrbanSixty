import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { show, hide, toggle } from "@/provider/redux/others/toggleVisibility";

const MyComponent = () => {
  const dispatch = useDispatch();
  const visibility = useSelector((state: any) => state.visibility);

  const handleShow = (id: string) => {
    dispatch(show(id));
  };

  const handleHide = (id: string) => {
    dispatch(hide(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggle(id));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleShow("section1")}>Show</button>
        <button onClick={() => handleHide("section1")}>Hide</button>
        <button onClick={() => handleToggle("section1")}>Toggle</button>
        {visibility["section1"] && <div>This content is visible</div>}
      </div>
      <div>
        <button onClick={() => handleShow("section2")}>Show</button>
        <button onClick={() => handleHide("section2")}>Hide</button>
        <button onClick={() => handleToggle("section2")}>Toggle</button>
        {visibility["section2"] && <div>This content is visible one</div>}
      </div>
      <div>
        <button onClick={() => handleShow("section3")}>Show</button>
        <button onClick={() => handleHide("section3")}>Hide</button>
        <button onClick={() => handleToggle("section3")}>Toggle</button>
        {visibility["section3"] && <div>This content is visible two</div>}
      </div>
      <div>
        <button onClick={() => handleShow("section4")}>Show</button>
        <button onClick={() => handleHide("section4")}>Hide</button>
        <button onClick={() => handleToggle("section4")}>Toggle</button>
        {visibility["section4"] && <div>This content is visible three</div>}
      </div>
    </div>
  );
};

export default MyComponent;
