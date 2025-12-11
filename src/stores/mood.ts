import { defineStore } from 'pinia'

export interface Mood {
  mood: number
  date: string
}

export const useMoodStore = defineStore('moodStore', {
  state: () => ({
    moods: [] as Mood[],
  }),
  actions: {
    setMood(mood: number, date: string) {
      const existsMood = this.moods.find(mood => mood.date === date)
      if (existsMood) {
        existsMood.mood = mood
        return
      } else {
        this.moods.push({
          mood,
          date,
        })
      }
    },
    getMood(date: string) {
      return this.moods.find(mood => mood.date === date)?.mood ?? null
    },
  },
})
