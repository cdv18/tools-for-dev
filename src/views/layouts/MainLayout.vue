<template>
    <div class="common-layout">
      <div class="common-layout-container">
        <div class="left-slide">

        </div>
        <div class="right-content">
          <div class="top-nav">
            
          </div>
          <div class="main-content background-pattern">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { getCurrentInstance } from "vue";
  const { proxy } = getCurrentInstance();
  </script>
  
  <style lang="scss">
  .common-layout {
    height: 100%;
    .common-layout-container {
      height: 100%;
    }
  
    .main-content{
      padding: unset;
      padding-top: 20px;
      display: flex;
      justify-content: center;
  
    }
  
  }
  </style>