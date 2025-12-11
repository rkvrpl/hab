import { defineStore } from 'pinia'

export interface Habit {
  id: string
  name: string
  completedDates: string[]
}
export const useHabitsStore = defineStore('habitsStore', {
  state: () => ({
    habits: [] as Habit[],
  }),
  actions: {
    addHabit(name: string) {
      this.habits.push({
        id: crypto.randomUUID(),
        name,
        completedDates: [],
      })
    },
    toggleDone(habitId: string, date: string) {
      const habit = this.habits.find(habit => habit.id === habitId)
      if (!habit) return

      const dateIndex = habit.completedDates.indexOf(date)
      if (dateIndex >= 0) {
        habit.completedDates.splice(dateIndex, 1)
      } else {
        habit.completedDates.push(date)
      }
    },
  },
})
