<script setup lang="ts">
import {} from 'vue'

defineProps({
  isShow: {
    type: Boolean,
    default: false,
    required: false
  }
})
</script>
<template>
  <div class="demo-equal">
    <div class="container">
      <div class="justify">
        <i>1</i>
        <i>2</i>
        <i>3</i>
        <i>4</i>
        <i>5</i>
        <!--[if lte IE 7]> <b></b><!
        [endif]--><!-- 兼容不支持伪元素的 ie678 -->
      </div>
      <template v-if="isShow">
        <div class="justify">
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
        </div>
        <div class="justify">
          <i>1</i>
          <i>2</i>
          <i>3</i>
        </div>
        <div class="justify">
          <i>1</i>
          <i>2</i>
        </div>
        <div class="justify">
          <i>1</i>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-equal {
  .container {
    width: 400px;
    margin: 50px auto 0;
  }

  .justify {
    position: relative;
    width: 100%;
    height: 24px;
    text-align: justify;
    margin-bottom: 20px;
    i {
      width: 24px;
      line-height: 24px;
      display: inline-block;
      text-align: center;
      background: #333;
      color: white;
      border-radius: 50%;
      overflow: hidden;
      font-style: normal;
    }

    &:after {
      content: '';
    }

    &:after,
    & b {
      display: inline-block;
      position: relative;
      top: -28px;
      // *top: -9px;
      height: 1px;
      line-height: 0;
      width: 100%;
      background: #333;
      z-index: -1;
      // *zoom: 1;
    }
  }
}
</style>
