<template>
  <component
    :is="tag"
    @click.prevent="handleClick"
    :style="styleProps"
    class="l-text-component"
  >
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useStylePick from "@/hooks/use-style-pick";
import useComponentClick from "@/hooks/use-component-click";
import {
  textDefaultProps,
  transformToComponentProps,
  isEditingProp,
} from "@/config/default-props";
import { without } from "lodash-es";
const extraProps = {
  tag: {
    type: String,
    default: "p",
  },
  ...isEditingProp,
};
const defaultProps = transformToComponentProps(textDefaultProps, extraProps);

const pickStyles = without(
  Object.keys(textDefaultProps),
  "actionType",
  "url",
  "text"
);

export default defineComponent({
  name: "LText",
  props: {
    ...defaultProps,
  },
  setup(props) {
    const styleProps = useStylePick(props, pickStyles);
    const handleClick = useComponentClick(props);
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
