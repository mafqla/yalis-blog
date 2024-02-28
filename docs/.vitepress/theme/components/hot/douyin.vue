<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import hot_boom from './icon/hot/hot_boom.png'
import hot_first from './icon/hot/hot_first.png'
import hot_hot from './icon/hot/hot_hot.png'
import hot_exclusive from './icon/hot/hot_exclusive.png'
import hot_new from './icon/hot/hot_new.png'

import hotup from './icon/hot/up.png'
import hot_top1 from './icon/hot/hot_top1.png'
import hot_top2 from './icon/hot/hot_top2.png'
import hot_top3 from './icon/hot/hot_top3.png'

import { hot, entertainment, society, challenge } from '../../api/douyin'

const listData = ref([]) as any
const imgTypeToSrc: { [key: number]: string } = {
  4: hot_boom,
  5: hot_first,
  3: hot_hot,
  8: hot_exclusive,
  1: hot_new
}
const getTagSrc = (id: number) => {
  return imgTypeToSrc[id]
}

//处理1-3名的图片路径
const getImgSrc = (id: number) => {
  if (id === 1) {
    return hot_top1
  } else if (id === 2) {
    return hot_top2
  } else if (id === 3) {
    return hot_top3
  }
}

const titleItems = ['抖音热榜', '娱乐榜', '社会榜', '挑战榜']
const selectedIndex = ref(0)

const selectItem = (index: number) => {
  selectedIndex.value = index
}

const height = 660

