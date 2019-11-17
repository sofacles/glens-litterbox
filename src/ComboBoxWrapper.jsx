import React, { useRef } from "react";
import "@vaadin/vaadin-combo-box/vaadin-combo-box.js";

const ComboBoxWrapper = props => {
  const vaadin = useRef(null);

  customElements.whenDefined("vaadin-combo-box").then(function() {
    const comboBox = document.querySelector("vaadin-combo-box");

    comboBox.addEventListener("value-changed", function() {
      props.valueChanged(vaadin.current.value);
    });

    comboBox.addEventListener("custom-value-set", function(e) {
      // Prevents setting the value property automatically.
      e.preventDefault();

      vaadin.current.value = e.detail;
      props.valueChanged(e.detail);
    });

    vaadin.current.items = props.values;
    vaadin.current.value = props.values[0];
  });

  return (
    <div>
      <vaadin-combo-box
        ref={vaadin}
        label="Element"
        allow-custom-value
      ></vaadin-combo-box>
    </div>
  );
};

export default ComboBoxWrapper;
