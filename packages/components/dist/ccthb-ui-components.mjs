import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
import { hello } from "@ccthb-ui/shared";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: {
    text: { default: "World" },
    variant: {}
  },
  setup(__props) {
    const props = __props;
    function clickHandler() {
      hello(props.text);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "openx-button",
        onClick: clickHandler
      }, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      hello(value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        class: "openx-input",
        type: "text",
        value: _ctx.modelValue,
        onInput: inputHandler
      }, null, 40, _hoisted_1);
    };
  }
});
export {
  _sfc_main$1 as Button,
  _sfc_main as Input
};
