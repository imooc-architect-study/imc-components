<template>
  <div
    @click.prevent="handleClick"
    :style="styleProps"
    class="l-shape-component"
    :draggable="false"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useStylePick from "@/hooks/use-style-pick";
import useComponentClick from "@/hooks/use-component-click";
import {
  transformToComponentProps,
  isEditingProp,
  shapeDefaultProps,
} from "@/config/default-props";
import { without } from "lodash-es";
const defaultProps = transformToComponentProps(
  shapeDefaultProps,
  isEditingProp
);

const pickStyles = without(Object.keys(shapeDefaultProps));

export default defineComponent({
  name: "LShape",
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