watchEffect(async () => {
  if (selectedIndex.value === 0) {
    listData.value = (await hot()).data.word_list
  } else if (selectedIndex.value === 1) {
    listData.value = (await entertainment()).data.word_list
  } else if (selectedIndex.value === 2) {
    listData.value = (await society()).data.word_list
  } else if (selectedIndex.value === 3) {
    listData.value = (await challenge()).data.word_list
  }

  // console.log(listData.value)
})
</script>
<template>
  <div class="hot-item" :style="{ height: `${height}px` }">
    <div class="hot-item-main">
      <div class="hot-item-blank"></div>
      <div class="hot-item-content">
        <div class="hot-item-content-title">
          <div
            v-for="(item, index) in titleItems"
            :key="index"
            :class="{
              'hot-item-content-title-item': true,
              selected: selectedIndex === index
            }"
            @click="selectItem(index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="hot-itme-line"></div>

        <div class="hot-item-list">
          <ul class="hot-item-list-content hotChangableList">
            <template v-for="(item, index) in listData" :key="item.position">
              <li class="hot-item-list-content-item">
                <div class="hot-item-list-content-text listStyle">
                  <img :src="hotup" alt="" v-if="item.hot_value === 0" />
                  <img
                    :src="getImgSrc(item.position)"
                    alt=""
                    v-if="item.position <= 3"
                  />

                  <div class="hot-box-num" v-if="item.position > 3">
                    {{ item.position }}
                  </div>
                </div>
                <div class="hot-item-list-content-item-title-content">
                  <div class="custom-link">
                    <a
                      :href="`https://www.douyin.com/hot/${item.sentence_id}`"
                      class="custom-title active"
                      target="_blank"
                    >
                      <h3>{{ item.word }}</h3>
                    </a>
                    <img :src="getTagSrc(item.label)" alt="" />
                  </div>

                  <div class="hot-du" v-show="item.hot_value !== 0">
                    <span class="hot-num">{{
                      item.hot_value >= 10000
                        ? (item.hot_value / 10000).toFixed(1) + '万'
                        : item.hot_value
                    }}</span>
                    <span>热度</span>
                  </div>
                </div>

                <!-- <div
                  class="hot-item-content-show"
                  style="text-align: center; width: 202px"
                >
                  {{ item.word }}
                </div> -->
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a:hover {
  text-decoration: none;
}
//宽度小于1200px隐藏
@media (max-width: 1200px) {
  .hot-item {
    display: none;
  }
}
.hot-item {
  width: 400px;
  padding-top: 100px;

  .hot-item-main {
    background-color: var(--color-bg-b1);

    border: 0.5px solid var(--color-line-l3);
    border: 0.5px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    box-shadow: 0 0 0.5px 0 var(--color-secondary-default);

    overflow: hidden;
    position: relative;
    width: 100%;

    .hot-item-blank {
      padding-bottom: 212.5%;
      width: 100%;
    }

    .hot-item-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;

      .hot-item-content-title {
        display: flex;
        height: 46px;
        justify-content: space-between;
        padding: 0 16px;
        width: 100%;

        .hot-item-content-title-item {
          align-items: center;

          color: var(--color-text-t2);

          cursor: pointer;
          display: flex;
          font-family: PingFang SC;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          height: 100%;
          line-height: 22px;
        }

        .hot-item-content-title-item.selected {
          border-bottom: 3px solid #fe2c55;
          border-top: 3px solid transparent;
          color: var(--color-text-t0);

          font-weight: 600;
        }
      }

      .hot-itme-line {
        background-color: rgba(22, 24, 35, 0.06);
        // background-color: rgba(255, 255, 255, 0.04);
        display: block;
        height: 1px;
        min-height: 1px;
        position: relative;
        width: 100%;
      }

      .hot-item-list {
        flex: 1 1;
        margin-right: 4px;
        overflow: scroll;
        overflow-x: hidden;

        .hot-item-list-content {
          .hot-item-list-content-item {
            display: flex;
            overflow: hidden;
            padding-bottom: 18px;
            position: relative;
            width: 100%;
            align-items: center;

            &:hover {
              h3 {
                color: #ff2c55 !important;
              }

              .hot-item-content-show {
                display: block;
              }
            }
            .hot-item-list-content-text {
              color: var(--color-text-t3);

              flex-shrink: 0;
              font-size: 21px;
              font-weight: 700;
              line-height: 24px;
              margin-right: 4px;
              text-align: center;
              width: 24px;

              img {
                height: 24px;
                width: 24px;
              }

              .hot-box-num {
                border-radius: 50%;
                color: var(--color-text-t3);
                display: flex;
                font-size: 18px;
                height: 24px;
                justify-content: center;
                line-height: 24px;
                width: 24px;
              }
            }
            // .hot-item-list-content-text.listStyle {
            // }

            .hot-item-list-content-item-title-content {
              overflow: hidden;
              .custom-link {
                align-items: center;
                display: flex;
                font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
                font-weight: 500;
                padding-bottom: 4px;
                .custom-title {
                  position: relative;
                  h3 {
                    color: var(--color-text-t1);

                    font-size: 16px;
                    line-height: 24px;
                    margin-right: 5px;
                  }
                }
                img {
                  height: 16px;
                  width: auto;
                }
              }
              .active,
              h3 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .hot-du {
                color: var(--color-text-t3);

                font-size: 14px;
                line-height: 22px;
                .hot-num {
                  font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
                  font-weight: 500;
                  padding-right: 4px;
                }
              }
            }

            .hot-item-content-show {
              background-color: var(--color-bg-b2);

              border: 1px solid var(--color-line-l2);

              border-radius: 4px;
              color: var(--color-text-t1);
              display: none;

              filter: drop-shadow(0 12px 24px var(--color-shadow1));
              font-size: 12px;
              left: 50%;
              line-height: 20px;
              max-width: 100%;
              padding: 0 10px;
              position: absolute;
              text-align: center;
              top: 24px;
              transform: translateX(-50%);
              z-index: 1;
            }
          }
        }
        .hotChangableList.hot-item-list-content {
          padding: 16px 8px 0 12px;
        }
        .hotChangableList .hot-item-list-content-item {
          overflow: visible;
          padding-bottom: 16px;

          .hot-du .hot-num {
            font-weight: 400;
          }
          .active h3 {
            font-size: 15px !important;
            font-weight: 500;
          }
        }
      }
    }
  }

  .icon {
    width: 12px;
    height: 24px;
    color: var(--color-text-t3);
  }
}
</style>
