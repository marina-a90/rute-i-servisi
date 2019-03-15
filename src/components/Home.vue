<template>
    <div>Home</div>
</template>

<script>
import { logService } from "../services/LogService";
export default {
  created() {
    logService.log("Log this");
  }
};
</script>

<style>
</style>
