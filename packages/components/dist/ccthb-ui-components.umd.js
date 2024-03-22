(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@ccthb-ui/shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@ccthb-ui/shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.CCTHBUiComponents = {}, global.vue, global.shared));
})(this, function(exports2, vue, shared) {
  "use strict";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "button",
    props: {
      text: { default: "World" }
    },
    setup(__props) {
      const props = __props;
      function clickHandler() {
        shared.hello(props.text);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: "openx-button",
          onClick: clickHandler
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      };
    }
  });
  const _hoisted_1 = ["value"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "input",
    props: {
      modelValue: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      function inputHandler(e) {
        const value = e.target.value;
        emit("update:modelValue", value);
        shared.hello(value);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("input", {
          class: "openx-input",
          type: "text",
          value: _ctx.modelValue,
          onInput: inputHandler
        }, null, 40, _hoisted_1);
      };
    }
  });
  exports2.Button = _sfc_main$1;
  exports2.Input = _sfc_main;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
