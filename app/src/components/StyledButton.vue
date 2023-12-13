<template>
    <button style="background-color: red;color: white; border-radius: 6px;" @click="$emit('button-clicked')">
        <slot></slot>
    </button>
    </template>
    // emit concept here in the child file