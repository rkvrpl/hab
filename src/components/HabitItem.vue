<script lang="ts" setup>
// import { defineProps, ref } from 'vue'
import type { Habit } from '../stores/habits'
// import { useHabitsStore } from '../stores/habits'
// const habitsStore = useHabitsStore()

const props = defineProps<{
  habit: Habit
}>()

// const calendar = ref<any>(null)

function moveToday() {
  // calendar.value.move(new Date())
}
// const attributes = ref([
//   {
//     highlight: 'red',
//     dates: new Date(),
//   },
//   console.log('Highlighting today'),
// ])
// const attributes = props.habit.completedDates.map(dateStr => ({
//   key: dateStr,
//   dates: new Date(dateStr),
//   dot: { color: 'red', size: '6px' },
// }))
function handleDateClick(day: any) {
  console.log(day)
  // const dateStr = day.date.toISOString().split('T')[0] // yyyy-mm-dd
  // habitsStore.toggleDone(props.habit.id, dateStr)
}
</script>
<template>
  <div class="habit-item">
    <p>{{ props.habit.name }}</p>
    <div class="calendar">
      <VCalendar
        ref="calendar"
        transparent
        borderless
        color="#ca46a020"
        @dayclick="handleDateClick">
        <template #footer>
          <div class="flex-custom">
            <button
              class="today-button-custom"
              @click="moveToday">
              Today
            </button>
          </div>
        </template>
      </VCalendar>
    </div>
  </div>
</template>
<style scoped>
p {
  font-family: 'Delius Unicase', cursive;
}
.habit-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: #ca46a020;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.today-button-custom {
  background-color: #99b069;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Delius Unicase', cursive;
}
.flex-custom {
  display: flex;
  justify-content: center;
}
</style>
