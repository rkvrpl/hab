<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHabitsStore } from '../stores/habits'
import HabitItem from '../components/HabitItem.vue'

const router = useRouter()
const habitsStore = useHabitsStore()
function goBack() {
  router.back()
}
function addHabitWindow() {
  const promptHabit = prompt('Add new habit:')

  if (promptHabit) {
    habitsStore.addHabit(promptHabit)
  }
}
</script>
<template>
  <div class="habits-page">
    <header>
      <button @click="goBack">
        <img
          src="../assets/img/ButtonContainer.png"
          alt="back" />
      </button>
      <p>Habits</p>
      <button @click="addHabitWindow">
        <img
          src="../assets/img/Button.png"
          alt="add" />
      </button>
    </header>
    <div class="habits-list">
      <HabitItem
        v-for="itemHabit in habitsStore.habits"
        :key="itemHabit.id"
        :habit="itemHabit" />
    </div>
  </div>
</template>

<style scoped>
.habits-page {
  background-color: #f2f5eb;
  min-height: 100vh;
}
img:hover {
  transform: translateY(-1px);
  filter: drop-shadow(0 7px 5px #99b06980);
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #99b069aa;
}
button {
  cursor: pointer;
  background: none;
  border: none;
}
img {
  width: 40px;
  display: block;
}
.habits-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 20px;
}
</style>
