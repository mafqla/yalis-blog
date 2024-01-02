<script setup lang="ts">
const frontEndCssKeywords = [
  'Flexbox',
  'Grid Layout',
  'Animations',
  'Transitions',
  'Box Model',
  'Selectors',
  'Media Queries',
  'CSS Variables',
  'Transforms',
  'Positioning',
  'Typography',
  'Colors',
  'Gradients',
  'Shadows',
  'Filters'
]
</script>
<template>
  <div class="css-demo">
    <ul>
      <li v-for="item in frontEndCssKeywords">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$count: 20;
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}
@function randomColor() {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}
.css-demo {
  width: 100%;
  height: 100%;
  display: flex;

  ul {
    position: relative;
    margin: auto;
    display: flex;
    gap: 4px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 660px;
    cursor: pointer;
  }
  li {
    flex-shrink: 0;
    height: 30px;
    border-radius: 30px;
    text-align: center;
    line-height: 30px;
    list-style: none;
  }

  @for $i from 1 to $count {
    li:nth-child(#{$i}) {
      width: #{randomNum(110, 90)}px;
      background: randomColor();
    }
  }

  ul:hover {
    li {
      opacity: 0;
    }
    @for $i from 1 to $count {
      li:nth-child(#{$i}) {
        animation: falldown
          0.3s
          cubic-bezier(0.43, 0.02, 0.64, 1.5)
          #{50 *
          ($count - $i) +
          (random(150) - random(300))}ms
          forwards;
      }
    }
  }
  @keyframes falldown {
    0% {
      transform: translateY(-180px) scaleX(0.1) scaleY(0.3);
      opacity: 1;
    }
    20% {
      transform: translateY(-200px) scaleX(0.6) scaleY(0.3);
    }
    75% {
      transform: translateY(0) scaleX(0.6) scaleY(0.3);
    }
    100% {
      transform: translateY(0) scaleX(1) scaleY(1);
      opacity: 1;
    }
  }
}
</style>
